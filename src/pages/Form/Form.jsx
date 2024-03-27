import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorsObj = {};
    if (!name.trim()) {
      errorsObj.name = "Name is required";
    }
    if (!email.trim()) {
      errorsObj.email = "Email is required";
    }
    if (!roles.trim()) {
      errorsObj.roles = "Roles are required";
    }

    if (Object.keys(errorsObj).length === 0) {
      console.log("Form submitted:", { name, email, roles });
    } else {
      setErrors(errorsObj);
    }
  };

  return (
    <div className="form_section">
      <div className="start_container">
        <h2 className="form_title">Need Qualified Talents?</h2>
        <div className="form_block">
          <form onSubmit={handleSubmit} className="form">
            <div className="form_group">
              <div>
                <p>
                  Name <span>*</span>
                </p>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter Your Name"
                  className="form_input"
                />
                {errors.name && (
                  <span style={{ color: "red" }}>{errors.name}</span>
                )}
              </div>
              <div>
                <p>
                  Business Email <span>*</span>
                </p>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Enter Your Email"
                  className="form_input"
                />
                {errors.email && (
                  <span style={{ color: "red" }}>{errors.email}</span>
                )}
              </div>
            </div>
            <div className="role_wrapper">
              <p>
                Open Role(s) <span>*</span>
              </p>
              <input
                value={roles}
                onChange={(e) => setRoles(e.target.value)}
                type="text"
                placeholder="Open Role(s)"
                className="form_input_role"
              />
              {errors.roles && (
                <span style={{ color: "red" }}>{errors.roles}</span>
              )}
            </div>
            <div className="form_button_wrap">
              <button className="form_button">Send Details</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
