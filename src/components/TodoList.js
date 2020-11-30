import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = ({todos, onToggleTodo,onRemoveTodo})=>(
    <ul>
        {todos.map(item=>
            <TodoItem
                key={item.id}
                {...item}
                onToggle={()=> onToggleTodo(item.id)}
                onRemove={()=>onRemoveTodo(item.id)}
            />
        )}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    onToggleTodo: PropTypes.func.isRequired,
    onRemoveTodo: PropTypes.func.isRequired
}
export default TodoList