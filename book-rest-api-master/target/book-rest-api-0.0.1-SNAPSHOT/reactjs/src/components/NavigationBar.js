import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'


export default class NavigationBar extends Component {
render(){
return(
    
    <Navbar bg="dark" variant="dark">
        <Link to={""} className="navbar-brand">
        <img src={window.location.origin + '/img/books-stack-of-three.png'} width="25" height="25" alt="brand" />
        </Link>


        <Nav className="mr-auto">
            <Link to={"add"} className="nav-link">Add Book</Link>
            <Link to={"list"} className="nav-link">Book List</Link>
                  
        </Nav>
    </Navbar>
    
 
)
}

}
