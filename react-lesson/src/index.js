import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { UseStateDemo } from "./Components/UseStateDemo/UseStateDemo";
import { UseEffectDemo } from "./Components/UseEffectDemo/UseEffectDemo";

ReactDOM.render(
    <React.StrictMode>
        <UseStateDemo />
        <UseEffectDemo />
    </React.StrictMode>,
    document.getElementById("root")
);
