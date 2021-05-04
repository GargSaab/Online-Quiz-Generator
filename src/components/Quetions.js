import React, { useEffect, useState } from "react";

let data = [
  {
    quetion: "Which of the following commands will create a list?",
    option1: "list1 = list()",
    option2: "list1 = []",
    option3: "list1 = list([1, 2, 3])",
    option4: "all of the mentioned",
    ans: "all of the mentioned",
  },
  {
    quetion: "In which language is Python written?",
    option1: "English",
    option2: "PHP",
    option3: "C",
    option4: "All of the above",
    ans: "C",
  },
  {
    quetion: "What is the maximum possible length of an identifier?",
    option1: "16",
    option2: "32",
    option3: "64",
    option4: "None of these above",
    ans: "None of these above",
  },
  {
    quetion: "Who developed the Python language?",
    option1: "Zim Den",
    option2: "Guido van Rossum",
    option3: "Niene Stom",
    option4: "Wick van Rossum",
    ans: "Guido van Rossum",
  },
  {
    quetion: "What is the output when we execute list(“hello”)?",
    option1: "[‘h’, ‘e’, ‘l’, ‘l’, ‘o’]",
    option2: " [‘hello’]",
    option3: " [‘llo’]",
    option4: "[‘olleh’]",
    ans: "[‘h’, ‘e’, ‘l’, ‘l’, ‘o’]",
  },
];

let len = data.length;
const response = [];
for (let j = 0; j < len; j++) {
  response.push("");
}

