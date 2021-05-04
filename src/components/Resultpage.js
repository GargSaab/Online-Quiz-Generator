import React, { useState, useEffect } from "react";
import correct from "../assests/correct.gif";
import fail from "../assests/fail.gif";

function Resultpage(props) {
  const data = props.location.state.data;
  const response = props.location.state.response;
  let len = data.length;
  let score = 0;
  for (let j = 0; j < len; j++) {
    if (data[j].ans === response[j]) {
      score += 1;
    }
  }
  let passingmarks = 1;
  const [mqtopass, setMqtopass] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/instructions")
      .then((res) => res.json())
      .then((results) => {
        setMqtopass(results);
      });
  }, []);
  let l = mqtopass.length;
  if (l != 0) {
    passingmarks = mqtopass[0].mqtopass;
  }
  return (
    <div className="container">
      <div className="box1">
        <h1>Your Score : {score}</h1>
        {score >= passingmarks ? <h1>Passed</h1> : <h1>Fail</h1>}
        {score >= passingmarks ? (
          <img src={correct} style={{ height: 100, width: 100 }} />
        ) : (
          <img src={fail} style={{ height: 100, width: 100 }} />
        )}
      </div>
    </div>
  );
}

export default Resultpage;
