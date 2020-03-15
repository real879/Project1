import { GeneralState, GeneralStateName, GeneralActionType, GENERAL_CREATED, GENERAL_ERROR, GENERAL_SHOWING, GENERAL_RESET } from "./types";

const initialState: GeneralState={
    state:GeneralStateName.CREATED,
    error:null
}

export function generalReducer(state=initialState,action:GeneralActionType):GeneralState{
        switch (action.type) {
            case GENERAL_CREATED:
                return {
                    ...state,
                    state:GeneralStateName.CREATED
                }
            case GENERAL_SHOWING:
                return {
                    ...state,
                    state:GeneralStateName.SHOWING
                }
            case GENERAL_RESET:
                 return {
                    ...state,
                     state:GeneralStateName.RESET
                }
            case GENERAL_ERROR:
                return{
                    ...state,
                    state:GeneralStateName.ERROR,
                    error:action.error
                }    
            default:
                return state;
        }
}










