import React from 'react'
import AddTodo from '../containers/addTodo'
import Footer from '../components/footer'
import VisibleTodoList from '../containers/visibleTodoList'
const App=()=>(
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
)
export default App