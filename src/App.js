
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRowsDynamic from './Components/AddRows'
import Registration from './Components/EmployeeRegistery'
import Home from './Components/Home'
import SearchPage from './Components/SearchPage'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Registration />} />
          <Route path="contact" element={<AddRowsDynamic />} />
          <Route path="search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
    )
  }
}
