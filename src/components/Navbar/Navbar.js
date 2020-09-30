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
import {AssignmentInd, Home, Apps, ContactMail} from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';
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
        listText: "Опыт и достижения",
        listPath: "/experience_and_achievements"
    },
    {
        listIcon: <Apps/>,
        listText: "Портфолио",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Связаться со мной",
        listPath: "/contact"
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
                    <ListItem button key={key} component={Link} to={process.env.PUBLIC_URL + lsItem.listPath}>
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
                            <MenuIcon style={{marginRight: 10, color: "tomato"}}/>
                            <Typography variant="h5" style={{color: 'tan'}}>Меню</Typography>
                        </IconButton>

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