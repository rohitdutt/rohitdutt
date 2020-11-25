import React from "react";
import classes from "./button.module.css";

const button = (props) =>{
    let cssClass = props.cssClass;
    return(
        <div className={cssClass}>
                {props.children}
        </div>
    )
}
export default button;
