

import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { AppBar, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';
import { format } from "date-fns";
import { Link, useLocation } from "react-router-dom";



const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    page: {
        width: "100%",
        background: "#f9f9f9", // corrected typo
        padding: theme.spacing(2),
    },
    root: {
        display: "flex",
    },
    title: {
        padding: theme.spacing(3),
    },
    link: {
        textDecoration: "none",
    },
    active: {
        background: "#f3f3f3",
    },
    appbar: {
        width: `calc(100% - ${drawerWidth}px) !important`,
    },
    toolbar: theme.mixins.toolbar,
    date: {
        flexGrow: "1"
    },
    avatar: {
        marginLeft: theme.spacing(2)
    }
}));

const Layout = ({ children }) => {

    const classes = useStyles()
    const location = useLocation()
    const list = [
        {
            value: "My Notes",
            path: "/",
            icon: <SubjectOutlined color="secondary" />
        },
        {
            value: "Create Note",
            path: "/create",
            icon: <AddCircleOutlineOutlined color="secondary" />
        },
    ]

    return (
        <div
            className={classes.root}
        >
            <AppBar
                className={classes.appbar}
                elevation={0}>
                <Toolbar>
                    <Typography className={classes.date}>
                        TODAY IS THE : {format(new Date(), `do MMMM Y `)}
                    </Typography>
                    <Typography>
                        Hany Mohamed
                    </Typography>
                    <Avatar className={classes.avatar} src="../assets/conv.png" />
                </Toolbar>
            </AppBar>
            <Drawer
                classes={{ paper: classes.drawerPaper }}
                variant="permanent"
                anchor="left"
                className={classes.drawer}
            >
                <div className={classes.title}>
                    <Typography variant="h5">
                        Hany Mohamed
                    </Typography>
                </div>

                <List>
                    {
                        list.map(note => {
                            return (
                                <Link className={classes.link} to={note.path} key={note.value} >
                                    <ListItem
                                        className={location.pathname === note.path ? classes.active : null}
                                    >
                                        <ListItemIcon
                                        >{note.icon}</ListItemIcon>
                                        <ListItemText color="secondary" primary={note.value} />
                                    </ListItem>
                                </Link>
                            )
                        })
                    }
                </List>

            </Drawer>
            <div
                className={classes.page}
            >

                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}

export default Layout