import React from 'react'

const FilterSearch = ({filter, handleFilter}) => {
    return <p>find countries: <input type='text' value={filter} onChange={handleFilter} /> </p>
}

export default FilterSearch