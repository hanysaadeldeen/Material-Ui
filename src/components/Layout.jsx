

import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"

import { makeStyles } from '@mui/styles';
import { Link, useLocation } from "react-router-dom";



const drewWidth = 240
const useStyles = makeStyles((theme) => {
    return {
        drawer: {
            width: drewWidth
        },
        drawerPaper: {
            width: drewWidth
        },
        page: {
            width: "100%",
            background: "#f9f9f9f",
            padding: theme.spacing(2)
        },
        root: {
            display: "flex"
        },
        title: {
            padding: theme.spacing(3)
        },
        link: {
            textDecoration: "none"
        },
        active: {
            background: "#f3f3f3",
        }
    }
});
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
                {children}
            </div>
        </div>
    )
}

export default Layout