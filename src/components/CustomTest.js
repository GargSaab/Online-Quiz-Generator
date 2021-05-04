import React, { useState } from "react";

function CustomTest(props) {
  const [noofquetions, setNoofquetion] = useState();
  const [quetion, setQuetion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [ans, setAns] = useState("");
  const [i, setI] = useState(0);

  const handlenext = () => {
    fetch("http://127.0.0.1:3000/send", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quetion,
        option1,
        option2,
        option3,
        option4,
        ans,
      }),
    })
      .then((res) => res.json)
      // .then((data) => {
      //   alert("Successfully registered");
      // })
      .catch((err) => {
        alert("Something went wrong");
      });
    if (i < noofquetions - 1) {
      setI(i + 1);
      setQuetion("");
      setOption1("");
      setOption2("");
      setOption3("");
      setOption4("");
      setAns("");
    } else {
      props.history.push("/setinstructions");
    }
  };

  return (
    <div className="container">
      <div className="numberq">
        <div>No. of Quetions : </div>
        <input
          type="number"
          className="noofquetion"
          value={noofquetions}
          onChange={(event) => setNoofquetion(event.target.value)}
        ></input>
      </div>
      <div className="box21">
        <div className="cssquetion">
          <input
            type="text"
            className="userquetion"
            value={quetion}
            placeholder={`Type your quetion ${i + 1} here`}
            onChange={(event) => setQuetion(event.target.value)}
          />
        </div>
        <div className="options">
          <input
            type="text"
            className="useroption"
            value={option1}
            placeholder="Set option 1"
            onChange={(event) => setOption1(event.target.value)}
          />
          <input
            type="text"
            className="useroption"
            value={option2}
            placeholder="Set option 2"
            onChange={(event) => setOption2(event.target.value)}
          />
          <input
            type="text"
            className="useroption"
            value={option3}
            placeholder="Set option 3"
            onChange={(event) => setOption3(event.target.value)}
          />
          <input
            type="text"
            className="useroption"
            value={option4}
            placeholder="Set option 4"
            onChange={(event) => setOption4(event.target.value)}
          />
          <input
            type="text"
            className="useroption"
            value={ans}
            placeholder="Answer"
            onChange={(event) => setAns(event.target.value)}
          />
        </div>
        <div>
          <button onClick={handlenext} className="nextbtn">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomTest;
