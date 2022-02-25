import {delay, takeLatest, takeEvery, call, put, select} from "redux-saga/effects";
import {getExampleTasks} from "./getExampleTasks";
import {saveTasksInLocalStorage} from "../tasksLocalStorage";
import {fetchExampleTasks, setTasks, selectTasks} from "./tasksSlice"; 

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks); 
        yield put(setTasks(exampleTasks));
    } catch(error){
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