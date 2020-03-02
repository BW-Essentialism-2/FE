import React from 'react';
import { Select } from 'antd';
import { Input } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

const initialText = {
  why: ""
};

const Top3 = ({ selectedValues }) => {
  console.log(selectedValues);
  const [whyText, setWhyText] = useState(initialText);

  const handleSubmit = e => {
    e.preventDefault();
    useRequest(`/values/${whyText.id}`, put, true, whyText);
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <Select defaultValue="CHOOSE" style={{ width: 120 }} onChange={handleChange}>
          {state.values.map(value => (
            <Option key={value.id}>{value}</Option>
              ))}      
        </Select>
        <TextArea rows={4} onChange={e =>
                    setWhyText({ ...whyText, why: e.target.value })
                  }
                  value={colorToEdit.color}/>
      </form>  
    </div>
  )};

  export default Top3;