import React, {useState} from 'react';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from "@material-ui/core";
import {ArrowBack, AssignmentInd, Home, Apps, ContactMail} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import MobileRightMenuSlider from "@material-ui/core/Drawer";

import avatar from '../assets/avatar.png';

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: 'tan'
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Главная"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Резюме"
    },
    {
        listIcon: <Apps/>,
        listText: "Портфолио"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Контакты"
    }
];

const Navbar = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => {
        return () => {
            setState({...state, [slider]: open})
        }
    };

    const sideList = slider => (
        <Box
            className={classes.menuSliderContainer}
            component="div"
            onClick={toggleSlider(slider, false)}
        >
            <Avatar className={classes.avatar} src={avatar} alt="Михаил Павлов"/>

            <Divider/>

            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key}>
                        <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>

                        <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{background: "#222222"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider('right', true)}>
                            <ArrowBack style={{color: "tomato"}}/>
                        </IconButton>

                        <Typography variant="h5" style={{color: 'tan'}}>Portfolio</Typography>

                        <MobileRightMenuSlider
                            anchor="right"
                            open={state.right}
                            onClose={toggleSlider("right", false)}
                        >
                            {sideList("right")}
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Navbar;