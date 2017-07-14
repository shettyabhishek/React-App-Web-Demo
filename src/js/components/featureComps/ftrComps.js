/**
    File name: myComp.js
    Author: Abhishek H Shetty
    This feature components implementaton done in this file..
**/

import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

/** This class handles the custom component creation **/
class MyComponent extends Component{
    render(){
        return (<div><span>Any component should have a single root parent.</span></div>);
    }
}

/** This class handles the child component rendering and display of the children content & properties using props **/
class RenderChild extends Component{
    render(){
        return (<div className="renderParent">
            <div>Property(myprop) passed as attribute in the RenderChild custom element :
                <strong>{this.props.myprop}</strong></div>
                <div className="renderChild">Child content passed as inner text in the RenderChild custom element :
                <strong>{this.props.children}</strong></div>
        </div>);
    }
}

/** This class handles display of child & parent nodes as a hierarchy **/
class PrarentNode extends Component{
    render(){
        return(<div className="parentChild">RenderChild custom  component added above is appended as a child node.
            <RenderChild myprop='Child property'>This is custom component inside another custom component</RenderChild>
        </div>);
    }
}

/** This class shows the events handling within components **/
class EventComponent extends Component{
    showInnerText(event){
        alert("Reading text using : this.props.children. "+this.props.children);
    }
    render(){
        return (<div className=''>Clicking on the button shows inner text of the custom component.
            <button href="#" className='btn btn-sm btn-primary' onClick={(event) => this.showInnerText()}> Click me </button>
        </div>);
    }
}

/** This class shows the states handling within components **/
class ComponentState extends Component{
    constructor(props){
        super(props);
        //Defining a state below with the name 'checkState'
        this.state = {
            checkState: false
        }
    }
    validateChange(){
        this.setState({checkState: !this.state.checkState});
    }
    render(){
        var msg = "";
        msg = this.state.checkState === true ? "The selected state." : "Unselected state.";
        return (<div className='allignComp'><div>States implemented in this component</div><label className='stateCheckLabel' htmlFor='stateCheckbox'>
            <span className='lbl'>Updates state by checking/unchecking the input.</span>
            <input id="stateCheckbox" onChange={(event) => this.validateChange()} className='stateCheckbox' type='checkbox' defaultChecked={this.state.checkState}/>
        <span className='stateMessage pull-right'>{msg}</span></label></div>);
    }
}

/** This component shows a way to show how the refs are used inside components **/
class RefsComp extends Component{
    getMsg(){
        alert(this.refs.inputText.value);
    }
    render(){
        return(<div className ='allignComp'>
            <input type='text' placeholder='Type something' ref='inputText'/>
            <button className='btn btn-sm btn-warning' onClick={(event)=>this.getMsg()}>Show Ref Value</button>
            </div>
        );
    }
}

/** Thie component shows how keys are used for iteration and animation features in React using 'react-addons-css-transition-group' **/
class AnimateComp extends Component{

    constructor(props){
        super(props);
        this.state = {
            listItems : []
        }
    }
    /** Function called to add item to the list.**/
    addItem(event){
        if(this.refs.inputItem.value)
            this.setState({listItems: this.state.listItems.concat(this.refs.inputItem.value)});
        this.refs.inputItem.value = "";
    }
    /** Function called to remove item from the list.**/
    removeItem({num}){
        var allItems = this.state.listItems.slice();
        allItems.splice(num,1);
        this.setState({listItems:allItems});
    }

    render(){
        var items = this.state.listItems.map(function(item,i){
            return(<span className='listItem' key={item} onClick={(event) => this.removeItem({num:i})}> {item} </span>);
        }.bind(this));
        return(
            <div className ='allignComp'>
                <input type='text' ref='inputItem' placeholder='Add Item'/> <button className='btn btn-sm btn-primary' onClick={(event)=>this.addItem()}> Add </button>
                <CSSTransitionGroup transitionName="anmtComp" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                    {items}
                </CSSTransitionGroup>
            </div>
       );
    }
}

export {MyComponent, RenderChild, PrarentNode, EventComponent, ComponentState, RefsComp, AnimateComp};
