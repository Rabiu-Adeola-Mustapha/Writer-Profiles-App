// import writers from "./writers"
import './App.css';
import ProfileCard from "./ProfileCard";
import { useEffect, useState } from "react";
import ProfileForm from './components/ProfileForm';


function App() {

  const[allProfile, setAllProfile] = useState([
    {
      firstName: "Hananah",
      lastName: "Montana",
      email: "hannah.montana@email.com",
      phone:"+233 024 455 000"
    },
  ])

  const Submit = (profile) => {
    const arr = allProfile;
    arr.push(profile);
    setAllProfile(arr);
  }
//   const [data, setData] = useState({
//     writers: [],
//     loading: false,
//   });

//   const handleClick = () => {
//     setData((prevData) => ({
//       ...prevData,
//       loading: true
//     }))
    
//     setTimeout(() => {
//       const getWriters = async () => {
//         const response = await fetch('/writers.json');
//         const data = await response.json();
//         setData(data);
//       };
  
//       getWriters()
    
//     }, 2000);
//   };

// if(data.loading) {
//   return (
//     <div>
//       <h1> Writer Profiles</h1>
//       <div className='container'>
//         <div className="card action">
//           <p className="infoText"> ...Loading</p>
//         </div>
//       </div>
//     </div>
//   );
// }

return (
    <div >
      <h1>Writer Profiles</h1>
      <div className="container">
          <ProfileForm Submit={Submit}/>
          {allProfile.map((writer) => (
            <ProfileCard key={writer.id} writer={writer} />        
        ))}
      </div>
    </div>
  );
}

export default App;
