import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addGoal, fetchGoals, FetchValues, deleteGoal } from '../actions/Register'

const CurrentGoals = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.register)

    const top3Values = state.userValues.filter(v => v.top3 === true)
    const [newGoal, setNewGoal] = useState({
        name: "",
        v_id: top3Values[0].value_id
    })

    useEffect(() => {
        dispatch(fetchGoals())
    }, [dispatch])

    const addNewGoal = () => {
        dispatch(addGoal({ value_id: newGoal.v_id, project: newGoal.name }))
    }
    return (
        <div>
            <h2>CURRENT GOALS</h2>
            <input value={newGoal.name} onChange={e => setNewGoal({...newGoal, name: e.target.value})}/>
            <select name="value1" value={newGoal.v_id} onChange={e => setNewGoal({...newGoal, v_id: e.target.value})}>
                    {top3Values.map(v => {
                        return <option key={v.value_id} value={v.value_id}>{v.value}</option>
                    })}
            </select>
            <button onClick={() => addNewGoal()}>Add Goal</button>

            {state.currentGoals.map(goal => {
                return <div key={goal.project_id}>
                            <p onClick={() => dispatch(deleteGoal(goal.project_id))}>x</p>
                            <h3>{goal.project}</h3>
                        </div>
            })}
        </div>
    )
}

export default CurrentGoals