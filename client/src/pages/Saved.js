import React, { Component } from "react";
import EmptyResult from "../components/EmptyResult";
import { BookList } from "../components/BookList";
import { BookSearchItem } from "../components/BookSearchItem";
import { Container, Row, Col } from "../components/Grid";
import Thumbnail from "../components/Thumbnail";
import DeleteBtn from "../components/DeleteBtn";
import ViewBtn from "../components/ViewBtn";
import API from "../utils/API";
// import BooksController from "../../controllers/booksController.js";

class Saved extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }
  // Loads all books  and sets them to this.state.books
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="xs-12">
              <h1>Saved Books Here</h1>
            </Col>
          </Row>
          <BookList>
            {this.state.books.length === 0 ? (
              <EmptyResult />
            ) : (
              this.state.books.map(bookFromDb => (
                <BookSearchItem key={bookFromDb._id}>
                  <Container>
                    <Row>
                      <Col size="xs-4 sm-2">
                        <Thumbnail src={bookFromDb.image} />
                      </Col>
                      <Col size="xs-6 sm-9">
                        <h3>{bookFromDb.title}</h3>
                        <p>
                          Written By{" "}
                          {bookFromDb.author.length
                            ? bookFromDb.author.join(", ")
                            : ""}
                        </p>
                        <p>{bookFromDb.description}</p>
                      </Col>
                    </Row>

                    <DeleteBtn
                      onClick={() => this.deleteBook(bookFromDb._id)}
                    />
                    <ViewBtn>
                      <a href={bookFromDb.link} target="_blank">
                        {" "}
                        View{" "}
                      </a>
                    </ViewBtn>
                  </Container>
                </BookSearchItem>
              ))
            )}
          </BookList>
        </Container>
      </div>
    );
  }
}

export default Saved;
