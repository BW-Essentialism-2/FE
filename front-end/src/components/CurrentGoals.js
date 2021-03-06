import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addGoal, fetchGoals, FetchValues, deleteGoal } from '../actions/Register'

const CurrentGoals = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.register)
    
    const top3Values = state.userValues.filter(v => v.top3 === true)
    const [newGoal, setNewGoal] = useState({
        name: "",
        v_id: 0
    })
    
    useEffect(() => {
        dispatch(fetchGoals())
        dispatch(FetchValues())
    }, [dispatch])
    
    const addNewGoal = () => {
        dispatch(addGoal({ value_id: newGoal.v_id, project: newGoal.name }))
    }
    return (
        <div>
            <h2>CURRENT GOALS</h2>
            <input value={newGoal.name} onChange={e => setNewGoal({...newGoal, name: e.target.value})}/>
            <select name="value1" value={newGoal.v_id} onChange={e => setNewGoal({...newGoal, v_id: e.target.value})}>
                <option selected value> -- select an option -- </option>
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
            <Link to="/protected">
              <button>All Set</button>
            </Link>
        </div>
    )
}

export default CurrentGoals