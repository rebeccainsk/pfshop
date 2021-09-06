import React, {useEffect} from "react";
import {Grid, makeStyles} from "@material-ui/core";
import "../mainpage.scss"
import {actAddToCart} from "../actions/cart";
import {connect} from "react-redux";
import {actFetchProducts} from "../actions/home";

const MainPage = ({home, actFetchProducts, actAddToCart}) => {

    const useStyles = makeStyles((theme) => ({

        root: {
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: '10px',
            border: '1px solid #000000',
            paddingBottom: 50,
            paddingTop: 50,
        },
        bottom: {
            fontSize: '24px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
        },

    }))
    const classes = useStyles();

    const itemQuantity = 1

    useEffect(()=>actFetchProducts(),[actFetchProducts])

    const handleClick = (index, value, price, quantity) => {
        let deskObj = {index, value, price, quantity}
        actAddToCart(deskObj)
    }

    const renderDesks =
        home.homeArray?.map((value, index) => {
            return <Grid item lg={4} className='container' key={index}>
                <img src={value["imageURLs"][0]} alt="some desk" className='imgBase'/>

                <div className='overlay'>
                    <>
                        <span>{value["vendorProductName"]}</span>
                        <p>{value["vendorName"]}</p>
                    </>

                    <div className="bottom">
                        <div onClick={() => handleClick(index, value, value["tradePrice"], itemQuantity)}>+ Add to Cart</div>
                        <span>${value["tradePrice"]}</span>
                    </div>
                </div>

            </Grid>
        })

    return (
        <>
            <Grid container className={classes.root}>
                {renderDesks}
            </Grid>

        </>
    )
}

const mapStateToProps = (state = null) => {
    // console.log(state);
    return {
        home: state.home,
        cart: state.cart
    }

}

export default connect(mapStateToProps, {actFetchProducts, actAddToCart})(MainPage)