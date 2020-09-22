import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import {GitHub, LinkedIn} from "@material-ui/icons";

import styles from "./styles";

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigation-root": {
            minWidth: 0,
            maxWidth: 250
        },
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fontSize: "1.8rem"
            }
        }
    }
});

const Footer = () => {
    const classes = useStyles();

    return (
        <BottomNavigation width="auto" style={{background: "#222"}}>
            <BottomNavigationAction style={{padding: 0}} icon={<GitHub/>} className={classes.root}/>
            <BottomNavigationAction style={{padding: 0}} icon={<LinkedIn/>} className={classes.root}/>
        </BottomNavigation>
    );
};

export default Footer;