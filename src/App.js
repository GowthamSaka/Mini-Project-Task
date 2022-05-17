
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRowsDynamic from './Components/AddRows'
import Registration from './Components/EmployeeRegistration'
import Home from './Components/Home'
import SearchPage from './Components/SearchPage'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route exact path="blogs" element={<Registration />} />
          <Route exact path="tech" element={<AddRowsDynamic />} />
          <Route exact path="search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
    )
  }
}
