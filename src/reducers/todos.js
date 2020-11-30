import undoable from 'redux-undo'
const todos = (initState = [], action )=>{
    console.log(action.type)
    switch(action.type){
        //增加一条todolist，返回更新后的todos数据
        case 'ADD_TODO':
            return [
                ...initState,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'REMOVE_TODO':
            // console.log('删除后的')
            // console.log(initState.filter(item=>{
            //     return item.id !== action.id
            // }))
            return initState.filter(item=>{
                return item.id !== action.id
            })
        case 'TOGGLE_TODO':
            return initState.map(item=>{
                if(item.id !== action.id){
                    return item
                }
                return {
                    ...item,
                    completed: !item.completed
                }
            })
        default: 
            return initState
    }
}
const undoableTodos = undoable(todos)
export default undoableTodos