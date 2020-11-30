import React from 'react'
import  PropTypes from 'prop-types'

const TodoItem = ({ onToggle,onRemove, completed, text,id}) =>(
    <li 
        className={"listItem"}
        onClick={onToggle}
        style={{
            color: completed ? 'red':'#222'
        }}
    >
       
        <span
         style={{ textDecoration: completed? 'line-through': 'none'}}
        >    
            <i className={`${completed ? 'checked': 'nochecked'}`}>
                {/* {completed ? 'v' :''} */}
            </i>
            {text}
        </span>
    
        <button
            style={{display: completed ? 'inline-block' : 'none'}}
            className={"delateTodoItemBtn"}
            onClick={e=>{
                e.preventDefault()
                e.stopPropagation()
                console.log(id)
                onRemove()
            }}
        >删除该项</button>
        
    </li>
    )


TodoItem.propTypes={
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    // id: PropTypes.number.isRequired
}

export default TodoItem