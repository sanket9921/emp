import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";
import AddEmployeeComponent from "./AddEmployeeComponent";

const ListEmployeeComponent = () => {
  const [employess, setEmployees] = useState([]);

  useEffect(() => {
    getAllemployess();
  }, []);

  /*
    this get all the records from the server using axios 
  */
  const getAllemployess = () => {
    EmployeeService.getAllemployess()
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteEmployee = (employeeid) => {
    EmployeeService.deleteEmployee(employeeid)
      .then((response) => {
        getAllemployess();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <h2 className="text-center">List employess</h2>

      <Link to="/add-employee" className="btn btn-warning">
        add Employee
      </Link>

      <table className="table table-bordered table-striped">
        <thead>
          <th>Employee id</th>
          <th>Employee Fist Name</th>
          <th>Employee Last Name</th>
          <th>Employee Email id</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {employess.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailid}</td>
              <td>
                <Link
                  className="btn btn-info"
                  to={`/edit-employee/${employee.id}`}
                >
                  Update
                </Link>

                <button
                  className="btn btn-danger ms-2"
                  onClick={() => deleteEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
