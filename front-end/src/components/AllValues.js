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
       let newValue = state.userValues.filter(v => {
            return v.value_id === Number(id)
       })[0]
       newValue.important = !newValue.important
       dispatch(updateValue(newValue))
    }
    return (
        <div>
            <select value={value} onChange={e => setValue(e.target.value)}>
                {state.userValues.map(value => {
                    return <option key={value.value_id} value={value.value_id}>{value.value}</option>
                })}
            </select>
            <button onClick={() => toggleImportant(value)}>Add as important</button>
            <h2>Your Important Values</h2>
            {state.userValues.map(v => v.important === true ? <h4 key={v.value_id} onClick={() => toggleImportant(v.value_id)}>{v.value}</h4> : null)}
        </div>
    )
}

export default AllValues