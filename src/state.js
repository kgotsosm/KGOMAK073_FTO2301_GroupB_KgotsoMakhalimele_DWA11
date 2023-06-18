//@ts-check
/**
 * @typedef {Object} state
 * @prop {number} value
 */
export const state = {
    value : 0,
}

/**
 * @callback getState
 * @returns {state} 
 */

/**
 * @return {number} 
 */
export const getState = () =>{
    return state.value
}
