import "./index.css";
import React from "react";
import reactDOM from "react-dom";
import ArticleComponent from "./component.js";

reactDOM.render(
    <>
        <ArticleComponent />
        <footer className="text-darkblue">
            Challenge by <a className="text-grayblue-300 underline" href="https://www.frontendmentor.io/?ref=challenge">Frontend Mentor</a>. Coded by <a className="text-grayblue-300 underline" href="https://www.frontendmentor.io/profile/hazel79">Omar M.</a>
        </footer>
    </>
    ,
    document.getElementById("root")
);