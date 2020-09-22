import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core";

import Navbar from "../Navbar/Navbar";
import styles from "./styles";
import project1 from '../../assets/images/html-css-javascript-lg.jpg'

const useStyles = makeStyles(styles);

const Portfolio = () => {
    const classes = useStyles();

    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar/>

            <Grid container justify="center">
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Проект 1" height="140" image={project1}/>

                            <CardContent>
                                <Typography gutterBottom variant="h5">Проект 1</Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquid, aut culpa dolore doloremque excepturi illo illum impedit ipsa libero minima molestiae numquam perferendis sint totam vero! Repudiandae, veniam!</Typography>
                            </CardContent>
                        </CardActionArea>

                        <CardActions>
                            <Button size="small" color="primary">Share</Button>
                            <Button size="small" color="primary">Live Demo</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Portfolio;