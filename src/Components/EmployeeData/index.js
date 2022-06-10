import React, { Component } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import ReactLoading from "react-loading";
import './index.css'

export default class EmployeeData extends Component {
    state = {
        ShowData : [],
        name : '',
        showResults : true
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/e1/requiredempdata")
            .then((result) => result.json())
            .then((jsonData) => {
                this.setState({ShowData : jsonData})
        })
    }

   filter = (event) => {
       this.setState({name : event.target.value})
   }

   searchResults = () => {
    const {name,ShowData} = this.state;
    if (name !== '') {
        const results = ShowData.filter((user) => {
          return user.empId.toLowerCase().startsWith(name.toLowerCase());
        });
        this.setState({ShowData : results,showResults:false})
      } else {
        return null
      }
  
      this.setState({name : name});
    };
   
  render() {
      const { ShowData,name,showResults} = this.state;
    return (
      <div>
        <input type="search" placeholder="Employee Code" className="search-button" onChange={this.filter} value={name}/>
        <span><AiOutlineSearch className="search-icon" onClick={this.searchResults}/></span>
        <table>
        <thead>
            <tr>
                <th>EmpId</th>
                <th>EmpName</th>
                <th>Technolgies</th>
            </tr>
        </thead>
{showResults ? null :
      <>
        {ShowData && ShowData.length > 0 ? (
        ShowData.map((item, i) => (
        <tbody key={i}>
            <tr key={i}>
              <td>{item.empId}</td>
              <td>{item.empName}</td>
              <td>{item.techName}</td>
            </tr>
        </tbody> 
        ))
        ) : (
            <tfoot>
                <tr><td>No Results Found</td></tr>
            </tfoot>  
        )}
        </>
      }
        </table>
        <Button
          as={Link}
          to="/rows"
  	      variant="text"
          className="btn btn-secondary m-2"
        >
     	      Add New Technolgies
        </Button>
      </div>
    )
  }
}



