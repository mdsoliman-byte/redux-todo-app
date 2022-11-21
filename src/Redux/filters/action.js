import { COLORCHANGED, STATUSCHANGE } from "./actionType"



export const colorChanged = (color, changeType) => {
    return {
        type: COLORCHANGED,
        payload: {
            color, changeType
        }
    }
}
export const statusChange = (status) => {
    return {
        type: STATUSCHANGE,
        payload: status
    }
}