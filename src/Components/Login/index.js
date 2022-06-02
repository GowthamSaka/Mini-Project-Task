import React, { Component } from 'react'
import './index.css'
export default class LoginPage extends Component {

    state = {
        adminName : '',
        password : ''
    }

    handleAdminName = (event) => {
      this.setState({adminName : event.target.value});
    }

    handleAdminPassword = (event) => {
      this.setState({password : event.target.value});
    }

handleSubmit = (event) => {
    event.preventDefault();
    if((this.state.adminName === "Gowtham") && (this.state.password === "gouthu")) {
      window.location.href = "/search"
    }else {
      alert("error");
    }
}

  render() {
    const {adminName,password} = this.state
    return (
        <div className="login-bg-container">
          <h1>Admins only can Login</h1>
        <form onSubmit={this.handleSubmit}>
        <div className="form-body-1">
        <div className="d-flex flex-row justify-content-center">
            <img  className="employee-image" alt="emp-img" src="https://cdn4.iconfinder.com/data/icons/office-34/256/28-512.png"/>
            </div>
          <div className="col-12 mb-3">
                <label htmlFor="adminName" className="form_label">Admin Name</label>
                <input id="adminName" className="form-control" type="text" placeholder="Admin Name" onChange={this.handleAdminName} value={adminName}/>
            </div>
            <div className="col-12 mb-3">
                <label htmlFor="password" className="form_label">Password</label>
                <input id="password" className="form-control" type="password" placeholder="Password" onChange={this.handleAdminPassword} value={password}/>
            </div>
            <div className="d-flex flex-row justify-content-center">
          <button className="btn btn-primary">
              LOGIN
          </button>
            </div>
            </div>
        </form>
        </div>
    )
  }
}

