import React from "react";
import Typewriter from "typewriter-effect";
import classes from "./typingEffect.module.css";

const typingEffect = () =>{
    return(
        <div className={classes.typingEffect}>
            <Typewriter
                options={{
                    strings: ['Hello','I am Rohitdutt Parsai', 'a full stack developer'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    )
}

export default typingEffect;
