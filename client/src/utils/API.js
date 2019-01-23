import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
//https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=AIzaSyAxnTPgeERGv-ATrD-BSBLWQUc1apLv_rA
const API_KEY = "AIzaSyAxnTPgeERGv-ATrD-BSBLWQUc1apLv_rA";
export default {
  getGoogleBooks: function(query) {
    return axios.get("/api/google", {
      params: { q: query, key: API_KEY }
    });
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  findOneAndUpdate: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
