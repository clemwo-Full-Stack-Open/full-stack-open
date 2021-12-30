import React from 'react'

const Filter = ({text, value, onChange}) => {
    return (
        <div>
            <form>
                {text}
                <input
                    value={value}
                    onChange={onChange}
                />
            </form>
        </div>

    )
}

export default Filter