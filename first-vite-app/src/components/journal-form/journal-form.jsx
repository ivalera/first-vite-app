import { useEffect, useReducer } from 'react';
import Button from '../button/button';
import styles from "./journal-form.module.css";
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './journal-form.state';
import { useRef } from 'react';



function JournalForm({ onSubmit }) {
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
    const { isValid, isFormReadyToSubmit, values } = formState;
    const titleRef = useRef();
    const dateRef = useRef();
    const postRef = useRef();

    const focusError = (isValid) => {
        switch(true){
            case !isValid.title:
                titleRef.current.focus();
                break;
            case !isValid.date:
                dateRef.current.focus();
                break;
            case !isValid.post:
                postRef.current.focus();
                break;
        }
        
    };

    useEffect(() => {
        let timerId;
        if(!isValid.date || !isValid.post || !isValid.title){
            focusError(isValid);
            timerId = setTimeout(() => {
                dispatchForm({ type: 'RESET_VALIDITY' });
            }, 2000);
        }
        return () => {
            clearTimeout(timerId);
        };
    }, [isValid]);

    useEffect(() => {
        if(isFormReadyToSubmit){
            onSubmit(values);
            dispatchForm({ type: 'CLEAR' });
        }
    }, [isFormReadyToSubmit, values, onSubmit]);

    const onChange = (e) => {
        dispatchForm({ type: 'SET_VALUE', payload: { [e.target.name]: e.target.value } });
    }

    const addJournalItem = (e) => {
        e.preventDefault();
        
        dispatchForm({ type: 'SUBMIT' })
    };

    return (
        <form className={styles['journal-form']} onSubmit={addJournalItem}>
            <div>
                <input 
                    type="text"
                    name='title'
                    ref={titleRef}
                    value={values.title}
                    className={cn(styles['input-title'], {[styles['invalid']]: !isValid.title})}
                    onChange={onChange}
                />
            </div>
            <div className={styles['form-row']}>
                <label htmlFor="date" className={styles['form-label']}>
                    <img src="/calendar.svg" alt="Иконка календаря" />
                    <span>Дата</span>
                </label>
                <input 
                    type="date" 
                    name="date"
                    ref={dateRef}
                    value={values.date} 
                    id="date"
                    className={cn(styles['input'], {[styles['invalid']]: !isValid.date})}
                    onChange={onChange}
                />
            </div>
            <div className={styles['form-row']}>
                <label htmlFor="tag" className={styles['form-label']}>
                    <img src="/folder.svg" alt="Иконка папкм" />
                    <span>Метки</span>
                </label>
                <input 
                    type="text" 
                    name='tag' 
                    value={values.tag}  
                    id='tag' 
                    className={styles['input']} 
                    onChange={onChange}/>
            </div>
            <textarea 
                name="post"
                ref={postRef}
                value={values.post}  
                id="" 
                cols="30" 
                rows="10"
                className={cn(styles['input'], {[styles['invalid']]: !isValid.post})}
                onChange={onChange}
            >
            </textarea>
            <Button text="Сохранить" />
        </form>
  )
}

export default JournalForm;
