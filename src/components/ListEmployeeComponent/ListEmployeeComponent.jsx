import React, { useEffect, useState } from 'react';
import { listEmployees } from '../services/EmployeeService';

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

  const [employees , setEmployees] = useState([]);

useEffect(() => {
  listEmployees()
    .then((response) => {
      setEmployees(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}, []);


  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">List of Employees</h2>

      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
