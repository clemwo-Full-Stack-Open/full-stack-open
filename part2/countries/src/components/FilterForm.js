import React from 'react'

const FilterForm = ({filter, handleInputChange}) => {



    return (
        <div>
            <form>
                <div>
                    Find countries:
                    <input
                        value={filter}
                        onChange={handleInputChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default FilterForm