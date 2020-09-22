import React from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

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

    return (
        <Box component="div" style={{background: "#233", height: "100vh"}}>
            <Navbar/>
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography
                        variant="h5"
                        style={{
                            color: "tomato",
                            textAlign: "center",
                            textTransform: "uppercase"
                        }}>Свяжитесь со мной</Typography>

                    <InputField
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
                    <Button
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