import React, { useState, useEffect } from "react";

function LandingPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/students")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setStudents(result);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);
  return (
    <div>
      <h1>LandingPage</h1>
      {students?.map((s) => {
        return (
          <div key={s.id}>
            <p>{s.name}</p>
            <p>{s.id}</p>
          </div>
        );
      })}
    </div>
  );
}

export default LandingPage;
