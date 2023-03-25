import React from 'react'

function InputForm({ search, setSearch }) {
    return (
        <div className='my-3'>
            <h2>Search your favourite artist</h2>
            <input className='form-control-lg w-100' defaultValue={''} type="text" value={search} placeholder='Search...' onChange={e => setSearch(e.target.value)} />
        </div>
    )
}

export default InputForm