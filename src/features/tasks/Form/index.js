import {useState, useRef} from "react";
import {StyledForm, Input, Button} from "./styled";
import {useDispatch} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";
import {addTask} from "../tasksSlice";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const onFormSubmit = (event) => {
        event.preventDefault();
        const contentTrimmed = newTaskContent.trim();
            
        if (!contentTrimmed) {
            return;
        }
        
        dispatch(addTask({
            content: contentTrimmed,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
        inputRef.current.focus();
    };
    
    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input 
                autoFocus
                ref={inputRef}
                value={newTaskContent}  
                placeholder="Rzecz do zrobienia" 
                onChange={(event) => setNewTaskContent(event.target.value)} 
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;