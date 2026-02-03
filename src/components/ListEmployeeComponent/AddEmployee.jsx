import React, { useState } from 'react';

const AddEmployee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const saveEmployee = (e) => {
    e.preventDefault(); 
    const employee = { firstName, lastName, email };
    console.log(employee);
    alert(`Employee Saved: ${JSON.stringify(employee)}`);
    // Optional: reset form
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Create Employee</h2>
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
                onChange={handleFirstName}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                value={lastName}
                onChange={handleLastName}
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={handleEmail}
                className="form-control"
                required
              />
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