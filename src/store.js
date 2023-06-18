//@ts-check
/**
 * @typedef {Object} State
 * @prop {number} value
 */
export const state = {
    value: 0,
  };
  
  /**
   * @callback GetState
   * @returns {State} 
   */
  
  /**
   * @return {number} 
   */
  export const getState = () => {
    return state.value;
  };
  