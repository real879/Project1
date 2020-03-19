import {
    GeneralState,  GeneralStateName,
    GeneralAction, GeneralActionName
} from "./types";

const initialState : GeneralState = {
    state : GeneralStateName.CREATED,
    error : null
};

export function generalReducer(
    state  : GeneralState = initialState,
    action : GeneralAction
) : GeneralState {
    switch (action.type){
        case GeneralActionName.CREATE:
            return {...state,
                state: GeneralStateName.CREATED
            }
        case GeneralActionName.SHOW:
            return {...state,
                state: GeneralStateName.SHOWING
            }
        case GeneralActionName.RESET:
            return {...state,
                state: GeneralStateName.RESET
            }
        case GeneralActionName.ERROR:
            return {...state,
                state: GeneralStateName.ERROR,
                error: action.error
            }
        default:
            return state;
    }
}