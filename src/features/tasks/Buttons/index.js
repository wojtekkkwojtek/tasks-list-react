import React from "react";
import {Wrapper, Button} from "./styled";

const Buttons = ({tasks, hideDone, toggleHideDone, setAllDone}) => (

    <Wrapper>
        {tasks.length > 0 && (
            <>
                <Button 
                    onClick={toggleHideDone} 
                >
                    {hideDone ? "Pokaż " : "Ukryj "} 
                        zrobione
                </Button>
                
                <Button 
                    onClick={setAllDone} 
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </Button>
            </>
        )}
    </Wrapper>
);

export default Buttons;