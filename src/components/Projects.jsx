import {useState, useEffect}  from "react";

export default function Projects() {
    const [projects, setProjects] = useState([]);
    
    //Call data from the API
    useEffect(()=> {
        const getData = async () => {
            let response = await fetch (
                "https://laravel.vitacheung.ca/api/projects"
            );
            const data = await response.json();
            // console.log(data);
            setProjects(data);
            
        };
        getData();

    },[]);

    //Print the data
    return (
        <div>
            {/* Loop through projects */}          
            {projects.map((project) => (
                <div className="box2" key={project.id}>
                    <div className="left">
                        <h2>{project.title}</h2>
                        
                        <div className="skillused">
                            {/* Loop through skills inside a project */}
                            {project.skills.map((skill) => (
                                 <div className="skill" key={skill.id}>- {skill.title} </div>
                            ))}
                        </div>
                        <div className="content">{project.content}</div>
                        <a className="btn" href={project.url}>Try it</a>
                                               
                    </div>
                    <div className="right">
                        <img className="photo" src={project.image} alt={project.title}/>
                    
                    
                    </div>
                </div>
            ))}       
                          
                                              
        </div>
      );
}

