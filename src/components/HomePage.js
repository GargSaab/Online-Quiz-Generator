import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  let data = [
    {
      value: "There are total 5 quetions.",
    },
    {
      value: "Total 3 minutes for the exam.",
    },
    {
      value: "Minimum 1 quetion correct to pass the exam otherwise fail.",
    },
    {
      value:
        "Once you presses next then you cannot go to the previous quetion.",
    },
    {
      value: "Make sure you have good internet connection.",
    },
    {
      value:
        "If you press browser's back button then your exam will terminated with score 0. ",
    },
  ];
  const [fields, setFields] = useState([]);
  let check = true;

  useEffect(() => {
    fetch("http://127.0.0.1:3000/instructions")
      .then((res) => res.json())
      .then((results) => {
        setFields(results);
      });
  }, []);
  let lenoffields = fields.length;
  if (lenoffields != 0) {
    data = fields[0].line;
    check = false;
  }
  return (
    <div className="container">
      <div className="box2home">
        <h2>Instructions</h2>
        <hr />
        {data.map((field, idx) => {
          return (
            <div key={`${idx}`} style={{ marginTop: 5 }}>
              <div>{`${idx + 1}. ${field.value}`}</div>
            </div>
          );
        })}
        <button
          className="startbtn"
          onClick={() => props.history.push("/test")}
        >
          {/* <Link to="/test" style={{ textDecoration: "none", color: "black" }}> */}
          Start Test
          {/* </Link> */}
        </button>
      </div>
      {check ? (
        <Link
          to="customtest"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: 14,
            position: "absolute",
            bottom: 15,
          }}
        >
          Make Your Own Custom Test
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default HomePage;
