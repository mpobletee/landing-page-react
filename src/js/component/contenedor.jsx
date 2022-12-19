import React from "react";
import { Carta } from "./card.jsx";
import { Jumbotron } from "./jumbotron.jsx";


export const Contenedor = () => {
    return (
        <div className="container" id="contenedor">
            <Jumbotron title="Landing Page with react"
                description="React is the most popular rendering library in the world"
                buttonLabel="Go to the official website"
                buttonURL="https://reactjs.org/"
            />

            <div className="row">
                <Carta title="Some tittle 1"
                    source="https://picsum.photos/200?random=1"
                    description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    // buttonUrl=""
                    buttonLabel="Go somewhere"
                />

                <Carta title="Some tittle 2"
                    source="https://picsum.photos/200?random=2"
                    description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    // buttonUrl=""
                    buttonLabel="Go somewhere"
                />

                <Carta title="Some tittle 3"
                    source="https://picsum.photos/200?random=3"
                    description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    // buttonUrl=""
                    buttonLabel="Go somewhere"
                />

                <Carta title="Some tittle 4"
                    source="https://picsum.photos/200?random=4"
                    description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    // buttonUrl=""
                    buttonLabel="Go somewhere"
                />

            </div>
        </div>
    )
}