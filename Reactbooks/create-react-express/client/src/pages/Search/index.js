import React, { useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import Wrapper from "./../../components/Wrapper";
import SearchBar from "../../components/SearchBar";
import { Container } from "../../components/Grid";
import axios from "axios";
import Bookcard from "../../components/Bookcard";




//     function handleChange(event) {
//         const book = event.target.value;
//         setBook(book);
//     };



function Search() {

    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);


    function handleSubmit(event) {
        event.preventDefault();
        console.log({ event })

        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + event.target.value)
            .then(data => {
                console.log(data.data.items);
                setResult(data.data.items);
            })
    }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     console.log({ event })

    //     axios.get("https://www.googleapis.com/books/v1/volumes?q=" + event.target.value)
    //         .then(data => {
    //             console.log(data.data.items);
    //             setResult(data.data.items);
    //         })
    // }



    console.log({ result });

    return (

        <Wrapper>

            <Navbar />
            <Jumbotron />
            <Container>
                <SearchBar handleSubmit={handleSubmit} />
                {result.map((searchedbooks) => (
                    <Bookcard
                    id={searchedbooks.id}
                    image={searchedbooks.image}
                    title={searchedbooks.title}
                    authors={searchedbooks.authors}
                    description={searchedbooks.description}
                    link={searchedbooks.link}
                    />
                ))}
                
            </Container>

        </Wrapper>

    );

}

export default Search;
