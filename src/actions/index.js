import {ADD_TEAM} from "../constants/action-types";

export function addTeam(payload) {
    return {type: ADD_TEAM, payload}
};
