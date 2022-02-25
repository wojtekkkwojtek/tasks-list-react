import React from "react";
import {tasksSaga} from "../tasksSaga";
import {Wrapper, Button} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {
    selectTasks, 
    toggleHideDone, 
    setAllDone, 
    selectHideDone,
    selectAreTasksEmpty,
    selectIsEveryTaskDone,
    fetchExampleTasks,
} from "../tasksSlice";

const Buttons = () => {
    const selectAreTasksEmpty = useSelector(selectAreTasksEmpty);
    const selectIsEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
    
    const dispatch = useDispatch();
    
    return (
        <Wrapper>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
            
            {!selectAreTasksEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż " : "Ukryj "} 
                            zrobione
                    </Button>
                
                    <Button 
                        onClick={() => dispatch(setAllDone())} 
                        disabled={selectIsEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Wrapper>
    );
};

export default Buttons;