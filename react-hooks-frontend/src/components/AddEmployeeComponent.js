import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailid, setEmail] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();
  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, emailid };
    if (id) {
      EmployeeService.updateEmployee(id, employee)
        .then((response) => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      EmployeeService.createEmployee(employee)
        .then((response) => {
          console.log(response.data);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    EmployeeService.getEmployeeid(id)
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.emailid);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    }
    return <h2 className="text-center">Add Employee</h2>;
  };
  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">{title()}</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Fist Name</label>
                <input
                  type="text"
                  placeholder="Enter First name"
                  name="firstName"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                ></input>
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last name"
                  name="lastName"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                ></input>
                <label className="form-label">email</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  name="emailid"
                  className="form-control"
                  value={emailid}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>

                <button
                  className="btn btn-success mt-2"
                  onClick={(e) => saveOrUpdateEmployee(e)}
                >
                  Submit
                </button>
                <Link to="/" className="btn btn-danger mt-2 ms-2">
                  Cancle
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
