import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchValues, updateValue } from '../actions/Register'

const AllValues = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.register)

    const [value, setValue] = useState(1)

    useEffect(() => {
        dispatch(FetchValues())
    }, [dispatch])

    const toggleImportant = (id) => {
       let newValue = state.allValues.filter(v => {
            return v.value_id === Number(id)
       })[0]
       newValue.important = !newValue.important
       dispatch(updateValue(newValue))
    }
    return (
        <div>
            {console.log(state.allValues)}
            <select value={value} onChange={e => setValue(e.target.value)}>
                {state.allValues.map(value => {
                    return <option key={value.value_id} value={value.value_id}>{value.value}</option>
                })}
            </select>
            <button onClick={() => toggleImportant(value)}>Add as important</button>
        </div>
    )
}

export default AllValues