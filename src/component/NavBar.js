import {
    Toolbar,
    makeStyles, AppBar,
} from '@material-ui/core';
import clsx from 'clsx';
import Cart from "./cart";

const NavBar = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            zIndex: theme.zIndex.drawer + 100,
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            font: 'Montserrat',
            color: '#000000',
            fontWeight: 500,
            borderTop: '1px solid #000000',
            borderBottom: '1px solid #000000',
            paddingLeft: 10,
            backgroundColor: '#FFFFFF',
            // position: 'fixed',
            // top:0,
            // left:0,
        },
        toolbar: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: 150,
            height: 58,
            color: '#FFFFFF',
            backgroundColor: '#000000',
        },
    }))
    const classes = useStyles();
    return (
        <AppBar className={clsx(classes.root)}
        >
            <h2>Fülhous Shop</h2>
            <Toolbar className={classes.toolbar}>
                <Cart/>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar