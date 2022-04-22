import React, { useState, useEffect } from "react";

const Form = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    gender: "",
    roles: {
      frontend: false,
      backend: false,
    },
    lang: "react js",
  });
  const [storeData, setStoreData] = useState([]);

  // useEffect(() => {}, []);

  const handleChange = (e) => {
    let updateName = e.target.name;
    let updateValue = e.target.value;
    if (updateName === "frontend") {
      let role = (data.roles.frontend = e.target.checked);
      setData({ ...data, role });
      return;
    } else if (updateName === "backend") {
      let role = (data.roles.backend = e.target.checked);
      setData({ ...data, role });
      return;
    }

    setData({ ...data, [updateName]: updateValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);
    setStoreData([...storeData, data]);
    console.log(storeData);
    localStorage.setItem("data", JSON.stringify(storeData));
  };

  return (
    <>
      <div className="container">
        <h1>Registration Form</h1>
        <hr />
        <div>
          <form>
            <div className="form-group">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                className="form-control"
                name="fname"
                value={data.fname}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lname"
                value={data.lname}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                aria-describedby="email"
                value={data.email}
                onChange={(e) => handleChange(e)}
              />
              <small name="email" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={data.password}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="d-flex" style={{ gap: "2rem" }}>
              Gender:
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  onChange={(e) => handleChange(e)}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  onChange={(e) => handleChange(e)}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
            <div className="d-flex" style={{ gap: "2rem" }}>
              Role:
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="frontend"
                  onChange={(e) => handleChange(e)}
                  id="frontend"
                />
                <label className="form-check-label" htmlFor="frontend">
                  Frontend
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="backend"
                  onChange={(e) => handleChange(e)}
                  id="backend"
                />
                <label className="form-check-label" htmlFor="backend">
                  Backend
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="lang">Language</label>
              <select
                className="form-control"
                name="lang"
                value={data.lang}
                onChange={(e) => handleChange(e)}
              >
                <option value="react js">React js</option>
                <option value="vue js">Vue js</option>
                <option value="node js">Node js</option>
                <option value="express js">Express js</option>
                <option value="vanilla js">Vanilla js</option>
              </select>
            </div>
            <div>
              <button
                className="btn btn-success mb-3 mb-2"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
