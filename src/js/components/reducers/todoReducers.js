/**
    File name: todoReducers.js
    Author: Abhishek H Shetty
    Reducers are used to update the state object in your store. Just like actions, your application can have multiple reducers.
    When a dispatch function is called, all reducers are called. And based on the type of action the specific reducer gets
    triggered.Reducers must be pure functions, which means they can't mutate data.
**/

export default (state = [], action) => {
    let todoList = state.todos === undefined ? [] : state.todos;
    var lstIndx = state.lastIndex === undefined ? 0 : state.lastIndex;
    var index;  
    switch (action.type){
        case 'ADD_ITEM':
            lstIndx = lstIndx + 1;
            action.todoItem.todoItemId = (lstIndx===0) ? 0 : lstIndx;
            action.todoItem.selected = (todoList.length===0) ? true : false;
            let tempArray = [];
            tempArray = [...todoList,action.todoItem];
            return Object.assign({},state,{todos:tempArray,lastIndex: lstIndx});
        case 'REM_ITEM':
            lstIndx = state.lastIndex === undefined ? 0 : state.lastIndex;
            let tempList = todoList.slice();
            index = tempList.findIndex(x => x.todoItemId===action.todoDelItem.deleteId);
            tempList.splice(index,1);
            return Object.assign({},state,{todos:tempList,lastIndex: lstIndx});
        case 'SEL_ITEM':
            todoList = state.todos === undefined ? [] : state.todos;
            lstIndx = state.lastIndex === undefined ? 0 : state.lastIndex;
            let tmpLst = todoList.slice();
            tmpLst.map(function(item,i){
                return item.selected = false;
            },{});
            index = tmpLst.findIndex(x => x.todoItemId===action.selectItem.selectId);
            todoList[index].selected = true;
            return Object.assign({},state,{todos:tmpLst,lastIndex: lstIndx});
        default:
        return state;
    }
};
