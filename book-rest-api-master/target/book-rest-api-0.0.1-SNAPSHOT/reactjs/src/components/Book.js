import React from 'react'
import {Component} from 'react';
import {Card, Form, Button, Col} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSave, faPlusSquare, faUndo} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

export default class Book extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this)
    }

    initialState = {
        title:'', author:'', coverPhotoURL:'', isbnNumber: '', price:'', language:''
    }

    submitBook = (event) => {
  
        event.preventDefault()

        const book = {
            titie: this.state.title,
            author: this.state.author,
            coverPhotoURL: this.state.coverPhotoURL,
            isbnNumber: this.state.isbnNumber,
            price: this.state.price,
            language: this.state.language
        };
        
        axios.post("http://localhost:8081/rest/books", book)
        .then(response => {
            if(response.data != null){
                this.setState(this.initialState);
                alert("Book Saved Successfully")
            }
        })
    } 

    bookChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })

    }

    resetBook = () => {
        this.setState(() => this.initialState);
    }

    render() {
        const {title, author, coverPhotoURL, isbnNumber, price, language} = this.state;
        return(
            <Card className="border border-dark bg-dark text-white">
            <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Add Book</Card.Header>
            
            <Form onSubmit={this.submitBook} id="bookFormId"
            onReset={this.resetBook}>
            <Card.Body>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title"
                        value = {title}
                        onChange={this.bookChange} required
                        className={"bg-dark text-white"} placeholder="Enter Book Title" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridAuthor">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" name="author"
                        value = {author}
                        onChange={this.bookChange} required
                        className={"bg-dark text-white"} placeholder="Enter Book Author Name" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridcoverPhtoURL">
                        <Form.Label>Cover Photo URL</Form.Label>
                        <Form.Control type="text" name="coverPhotoURL"
                        value = {coverPhotoURL}
                        onChange={this.bookChange} required
                        className={"bg-dark text-white"} placeholder="Enter Cover Photo URL" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridisbnNumber">
                        <Form.Label>Book ISBN</Form.Label>
                        <Form.Control type="text" name="isbnNumber"
                        value = {isbnNumber}
                        onChange={this.bookChange} required
                        className={"bg-dark text-white"} placeholder="Enter ISBN Number" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" name="price"
                        value = {price}
                        onChange={this.bookChange} required
                        className={"bg-dark text-white"} placeholder="Enter Book Price" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLanguage">
                        <Form.Label>Language</Form.Label>
                        <Form.Control type="text" name="language"
                        value = {language}
                        onChange={this.bookChange} required
                        className={"bg-dark text-white"} placeholder="Enter Book Language" />
                    </Form.Group>
                </Form.Row>

               
                
            </Card.Body>
            <Card.Footer style={{"textAlign":"right"}}>
                <Button variant="success" type="submit">
                <FontAwesomeIcon icon={faSave} /> Submit
                    
                </Button>
                {' '}
                <Button variant="info" type="reset">
                <FontAwesomeIcon icon={faUndo} /> Reset
                    
                </Button>
            </Card.Footer>
            </Form> 
            
        </Card>
        );
    }
}

