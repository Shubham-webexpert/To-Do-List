import React, { useContext } from "react";
import "./UserData.css";
// import { ApiContext } from '../../App';
import { data } from "../Person";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

const UserData = () => {
  

  const handleLocal = (id, name, age) => {
    window.localStorage.setItem("Id", id);
    window.localStorage.setItem("Name", name);
    window.localStorage.setItem("Age", age);
  };

  const Navigate = useNavigate();

  return (
    <div className="table">
      <h1>To do List</h1>
      <Table>
        <thead>
          <tr>
            <th>UserID</th>
            <th>UserName</th>
            <th>UserAge</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, index) => {
            return (
              <tr key={index}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.age}</td>
                <td>
                  <Button
                    onClick={() => {
                      handleLocal(ele.id, ele.name, ele.age);
                      Navigate("/updateuser");
                    }}
                  >
                    <EditIcon />
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => {
                      data.splice(index, 1);
                      Navigate("/");
                    }}
                  >
                    <DeleteIcon />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            Navigate("/adduser");
          }}
          style={{marginTop:10}}
        >
          Add User
        </Button>
      </div>
    
  );
};

export default UserData;
