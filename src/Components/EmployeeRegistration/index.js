import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import UserContext from '../Context/UserContext'
import './index.css'


export default class Registration extends Component {

    state = {
        projects : [],
        designations : [],
        empname : '',
        empid : '',
        desig : '',
        exp : '',
        project : '',
        Employee : [],
        nameError : '',
        codeError : ''
    }

   onChangeEmpName = (event) => {
        this.setState({empname : event.target.value})
   }

   onChangeEmpCode = (event) => {
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
                this.setState({projects: json});
            }).catch(rejected => {
                console.log(rejected);
            });
        fetch("http://localhost:8080/api/e1/alldesignations")
            .then((result) => result.json())
            .then((jsonData) => {
                this.setState({designations : jsonData})
        }).catch(rejected => {
            console.log(rejected);
        });
    }

    saveuser = (e) => {
        e.preventDefault();
        let employee = {
            empId: this.state.empid,
            empName: this.state.empname,
            designation: this.state.desig,
            experience: this.state.exp,
            projects: this.state.project,
        };
      
        fetch("http://localhost:8080/api/e1/employees", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(employee),
        }).then((res)=>{
            console.log(res);
            if(res.status===202){
               window.location.href="/rows"
               localStorage.setItem("employeename",JSON.stringify(employee.empName));
            }
            else{
                alert("Enter Field Values");
            }
        })
      };
    
  render() {
    const {projects,designations,empname,empid,project,exp,desig} = this.state;
    return (
      <UserContext.Provider value={{
          empname,
          empid,
          onChangeEmpName:this.onChangeEmpName,
          onChangeEmpCode : this.onChangeEmpCode,
      }}
      >
      <div className="bg-container">
        <h1 className="text-center">Employee Registration</h1>
        <p>Hello World</p>
        <div className="form-body">
            <div className="d-flex flex-row justify-content-center">
            <img  className="employee-image" alt="emp-img" src="https://cdn4.iconfinder.com/data/icons/office-34/256/28-512.png"/>
            </div>
            <div className="col-12 mb-3">
                <label htmlFor="empname" className="form_label">Employee Name</label>
                <input name="empId" 
                required
                className="form_input" 
                type="text" 
                id="empname" 
                value={empname || ""}
                placeholder="Employee Name" 
                onChange={ this.onChangeEmpName}
                />
            </div>

            <div className="col-12 mb-3">
                <label htmlFor="empid" className="form_label">Employee Id</label>
                <input name="empName"
                required
                className="form_input"
                type="text" id="empid"
                value={empid || ""}
                placeholder="Employee ID"
                onChange= {this.onChangeEmpCode}
                />
            </div>

            <div className="col-12 mb-3">
                <label className="form_label">Select Your Project</label>
                <select name="projects" className="form_input" value={project} onChange={this.getProject}>
                    <option>Select Your Project</option>
                    {projects && projects.map((item,index) => (
                         <option value={item.projectName} key={index}>{item.projectName}</option>
                    ))}
                </select>
            </div>

            <div className="col-12 mb-3">
                <label className="form_label">Years Of Experience</label>
                <select name="experience" className="form_input" value={exp} onChange={this.getExperience}>
                    <option value="yearsofexperience">Years of Experience</option>
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
                {designations && designations.map((designation,index) => {
                        return <option value={designation.designationName} key={index}>{designation.designationName}</option>
                })}
                </select>
            </div>
            
          <div className="d-flex flex-row justify-content-center">
          <button className="btn btn-primary" onClick={this.saveuser}>
              SIGN UP
        </button>
          </div>
        </div>  
      </div>
      </UserContext.Provider>
    )
  }
}