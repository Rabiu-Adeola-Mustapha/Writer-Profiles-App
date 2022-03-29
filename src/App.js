import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await Axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
      });

      setPosts(response.data);
    })();
  });

  return (
    <div className="app">
      <h1> Daily Posts </h1>
      <div>
        <div className="list">
          {posts.map((post) => (
            <div key={post.id} className="post">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
