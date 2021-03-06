import React from "react";
import UserContext from "../Context/UserContext";



class AddRowsDynamic extends React.Component {

  // static contextType = UserContext
  state = {
    rows: [],
    technologies : [],
    techname : ''
  };

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


  handleChange = idx => e => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    const rowInfo = rows[idx];
    rowInfo[name] = value;
    this.setState({
      rows
    });
    console.log(rows);
  };

//   handleChange = event => {
//     const {rows} = this.state;
//     let name = event.target.name;
//     let value = event.target.value;
//     this.setState(prevState => {
//         prevState.rows[name] =  value;
        
//         return {
//             rows: prevState.fields
//         };
//     });
//     console.log(rows);
// };
  
  handleAddRow = () => {
    const item = {
      techname: "",
      rating: ""
    };
    this.setState({
      rows: [...this.state.rows, item]
    });
  };
  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1)
    });
  };
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows]
    rows.splice(idx, 1)
    this.setState({ rows })
  }
  render() {
      const {technologies} = this.state;
      
      return (
        <UserContext.Consumer>
          {value => {
            const {empname,empid} = value;
          return(
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <h1>Welcome {empname}</h1>
              <p>{empid}</p>
              <table
                className="table table-bordered table-hover form-table"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center">S.No</th>
                    <th className="text-center"> TechName </th>
                    <th className="text-center"> Rating </th>
                    <th className="text-center"> Add another Technologies </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((item, idx) => (
                    <tr id="addr1" key={idx}>
                      <td className="pt-4 text-center">{idx}</td>
                      <td>
                        {/* <input
                          type="text"
                          name="name"
                          value={this.state.rows[idx].name}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        /> */}
                        <select name="techName" className="mt-2 form-control" techname="techname" onChange={this.handleChange(idx)} value={this.state.rows[idx].techname || ""}>
                            {technologies.map((item) => {
                                return <option value={item.techName}>{item.techName}</option>
                            })}
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          name="rating"
                          value={this.state.rows[idx].rating}
                          onChange={this.handleChange(idx)}
                          className="form-control mt-2 w-auto"
                        />
                      </td>
                      <td>
                      <button onClick={this.handleAddRow} className="btn btn-primary">
                        Add Row
                      </button>
                        <button
                          className="btn btn-outline-danger m-2"
                          onClick={this.handleRemoveSpecificRow(idx)}
                        >
                          Remove
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
                className="btn btn-danger float-right"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        )
        }}
        </UserContext.Consumer>
    )
  }
}

export default AddRowsDynamic;