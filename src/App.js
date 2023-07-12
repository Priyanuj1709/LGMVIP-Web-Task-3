import "./App.css";
import React, { useEffect, useState } from "react";
import db from "./firebase-config";
import Card from "./Components/Card";
import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  const [data, setData] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);

  function handleChange(e) {
    const { checked, value } = e.target;
    if (checked) {
      setSkills((pre) => [...pre, value]);
    }
  }
  const usersCollectionRef = collection(db, "students");

  useEffect(() => {
    const fetchUsers = async () => {
      const usersSnapshot = await getDocs(usersCollectionRef);
      const usersList = usersSnapshot.docs.map((doc) => doc.data());
      setData(usersList);
    };
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    await addDoc(usersCollectionRef, {
      Name: name,
      Email: email,
      
      Gender: gender,
      Skills: skills,
    });
  };

  const renderCards = data.map((user) => {
    return (
      <Card
        user={user}
        name={user.Name}
        email={user.Email} 
        gender={user.Gender}
        skills={user.Skills}
        key={user.id}
      />
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>STUDENT ENROLLMENT FORM</h1>
      </header>
      <div className="form-container">
        <div>
          <div className="form-group">
            <label className="name-bar" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label className="email-bar" htmlFor="Email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
           
            <label className="main-title">Gender</label>
            <div className="radio-grp">
              <div className="radio">
                <input
                  type="radio"
                  id="gender"
                  value="male"
                  name="gender"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
                <label className="label-name" htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="gender"
                  value="female"
                  name="gender"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
                <label className="label-name"htmlFor="female">Female</label>
              </div>
            </div>
            <label className="main-title">Skills </label>
            <div className="radio-grp">
              <div className="radio">
                <input
                  type="checkbox"
                  id="language"
                  value="java"
                  name="language"
                  onChange={handleChange}
                />
                <label className="label-name" htmlFor="java">Java</label>
                <input
                  type="checkbox"
                  id="language"
                  value="CSS"
                  name="language"
                  onChange={handleChange}
                />
                <label className="label-name" htmlFor="CSS">CSS</label>
                <input
                  type="checkbox"
                  id="language"
                  value="HTML"
                  name="language"
                  onChange={handleChange}
                />
                <label className="label-name" htmlFor="HTML">HTML</label>
              </div>
            </div>
          </div>
          <div className="btn-grp">
            <button className="btn" onClick={handleSubmit}>
              Submit
            </button>
            
          </div>
        </div>
        <span className="verticle-line"/>
        <div className="table">
          <table>
           {renderCards}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
