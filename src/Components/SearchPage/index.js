import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {AiOutlineSearch} from 'react-icons/ai'
// import MaterialTable from 'material-table'
import './index.css'

export default class SearchPage extends Component {
    // state = {
    //     data : []
    // }

    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((result) => result.json())
    //     .then((jsonData) => {
    //         this.setState({data : jsonData})
    //     })
    // }

  render() {
    //   const {data} = this.state;
    //   const columns = [
    //     { title: "ID", field: "id" },
    //     { title: "Username", field: "username" },
    //     { title: "Name", field: "name" },
    //     { title: "Email", field: "email" },
    //     { title: "Phone", field: "phone" },
    //     { title: "Web Link", field: 'website' }, 
    //   ]
      
    return (
      <div>
        <h1 className="text-center">Welcome Admin</h1>
        <div className="d-flex flex-row">
            <div className="d-flex flex-row search-container">
                <input type="search" placeholder="Search By Project" className="search-button" />
                <span><AiOutlineSearch className="search-icon"/></span>
            </div>
            <div className="d-flex flex-row search-container">
                <input type="search" placeholder="Search By Technology" className="search-button" />
                <span><AiOutlineSearch className="search-icon"/></span>
            </div>
            <div className="d-flex flex-row search-container">
                <input type="search" placeholder="Search By Name" className="search-button" />
                <span><AiOutlineSearch className="search-icon"/></span>
            </div>
        </div>
        {/* <MaterialTable
        title="Employee Data"
        data={data}
        columns={columns}
      /> */}
      </div>
    )
  }
}
