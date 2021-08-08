import React, { Component } from 'react'
import LoginButton from './Login'
import LogoutButton from './Logout'

export class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <LoginButton />
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
