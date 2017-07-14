/**
    File name: footerComp.js
    Author: Abhishek H Shetty
    This component adds an application footer, a reuseable component.
**/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { EventEmitter } from 'events';

class ContentComp extends Component{
    /** Constructor for initializations required by the component **/
    constructor(props){
        super(props);
        this.state = {
            selectedTabNum : 1
        }
    }

    componentWillMount(){
        /** Adding an event listener **/
        this.evtEmtr = new EventEmitter();
        /** Registering an event with the name "manageModal", and defined a callback/event handler whenever there is
            an event broadcasted with this name from anywhere across the application**/
        this.evtEmtr.addListener("selectTab",({handleTab}) =>{
            //The paramter that is passed with the broadcast event handler 'handleModal'
            //is currently not being used.
            this.setState({selectedTabNum: handleTab});
        });
    }

    updateScreen({tabNum}){
        this.setState({selectedTabNum : tabNum});
    }

    render() {
        return (
            <div className='container mainContent'>
                <div className='row'>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <ul className="nav navbar-nav">
                                <li className={this.state.selectedTabNum === 1? "active":""} onClick={(event) => {this.updateScreen({tabNum:1})}}>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className={this.state.selectedTabNum === 2? "active":""} onClick={(event) => {this.updateScreen({tabNum:2})}}>
                                    <Link to="rctFtrs">React Features</Link>
                                </li>
                                <li className={this.state.selectedTabNum === 3? "active":""} onClick={(event) => {this.updateScreen({tabNum:3})}}>
                                    <Link to="profile">Profile</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main>{this.props.children}</main>
                </div>
            </div>
        );
    }
}

export default ContentComp;
