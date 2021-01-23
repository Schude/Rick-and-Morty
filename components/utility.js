import React from 'react'
import Search from './search'
import Pagination from './pagination'

const Utility = ({curr}) => {


    return (
        <div>
            <Search />
            <Pagination current = {curr} />
        </div>
    )
}


export default Utility;
