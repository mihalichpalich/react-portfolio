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
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import MobileRightMenuSlider from "@material-ui/core/Drawer";

import avatar from '../../assets/avatar.png';
import styles from './styles';
import Footer from "../Footer/Footer";

const useStyles = makeStyles(styles);

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Главная",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Резюме",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Портфолио",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Контакты",
        listPath: "/contacts"
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
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
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
                            <Footer/>
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
};

export default Navbar;