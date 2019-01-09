import React from 'react';
import TodoItem from './TodoItem';
import ErroHandler from './ErroHandler';

class TodoList extends React.Component {
    render () {

        if (this.props.error){
            return (
                <ErroHandler error={ this.props.error } />
            );
        }else{
            var items = this.props.items.map((item, index) => {
                return (
                    <TodoItem index = { index } 
                              key = { index } 
                              item = { item } 
                              doneItem = { this.props.doneItem }
                              todoItems = { this.props.items } />
                );
            });
            
            return (
                <ul className="list-group"> { items }</ul>
            );
        }

    }
};


export default TodoList;