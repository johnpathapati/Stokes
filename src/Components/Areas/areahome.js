import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';


function Homearea() {

	return (
		<div style={{ margin: "5rem" }}>
            
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
						<th>#</th>
						<th>Area</th>
						<th>Shortcode</th>
                        <th>Apple Trees</th>
                        <th>Other Trees</th>
					</tr>
				</thead>
				<tbody>
					
				</tbody>
			</Table>

			{/* Button for redirecting to create page for insertion of values */}
			<Link className="d-grid gap-2" to="/create">
				<Button variant="warning" size="lg">Create</Button>
			</Link>
		</div>
	);
}
export default Homearea;
