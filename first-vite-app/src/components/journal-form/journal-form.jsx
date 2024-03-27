import { useState } from 'react';
import Button from '../button/button';
import "./journal-form.css";

function JournalForm() {
    const [inputData, setInputData] = useState('');
    const [state, setState] = useState({age:31})

    const inputChange = (event) => {
      setInputData(event.target.value);
    };

    const addJournalItem = (e) => {
        e.preventDefault();
        state.age += 1;
        setState({...state});
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        console.log(formProps);
    };

    return (
        <form className='journal-form' onSubmit={addJournalItem}>
            {state.age}
            <input type="text" name='title'/>
            <input type="date" name='date'/>
            <input type="text" name='tag' value={inputData} onChange={inputChange}/>
            <textarea name="post" id="" cols="30" rows="10"></textarea>
            <Button text="Сохранить" onClick={() => {console.log('click')}}/>
        </form>
  )
}

export default JournalForm;
