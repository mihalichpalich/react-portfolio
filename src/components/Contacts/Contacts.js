import React from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import emailjs from 'emailjs-com';

import Navbar from "../Navbar/Navbar";
import styles from "./styles";

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato"
        },
        "& label": {
            color: "tan"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan"
            },
            "&:hover fieldset": {
                borderColor: "tan"
            },
            "&.Mui-focused fieldset": {
                borderColor: "tan"
            }
        }
    }
})(TextField);

const useStyles = makeStyles(styles);

const Contacts = () => {
    const classes = useStyles();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'gmail',
            'template_f2kp40i',
            e.target, 'user_fq3vgvM5FZs4ucxDshJ44'
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <Box component="div" style={{background: "#233", height: "100vh"}}>
            <Navbar/>
            <Grid container justify="center">
                <Box component="form" className={classes.form} onSubmit={sendEmail}>
                    <Typography
                        variant="h5"
                        style={{
                            textAlign: "center",
                            color: "tomato",
                            fontSize: "16px",
                            textTransform: "uppercase"
                        }}>Оставьте свои контактные данные,</Typography>
                    <Typography
                        variant="h5"
                        style={{
                            textAlign: "center",
                            fontSize: "16px",
                            color: "tomato",
                            textTransform: "uppercase"
                        }}>и я обязательно свяжусь с вами</Typography>

                    <InputField
                        name="user_name"
                        fullWidth
                        label="Имя"
                        variant="outlined"
                        margin="dense"
                        size="medium"
                        inputProps={{
                            style: {
                                color: "white"
                            }
                        }}
                    />
                    <br/>
                    <InputField
                        name="email"
                        fullWidth
                        label="Email"
                        variant="outlined"
                        margin="dense"
                        size="medium"
                        inputProps={{
                            style: {
                                color: "white"
                            }
                        }}
                    />
                    <br/>
                    <InputField
                        name="company_name"
                        fullWidth
                        label="Название компании"
                        variant="outlined"
                        margin="dense"
                        size="medium"
                        inputProps={{
                            style: {
                                color: "white"
                            }
                        }}
                    />
                    <br/>
                    <InputField
                        name="message"
                        fullWidth
                        label="Ваше сообщение"
                        variant="outlined"
                        margin="dense"
                        size="medium"
                        inputProps={{
                            style: {
                                color: "white"
                            }
                        }}
                    />
                    <Button
                        type="submit"
                        className={classes.button}
                        variant="outlined"
                        fullWidth
                        endIcon={<SendIcon/>}
                    >Отправить</Button>
                </Box>
            </Grid>
        </Box>
    );
};

export default Contacts;