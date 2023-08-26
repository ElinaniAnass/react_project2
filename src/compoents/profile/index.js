import React, {useState , useEffect} from 'react';
import './style.css';
import axios from 'axios';
const Profile = () =>{
    const [skills , setSkills] = useState([])
    useEffect( () => {
        axios.get('js/data.json').then(res => {setSkills(res.data.profile)})
      }, [] )

      const pSkilles = skills.map((skill) =>{
        return(
            <div class="bar" key={skill.id}>
                        <span className="title"> {skill.title} </span>
                        <span className="perc">{skill.perc}</span>
                        <div className="parent">
                            <span className={skill.sp}></span>
                        </div>
                    </div>
        )
      })
      
    return (
      <div className="profile_skills" id='profile'>
            <div className="container">
                <div className="profile">
                    <h2 className="profile-title"><span>My </span>Profile</h2>
                    <ul className="profile-list">
                        <li className="profile-item">
                            <span>Name</span>
                            Elinani Anass
                        </li>
                        <li className="profile-item">
                            <span>Birthday</span>
                            01/10/1997
                        </li>
                        <li className="profile-item">
                            <span>Address</span>
                            Lla Cigogne
                        </li>
                        <li className="profile-item">
                            <span>Phone</span>
                            06 41 64 49 38
                        </li>
                        <li className="profile-item">
                            <span>Email</span>
                            elinanianass@gmail.com
                        </li>
                        <li className="profile-item">
                            <span>Website</span>
                            <span class="web">www.google.com</span>
                        </li>
                    </ul>
                </div>
                
                <div className="skills">
                    <h2 className="skills-title">Some <span>skills</span></h2>
                    <p className="skills-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </p>
                    {pSkilles}
                </div>
                
            </div>
        </div>
  
    );
}


export default Profile;
