import { combineReducers } from 'redux';
import { ActionTypes } from '../actions';

type ACTIONTYPE_LIST = {type: string, payload: Array<object>}
type ACTIONTYPE_BOOL = {type: string, payload: Boolean}
type ACTIONTYPE_NUMBER = {type: string, payload: number}

function shuffleArray(arr: Array<any>) {
    let array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

const FlashcardReducer = (state: Array<object> = [], action: ACTIONTYPE_LIST) => {
    const { type, payload } = action;

    switch(type) {
        case ActionTypes.UPLOAD_CONTENT:
            return [...payload];
        case ActionTypes.NEW_QUIZ:
            return [...shuffleArray(state)];
        default:
            return state;
    }
}

const QuizReducer = (state: Boolean = false, action: ACTIONTYPE_BOOL) => {
    const { type, payload } = action;

    switch(type) {
        case ActionTypes.START_QUIZ:
            return payload;
        case ActionTypes.QUIT_QUIZ:
            return payload;
        default:
            return state;
    }
}

const ToggleBackSideReducer = (state: Boolean = false, action: ACTIONTYPE_BOOL) => {
    const { type, payload } = action;

    switch(type) {
        case ActionTypes.SHOW_BACK_SIDE:
            return payload;
        case ActionTypes.HIDE_BACK_SIDE:
            return payload;
        case ActionTypes.NEW_QUIZ:
            return false;
        default:
            return state;
    }
}

const ToggleTimerReducer = (state: Boolean = false, action: ACTIONTYPE_BOOL) => {
    const { type, payload } = action;

    switch(type) {
        case ActionTypes.START_TIMER:
            return payload;
        case ActionTypes.STOP_TIMER:
            return payload;
        case ActionTypes.NEW_QUIZ:
            return true;
        default:
            return state;
    }
}

const PointsReducer = (state: number = 0, action: ACTIONTYPE_NUMBER) => {
    const { type, payload } = action;

    switch(type) {
        case ActionTypes.ADD_POINTS:
            return state + payload;
        case ActionTypes.NEW_QUIZ:
            return 0;
        default:
            return state;
    }
}

export default combineReducers({
    cards: FlashcardReducer,
    quizMode: QuizReducer,
    showBack: ToggleBackSideReducer,
    timer: ToggleTimerReducer,
    points: PointsReducer,
});