import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("individual");

  const getIsFormValid = () => {
    // Implement this function
    if (!firstName || !email) {
      return false;
    }
    else if (!validateEmail(email)) {
      return false;
    }
    else if (password?.value?.length < 8) {
      return false;
    }
    else if (role !== 'individual' && role !== 'business') {
      return false;
    } else {
      return true;
    }
  };

  const handleChange = (stateName, name, value) => {

    if (name == 'password') {
      stateName((prev) => {return {...prev, value: value}});
    } else {
      stateName(value);
    }
    
  }

  const clearForm = () => {
    // Implement this function
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword({
      value: "",
      isTouched: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={e => handleSubmit(e)}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input placeholder="First name" value={firstName} onChange={e => { handleChange(setFirstName, 'firstname', e.target.value)}} />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input placeholder="Last name" value={lastName} onChange={e => { handleChange(setLastName, 'lastname', e.target.value)}} />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input placeholder="Email address" value={email} onChange={e => { handleChange(setEmail, 'email', e.target.value)}} />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              placeholder="Password"
              type='password'
              value={password.value}
              onFocus={() => setPassword((prev) => { return { ...prev, isTouched: true } })}
              onBlur={() => setPassword((prev) => { return { ...prev, isTouched: false } })}
              onChange={e => { handleChange(setPassword, 'password', e.target.value) }}
            />
            {!password.isTouched && password?.value?.length < 8 ? (<PasswordErrorMessage/>) : null}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select name={'selectOp'} value={role} onChange={e => { handleChange(setRole, 'role', e.target.value)}}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
