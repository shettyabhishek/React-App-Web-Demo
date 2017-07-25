/**
    File name: reduxReactComp.js
    Author: Abhishek H Shetty
    This component is used for showing the interations of components using Redux
**/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as todoAction from './actions/todoActions';
//import {deleteTodo} from '../../img/deleteRed.png'; // relative path to image


// Maps state from store to props, this function basically maps the state props from the store
// to the props. So that can be mapped to the components as input data to the component
const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos === undefined ? [] : state.todos,
        lastIndex: state.lastIndex === undefined ? 0 : state.lastIndex
    }
};

// Maps actions to props, this function basically handles pushing properties to the actions
// via the dispatch api of the store
const mapDispatchToProps = (dispatch) => {
    return {
        // You can now say this.props.createBook
        createToDo: todo => {dispatch(todoAction.addItem(todo));},
        removeToDoItem: todo => {dispatch(todoAction.removeItem(todo));},
        selectTodoItem: todo => {dispatch(todoAction.selectItem(todo));}
    }
};

class ReduxInReact extends Component{
    constructor(props){
        super(props);
        console.info("Linking the properties ");
    }
    submitTodo(){
        var itemObj = {title: this.refs.todoTitle.value};
        this.props.createToDo(itemObj);
        this.refs.todoTitle.value = "";
    }
    deleteTodo({deleteId}){
        var itemObj = {deleteId: deleteId};
        this.props.removeToDoItem(itemObj);
    }
    selectTodo({selectId}){
        var itemObj = {selectId: selectId}
        this.props.selectTodoItem(itemObj);
    }
    render(){
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
                        <input type='text' placeholder='New Todo' ref='todoTitle' className='todoTitle'/>
                        <button onClick={(event) => this.submitTodo()} className='btn btn-sm btn-info addItem'> Add </button>
                        {(this.props.todos.length !== 0) ? (
                            <ul>
                                {this.props.todos.map((b, i) => <li className={i%2 === 0? "even":"odd"} key={i}>
                                    <span>{b.title}
                                        <i onClick={(event) => this.deleteTodo({deleteId:b.todoItemId})} className="glyphicon glyphicon-trash pull-right"></i>
                                        <i onClick={(event) => this.selectTodo({selectId:b.todoItemId})} className={b.selected === true ? "glyphicon glyphicon-ok pull-right showSelected":"glyphicon glyphicon-ok pull-right"}></i>
                                    </span>
                                </li> )}
                            </ul>
                        ):(<ul><li>No Todos</li></ul>)}
                        <div className='spacer'></div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='col-sm-12 todoContentText'>
                            <h4> Overview - Todo Implementation </h4>
                            <p>This is a sample implementation to understand the usage of Redux in React.
                            In this sample the user can add new todo items. Delate it and can select the one
                            of his choice.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//export default ReduxInReact;
export default connect(mapStateToProps, mapDispatchToProps)(ReduxInReact);
