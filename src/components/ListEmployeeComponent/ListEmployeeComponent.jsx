import React, { useEffect, useState } from 'react';
import { listEmployees, deleteEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {

  // const dummyData = [
  //   {
  //     id: 1,
  //     firstName: "Chamudika",
  //     lastName: "Pramod",
  //     email: "chamudikapramod23@gmail.com"
  //   },
  //   {
  //     id: 2,
  //     firstName: "Sanoshi",
  //     lastName: "Niwarhthana",
  //     email: "sanoshi@gmail.com"
  //   },
  //   {
  //     id: 3, // ⚠️ id should be unique
  //     firstName: "Inoka",
  //     lastName: "Malanthi",
  //     email: "inokka@gmail.com"
  //   }
  // ];

  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getAllEmployees();
  }, []);



  const addNewEmployee = () => {
    navigate('/add_employee');
  };

  const updateEmployee = (id) => {
    navigate(`/edit_employee/${id}`)
  }
  const handleDeleteEmployee = (id) => {
    // Call backend API to delete employee by id
    console.log(`Delete employee with id: ${id}`);
    // In a real application, you would make an API call here to delete the employee from the backend
    deleteEmployee(id).then(() => {
        getAllEmployees();
    }).catch((error) => {
      console.error(error);
    })
  }
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">List of Employees</h2>
      <button className="btn btn-primary fw-semibold px-4 py-2" onClick={addNewEmployee}>
        Add Employee
      </button>
      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button className="btn btn-info me-2" onClick={() => updateEmployee(employee.id)}>Update</button>
                <button className="btn btn-danger" onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
