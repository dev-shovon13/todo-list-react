import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';
import './index.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(id) {
        this.setState((prevState) => {
            const updatedTodos = prevState.todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        // spread notation
                        // ... selects all
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            });
            return {
                todos: updatedTodos
            };
        });
    }

    render() {
        const todoItems = this.state.todos.map((item) => (
            <TodoItem
                item={item}
                key={item.id}
                handleChange={this.handleChange}
            />
        ));
        return (
            <div className="todo-list">
                <h3>To Do Items</h3>
                {todoItems}
            </div>
        );
    }
}

export default App;
