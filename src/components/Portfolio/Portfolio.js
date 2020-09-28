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
import rnTutorApp from '../../assets/images/react-native-tutor-app.jpg';
import rnFlightsApp from '../../assets/images/react-native-flights-app.png';
import reactChat from '../../assets/images/react-chat.jpg';
import reactResiziveGrid from '../../assets/images/react_resizive_grid.png';
import reactApolloCourse from '../../assets/images/react-apollo-course-frontend.jpg';
import reactSimpleChat from '../../assets/images/react_chat.jpg';

const useStyles = makeStyles(styles);

const Portfolio = () => {
    const classes = useStyles();

    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar/>

            <Grid container>
                <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Проект 1" height="140" image={rnTutorApp}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Мобильное приложение ведения учета активности учеников для репетиторов
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    В процессе разработки данного приложения применялись технологии: React Native,
                                    Node.js, Express и MongoDB/Mongoose
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                size="small"
                                color="primary"
                                href="https://github.com/mihalichpalich/react-native-tutor-app"
                                target="_blank"
                            >Github</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Проект 1" height="140" image={rnFlightsApp}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Мобильное приложение для загрузки данных о полетах
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    В процессе разработки данного приложения применялись технологии: React
                                    Native, Redux и Redux-Saga
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                size="small"
                                color="primary"
                                href="https://github.com/mihalichpalich/liis_task"
                                target="_blank"
                            >Github</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Проект 1" height="140" image={reactChat}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Мессенджер
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    В процессе разработки данного приложения применялись технологии: React,
                                    Node.js, Typescript, Express, MongoDB/Mongoose и websockets
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                size="small"
                                color="primary"
                                href="https://github.com/mihalichpalich/react_njs_chat"
                                target="_blank"
                            >Github</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Проект 1" height="140" image={reactApolloCourse}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    CRUD-приложение для создания и вывода списков режиссеров и
                                    фильмов
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    Выполнено с помощью технологий: React.js, Node.js, GraphQL и Apollo
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                size="small"
                                color="primary"
                                href="https://github.com/mihalichpalich/react-apollo-course-frontend"
                                target="_blank"
                            >Github</Button>
                            <Button
                                size="small"
                                color="primary"
                                href="https://mihalichpalich.github.io/react-apollo-course-frontend"
                                target="_blank"
                            >Демо</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Проект 1" height="140" image={reactSimpleChat}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Реализация нескольких чатов на одной вкладке
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    Выполнено с помощью React и Redux
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                size="small"
                                color="primary"
                                href="https://github.com/mihalichpalich/react_chat"
                                target="_blank"
                            >Github</Button>
                            <Button
                                size="small"
                                color="primary"
                                href="https://mihalichpalich.github.io/react_chat"
                                target="_blank"
                            >Демо</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={8} md={4}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img" alt="Проект 1" height="140" image={reactResiziveGrid}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Grid Layout с изменяющимися
                                    размерами с помощью draggable-элементов
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    Выполнено с помощью библиотеки React
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                size="small"
                                color="primary"
                                href="https://github.com/mihalichpalich/react_resizive_grid"
                                target="_blank"
                            >Github</Button>
                            <Button
                                size="small"
                                color="primary"
                                href="https://mihalichpalich.github.io/react_resizive_grid"
                                target="_blank"
                            >Демо</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Portfolio;