/**
    File name: modalComp.js
    Author: Abhishek H Shetty
    This component is the main container of the web application.
**/

import React, { Component } from 'react';

class modalComp extends Component{

    constructor(props){
        super(props);
        this.state = {
            styleProp: ""
        }
    }
    positionModal(){
        this.props.eventEmitter.emit("manageModal",{handleModal: 0});
    }

    componentDidUpdate(){
        var modalInstance = document.querySelector(".modalComp");
        if(modalInstance != null){
            var codeViewModalWidth = modalInstance.offsetWidth;
            modalInstance.style.left = 'calc((100% - '+codeViewModalWidth+'px)/2)';
        }
    }

    render(){
        if(!this.props.showModal)
            return null;
        return (
            <div className='container'>
                <div className='modalComp'>
                      <div className='modalHeader'> <span>Code View</span>
                          <i onClick={(event) => {this.positionModal()}} className="glyphicon glyphicon-remove pull-right"></i>
                      </div>
                      <div className='modalBody'><img alt="Code implementation view" src={this.props.imgPath}/></div>
                </div>
                <div onClick={(event) => {this.props.eventEmitter.emit("manageModal",{handleModal: 0})}} className='backdropStyle'></div>
            </div>
        );
    }
}

export default modalComp;
