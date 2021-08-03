import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {TextField} from "@material-ui/core";
import {JwtServices} from "../services/JwtServices";
import cookies from "react-cookies";
import {TOKEN_NAME} from "../constant";

export default function LoginDialog(props) {
    let username;
    let password;
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Please login</DialogTitle>
                <DialogContent>
                        <TextField label="Username" fullWidth onChange = {event => username = event.target.value}/>
                        <TextField label="Password" fullWidth type = "password" onChange = {event => password = event.target.value}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={submitLogin} color="primary" autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

    function submitLogin() {
        JwtServices.getToken(username,password) // return了一个Promise
            .then(response =>{
                const token = response.data.id_token;
                cookies.save(TOKEN_NAME, token);
                window.location.reload();
            }) // If successful, do something. HTTP status 2xx
            .catch(error => console.log(String(error)));// If failed, do something
    }
}
