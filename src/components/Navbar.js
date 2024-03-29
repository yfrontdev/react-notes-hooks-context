import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
    <div className="navbar-brand">
      MyNote App
    </div>

    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/"
          exact
        >
          Главная
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/about"
        >
          Информация
        </NavLink>
      </li>
    </ul>
  </nav>
)
