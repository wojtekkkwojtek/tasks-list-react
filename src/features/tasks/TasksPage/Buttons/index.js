import React from "react";
import {Wrapper, StyledButton} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {
    toggleHideDone, 
    setAllDone, 
    selectHideDone,
    selectAreTasksEmpty,
    selectIsEveryTaskDone,
} from "../../tasksSlice";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();
    
    return (
        <Wrapper>
            {!areTasksEmpty && (
                <>
                    <StyledButton onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż " : "Ukryj "} 
                            zrobione
                    </StyledButton>
                    <StyledButton 
                        onClick={() => dispatch(setAllDone())} 
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </StyledButton>
                </>
            )}
        </Wrapper>
    );
};

export default Buttons;