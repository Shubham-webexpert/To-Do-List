import React, { useState } from "react";
import { Box, Button, styled, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Create.css";
import { data } from "../Person";
import { v4 as uuid } from "uuid";

const StyledForm = styled(Box)`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledInputs = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Create = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const ids = uuid();
    let uniqueId = ids.slice(0, 8);
    data.push({ id: uniqueId, name: name, age: age });
    Navigate("/");
  };

  const Navigate = useNavigate();

  return (
    <>
      <StyledForm>
        <h1>Add User</h1>
        <StyledInputs>
          <div>
          
          </div>
          <div>
            <TextField
              sx={{ width: 500, marginTop: 5 }}
              id="outlined-basic"
              name="name"
              label="Your Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              autoComplete="off"
            />
          </div>
          <div>
            
            <TextField
              sx={{ width: 500, marginTop: 5 }}
              id="outlined-basic"
              name="age"
              label="Your Age"
              variant="outlined"
              type="number"
              onChange={(e) => setAge(e.target.value)}
              value={age}
              required
              autoComplete="off"
            />
          </div>
        </StyledInputs>

        <Button
          type="submit"
          sx={{ width: 500, marginTop: 5 }}
          variant="contained"
          onClick={handleClick}
        >
          Add User
        </Button>
      </StyledForm>
    </>
  );
};

export default Create;
