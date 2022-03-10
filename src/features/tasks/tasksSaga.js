import {delay, 
    takeLatest, 
    takeEvery, 
    call, 
    put, 
    select
} from "redux-saga/effects";
import {getExampleTasks} from "./getExampleTasks";
import {saveTasksInLocalStorage} from "./tasksLocalStorage";
import {fetchExampleTasks, 
    fetchExampleTasksSuccess, 
    fetchExampleTasksError, 
    selectTasks
} from "./tasksSlice"; 

function* fetchExampleTasksHandler() {
    try {
        yield delay(3000);
        const exampleTasks = yield call(getExampleTasks); 
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch(error){
        yield put(fetchExampleTasksError());
        yield call(alert, "Something went wrong :/");
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}