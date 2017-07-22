/**
    File name: todoReducers.js
    Author: Abhishek H Shetty
    Reducers are used to update the state object in your store. Just like actions, your application can have multiple reducers.
    When a dispatch function is called, all reducers are called. And based on the type of action the specific reducer gets
    triggered.Reducers must be pure functions, which means they can't mutate data.
**/

export default (state = [], action) => {
    switch (action.type){
        case 'ADD_ITEM':
            var todoList = state.todos === undefined ? [] : state.todos;
            var tempArray = [];
            if(todoList);
                tempArray = [...todoList,action.todoItem]
            return Object.assign({},state,{todos:tempArray})
        /*case 'RNM_ITEM':
            Object.assign({},action.todoItem,{name:action.todoItem});  */
        default:
        return state;
    }
};
