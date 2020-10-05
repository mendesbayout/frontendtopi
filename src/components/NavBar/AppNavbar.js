import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem    
    
} from 'reactstrap';
import RegisterModal from '../auth/RegisterModal';
//import Logout from '../auth/Logout';
import LoginModal from '../auth/LoginModal';
import { VscGithubInverted } from 'react-icons/vsc'


class AppNavbar extends Component {
    state = {
        isOpen: false

    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });

    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                        <NavbarBrand href="/" size={48}> 
                        <VscGithubInverted size={48}/>
                         JS Top(i) Reps 
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>   
                            <NavItem>
                                <RegisterModal />
                            </NavItem>
                            <NavItem>
                                <LoginModal/>
                            </NavItem>
                            
                        </Nav>     
                        </Collapse>                    
                </Navbar>
            </div>
        )
    };
}

export default AppNavbar;

