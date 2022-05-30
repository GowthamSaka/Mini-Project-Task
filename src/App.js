
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AddRowsDynamic from './Components/AddRows'
import Registration from './Components/EmployeeRegistration'
import Home from './Components/Home'
import LoginPage from './Components/Login';
import SearchPage from './Components/SearchPage'
import EmployeeTechnology from './Components/TechPages';



export default class App extends Component {

  render() {

    return (
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route exact path="login" element={<LoginPage />} />
          <Route exact path="registration" element={<Registration />} />
          <Route exact path="tech" element={<AddRowsDynamic />} />
          <Route exact path="search" element={<SearchPage />} />
          <Route exact path="rows" element={<EmployeeTechnology />} />
          <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
    )
  }
}
