import React, {useRef, useState} from "react";
import classes from "./homepage.module.css";
import rdpLogo from "../assets/rdp-logo.svg";
import TypingEffect from "./typingEffect/typingEffect";
import Axios from "axios";
import Resume from "../assets/Rohitdutt Parsai.pdf";
import Made from "../assets/coding.svg";
import Love from "../assets/heart.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Discord from "../assets/discord.svg";
import Telegram from "../assets/telegram.svg";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import FacebookAfterHover from "../assets/facebook_after_hover.svg";
import TwitterAfterHover from "../assets/twitter_after_hover.svg";
import TelegramAfterHover from "../assets/telegram_after_hover.svg";
import LinkedIntAfterHover from "../assets/linkedin_after_hover.svg";
import GithubAfterHover from "../assets/github_after_hover.svg";
import DiscordAfterHover from "../assets/discord_after_hover.svg";

const Homepage = () => {

    const about = useRef(null);
    const skills = useRef(null);
    const  projects = useRef(null);
    const contact = useRef(null);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");


    return (

        <div className={classes.homepage}>
            <div className={classes.navbar}>
                <div className={classes.top}>
                    <button className={classes.homeButton} onClick={() => {
                        window.location.reload();
                    }}
                    >Home
                    </button>
                    <button className={classes.homeButton} onClick={() => {
                        about.current.scrollIntoView();
                    }}
                    >About Me
                    </button>
                    <button className={classes.homeButton} onClick={() => {
                        skills.current.scrollIntoView()
                    }}
                    >Skills
                    </button>
                    <button className={classes.homeButton} onClick={() => {
                        projects.current.scrollIntoView()
                    }}
                    >My Work
                    </button>
                    <button className={classes.homeButton} onClick={() => {
                        contact.current.scrollIntoView()
                    }}
                    >Say Hi
                    </button>
                    <a href={Resume} target={"_blank"}>Resume!</a>
                </div>
                <div className={classes.main}>
                    <div>
                        <img src={rdpLogo} alt={"Rohitdutt Parsai"} className={classes.rdpLogo}/>
                    </div>
                    <div className={classes.typingText}>
                        <TypingEffect/>
                    </div>
                </div>
            </div>


            {/*for intro area*/}

            <div ref={about} className={classes.intro}>
                <h1>
                    Hi , I am Rohitdutt Parsai, Nice to meet you
                </h1>
                <p> I am pursuing my undergraduate degree in Computer Science and Engineering from Jawaharlal Institute
                    of Technology , borawan. I am good with full stack development skilles like algorithms , databases ,
                    Ops , analytics . I can solve problems and optimize the solutions so that best value is provided . I
                    would like to explore different domains of business and learn how they generate value .
                    <br/>
                    I intend to be a excellent Software Developer and use my skill to engineer productive things . I
                    prefer to learn new things and challenge myself continuously because skills can be taught ,
                    personalities can be inherited .</p>
            </div>


            {/*skilll Area*/}

            <div ref={skills} className={classes.skillArea}>
                <div className={classes.skillShowcase}>
                    <h2>Things I can work with!</h2>
                    <div className={classes.diffSkills}>
                        <div>
                            <h3>Programming language</h3>
                            <p>C</p>
                            <p>C++</p>
                            <p>SQL</p>
                            <p>Java</p>
                            <p>Python</p>
                            <p>Javascript</p>
                            <p>Shell Programming</p>
                        </div>
                        <div>
                            <h3>Frameworks</h3>
                            <p>React.js</p>
                            <p>Spring Boot</p>
                            <p>React Native</p>
                        </div>
                        <div>
                            <h3>Others</h3>
                            <p>Maven</p>
                            <p>Mysql</p>
                            <p>Linux</p>
                            <p>Docker</p>
                            <p>Github</p>
                            <p>AWS S3</p>
                            <p>Swagger</p>
                            <p>AWS EC2</p>
                            <p>AWS RDS</p>
                            <p>Postgresql</p>
                        </div>
                    </div>
                </div>
            </div>


            {/*for project area*/}

            <div ref={projects} className={classes.projectArea}>
                <h1>Projects i've worked on!</h1>
                <div className={classes.projects}>
                    <div className={classes.project}>
                        <h2>Portfolio Website</h2>
                        <div className={classes.line}/>
                        <p> Made a portfolio website<br/> to showcase my skills and<br/> strengths . Yeah , you
                            just <br/> guessed it right it's the one<br/> you looking at ( just taught<br/> should also
                            mention it ). </p>
                    </div>
                    <div className={classes.project}>
                        <h2>E-Commerce Services</h2>
                        <div className={classes.line}/>
                        <p> Designed and Developed data model of E-Commerce Website and made Scalable Service and KPI's
                            for a E-Commerce business . Deployed my project to Cloud using Docker . Front end service
                            for the app will be up soon!</p>
                    </div>
                    <div className={classes.project}>
                        <h2>Wanna Collaborate</h2>
                        <div className={classes.line}/>
                        <p> Want to collaborate on some idea . If you find that i am right choice feel free to contact
                            me ! </p>
                        <button onClick={() => {
                            contact.current.scrollIntoView()
                        }}
                        >contact me
                        </button>
                    </div>
                </div>
            </div>


            {/*for contact me area*/}

            <div ref={contact} className={classes.contactArea}>
                <h1>Get in touch with me!</h1>
                <div className={classes.contactMe}>
                    <div className={classes.inputArea}>
                        <input
                            type={'text'}
                            placeholder={'Your Email'}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                console.log(email);
                            }}
                        />
                        <input
                            type={'text'}
                            placeholder={'Name'}
                            onChange={(e) => {
                                setName(e.target.value);
                                console.log(name);
                            }}
                        />
                        <textarea
                            placeholder={'Message'}
                            onChange={(e) => {
                                setMessage(e.target.value);
                                console.log(message);
                            }}
                        />
                        <button
                            onClick={() => {
                                Axios.post("https://formspree.io/f/mzbkvkeo", {
                                    Email: this.state.email,
                                    Name: this.state.name,
                                    Message: this.state.message,
                                }).then((response) => {
                                    console.log(response.data);
                                }).catch(error => {
                                    window.alert("Enter Valid Email!");
                                    console.log(error.response);
                                });
                            }}
                        >Send
                        </button>
                    </div>
                    <div className={classes.socialButtons}>
                        <a href={"https://www.facebook.com/ROHITDUTT.04"} target={"_black"}>
                            <img id={"fb"} src={Facebook} alt={"facebook"} className={classes.socialAccounts}
                                 onMouseEnter={() => {
                                     document.getElementById("fb").setAttribute('src', FacebookAfterHover);
                                 }}
                                 onMouseLeave={() => {
                                     document.getElementById("fb").setAttribute('src', Facebook);
                                 }}
                            />
                        </a>
                        <a href={"https://twitter.com/Rohitdutt_04"} target={"_black"}>
                            <img id={"twitter"} src={Twitter} alt={"twitter"} className={classes.socialAccounts}
                                 onMouseEnter={() => {
                                     document.getElementById("twitter").setAttribute('src', TwitterAfterHover);
                                 }}
                                 onMouseLeave={() => {
                                     document.getElementById("twitter").setAttribute('src', Twitter);
                                 }}
                            />
                        </a>
                        <a href={"https://www.linkedin.com/in/rohitdutt-parsai-875565175/"} target={"_black"}>
                            <img id={"linkedin"} src={Linkedin} alt={"linkedin"} className={classes.socialAccounts}
                                 onMouseEnter={() => {
                                     document.getElementById("linkedin").setAttribute('src', LinkedIntAfterHover);
                                 }}
                                 onMouseLeave={() => {
                                     document.getElementById("linkedin").setAttribute('src', Linkedin);
                                 }}
                            />
                        </a>
                        <a href={"https://github.com/rohitdutt"} target={"_black"}>
                            <img id={"github"} src={Github} alt={"github"} className={classes.socialAccounts}
                                 onMouseEnter={() => {
                                     document.getElementById("github").setAttribute('src', GithubAfterHover);
                                 }}
                                 onMouseLeave={() => {
                                     document.getElementById("github").setAttribute('src', Github);
                                 }}
                            />
                        </a>
                        <a href={"https://t.me/starlight_04"} target={"_black"}>
                            <img id={"telegram"} src={Telegram} alt={"telegram"} className={classes.socialAccounts}
                                 onMouseEnter={() => {
                                     document.getElementById("telegram").setAttribute('src', TelegramAfterHover);
                                 }}
                                 onMouseLeave={() => {
                                     document.getElementById("telegram").setAttribute('src', Telegram);
                                 }}
                            />
                        </a>
                        <a href={"https://discord.com/channels/@me"} target={"_black"}>
                            <img id={"discord"} src={Discord} alt={"discord"} className={classes.socialAccounts}
                                 onMouseEnter={() => {
                                     document.getElementById("discord").setAttribute('src', DiscordAfterHover);
                                 }}
                                 onMouseLeave={() => {
                                     document.getElementById("discord").setAttribute('src', Discord);
                                 }}
                            />
                        </a>
                    </div>

                </div>
                <p className={classes.credits}>
                    <img src={Made}/>
                    <span>with</span>
                    <img src={Love}/>
                    <span>by Rohitdutt</span>
                </p>
            </div>
        </div>
    )
}

export default Homepage;
