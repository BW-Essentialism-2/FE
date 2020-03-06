import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CurrentGoals = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.register)


    const [newGoal, setNewGoal] = useState({
        name: ""
    })
    return (
        <div>
            <h2>CURRENT GOALS</h2>
            <input value={newGoal} onChange={e => setNewGoal({...newGoal, name: e.target.value})}/>
        </div>
    )
}

export default CurrentGoals