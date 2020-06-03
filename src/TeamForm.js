import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PlayerNameField from "./PlayerNameField";
import {useDispatch} from "react-redux";

function TeamForm() {
    const [teamPlayers, setTeamPlayers] = useState({player1:'', player2:''});
    const [playerCount, setPlayerCount] = useState(2);
    const [team, setTeam] = useState({name: ''});
    const dispatch = useDispatch();


    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if(e.target.name === "name") {
            setTeam({
                ...team,
                [name]: value,
            });
        }
        else{
            setTeamPlayers({
                ...teamPlayers,
                [name]: value,
            })
        }
    };


    const players = [];
    for(let i = 1; i <= playerCount; i++ ){
        players.push(<PlayerNameField val={teamPlayers[Object.getOwnPropertyNames(teamPlayers)[i-1]]} num={'player' + i} key={i} changeHandler={changeHandler}/>);
    };

    const addTeam = (e) => {
        e.preventDefault();
        let playerList = [];
        Object.keys(teamPlayers).forEach(e => {
            playerList.push(teamPlayers[e])
        });
        dispatch({type: 'ADD_TEAM', payload: {name: team.name,
                players: playerList,
            }});
        setTeam({name: ''});
        setTeamPlayers({player1:'', player2:''});
        setPlayerCount(2);
    };

    return(
        <Form onSubmit = {addTeam}>
            <Form.Group>
                <div className="d-flex flex-row">
                    <div className="text-primary p-2 col-lg-6 col-sm-6">
                        <Form.Label className="font-weight">Enter team name</Form.Label>
                        <Form.Control type="text" placeholder="Team name" name="name" onChange={changeHandler} value={team.name}/>
                    </div>
                    <div className="p-2 align-self-end ml-auto offset-md-4 col-md-2 col-sm-6">
                        <Button className="ml-auto success" onClick={() => setPlayerCount(playerCount + 1)}><span>Add Player</span></Button>
                    </div>
                </div>
            </Form.Group>
                {players}
            <Form.Group className="p-5">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form.Group>
        </Form>
    );
}

export default TeamForm;
