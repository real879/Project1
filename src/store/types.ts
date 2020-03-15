import { GeneralState } from "./GeneralStore/types";

export interface AppState{
    general?: GeneralState
}
export interface AppProps {
    title:string
    version:number
    
}
export interface AppError{
    type:string
    msg:string
    action:string
}