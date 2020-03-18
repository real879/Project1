import { GENERAL_CREATED, GENERAL_SHOWING, GENERAL_RESET, GENERAL_ERROR,
    GeneralActionType, GeneralStateName} from "./types";
import { AppError } from "../types";

export function generalCreate():GeneralActionType {
    return {
        type  : GENERAL_CREATED,
        state : GeneralStateName.CREATED
    }
}

export function generalShow():GeneralActionType {
    return {
        type  : GENERAL_SHOWING,
        state : GeneralStateName.SHOWING
    }
}

export function generalReset():GeneralActionType {
    return {
        type  : GENERAL_RESET,
        state : GeneralStateName.RESET
    }
}

export function generalError(error:AppError):GeneralActionType {
    return {
        type  : GENERAL_ERROR,
        state : GeneralStateName.ERROR,
        error : error
    }
}

