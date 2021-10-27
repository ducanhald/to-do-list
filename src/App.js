import { useState } from "react";

function App() {
  const [JOB, setJOB] = useState("");
  const [jobs, setJob] = useState([]);
  const submit = () => {
    setJob((pre) => [...pre, JOB]);
    setJOB("");
  };
  return (
    <div className="App">
      <input value={JOB} onChange={(e) => setJOB(e.target.value)} />
      <button onClick={submit}>submit</button>
      <ul>
        {jobs.map((job, index) => {
          return <li key={index}>{job}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
