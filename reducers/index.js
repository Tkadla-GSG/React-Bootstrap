import { COUNT_ADDED } from '../actions';

const initialState = {
    count: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNT_ADDED:
            return ({ 
                ...state,
                count: state.count + action.payload,
            });
        default:
            return state;
    }
};

export default reducer;