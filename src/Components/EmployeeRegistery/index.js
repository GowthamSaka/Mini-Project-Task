import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import AddRowsDynamic from '../AddRows'


export default class Registration extends Component {
    state = {
        projects : [],
        designations : [],
        empname : '',
        empid : '',
        desig : '',
        exp : '',
        project : '',
    }

   handleEmpName = (event) => {
        this.setState({empname : event.target.value});
   }

   handleEmpId = (event) => {
       this.setState({empid : event.target.value});
   }

   getProject = (event) => {
       this.setState({project : event.target.value},()=>console.log(this.state.project));
   }
 
   getExperience = (event) => {
       this.setState({exp : event.target.value},()=>console.log(this.state.exp));
   }

   getDesignation = (event) => {
       this.setState({desig : event.target.value},()=>console.log(this.state.desig))
   }

    componentDidMount() {
        fetch("http://localhost:8080/api/e1/allprojects")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    projects: json,
                   
                });
            })
        fetch("http://localhost:8080/api/e1/alldesignations")
        .then((result) => result.json())
        .then((jsonData) => {
            this.setState({designations : jsonData})
        })
    }

    
  render() {
      const {projects,designations,empname,empid,project,exp,desig} = this.state;
        
    return (
      <div className="bg-container">
        <h1 className="text-center">Employee Registration</h1>
        <form>
        <div className="form-body">
            <div className="d-flex flex-row justify-content-center">
            <img  className="employee-image" alt="emp-img" src="https://as2.ftcdn.net/v2/jpg/01/26/63/11/1000_F_126631173_W9Nq8ZA5s0R0M3ZIBx3BMytVIFseGa9c.jpg"/>
            </div>
            <div className="col-12 mb-3">
                <label htmlFor="empname" className="form_label">Employee Name</label>
                <input className="form_input" type="text" id="empname" value={empname} placeholder="Employee Name" onChange={this.handleEmpName}/>
            </div>
            <div className="col-12 mb-3">
                <label htmlFor="empid" className="form_label">Employee Id</label>
                <input className="form_input" type="text" id="empid" value={empid} placeholder="Employee ID" onChange={this.handleEmpId}/>
            </div>
            <div className="col-12 mb-3">
                <label className="form_label">Select Your Project</label>
                <select name="project" className="form_input" value={project} onChange={this.getProject}>
                    <option>Select Your Project</option>
                    {projects.map((item) => {
                        return <option value={item.projectName} key={item.id}>{item.projectName}</option>
                    })}
                </select>
            </div>
            <div className="col-12 mb-3">
                <label className="form_label">Years Of Experience</label>
                <select name="experience" className="form_input" value={exp} onChange={this.getExperience}>
                   <option value="0">0</option>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
                   <option value="more">more</option>
                </select>
            </div>
            <div className="col-12 mb-3">
                <label className="form_label">Designation</label>
                <select name="designation" className="form_input" value={desig} onChange={this.getDesignation}>
                    <option>Select Your Designation</option>
                {designations.map((designation) => {
                        return <option value={designation.designationName} key={designation.id}>{designation.designationName}</option>
                    })}
                </select>
            </div>
          <div className="d-flex flex-row justify-content-center">
          <input type="button" value="Submit" className="btn btn-success" />
          </div>
        </div>
        </form>
      </div>
    )
  }
}
