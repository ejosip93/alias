import {ADD_TEAM, REMOVE_TEAM, DELETE_GAME} from "../constants/action-types";

const initialState = {
    teams: [],
    game: 1
}

function rootReducer(state = initialState, action){
    if(action.type === ADD_TEAM) {
        return Object.assign({}, state, {
            teams: state.teams.concat(action.payload)
        });
    }
    else if(action.type === REMOVE_TEAM) {
        return Object.assign({}, state,{teams: ( state.teams.filter((team) => {
            return team.name !== action.payload
                })
            )}
    )}
    else if(action.type === DELETE_GAME) {
        return Object.assign({}, state,{game:{}}
        )}

    return state;
}

export default rootReducer;
