import axios from "axios";

export default {
  // Gets all books
<<<<<<< HEAD
  getBooks: function() {
    return axios.get("/api/google", {params: { q:title }});
=======
  getBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
>>>>>>> dc28d3114caba931b18e6cc91f773548f680006a
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
  
};
