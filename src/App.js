import writers from "./writers"
import './App.css';
import {ProfileCard} from "./ProfileCard";

function App() {
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
