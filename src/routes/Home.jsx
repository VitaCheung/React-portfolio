import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experiences from "../components/Experiences";
import React, {useState} from "react";


export default function Home() {
  const [src, setSrc] = useState("/img/profile.jpeg");
  const picSrc = `${src}`;

  return(
    <main id="main">   
      <div className="box">
        <div className="left">
          <img class="profile" src={picSrc} onMouseOver={e => (e.currentTarget.src = "/img/profile2.png")}
          onMouseOut={e => (e.currentTarget.src = "/img/profile.jpeg")} 
          alt="myProfilePic" width="500px"></img>
        </div>
        <div className="right">
          <div class="container">
            <h1>Welcome to My Website!</h1>
            <div id="captionBox">
              <p id="caption">I'm Vita! A full-stack web developer. I am passionate about achieving creative solutions to projects from online to offline media formats.</p>
              <button id="hoverMe"
                onMouseEnter={() => setSrc("/img/profile2.png")}
                onMouseLeave={() => setSrc("/img/profile.jpeg")}>Hover over me!</button>
            </div>
          </div> 
        </div>
      </div>
      <nav id="main-menu" aria-label="Main navigation">
        <ul className="menu">
          <li><a href="#Projects">// Projects</a></li>
          <li><a href="#Skills">// Skills</a></li>
          <li><a href="#Education">// Education</a></li>
          <li><a href="#Social">// Contact</a></li>
        </ul>
      </nav>
      <div className="box1">
        <h1 id="Projects"> My Projects</h1>
        <p>This webpage is created with React. Here are some projects I want to share from my database. Hope you enjoy browsing them!</p>
        <Projects />
      </div>
      
      <Skills />
      <Experiences />

      <div className="box6">
        <div className="left">
          <h1 id="Social">Contact me!</h1>

          <div id="medias">
            <div className="media">
              <a href="https://www.linkedin.com/in/vita-cheung/"> <img className="icon" src="/img/linkedin.png" width="50px" alt="linkedin icon"/> </a>
              <p><a className="link" href="https://www.linkedin.com/in/vita-cheung/"> LinkedIn / </a></p>
            </div>
            <div className="media">
            <a href="https://www.instagram.com/vitac_c/"> <img className="icon" src="/img/ig.png" width="50px" alt="Instagram icon"/> </a>
            <p><a className="link" href="https://www.instagram.com/vitac_c/"> Instagram / </a></p>
          </div> 
          <div className="media">
            <a href="https://github.com/VitaCheung"> <img className="icon" src="/img/github.png" width="50px" alt="Github icon"/> </a>
            <p><a className="link" href="https://github.com/VitaCheung"> Github / </a></p>
          </div>     
          </div>
          <p id="email">Email: <a href="mailto:ctw1207@gmail.com" target="_blank">ctw1207@gmail.com</a></p>
        </div>

          <div className="right">
          <img class="profile" src={picSrc} onMouseOver={e => (e.currentTarget.src = "/img/profile2.png")}
          onMouseOut={e => (e.currentTarget.src = "/img/profile.jpeg")} 
          alt="myProfilePic" width="300px"></img>   
          </div>
      </div>
      

      <p id="copyright">Copyright&copy; 2023 Vita Cheung</p>
    </main>
    
  );
}


