/**
 * @flow
 */


const initialState = {testState:'testStateVal'};

export default ( state: Object = initialState, action: Object ) => {
    switch(action.type){
        default: return state;
    }
};