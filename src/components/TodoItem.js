import React from 'react';

class TodoItem extends React.Component {

    onClickDone = () => {
        var index = parseInt(this.props.index);
        var todo = this.props.todoItems[index];
        this.props.doneItem(index);
    }

    render() {
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
                { this.props.item.value }
                  <button className="btn btn-primary btn-xs" type="button" onClick = { this.onClickDone }>Done</button>
            </li>
    
        );
    }
};


export default TodoItem;