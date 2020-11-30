import {connect} from 'react-redux'
import { setVisibilityFilter} from '../actions'
import Link from '../components/filterItem'

const mapStateToProps = (state, props)=>({
    active: props.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, props)=>({
    onClick:()=>{
        dispatch(setVisibilityFilter(props.filter))
    }
})

const Filter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default Filter