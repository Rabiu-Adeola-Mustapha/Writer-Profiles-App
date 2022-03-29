import React, { useState } from 'react'

const ProfileForm = ({Submit}) => {
    const [profile, setProfile] = useState({
        firstName:"",
        lastName: "",
        email: "",
        phone:"",
    });

    const handleChange =(e) => {
        const {name, value} = e.targert;
        setProfile({...profile, [name]:value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Submit(profile);

    }


  return (
    <from type="submit" OnSubmit={handleSubmit}>
      <fieldset>
        <legend>Personal Information</legend>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={profile.firstName}
        />

        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={profile.lastName}
        />

        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={profile.email}
        />

        <input
          type="tel"
          name="phone"
          onChange={handleChange}
          value={profile.phone}
        />
      </fieldset>
    </from>
  );
        
  
}

export default ProfileForm