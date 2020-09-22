import React from 'react';
import {Typography, Avatar, Grid, Box} from "@material-ui/core";
import Typed from 'react-typed';
import {makeStyles} from "@material-ui/core/styles";

import avatar from '../assets/avatar.png';

const useStyles = makeStyles(theme => ({
    typedContainer: {
        width: "100vw",
        position: "absolute",
        top: "50%",
        left: "50%",
        textAlign: "center",
        zIndex: 1,
        transform: "translate(-50%, -50%)"
    },
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        marginBottom: "3rem",
        color: "tan"
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Михаил Павлов"/>
            </Grid>

            <Typography variant="h4" className={classes.title}>
                <Typed strings={["Михаил Павлов"]} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography variant="h5" className={classes.subtitle}>
                <Typed strings={["Front-end разработка", "Стек MERN"]} typeSpeed={40} backSpeed={60} loop/>
            </Typography>
        </Box>
    );
};

export default Header;