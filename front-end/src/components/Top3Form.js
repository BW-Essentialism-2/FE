import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateValue, FetchValues } from '../actions/Register'
import { useHistory } from 'react-router-dom'
const Top3 = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.register)
    const importantValue = state.userValues.filter(v => v.important === true)
    const [top3Values, setTop3Values] = useState({
        value1: {id: 0, comment: ""},
        value2: {id: 0, comment: ""},
        value3: {id: 0, comment: ""}
    })

    useEffect(() => {
        dispatch(FetchValues())
    }, [dispatch])


    const history = useHistory()

    const handleSelectChange = e => setTop3Values({...top3Values, [e.target.name]: {...top3Values[e.target.name], id: e.target.value}})
    const handleCommentChange = e => setTop3Values({...top3Values, [e.target.name]: {...top3Values[e.target.name], comment: e.target.value}})
    
    const saveTop3 = () => {
       let value1 = state.userValues.filter(v => v.value_id === Number(top3Values.value1.id))[0]
       value1.top3 = true
       value1.comment = top3Values.value1.comment
        dispatch(updateValue(value1))
       let value2 = state.userValues.filter(v => v.value_id === Number(top3Values.value2.id))[0]
       value2.top3 = true
       value2.comment = top3Values.value2.comment
        dispatch(updateValue(value2))
       let value3 = state.userValues.filter(v => v.value_id === Number(top3Values.value3.id))[0]
       value3.top3 = true
       value3.comment = top3Values.value3.comment
        dispatch(updateValue(value3))
        history.push('/register/goals')
    }
    return (
        <div>
            
            <h2>Pick your top 3 values and give a reason why that value is important to you</h2>
            <div>
                <select name="value1" value={top3Values.value1.id} onChange={e => handleSelectChange(e)}>
                    <option selected value> -- select an option -- </option>
                    {importantValue.map(v => {
                        return <option key={v.value_id} value={v.value_id}>{v.value}</option>
                    })}
                </select>
                <textarea name="value1" value={top3Values.value1.comment} onChange={e => handleCommentChange(e)}/>
            </div>
            <div>
                <select name="value2" value={top3Values.value2.id} onChange={e => handleSelectChange(e)}>
                    <option selected value> -- select an option -- </option>
                    {importantValue.map(v => {
                        return <option key={v.value_id} value={v.value_id}>{v.value}</option>
                    })}
                </select>
                <textarea name="value2" value={top3Values.value2.comment} onChange={e => handleCommentChange(e)}/>
            </div>
            <div>
                <select name="value3" value={top3Values.value3.id} onChange={e => handleSelectChange(e)}>
                    <option selected value> -- select an option -- </option>
                    {importantValue.map(v => {
                        return <option key={v.value_id} value={v.value_id}>{v.value}</option>
                    })}
                </select>
                <textarea name="value3" value={top3Values.value3.comment} onChange={e => handleCommentChange(e)}/>
            </div>
            <button onClick={() => saveTop3()}>Save</button>
        </div>
    )
}
export default Top3