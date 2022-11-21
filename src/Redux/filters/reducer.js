import initialState from "./initialState";
import { STATUSCHANGE, COLORCHANGED } from "./actionType"
const filterReducer = (state = initialState, action) => {
    switch (action.type) {

        case STATUSCHANGE:
            return {
                ...state,
                status: action.payload
            }
        case COLORCHANGED:
            const { color, changeType } = action.payload;
            switch (changeType) {
                case "added":
                    return {
                        ...state,
                        color: [
                            ...state.color,
                            color
                        ]
                    }
                case "remove":
                    return {
                        ...state,
                        color: state.color.filter(exColor => exColor !== color)

                    }

                default:
                    return state
                        ;
            }

        default:
            return state;

    }
}


export default filterReducer