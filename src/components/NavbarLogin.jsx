import { NavLink } from 'react-router-dom'

function NavbarLogin() {
  return (
    <div className="container">
  <div className="row text-start pb-3">
    <div className="col">
      <NavLink to="/login" className="text-primary" activeClassName="active" style={{ marginRight: '10px' }}>
        Customer
      </NavLink>
      <NavLink to="/login-owner" className="text-black" activeClassName="active">
        Owner
      </NavLink>
    </div>
  </div>
</div>
  )
}

export default NavbarLogin