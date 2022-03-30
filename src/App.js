import useLocalStorage from "./hooks/useLocalStorage";
import ProfileForm from "./components/ProfileForm";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [profiles, setProfiles] = useLocalStorage("profiles", []);

  const updateProfiles = (profile) => {
    let arr = profiles;
    arr.push(profile);
    setProfiles([...arr]);
  };

  return (
    <div className="app">
      <h1> Profile Maker </h1>
      <div>
        <ProfileForm submit={updateProfiles} />
        <hr />
        <div className="list">
          {profiles.map((person, index) => (
            <ProfileCard key={index} writer={person} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
