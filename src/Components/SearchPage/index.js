import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import {AiOutlineSearch} from 'react-icons/ai'
import MaterialTable from 'material-table'
import tableIcons from '../Icons/MaterialTableIcons';
import './index.css'

export default class SearchPage extends Component {

  state = {
    projects : [],
    designations : [],
    project : '',
    desig : '',
    technologies : [],
    techName : '',
    data : []
  }

    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((result) => result.json())
    //     .then((jsonData) => {
    //         this.setState({data : jsonData})
    //     })
    // }


    componentDidMount() {
      fetch("http://localhost:8080/api/e1/allprojects")
          .then((res) => res.json())
          .then((json) => {
              this.setState({
                  projects: json,
                 
              },()=>console.log(json));
          })
      fetch("http://localhost:8080/api/e1/alldesignations")
      .then((result) => result.json())
      .then((jsonData) => {
          this.setState({designations : jsonData})
      })
      fetch("http://localhost:8080/api/e1/alltechnologies")
        .then((result) => result.json())
        .then((jsonsData) => {
            this.setState({technologies : jsonsData})
        })
        fetch("http://localhost:8080/api/e1/requiredempdata")
            .then((result) => result.json())
            .then((jsonData) => {
                this.setState({data : jsonData})
        })
  }

  getProject = (event) => {
    this.setState({project : event.target.value},()=>console.log(this.state.project));
  }

  getDesignation = (event) => {
    this.setState({desig : event.target.value},()=>console.log(this.state.desig))
  }

  getTechnology = (event) => {
    this.setState({techName : event.target.value},()=>console.log(this.state.techName))
  }

  render() {
    const {projects,designations,project,desig,technologies,techName} = this.state;
      const {data} = this.state;
      const columns = [
        { title: "ID", field: "empId" },
        { title: "Username", field: "empName" },
        { title: "Designation", field: "designation" },
        { title: "Projects", field: "projects" },
        { title: "Technology", field : "techName"},
        { title: "Experience", field : "experience"}
      ]
      
    return (
      <div className="search-bg-container">
        <h1 className="text-center">Welcome Admin</h1>
        <div className="d-flex flex-row">
            <div className="d-flex flex-row search-container">
                {/* <input type="search" placeholder="Search By Project" className="search-button" />
                <span><AiOutlineSearch className="search-icon"/></span> */}
                <select name="projects" className="form_input" value={project} onChange={this.getProject}>
                  <option>Seach By Projects</option>
                    {projects && projects.map((item) => (
                         <option value={item.projectName} key={item.id}>{item.projectName}</option>
                    ))}
                </select>
            </div>
            <div className="d-flex flex-row search-container">
                {/* <input type="search" placeholder="Search By Technology" className="search-button" />
                <span><AiOutlineSearch className="search-icon"/></span> */}
                <select name="projects" className="form_input" value={techName} onChange={this.getTechnology}>
                  <option>Search By Technology</option>
                    {technologies && technologies.map((item) => (   
                         <option value={item.techName} key={item.id}>{item.techName}</option>
                    ))}
                </select>
            </div>
            <div className="d-flex flex-row search-container">
                {/* <input type="search" placeholder="Search By Name" className="search-button" />
                <span><AiOutlineSearch className="search-icon"/></span> */}
              <select name="designation" className="form_input" value={desig} onChange={this.getDesignation}>
                <option>Search By Designation</option>
                {designations && designations.map((designation) => {
                        return <option value={designation.designationName} key={designation.id}>{designation.designationName}</option>
                    })}
                </select>
            </div>  
        </div>
        <MaterialTable
        title="Employee Data"
        icons={tableIcons}
        data={data}
        columns={columns}
      />
      </div>
    )
  }
}
