import React, { useState } from "react";

function SetInstructions(props) {
  const [fields, setFields] = useState([{ value: null }]);
  const [correctq, setCorrectq] = useState();

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }
  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }
  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }
  const handleSubmit = () => {
    fetch("http://127.0.0.1:3000/send-instructions", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        line: fields,
        mqtopass: correctq,
      }),
    })
      .then((res) => res.json)
      .catch((err) => {
        alert("Something went wrong");
      });
    props.history.push("/");
  };
  console.log(fields);
  return (
    <div className="container">
      <div class="mcqbox">
        <div>Minimum correct quetions to pass the exam : </div>
        <input
          type="number"
          style={{ borderRadius: 5, width: 80, marginLeft: 5 }}
          value={correctq}
          onChange={(e) => setCorrectq(e.target.value)}
        />
      </div>
      <div className="box213">
        <h2>Set Instructions</h2>
        {fields.map((field, idx) => {
          return (
            <div key={`${field}-${idx}`}>
              <input
                type="text"
                className="userinstruction"
                placeholder={`Instruction ${idx + 1}`}
                onChange={(e) => handleChange(idx, e)}
              />
              <button type="button" onClick={() => handleRemove(idx)}>
                Remove
              </button>
            </div>
          );
        })}
        <div className="btnbox">
          <button onClick={() => handleAdd()} className="addinstructionbtn">
            Add Instruction
          </button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default SetInstructions;
