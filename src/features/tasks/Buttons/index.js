import React from "react";
import {Wrapper, Button} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {selectTasks, toggleHideDone, setAllDone} from "../tasksSlice";

const Buttons = () => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();
    
    return (
        <Wrapper>
            {tasks.length > 0 && (
                <>
                    <Button 
                        onClick={() => dispatch(toggleHideDone())} 
                    >
                        {hideDone ? "Pokaż " : "Ukryj "} 
                            zrobione
                    </Button>
                
                    <Button 
                        onClick={() => dispatch(setAllDone())} 
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Wrapper>
    );
};

export default Buttons;