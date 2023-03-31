import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../Person";
import "./UpdateUser.css";

const UpdateUser = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  let index = data.map((e) => {
      return e.id;
    })
    .indexOf(id);

  useEffect(() => {
    setId(localStorage.getItem("Id"));
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
  },[id,name,age]);

  const handleClick = (e) => {
    e.preventDefault();
    const a = data[index];
    a.id= id;
    a.name =name;
    a.age =age;

    
    Navigate("/");
  };

  const Navigate = useNavigate();
  return (
    <div className="update">
      <h1>Update User</h1>
      <div className="text">
       
      </div>
      <div className="text">
        <TextField
          sx={{ width: 500 }}
          id="outlined-basic"
          label="Your Name"
          name="name"
          variant="outlined"
          value={name}
          onChange={(e) => {setName(e.target.value)
            localStorage.setItem('Name',e.target.value);
          }}
        />
      </div>
      <div className="text">
      <TextField
      sx={{ width: 500 }}
      id="outlined-basic"
      label="Your Age"
      name="name"
      variant="outlined"
      value={age}
      onChange={(e) => {setAge(e.target.value);
        
        localStorage.setItem('Age',e.target.value);
      }}
    />
      </div>
      <div className="btn">
        <Button fullWidth variant="contained" onClick={(e) => handleClick(e)}>
          Update User
        </Button>
      </div>
    </div>
  );
};

export default UpdateUser;
