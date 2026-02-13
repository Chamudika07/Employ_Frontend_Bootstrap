import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addEmployees } from '../services/EmployeeService';

const AddEmployee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const { id } = useParams();

  const [errors, setError] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const navigate = useNavigate();



  const saveEmployee = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const employee = { firstName, lastName, email };

      // Call backend API
      //from submition function 
      addEmployees(employee)
        .then((response) => {
          console.log(response.data);
          navigate('/'); // go back to employee list page
        })
        .catch((error) => {
          console.error(error);
        });

    }



  };
  // Fuction for validation
  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors }

    if (firstName.trim()) {
      errorsCopy.firstName = '';
    }
    else {
      errorsCopy.firstName = "First name is required ";
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = '';
    }
    else {
      errorsCopy.lastName = "Last name is required ";
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = '';
    }
    else {
      errorsCopy.email = "email  is required ";
      valid = false;
    }
    setError(errorsCopy);
    return valid;


  }

  // const saveEmployee = (e) => {
  //   e.preventDefault();
  //   const employee = { firstName, lastName, email };
  //   console.log(employee);
  //   alert(`Employee Saved: ${JSON.stringify(employee)}`);
  //   // Optional: reset form
  //   setFirstName('');
  //   setLastName('');
  //   setEmail('');
  // };

  function pageTitle() {
    if (id) {
      return <h2 className="text-center mb-4">Update Employee</h2>
    }
    else {
      return <h2 className="text-center mb-4">Create Employee</h2>
    }

  }

  return (
    <div className="container my-5">
      {pageTitle()}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={saveEmployee}>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
              // required (this tag for validate)
              />
              {errors.firstName && <div className='invalid-feedback'> {errors.firstName} </div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}

              />
              {errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}

              />
              {errors.email && <div className='invalid-feedback'> {errors.email} </div>}
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;