import {useState, useRef} from "react";
import {StyledForm, Input, Button} from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        const contentTrimmed = newTaskContent.trim();
            if (contentTrimmed !== "") {
                addNewTask(contentTrimmed);
            };
        
        setNewTaskContent("");
        inputRef.current.focus();
    };
    
    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input 
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