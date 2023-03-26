import React, { useState } from 'react'

function InputForm({ setSearch }) {

    const [type, setType] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        console.log(type)
        setSearch(type)
    }

    return (
        <>
            <h2 className='my-3'>Search your favourite artist</h2>
            <form className='my-3 form-group container' onSubmit={handleClick}>
                <div className="row">
                    <input className='form-control-lg w-100 col me-2' defaultValue={''} onChange={(e) => setType(e.target.value)} type="text" placeholder='Search...' />
                    <button type='submit' className='btn btn-primary col-auto '>Search</button>
                </div>
            </form>
        </>
    )
}

export default InputForm