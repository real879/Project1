import {AppError} from "../types"
export enum GeneralStateName{
    CREATED,
    SHOWING,
    RESET,
    ERROR
}
export interface GeneralState{
    state:GeneralStateName
    error?:AppError

}
export const GENERAL_CREATED = "GENERAL_CREATED";
export const GENERAL_SHOWING = "GENERAL_SHOWING";
export const GENERAL_RESET = "GENERAL_RESET";
export const GENERAL_ERROR = "GENERAL_ERROR";

 interface General_CreatedAction{

    type: typeof GENERAL_CREATED
    state: GeneralStateName.CREATED 
       
}
 interface General_ShowingAction{

    type: typeof GENERAL_SHOWING
    state: GeneralStateName.SHOWING 
       
}
 interface General_ResetAction{

    type: typeof GENERAL_RESET
    state: GeneralStateName.RESET 
       
}
 interface General_ErrorAction{

    type: typeof GENERAL_ERROR
    state: GeneralStateName.ERROR 
    error:AppError
}

export type GeneralActionType=General_CreatedAction |General_ShowingAction |General_ResetAction |General_ErrorAction;