function Quetions(props) {
  const [radiochecked1, setRadiochecked1] = useState(false);
  const [radiochecked2, setRadiochecked2] = useState(false);
  const [radiochecked3, setRadiochecked3] = useState(false);
  const [radiochecked4, setRadiochecked4] = useState(false);
  const [i, setI] = useState(0);
  const [counter, setCounter] = React.useState(180);
  const [userdata, setUserdata] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:3000/")
      .then((res) => res.json())
      .then((results) => {
        setUserdata(results);
      });
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", (event) => {
      alert("Submited");
      props.history.push({
        pathname: "/result",
        state: { data: data, response: response },
      });
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      props.history.push({
        pathname: "/result",
        state: { data: data, response: response },
      });
    }
    return () => clearInterval(timer);
  }, [counter]);

  const lenofuserdata = userdata.length;

  if (lenofuserdata != 0) {
    data = userdata;
    len = data.length;
  }

  const handlechange = (event) => {
    response[i] = event.target.value;
  };

  const handlenext = () => {
    if (i === len - 1) {
      props.history.push({
        pathname: "/result",
        state: { data: data, response: response },
      });
      return;
    }
    setI(i + 1);
    if (data[i + 1].option1 === response[i + 1]) {
      setRadiochecked1(true);
      setRadiochecked2(false);
      setRadiochecked3(false);
      setRadiochecked4(false);
    } else if (data[i + 1].option2 === response[i + 1]) {
      setRadiochecked1(false);
      setRadiochecked2(true);
      setRadiochecked3(false);
      setRadiochecked4(false);
    } else if (data[i + 1].option3 === response[i + 1]) {
      setRadiochecked1(false);
      setRadiochecked2(false);
      setRadiochecked3(true);
      setRadiochecked4(false);
    } else if (data[i + 1].option4 === response[i + 1]) {
      setRadiochecked1(false);
      setRadiochecked2(false);
      setRadiochecked3(false);
      setRadiochecked4(true);
    } else {
      setRadiochecked1(false);
      setRadiochecked2(false);
      setRadiochecked3(false);
      setRadiochecked4(false);
    }
  };

  const handleprevious = () => {
    setI(i - 1);
    if (data[i - 1].option1 === response[i - 1]) {
      setRadiochecked1(true);
      setRadiochecked2(false);
      setRadiochecked3(false);
      setRadiochecked4(false);
    } else if (data[i - 1].option2 === response[i - 1]) {
      setRadiochecked1(false);
      setRadiochecked2(true);
      setRadiochecked3(false);
      setRadiochecked4(false);
    } else if (data[i - 1].option3 === response[i - 1]) {
      setRadiochecked1(false);
      setRadiochecked2(false);
      setRadiochecked3(true);
      setRadiochecked4(false);
    } else if (data[i - 1].option4 === response[i - 1]) {
      setRadiochecked1(false);
      setRadiochecked2(false);
      setRadiochecked3(false);
      setRadiochecked4(true);
    } else {
      setRadiochecked1(false);
      setRadiochecked2(false);
      setRadiochecked3(false);
      setRadiochecked4(false);
    }
  };

  const handlebtns = (idx) => {
    setI(idx);
    if (data[idx].option1 === response[idx]) {
      setRadiochecked1(true);
      setRadiochecked2(false);
      setRadiochecked3(false);
      setRadiochecked4(false);
    } else if (data[idx].option2 === response[idx]) {
      setRadiochecked1(false);
      setRadiochecked2(true);
      setRadiochecked3(false);
      setRadiochecked4(false);
    } else if (data[idx].option3 === response[idx]) {
      setRadiochecked1(false);
      setRadiochecked2(false);
      setRadiochecked3(true);
      setRadiochecked4(false);
    } else if (data[idx].option4 === response[idx]) {
      setRadiochecked1(false);
      setRadiochecked2(false);
      setRadiochecked3(false);
      setRadiochecked4(true);
    } else {
      setRadiochecked1(false);
      setRadiochecked2(false);
      setRadiochecked3(false);
      setRadiochecked4(false);
    }
  };
  return (
    <div className="maincontainer">
      <div className="leftbox">
        {data.map((field, idx) => {
          return (
            <button
              key={idx}
              className="sidebtns"
              onClick={() => handlebtns(idx)}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>
      <div className="container1">
        <div className="timeleft">
          <div>Time Left : {counter}</div>
        </div>
        <div className="box2">
          <div>
            <div className="cssquetion">
              {i + 1}. {data[i].quetion}
            </div>
            <form className="options">
              <div className="box3">
                <input
                  type="radio"
                  className="radioinputs"
                  name="category"
                  checked={radiochecked1}
                  onClick={() => {
                    setRadiochecked1(true);
                    setRadiochecked2(false);
                    setRadiochecked3(false);
                    setRadiochecked4(false);
                  }}
                  value={data[i].option1}
                  onChange={handlechange}
                />
                <label for={data[i].option1} className="choices">
                  {data[i].option1}
                </label>
              </div>
              <div className="box3">
                <input
                  type="radio"
                  className="radioinputs"
                  name="category"
                  checked={radiochecked2}
                  onClick={() => {
                    setRadiochecked1(false);
                    setRadiochecked2(true);
                    setRadiochecked3(false);
                    setRadiochecked4(false);
                  }}
                  value={data[i].option2}
                  onChange={handlechange}
                />
                <label for={data[i].option2} className="choices">
                  {data[i].option2}
                </label>
              </div>
              <div className="box3">
                <input
                  type="radio"
                  className="radioinputs"
                  name="category"
                  checked={radiochecked3}
                  onClick={() => {
                    setRadiochecked1(false);
                    setRadiochecked2(false);
                    setRadiochecked3(true);
                    setRadiochecked4(false);
                  }}
                  value={data[i].option3}
                  onChange={handlechange}
                />
                <label for={data[i].option3} className="choices">
                  {data[i].option3}
                </label>
              </div>
              <div className="box3">
                <input
                  type="radio"
                  className="radioinputs"
                  name="category"
                  checked={radiochecked4}
                  onClick={() => {
                    setRadiochecked1(false);
                    setRadiochecked2(false);
                    setRadiochecked3(false);
                    setRadiochecked4(true);
                  }}
                  value={data[i].option4}
                  onChange={handlechange}
                />
                <label for={data[i].option4} className="choices">
                  {data[i].option4}
                </label>
              </div>
            </form>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button onClick={handlenext} className="nextbtn1">
                {i === len - 1 ? "Submit" : "Next"}
              </button>
              {i === 0 ? null : (
                <button className="nextbtn1" onClick={handleprevious}>
                  Previous
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quetions;
