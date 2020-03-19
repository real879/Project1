import { AppError } from "../types"

//STATE
export enum GeneralStateName {
    CREATED = "GENERAL_CREATED",
    SHOWING = "GENERAL_SHOWING",
    RESET   = "GENERAL_RESET",
    ERROR   = "GENERAL_ERROR"
}
export interface GeneralState {
    state  : GeneralStateName
    error?: AppError
}

//ACTIONS
export enum GeneralActionName{
    CREATE = "GENERAL_CREATE",
    SHOW   = "GENERAL_SHOW",
    RESET  = "GENERAL_RESET",
    ERROR  = "GENERAL_ERROR"
}
export interface GeneralCreateAction {
    type : GeneralActionName.CREATE
}
export interface GeneralShowAction {
    type : GeneralActionName.SHOW
}
export interface GeneralResetAction {
    type : GeneralActionName.RESET 
}
export interface GeneralErrorAction {
    type  : GeneralActionName.ERROR 
    error : AppError
}
export type GeneralAction = 
    | GeneralCreateAction
    | GeneralShowAction
    | GeneralResetAction
    | GeneralErrorAction;