import React from "react";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import UserContext from "../Context/UserContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'



class EmployeeTechnology extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
       formValues: [{techName: "", rating : ""}],
       technologies : [],
       techName : '',
     };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({formValues });
  }

  addFormFields() {
    this.setState(({
      formValues: [...this.state.formValues, {techName: "", rating: "" }]
    }))
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }

  handleSubmit(event) {
    const {formValues} = this.state;
    event.preventDefault();
    //alert(JSON.stringify(formValues));
    fetch("http://localhost:8080/api/e1/skillsofemployees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        formValues // Use your own property name / key
      ),
    });
  }


  componentDidMount() {
    fetch("http://localhost:8080/api/e1/alltechnologies")
        .then((result) => result.json())
        .then((jsonsData) => {
            this.setState({technologies : jsonsData})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  render() {
      const {technologies} = this.state;
      
      return (
        <UserContext.Consumer>
          {value => {
            const {empname,empid} = value
            console.log(empname);
            return (
        <div className="container tech-bg-container">
            <div className="row">
                <div className="col-sm-8 ">
                  <h1>{empname} and your id is  {empid} </h1>
                  <table className="table">
                    <thead>
                      <tr>
                          <th>S.No</th>
                          <th>Technolgies</th>
                          <th>Rating</th>
                          <th>Add More Technologies</th>
                      </tr>
                    </thead>

                    <tbody>
                    {this.state.formValues.map((element, index) => (
                    <tr id="addr1" key={index}>
                      <td className="pt-4 text-center">{index}</td>
                      <td>
                      <select name="techName" className="mt-2 form-control-m ratings" techname="techname" onChange={e => this.handleChange(index, e)}>
                        <option>Select Technologies</option>
                            {technologies.map((item) => {
                                return <option value={item.techName}>{item.techName}</option>
                            })}
                      </select>
                      </td>

                      <td>
                      <input type="text" 
                      name="rating" 
                      className="mt-2 form-control-m ratings" 
                      value={element.rating || ""} 
                      onChange={e => this.handleChange(index, e)} 
                      />
                      </td>

                      <td>
                      <button 
                        onClick={() => this.addFormFields()} 
                        className="btn btn-outline-success">
                        +
                      </button>
                        
                      <button
                        className="btn btn-outline-danger m-2"
                        onClick={() => this.removeFormFields(index)}
                      >
                        x
                      </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={this.handleRemoveRow}
                className="btn btn-danger float-right m-2"
              >
                Delete Last Row
              </button>
              <button
                className="btn btn-success float-right"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
              <Button
                as={Link}
                to="/registration"
  	            variant="text"
                className="btn btn-secondary m-2"
              >
     	          Back
              </Button>
            </div>
          </div>
        </div>
         )
        }} 
      </UserContext.Consumer>
    )
  }
}

export default EmployeeTechnology;