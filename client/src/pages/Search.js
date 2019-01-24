import React, { Component } from "react";
import EmptyResult from "../components/EmptyResult";
import Input from "../components/Input";
import Button from "../components/Button";
import { BookList } from "../components/BookList";
import { BookSearchItem } from "../components/BookSearchItem";
import { Container, Row, Col } from "../components/Grid";
import Thumbnail from "../components/Thumbnail";
import SaveBtn from "../components/SaveBtn";
import ViewBtn from "../components/ViewBtn";
import API from "../utils/API";
// import BooksController from "../../controllers/booksController.js";

class Search extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    //this.loadBooks();
  }

  /*   title: { type: String, required: true },
  author: { type: Array, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  date: { type: Date, default: Date.now } */

  saveBook = bookObj => {
    API.saveBook(bookObj)
      .then(res => {
        this.setState({
          books: this.state.books.filter(b => b.title != bookObj.title)
        });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getGoogleBooks(this.state.title)
      .then(res => {
        console.log(res.data);
        this.setState({ books: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <h3>Book Search</h3>
                  <Row>
                    <Col size="xs-9">
                      <Input
                        name="title"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3">
                      <Button
                        //  /*  onClick={() =>this.handleFormSubmit /*this.loadBooks(this.state.title)*/}*/
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <BookList>
            {this.state.books.length === 0
              ? ""
              : this.state.books.map(reci => (
                  <BookSearchItem key={reci.id}>
                    <Container>
                      <Row>
                        <Col size="xs-4 sm-2">
                          <Thumbnail
                            src={
                              reci.volumeInfo.imageLinks !== undefined
                                ? reci.volumeInfo.imageLinks.thumbnail
                                : ""
                            }
                          />
                        </Col>
                        <Col size="xs-6 sm-9">
                          <h3>{reci.volumeInfo.title}</h3>
                          <p>
                            Written By{" "}
                            {reci.volumeInfo.authors != undefined &&
                            reci.volumeInfo.authors.length
                              ? reci.volumeInfo.authors.join(", ")
                              : ""}
                          </p>
                          <p>{reci.volumeInfo.description}</p>
                        </Col>
                      </Row>

                      <SaveBtn
                        onClick={() =>
                          this.saveBook({
                            author: reci.volumeInfo.authors.length
                              ? reci.volumeInfo.authors
                              : [],
                            title: reci.volumeInfo.title,
                            description: reci.volumeInfo.description,
                            link: reci.volumeInfo.canonicalVolumeLink,
                            image:
                              reci.volumeInfo.imageLinks !== undefined
                                ? reci.volumeInfo.imageLinks.thumbnail
                                : ""
                          })
                        }
                      >
                        <a>Save </a>
                      </SaveBtn>
                      <ViewBtn>
                        <a
                          href={reci.volumeInfo.canonicalVolumeLink}
                          target="_blank"
                        >
                          View{" "}
                        </a>
                      </ViewBtn>
                    </Container>
                  </BookSearchItem>
                ))}
          </BookList>
        </Container>
      </div>
    );
  }
}

export default Search;
