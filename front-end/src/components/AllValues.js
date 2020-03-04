import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchValues } from '../actions/Register'

const AllValues = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.register)

    const [importantValues, setImportantValues] = useState([])

    useEffect(() => {
        dispatch(FetchValues())
    }, [dispatch])


    const toggleValue = id => {

    }
    
    return (
        <div>
            {console.log(state)}
            {state.allValues.map(value => {
                return <div key={value.id}>
                    <label htmlFor={value.value}>{value.value}</label>
                    <input type="checkbox" name={value.value} value={value.value} onChange={() => toggleValue()}/>
                </div>
            })}
        </div>
    )
}

export default AllValues