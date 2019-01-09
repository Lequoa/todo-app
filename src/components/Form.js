import React from 'react';

const Form = (props) => {
    return (
        <div className="todoListMain">
                <div className="header">
                    <form onSubmit={ props.addItem }>
                        <div>
                            <input type="text" name="task" placeholder="add a new todo ..." autoFocus />
                        </div>
                        
                        <div>
                            <button type="submit" className="btn btn-success margin-top-20">Add Task</button>

                        </div>
                    </form>
                </div>
            </div>
    );
}

export default Form;