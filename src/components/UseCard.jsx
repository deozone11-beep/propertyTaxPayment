const userData = [
    {
        name: "Kumar",
        city: "New York",
        description: "Front-end Deleloper",
        skills: ["UI / UX", "Fornt End Development",
        "HTML","CSS", "JavaScript", "React", "Node"],
        online: false,
        profile:"Image1.avif"
    },
    {
        name: "Preetha",
        city: "California",
        description: "Full Stack web developer",
        skills: ["Vlogging", "Web Development",
        "HTML","CSS", "JavaScript", "React", "Angular"],
        online: false,
        profile:"images2.jfif"
    },
    {
        name: "Neethu",
        city: "San Francisco",
        description: "Senior Software Developer",
        skills: ["C", "C++",
        "Java Propgramming","Python", "C#", ".Net", "MySQL", "MangoDB"],
        online: true,
        profile:"Image3.jpg"
    }
]


function User(props) {
  return (
    <div className="card-container">
      <span className={props.online? "pro online": "pro offline"}>{props.online? "ONLINE":"OFFLINE"}</span>
      <img className="img" src={props.profile} alt="user"></img>
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
            {props.skills.map((skills, index)=>(
                <li key={index}>{skills}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export const UseCard = () => {
  return (
    <>
        {userData.map((user,index)=>(
            <User key={index}
            name= {user.name}
            city= {user.city}
            description= {user.description}
            skills= {user.skills}
            online= {user.online}
            profile={user.profile} />
        ))}
    </>
  )
};


{/* <User name="James" city="New York" 
    description="Front-end Deleloper" skills={["UI / UX", "Fornt End Development",
        "HTML","CSS", "JavaScript", "React", "Node"
    ]} online = {true} profile="public\Image3.jpg"/> */}