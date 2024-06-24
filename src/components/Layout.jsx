// import { makeStyles } from "@mui/material"



// import classes from "./"
import clases from "./page.module.css"
// const useStyles = makeStyles({
//     page: {
//         with: "100%",
//         backgroud: "f9f9f9"
//     }
// })
const Layout = ({ children }) => {

    // const classes = useStyles()


    return (
        <div>

            <div
                className={clases.layout}
            >
                {children}
            </div>
        </div>
    )
}

export default Layout