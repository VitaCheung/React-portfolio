import {useState, useEffect}  from "react";

export default function Skills() {
    const [skills, setSkills] = useState([]);
    
    //Call data from the API
    useEffect(()=> {
        const getData = async () => {
            let response = await fetch (
                "https://laravel.vitacheung.ca/api/skills"
            );
            let data = await response.json();
            // console.log(data);
            setSkills(data);
            
        };
        getData();

    },[]);

    //Print the data
    return (
        <div className="box3">
            <div className="left">
                <img className="profile" src="/img/hand.jpg" alt="myskills" width="500px" 
                onMouseOver={e => (e.currentTarget.src = "/img/yoda.png")}
                onMouseOut={e => (e.currentTarget.src = "/img/hand.jpg")} ></img>
   
            </div>

            <div className="right">
                <h1 id="Skills">My Skills</h1>

                {/* Loop through skills */}
                {skills.map((skill) => (
                    <div className="SkillTag" key={skill.id}>
                        <img className="icon" src={skill.image} alt={skill.title} height="50px"/>
                        <h3>{skill.title}</h3>
                    </div>
                ))} 
            </div>
        </div>
      );
}