/**
    File name: todoActions.js
    Author: Abhishek H Shetty
    Actions are object payloads that are identified by a required property type. Action creators are methods that wrap and return the action object.
    This is a file that has all actions defined for
    - adding items to the todo list
    - to remove items from the todo list
    - to select a todo item
**/

/** Adding item to todo list **/
export const addItem = (item) => {
    return {
        type: "ADD_ITEM",
        todoItem: item
    }
}
