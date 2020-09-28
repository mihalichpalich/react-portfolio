import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import {GitHub, LinkedIn} from "@material-ui/icons";

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
            <BottomNavigationAction
                icon={<GitHub/>}
                href="https://github.com/mihalichpalich"
                target="_blank"
                className={classes.root}
            />
            <BottomNavigationAction
                icon={<LinkedIn/>}
                href="https://www.linkedin.com/in/iammichaelpavlov/"
                target="_blank"
                className={classes.root}
            />
        </BottomNavigation>
    );
};

export default Footer;