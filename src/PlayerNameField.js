import React from "react";
import Form from "react-bootstrap/Form";

function PlayerNameField(props){
    return (
        <Form.Group className="small text-info p-2 col-sm-6 ">
            <Form.Label>Enter player name</Form.Label>
            <Form.Control onChange={props.changeHandler} name={props.num} className="form-control-sm" type="text" value={props.val} placeholder="Player name"/>
        </Form.Group>
    );
}

export default PlayerNameField;
