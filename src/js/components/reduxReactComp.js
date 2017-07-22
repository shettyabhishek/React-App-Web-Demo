/**
    File name: reduxReactComp.js
    Author: Abhishek H Shetty
    This component is used for showing the interations of components using Redux
**/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as todoAction from './actions/todoActions';
import {deleteTodo} from '../../img/deleteRed.png'; // relative path to image


// Maps state from store to props, this function basically maps the state props from the store
// to the props. So that can be mapped to the components as input data to the component
const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos
    }
};

// Maps actions to props, this function basically handles pushing properties to the actions
// via the dispatch api of the store
const mapDispatchToProps = (dispatch) => {
    return {
        // You can now say this.props.createBook
        createToDo: todo => {dispatch(todoAction.addItem(todo));}
    }
};

class ReduxInReact extends Component{
    constructor(props){
        super(props);
        console.info("Linking the properties ",deleteTodo);
    }
    submitTodo(){
        var itemObj = {title: this.refs.todoTitle.value};
        this.props.createToDo(itemObj);
        this.refs.todoTitle.value = "";
    }
    render(){
        console.info("deleteTodo    ",deleteTodo);
        return (
            <div className='container rdxRctContent'>
                <h3> Redux integration in React Applications </h3>
                <div className='row'>
                    This is a POC to understand the use of Redux in React apps. In this example we are creating a todo list.
                    Add new todo items, switch todo selections and remove todo items.
                </div>
                <div className='spacer'></div>
                <div className='spacer'></div>
                <div className='row todoContainer'>
                    <div className='col-sm-6 todoComponent'>
                        <div className='spacer'></div>
                        <input type='text' placeholder='New Todo Item' ref='todoTitle' className='todoTitle'/>
                        <button onClick={(event) => this.submitTodo()} className='btn btn-sm btn-info addItem'> Add </button>
                        {(this.props.todos !== undefined) ? (
                            <ul>
                                {this.props.todos.map((b, i) => <li className={i%2 === 0? "even":"odd"} key={i}>
                                    <span>{b.title}
                                        <i className="glyphicon glyphicon-trash pull-right"></i>
                                        <i className="glyphicon glyphicon-ok pull-right"></i>
                                    </span>
                                </li> )}
                            </ul>
                        ):(<ul><li>No Todos</li></ul>)}
                        <div className='spacer'></div>
                    </div>
                </div>
            </div>
        );
    }
}

//export default ReduxInReact;
export default connect(mapStateToProps, mapDispatchToProps)(ReduxInReact);
