import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Box} from "@material-ui/core";

import Navbar from "../Navbar/Navbar";
import styles from './styles';

const useStyles = makeStyles(styles);

const ExpAndAchs = () => {
    const classes = useStyles();

    return (
        <>
            <Navbar/>
            <Box component="header" className={classes.mainContainer}>
                <Typography
                    variant="h4"
                    align="center"
                    className={classes.heading}
                >Опыт работы и достижения</Typography>

                <Box component="div" className={classes.timeLine}>
                    <>
                        <Typography
                            variant="h2"
                            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                        >сентябрь 2020</Typography>
                        <Box component="div" className={classes.timeLineItem}>
                            <Typography
                                variant="h5"
                                align="center"
                                className={classes.subHeading}
                            >
                                Мобильное приложение для загрузки данных о полетах
                            </Typography>
                            <Typography
                                variant="body1"
                                align="center"
                                style={{color: "tomato"}}
                            >ЛИИС Инженерные решения</Typography>
                            <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
                                Тестовое задание на должность Front-end разработчика
                            </Typography>
                        </Box>
                    </>

                    <>
                        <Typography
                            variant="h2"
                            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                        >август 2020</Typography>
                        <Box component="div" className={classes.timeLineItem}>
                            <Typography
                                variant="h5"
                                align="center"
                                className={classes.subHeading}
                            >
                                CRUD-приложение для создания и вывода списков режиссеров и
                                фильмов
                            </Typography>
                            <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
                                Приложение выполнено в целях обучения разработке full-stack приложения с помощью
                                технологии Apollo
                            </Typography>
                        </Box>
                    </>

                    <>
                        <Typography
                            variant="h2"
                            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                        >июль 2020</Typography>
                        <Box component="div" className={classes.timeLineItem}>
                            <Typography
                                variant="h5"
                                align="center"
                                className={classes.subHeading}
                            >
                                Получение степени бакалавра по специальности «Информатика и
                                вычислительная техника»
                            </Typography>
                            <Typography
                                variant="body1"
                                align="center"
                                style={{color: "tomato"}}
                            >СПб ГУАП</Typography>
                        </Box>
                    </>

                    <>
                        <Typography
                            variant="h2"
                            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                        >июнь 2020</Typography>
                        <Box component="div" className={classes.timeLineItem}>
                            <Typography
                                variant="h5"
                                align="center"
                                className={classes.subHeading}
                            >
                                Разработка мобильного приложения ведения учета активности учеников для
                                репетиторов
                            </Typography>
                            <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
                                Приложение выполнено в качестве выпускной работы бакалавра, которая была защищена
                                на оценку "отлично"
                            </Typography>
                        </Box>
                    </>

                    <>
                        <Typography
                            variant="h2"
                            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                        >март 2020</Typography>
                        <Box component="div" className={classes.timeLineItem}>
                            <Typography
                                variant="h5"
                                align="center"
                                className={classes.subHeading}
                            >Разработка мессенджера</Typography>
                            <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
                                Изучение стека технологий для full-stack разработчика
                            </Typography>
                        </Box>
                    </>

                    <>
                        <Typography
                            variant="h2"
                            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                        >2019-2020</Typography>
                        <Box component="div" className={classes.timeLineItem}>
                            <Typography
                                variant="h5"
                                align="center"
                                className={classes.subHeading}
                            >Тестировщик-стажер</Typography>
                            <Typography
                                variant="body1"
                                align="center"
                                style={{color: "tomato"}}
                            >Pony ORM</Typography>
                            <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
                                Проверка работы миграций из запросов на языке Python в запросы на языке SQL для
                                СУБД SQLite, MySQL, PostgreSQL и OracleDB и выполнение отчетности об
                                ошибках через систему контроля версий.
                            </Typography>
                        </Box>
                    </>

                    <>
                        <Typography
                            variant="h2"
                            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                        >2019</Typography>
                        <Box component="div" className={classes.timeLineItem}>
                            <Typography
                                variant="h5"
                                align="center"
                                className={classes.subHeading}
                            >Первые работы на React по заказу IT-компании</Typography>
                            <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
                                Реализация нескольких чатов на одной вкладке и Grid Layout с изменяющимися
                                размерами с помощью draggable-элементов
                            </Typography>
                        </Box>
                    </>

                    <>
                        <Typography
                            variant="h2"
                            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                        >2016</Typography>
                        <Box component="div" className={classes.timeLineItem}>
                            <Typography
                                variant="h5"
                                align="center"
                                className={classes.subHeading}
                            >Курсы HTML, CSS, JavaScript</Typography>
                            <Typography
                                variant="body1"
                                align="center"
                                style={{color: "tomato"}}
                            >Epic Skills</Typography>
                            <Typography variant="subtitle1" align="center" style={{color: "tan"}}>
                                Начало изучения библиотеки React
                            </Typography>
                        </Box>
                    </>
                </Box>
            </Box>
        </>
    );
};

export default ExpAndAchs;