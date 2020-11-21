import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Navbar from "../../components/Navbar";
import { Container } from "../../components/Grid";
import Bookcard from "../../components/Bookcard";
import Jumbotron from "../../components/Jumbotron";


class Save extends Component {

    render() {
        return (

            <Wrapper>

                <Navbar />
                <Jumbotron />
                <Container>
                    <Bookcard />
                </Container>

            </Wrapper>

        );
    }
}

export default Save;