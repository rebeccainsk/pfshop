import {Drawer, IconButton, makeStyles} from "@material-ui/core";
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {fetchCart, deleteCartItem} from "../actions/cart";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 616,
        maxWidth: '100%',
        position: 'absolute',
        top: '8vh',
        height: '100%',
    },
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'start',
        position: 'relative',
        width: '96%',
        marginLeft:'2%',
        borderBottom: '1px solid #bbb',
        marginTop: 5,
    },
    summary: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        minHeight: '20vh',
        fontSize: 36,
        fontWeight: 500,
    },
    bottom: {
        position: 'fixed',
        bottom: 10,
        right: 40,
        [theme.breakpoints.down('sm')]: {
            right: -60,
        },
    },
    checkout: {
        backgroundColor: 'black',
        color: 'white',
        width: 546,
        height: 91,
        fontWeight: 500,
        fontSize: 24,
    },
    middle: {
        width: '50%',
    },
    right: {
        width: '15%',
    },
    closeIcon: {
        position: 'absolute',
        top: 20,
        right: 10,
    },

}));
const Cart = ({cart, fetchCart, deleteCartItem}) => {
    const classes = useStyles();
    // const [value, setValue] = useState('');
    const [isOpen, setOpen] = useState(false);

    useEffect(() => fetchCart(), [fetchCart])

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCart = (index) => {
        deleteCartItem(index)
    }

    const subTotal = cart.cartArray?.reduce((sum, value) => sum + parseInt(value.price) * parseInt(value.quantity), 0)

    const renderCartItem =
        cart.cartArray?.map((value, index) => {
            return <tr key={index} className={classes.root}>
                <td>
                    <img src={value.value["imageURLs"][0]} alt="desk pic" style={{width: "201px", height: "201px"}}/>
                </td>
                <td className={classes.middle}>
                    <p>
                        Name: {value.value["vendorProductName"]}
                    </p>
                    <p>
                        Brand: {value.value["vendorName"]}
                    </p>
                    <p>
                        Price: ${parseInt(value.value["tradePrice"]) * value.quantity}
                    </p>
                    <p>index: {value.index}, quantity: {value.quantity}</p>
                </td>
                <td className={classes.right}>
                    <CloseIcon className={classes.closeIcon} onClick={() => handleCart(value.index)}/>
                </td>



            </tr>
        })

    return (
        <>
            <IconButton
                color="inherit"
                onClick={handleOpen}
            >
                Cart
            </IconButton>
            <Drawer
                anchor="right"
                classes={{paper: classes.drawer}}
                ModalProps={{BackdropProps: {invisible: true}}}
                onClose={handleClose}
                open={isOpen}
                variant="temporary"
            >
                {cart.cartArray === [] ? <></> : <table><tbody>{renderCartItem}</tbody></table>}
                <div className={classes.summary}>
                    <div>Total:</div>
                    <div>${subTotal}</div>
                </div>
                <br/>
                <br/>
                <div className={classes.bottom}>
                    <button className={classes.checkout}>CHECKOUT</button>
                </div>
            </Drawer>

        </>
    )
}
const mapStateToProps = (state = null) => {
    return {
        cart: state.cart
    }

}
export default connect(mapStateToProps, {fetchCart, deleteCartItem})(Cart)