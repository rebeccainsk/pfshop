import NavBar from "./NavBar";
import MainPage from "./MainPage";
import Landing from "./Landing";
import {makeStyles} from "@material-ui/core";

const Home = () => {
    const useStyles = makeStyles((theme) => ({
        container: {
            margin: '0 10px',
        },

    }))
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <>
                <NavBar />
                <Landing />
            </>
            <MainPage />
        </div>
    )
}

export default Home