import React from 'react'
import Search from './search'
import Pagination from './pagination'

const utility = ({curr}) => {


    return (
        <div>
            <Search />
            <Pagination current = {curr} />
        </div>
    )
}


export default utility;
