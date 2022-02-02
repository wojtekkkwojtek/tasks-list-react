import {useState} from "react";
import {StyledForm, Input, Button} from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        const contentTrimmed = newTaskContent.trim();
            if (contentTrimmed !== "") {
                addNewTask(contentTrimmed);
            };
        
        setNewTaskContent("");
    };
    
    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input 
                value={newTaskContent}  
                placeholder="Rzecz do zrobienia" 
                onChange={(event) => setNewTaskContent(event.target.value)} 
            />
            
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;