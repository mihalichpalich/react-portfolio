export default theme => ({
    typedContainer: {
        width: "100vw",
        position: "absolute",
        top: "50%",
        left: "50%",
        textAlign: "center",
        zIndex: 1,
        transform: "translate(-50%, -50%)"
    },
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        marginBottom: "3rem",
        color: "tan"
    }
})