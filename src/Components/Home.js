import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import AccountBalance from './AccountBalance';

class Home extends Component {
  state = {
    isOpen: false
  }

  toggle = () =>{
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Bank Of React</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
              <NavLink tag={Link} to="/userDebits">Debits</NavLink>
              </NavItem>
              <NavItem>
              <NavLink tag={Link} to="/userCredits">Credits</NavLink>
              </NavItem>
              <NavItem>
              <NavLink tag={Link} to="/login">Log in</NavLink>
              </NavItem>
              <NavItem>
              <NavLink tag={Link} to="/userProfile">Profile</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <AccountBalance accountBalance={this.props.accountBalance}/>
      </div>
    );
  }
}

export default Home;