import React from 'react'
import {Jumbotron} from 'react-bootstrap';

class Welcome extends React.Component {
    render() {
        return(
            <Jumbotron className="bg-dark text-white">
              <h1>Welcome to the Shop</h1>
              <blockquote className="blockquote mb-0">
                  <p>
                  “Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.”  
                  </p>
                  <footer className="blockquote-footer">
                  Charles W. Eliot
                  </footer>
              </blockquote>
            
          </Jumbotron>         
        );
    }
}

export default Welcome;