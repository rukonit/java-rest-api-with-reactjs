import React from 'react';
import {Component} from 'react';
import {Card, Form, Button, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare, faUndo, faList, faEdit} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import MyToast from './MyToast';

export default class Book extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.bookChange = this.bookChange.bind(this);
        this.submitBook = this.submitBook.bind(this);
        this.state.show = false;
    }

    initialState = {
        id: '', title:'', author:'', coverPhotoURL:'', isbnNumber: '', price:'', language:''
    }

    componentDidMount() {
        const bookId = +this.props.match.params.id;
        if(bookId) {
           this.findBookId(bookId);
        }
    }

    findBookId = (bookId) => {
        axios.get("http://localhost:8081/rest/books/" + bookId)
        .then(response => {
            if(response.data != null){
               this.setState({
                   id: response.data.id,
                   title: response.data.title,
                   author: response.data.author,
                   coverPhotoURL: response.data.coverPhotoURL,
                   isbnNumber: response.data.isbnNumber,
                   price: response.data.price,
                   language: response.data.language
               }) 
            }
        }).catch((error) => {
            console.error("Error - " + error)
        } )

    }

    submitBook = (event) => {
  
        event.preventDefault()
        const headers =  {headers: {
            "Content-Type": "application/json"
          }
        }
        
        
        const book = {
            title: this.state.title, 
            author: this.state.author,
            coverPhotoURL: this.state.coverPhotoURL, 
            isbnNumber: this.state.isbnNumber, 
            price: this.state.price, 
            language: this.state.language
        };

        axios.post("http://localhost:8081/rest/books", book, headers)
        .then(response => {
            if(response.data != null){
                this.setState({"show": true, "method": "post"})
                setTimeout(() => this.setState({"show": false}), 3000)
            }
            else {
                this.setState({"show": false})
            }
        })
        this.setState(this.initialState);
    } 

    bookChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })

    }

    resetBook = () => {
        this.setState(() => this.initialState);
    }

    bookList = () => {
        return this.props.history.push("/list")
    }

    updateBook = (event) => {

        
        event.preventDefault()
        const headers =  {headers: {
            "Content-Type": "application/json"
          }
        }
        
        
        const book = {
            id: this.state.id,
            title: this.state.title, 
            author: this.state.author,
            coverPhotoURL: this.state.coverPhotoURL, 
            isbnNumber: this.state.isbnNumber, 
            price: this.state.price, 
            language: this.state.language
        };

        axios.put("http://localhost:8081/rest/books", book, headers)
        .then(response => {
            if(response.data != null){
                this.setState({"show": true, "method": "put"})
                setTimeout(() => this.setState({"show": false}), 3000)
                setTimeout(() => this.bookList(), 3000)
            }
            else {
                this.setState({"show": false})
            }
        })
        this.setState(this.initialState);
    }
//added an comment
    render() {
        const {title, author, coverPhotoURL, isbnNumber, price, language} = this.state;
        return(
            <div>
                
                <div style={{"display": this.state.show ? "block": "none"}}>
                   <MyToast show = {this.state.show}  message={this.state.method === "put" ? "Book Updated Successfully" : "Book Saved Successfully"} type={"success"}/> 
                </div>
               
                <Card className="border border-dark bg-dark text-white">
            <Card.Header><FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare} /> {this.state.id ? "Update Book" : "Add New Book"}</Card.Header>
            
            <Form onSubmit={this.state.id ? this.updateBook : this.submitBook} id="bookFormId"
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
                <FontAwesomeIcon icon={faSave} /> {this.state.id ? "Update" : "Save"}
                    
                </Button>
                {' '}
                <Button variant="info" type="reset">
                <FontAwesomeIcon icon={faUndo} /> Reset
                    
                </Button>
                {' '}
                <Button variant="info" type="button" onClick={this.bookList.bind()}>
                <FontAwesomeIcon icon={faList} /> Book List
                    
                </Button>
            </Card.Footer>
            </Form> 
            
        </Card>
            </div>
        
        );
    }
}

