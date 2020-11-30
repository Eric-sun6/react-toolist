import React from 'react'
import Filter from '../containers/filter.js'

const Footer = ()=>(
    <div>
        显示：
        <Filter filter="showAll">全部</Filter>
        <Filter filter="showNotCompleted">未完成</Filter>
        <Filter filter="showCompleted">已完成</Filter>
    </div>
)
export default Footer