import { AppError } from "../types";
import { GeneralActionName,
    GeneralCreateAction,
    GeneralShowAction,
    GeneralResetAction,
    GeneralErrorAction,
} from "./types";

export const generalCreate = () : GeneralCreateAction => ({
    type : GeneralActionName.CREATE
});

export const generalShow = () : GeneralShowAction => ({
    type : GeneralActionName.SHOW
});

export const generalReset = () : GeneralResetAction => ({
    type : GeneralActionName.RESET
});

export const generalError = (
    error : AppError
) : GeneralErrorAction => ({
    type  : GeneralActionName.ERROR,
    error : error
});

