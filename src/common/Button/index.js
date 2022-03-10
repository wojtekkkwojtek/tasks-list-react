import {StyledButton} from "../../features/tasks/TasksPage/Buttons/styled";
import {useDispatch, useSelector} from "react-redux";
import {fetchExampleTasks, selectLoading} from "../../../src/features/tasks/tasksSlice";

const Button = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <StyledButton
            disabled={loading}
            onClick={
                () => dispatch(fetchExampleTasks())
            }
        >
            {
                loading
                    ? "Ładowanie..."
                    : "Pobierz przykładowe zadania"
            }
        </StyledButton>
    );
};

export default Button;