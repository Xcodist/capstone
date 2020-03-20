import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const NavBar = ({ handleClick, isLoggedIn }) => {
  <div>
    <hr className="bottombar" />
    <Link to="/home">
      <h1 className="footer-navbar">Home</h1>
    </Link>
    {/* <div>
        {isLoggedIn ? (
          <div>
            <Link to="/myaccount">My Account</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
            <Link to="/cart">Cart</Link>
          </div>
        ) : (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/guestcart">Cart</Link>
          </div>
        )}
      </div> */}
      <Link to="/user">User Profile</Link>
  </div>
}

const mapState = state => {
  return {
    isLoggedIn: !! state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick(){
      dispatch(logout())
    }
  }
}
export default connect(mapState, mapDispatch)(NavBar)

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
