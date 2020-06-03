import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import Toast from "react-bootstrap/Toast";
import words from "./images/words.png";
import play from "./images/play.png"
import {Link} from "react-router-dom";
function TeamList() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(state);
    const handleClose = (teamName) => {
        dispatch({type: 'REMOVE_TEAM', payload:
                teamName
            });
    }

    return(<div className="justify-content-center row">
            {state.teams.length > 0 ?
                <Fragment>
                    <div className="row col-9 justify-content-center">
                        {
                        state.teams.map(team => {
                        return (
                            <Toast onClose={() => handleClose(team.name)} key={team.name} className="col-8">
                                <Toast.Header>
                                    <strong className="mr-auto">{team.name}</strong>
                                </Toast.Header>
                                <Toast.Body>
                                    {team.players.map((player, index) => {
                                        return (<li key={index}>{player}</li>);
                                    })}
                                </Toast.Body>
                            </Toast>
                        );
                    })}
                    </div>
                    <div className="col-3">
                        {state.teams.length > 1 && <div><Link to="/game"><img className="imageSize" src={play}/></Link></div>}
                    </div>
                </Fragment>
                :

                <img src={words}/>

            }</div>
    );
}

export default TeamList;
