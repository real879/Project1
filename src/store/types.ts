import { GeneralState } from "./GeneralStore/types";

export interface AppProps {
    title   : string
    version : number
}
export interface AppState {
    general?: GeneralState
}
export interface AppError {
    action : string
    msg    : string
}