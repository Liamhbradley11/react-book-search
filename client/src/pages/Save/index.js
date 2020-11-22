import React, { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import Navbar from "../../components/Navbar";
import { Container } from "../../components/Grid";
import Bookcard from "../../components/Bookcard";
import Jumbotron from "../../components/Jumbotron";
import Api from "../../utils/Api";




function Save() {
    const [books, setBooks] = useState ([])
    function getBook() {
        Api.getBook() 
        .then(res => {
            console.log({res});
            setBooks(res.data)
        })
    }
    useEffect(getBook, [])
    console.log({books});
    return (
        <Wrapper>
            <Navbar />
            <Jumbotron />
            <Container>
            {books.map((searchedbooks) => (
                    <Bookcard
                        key={searchedbooks._id}  
                        id={searchedbooks._id}
                        image={searchedbooks.image}
                        title={searchedbooks.title}
                        authors={searchedbooks.authors}
                        description={searchedbooks.description}
                        // deleteBook={deleteBook} 
                        showDelete={true}
                    />
                ))}
            </Container>
        </Wrapper>
    );
}
export default Save;