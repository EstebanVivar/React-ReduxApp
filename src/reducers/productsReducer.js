/* eslint-disable import/no-anonymous-default-export */
//Each reducer has its own state

const initialState = {
    products: [],
    error: null,
    loading: false
}
export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}