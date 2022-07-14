import axios from "axios";
import { useState } from "react";
import "./Form.css";


function App() {
  const initialValues = { name: "", email: "", Mobile: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    const name = event.target.name.value;
    const email = event.target.email.value;
    const Mobile = event.target.Mobile.value;
    const data = {name,email,Mobile};
    axios.post("http://localhost:3001/contacts",data)
    .then(Response => {
        console.log(Response)
     event.target.reset(formValues.data);
     setFormValues(initialValues);
        
    })

    .catch(error => {
        console.log(error);
    })
    
  };


  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const mobregx = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if (!values.name) {
      errors.name = "name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.Mobile) {
      errors.Mobile = "mobile is required";
    }else if (!mobregx.test(values.Mobile)) {
     errors.Mobile = "This is not a valid mobile format!";
   
    }
    return errors;
  };

  return (
    <>
    <h1>Fill your info</h1>
    <div className="container">
     

      <form id="form" onSubmit={handleSubmit}>
        <h1>Contact Form</h1>
        <div ></div>
        <div >
          <div  >
            <label className = "label">name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.name}</p>
          <div >
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div >
            <label>Mobile number</label>
            <input
              type="Mobile"
              name="Mobile"
              placeholder="Mobile number"
              value={formValues.Mobile}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.Mobile}</p>
          <button>Submit</button>
        </div>
      </form>
    </div>
    </>
  );
}

export default App;