import {makeStyles} from "@material-ui/core"

const Landing = () => {
    const useStyles = makeStyles((theme) => ({
            image: {
                width: '100%',
                height: '65vh',
                marginBottom: '-5px',
                objectFit: 'cover',
            },
            cta: {
                backgroundColor: '#003941',
                border: '1px solid #000000',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems:'center',
                height: '35vh',
            },
            title: {
                fontWeight: '400',
                font: 'Crimson',
                color: '#FFFFFF',
                fontSize: '96px',
                [theme.breakpoints.down('sm')]: {
                    fontSize: '80px',
                },
            },
            button: {
                backgroundColor: '#000000',
                color:'#FFFFFF',
                width: '150px',
                height: '58px',
                padding: '1vh 0',
                marginBottom: '12vh',
            },
        }
    ))
    const classes = useStyles()
    return (
        <>
            <img alt="furniture chair" src="/photo.jpg" className={classes.image}></img>
            {/*<img alt="furniture chair" src={PIC_URL} className={classes.img}></img>*/}
            <div className={classes.cta}>
                <h2 className={classes.title}>Patio Furniture</h2>
                <button className={classes.button}>SHOP</button>
            </div>


        </>
    )
}

export default Landing