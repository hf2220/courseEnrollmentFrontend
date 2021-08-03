import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import LoginDialog from "./LoginDialog";
import {TOKEN_NAME} from "../constant";
import cookies from "react-cookies";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function MenuBar() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Course Enroll System
                    </Typography>
                    <Button color="inherit" component={Link} to="/">All Courses</Button>
                    <Button color="inherit" component={Link} to="/enrolled_courses">Enrolled Courses</Button>
                    {renderLogButton()}
              </Toolbar>
            </AppBar>
            <LoginDialog open={open} handleClose={closeLoginDialog}/>
        </div>
    );

    function closeLoginDialog() {
        setOpen(false);
    }

    function handleLoginClick() {
        setOpen(true);
    }

    function handleLogOutClick() {
        cookies.remove(TOKEN_NAME);
        window.location.reload();
    }

    function renderLogButton() {
        const token = cookies.load(TOKEN_NAME);
        if (!token) {
            return <Button color="inherit" onClick={handleLoginClick}>Login</Button>
        } else {
            return <Button color="inherit" onClick={handleLogOutClick}>LogOut</Button>
        }
    }
}
