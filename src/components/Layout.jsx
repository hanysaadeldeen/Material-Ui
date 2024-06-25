

// import clases from "./page.module.css"
import { Drawer, Typography } from "@mui/material"

import { makeStyles } from '@mui/styles';



const drewWidth = 240
const useStyles = makeStyles(() => ({
    drawer: {
        width: drewWidth
    },
    drawerPaper: {
        width: drewWidth
    },
    page: {
        width: "100%",
        background: "#f9f9f9f"
    },
    flex: {
        display: "flex"
    },
    margin: {
        margin: "20px"
    }
}));
const Layout = ({ children }) => {

    const classes = useStyles()


    return (
        <div
            className={classes.flex}
        >
            <Drawer
                classes={{ paper: classes.drawerPaper }}
                variant="permanent"
                anchor="left"
                className={classes.drawer}
            >
                <div className={classes.margin}>
                    <Typography variant="h5">
                        Hany Mohamed
                    </Typography>
                </div>
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