import { connect } from 'react-redux'
import { toggleTodo,removeTodoItem } from '../actions'
import TodoList from '../components/TodoList'

const getVisibileTdos = (todos, filter)=>{
    switch (filter){
        case 'showAll':
            return todos
        case 'showNotCompleted':
            return todos.filter(i=>!i.completed)
        case 'showCompleted':
            return todos.filter(i=>i.completed)
    }
    
}


const mapStateToProps = (state)=>({
    todos: getVisibileTdos(state.todos.present, state.visibilityFilter)
})
const mapDispatchToProps = ({
    onToggleTodo: toggleTodo,
    onRemoveTodo: removeTodoItem

})

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList