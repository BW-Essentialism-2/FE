import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchValues } from '../actions/Register'

const AllValues = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.register)

    const [value, setValue] = useState()

    useEffect(() => {
        dispatch(FetchValues())
    }, [dispatch])

    
    return (
        <div>
            {console.log(state)}
            {console.log(value)}
            <select value={value} onChange={e => console.log(e.target.value)}>
                {state.allValues.map(value => {
                    return <option key={value.id} value={value.id}>{value.value}</option>
                })}
            </select>
        </div>
    )
}

export default AllValues