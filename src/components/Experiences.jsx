import {useState, useEffect}  from "react";

export default function Experiences() {
    const [experiences, setExperiences] = useState([]);

    //Call data from the API
    useEffect(()=> {
        const getData = async () => {
            let response = await fetch (
                "https://laravel.vitacheung.ca/api/experiences"
            );
            let data = await response.json();
            //console.log(data);
            setExperiences(data);
           
        }
        getData();

    },[]);

    //Print the data
    return (
        <div className="box4">
            <div className="left">
                <h1 id="Education">My Education</h1>
                
            </div>

            <div className="right">
                {/* Loop through experiences */}
                {experiences.map((experience) => (
                    <div key={experience.id}>
                        <h2>{experience.title}</h2>
                        <p>{experience.content}</p>
                    </div>
                ))} 
            </div>
        </div>
      );
}