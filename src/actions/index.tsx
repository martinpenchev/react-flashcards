export enum ActionTypes {
    UPLOAD_CONTENT = 'UPLOAD_CONTENT',
    START_QUIZ = 'START_QUIZ',
    QUIT_QUIZ = 'QUIT_QUIZ',
    SHOW_BACK_SIDE = 'SHOW_BACK_SIDE',
    HIDE_BACK_SIDE = 'HIDE_BACK_SIDE',
    START_TIMER = 'START_TIMER',
    STOP_TIMER = 'STOP_TIMER',
    ADD_POINTS = 'ADD_POINTS',
    NEW_QUIZ = 'NEW_QUIZ',
}

export const UploadContent = (list: Array<object>) => ({
    type: ActionTypes.UPLOAD_CONTENT,
    payload: list
});

export const StartQuiz = () => ({
    type: ActionTypes.START_QUIZ,
    payload: true
});

export const QuitQuiz = () => ({
    type: ActionTypes.QUIT_QUIZ,
    payload: false
});

export const ShowBackSide = () => ({
    type: ActionTypes.SHOW_BACK_SIDE,
    payload: true
});

export const HideBackSide = () => ({
    type: ActionTypes.HIDE_BACK_SIDE,
    payload: false
});

export const StartTimer = () => ({
    type: ActionTypes.START_TIMER,
    payload: true
});

export const StopTimer = () => ({
    type: ActionTypes.STOP_TIMER,
    payload: false
});

export const AddPoints = (points: number) => ({
    type: ActionTypes.ADD_POINTS,
    payload: points
});

export const newQuiz = () => ({
    type: ActionTypes.NEW_QUIZ
});
