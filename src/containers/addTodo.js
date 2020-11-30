import React from 'react'
import {connect} from 'react-redux'
import { addTodo } from '../actions'
import '../assets/css/todo.less'
let AddTodo = ({dispatch})=>{
    let input
    return (
        <div>
            <form onSubmit={e=>{
                e.preventDefault()
                if(!input.value.trim()){
                    return
                }
                dispatch(addTodo(input.value))
                input.value = ''
            }}>
                <input
                className={"todoIteminput"}
                 ref={node =>{
                    input = node
                }}/>
                <button className={"addTodoBtn"} type="submit">
                    添加代办事项
                </button>
            </form>
        </div>
    )
} 

AddTodo = connect()(AddTodo)
export default AddTodo