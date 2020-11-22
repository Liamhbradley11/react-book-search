
import React, { useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import Wrapper from "./../../components/Wrapper";
import SearchBar from "../../components/SearchBar";
import { Container } from "../../components/Grid";
import Bookcard from "../../components/Bookcard";
import API from "../../utils/Api"



function Search() {
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [search, setSearch] = useState("");
    const handleInput = event => {
        setSearch(event.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log({ event })
        API.getBooks(search)
            .then(data => {
                console.log(data.data.items);
                setResult(data.data.items);
            })
    }
    function saveBook(id) {
        const newBook = {
            id: id.id,
            title: id.title,
            image: id.image,
            authors: id.authors,
            description: id.description
        }
        console.log({newBook, id});
        API.saveBook(newBook)
            .then(data => {
                console.log({data})
            })
    }
    return (
        <Wrapper>
            <Navbar />
            <Jumbotron />
            <Container>
                <SearchBar handleSubmit={handleSubmit}
                    handleInput={handleInput}
                />
                {result.map((searchedbooks) => (
                    <Bookcard
                        key={searchedbooks.id}  
                        id={searchedbooks.id}
                        image={searchedbooks.volumeInfo.imageLinks.thumbnail}
                        title={searchedbooks.volumeInfo.title}
                        authors={searchedbooks.volumeInfo.authors}
                        description={searchedbooks.volumeInfo.description}
                        saveBook={saveBook} 
                        showSave={true}
                    />
                ))}
            </Container>
        </Wrapper>
    );
}
export default Search;