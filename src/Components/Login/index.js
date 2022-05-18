import React, { Component } from 'react'
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
        <div className="bg-container">
        <form onSubmit={this.handleSubmit}>
        <div className="form-body">
        <div className="d-flex flex-row justify-content-center">
            <img  className="employee-image" alt="emp-img" src="https://as2.ftcdn.net/v2/jpg/01/26/63/11/1000_F_126631173_W9Nq8ZA5s0R0M3ZIBx3BMytVIFseGa9c.jpg"/>
            </div>
          <div className="col-12 mb-3">
                <label htmlFor="adminName" className="form_label">Admin Name</label>
                <input id="adminName" className="form_input" type="text" placeholder="Admin Name" onChange={this.handleAdminName} value={adminName}/>
            </div>
            <div className="col-12 mb-3">
                <label htmlFor="password" className="form_label">Employee Id</label>
                <input id="password" className="form_input" type="password" placeholder="Password" onChange={this.handleAdminPassword} value={password}/>
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

