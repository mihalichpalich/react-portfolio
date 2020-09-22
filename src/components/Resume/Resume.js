import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Box} from "@material-ui/core";

import Navbar from "../Navbar";
import styles from './styles';

const useStyles = makeStyles(styles);

const Resume = () => {
    const classes = useStyles();

    return (
        <>
            <Navbar/>
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>Опыт работы и достижения</Typography>

                <Box component="div" className={classes.timeLine}>
                    <Typography
                    variant="h2"
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >2013</Typography>

                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>Веб-дизайн</Typography>
                        <Typography
                            variant="body1"
                            align="center"
                            style={{color: "tomato"}}
                        >Название компании</Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "tan"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolor dolorem explicabo fugiat itaque nobis odit officiis quaerat quisquam tenetur?</Typography>
                    </Box>

                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >2013</Typography>

                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>Веб-дизайн</Typography>
                        <Typography
                            variant="body1"
                            align="center"
                            style={{color: "tomato"}}
                        >Название компании</Typography>
                        <Typography variant="subtitle1" align="center" style={{color: "tan"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolor dolorem explicabo fugiat itaque nobis odit officiis quaerat quisquam tenetur?</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Resume;