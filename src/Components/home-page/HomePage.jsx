import React from 'react';

import {Table} from 'react-bootstrap';
import './homepage.css';

const HomePage = () => {
  return (
    <>
        <div className='Record__container section__padding'>
        <h1>Employee Details</h1>
        <div className='search-data'>
            <div class="form-data">
                <input type="text" class="form-control" placeholder="Search"/>
                <button className="btn btn-primary">Search</button>
            </div>
        </div>
        <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Company Name <i class="fa fa-fw fa-sort"/></th>
                        <th>Company Description <i class="fa fa-fw fa-sort"/></th>
                        <th>Contact Name <i class="fa fa-fw fa-sort"/></th>
                        <th>Logo</th>
                        <th>State <i class="fa fa-fw fa-sort"/></th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>none</td>
                        <td>Delhi</td>
                    <td>
                        <button className="btn btn-warning">Update</button>
                        <button style={{marginLeft: "10px"}} className="btn btn-danger">Delete</button>
                        <button style={{marginLeft: "10px"}} className="btn btn-info">View</button>
                    </td>
                    </tr>
                </tbody>
            </Table>

            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default HomePage