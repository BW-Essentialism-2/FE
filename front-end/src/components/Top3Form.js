import React, { useState } from 'react';
import { Select } from 'antd';
import { Input } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

const initialComment = {
  comment: ""
};

const Top3Form = ({ selectedValues }) => {
  console.log(selectedValues);
  const [commentText, setCommentText] = useState(initialComment);
  const [values, setValues] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    useRequest(`/api/user/:id/${values}/${commentText.id}`, put, true, commentText);
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <Select defaultValue="CHOOSE" style={{ width: 120 }}>
          {values.map(value => (
            <Option key={value.id}>{value}</Option>
              ))}      
        </Select>
        <TextArea rows={4} onChange={e =>
                    setCommentText({ ...commentText, comment: e.target.value })
                  }
                  value={commentText.comment}/>
      </form>  
    </div>
  )};

  export default Top3Form;