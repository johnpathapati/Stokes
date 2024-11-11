import React, { useState } from 'react';

const Areas = ()=>{
    const [formData, setFormData] = useState({
        areaname: '',
        areacode: '',
        
      });
      const handleInputChange = (e) => {
        const { areaname, value } = e.target;
        setFormData({
          ...formData,
          [areaname]: value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    
      };

    return(
    <from onSubmit = {handleSubmit}>
    
    <div>
    <label>Area Name</label>
    <input type= "text" id="name" name="areaname" value={formData} onChange={handleInputChange }/>
    </div>
    <div>
    <label>Area Short Code</label>
    <input type= "text" id="code" name="areacode" value={formData} onChange={handleInputChange }/>
    </div>
    <button type="submit">Submit</button>
    
    </from>
    );
}

export default Areas;