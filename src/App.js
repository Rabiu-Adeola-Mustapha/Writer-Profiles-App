// import writers from "./writers"
import './App.css';
import {ProfileCard} from "./ProfileCard";
import { useEffect, useState } from "react";


function App() {
  const [writers, setWriters] = useState([]);

  useEffect(() => {
    const getWriters = async () => {
      const response = await fetch('/writers.json');
      const data = await response.json();
      setWriters(data);
    }

    getWriters()
  
}, []);



  return (
    <div >
      <h1>Writer Profiles</h1>
      <div className="container">
        
        {writers.map((writer) => (
          <ProfileCard writer={writer} />
        )
              
        )}
      </div>





    </div>
  );
}

export default App;
