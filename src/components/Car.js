import React from 'react'
import cars from '../cars.json'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    container: {
        padding: "50px"
    },
    root: {
        display: 'flex',
        justifyContent: 'flexStart',
        flexWrap: 'wrap',
    },
}));

const Car = (props) => {

    const classes = useStyles();

    const id = parseInt(props.match.params.id)
    const specificCar = cars.filter(car => car.id === id);
    // console.log(typeof(id))
    // console.log(props.match)
    // console.log(specificCar)
    return (
        <Container maxWidth='sm' style={{marginTop: "50px"}}>
            <Paper className={classes.container}>
                <h1>{specificCar[0].Name}</h1>
                <div className={classes.root}>
                    <Chip label={`id: ${specificCar[0].id}`}/>
                    <Chip label={`name: ${specificCar[0].Name}`}/>
                    <Chip label={`Miles_per_Gallon: ${specificCar[0].Miles_per_Gallon}`}/>
                    <Chip label={`Cylinders: ${specificCar[0].Cylinders}`}/>
                    <Chip label={`Displacement: ${specificCar[0].Displacement}`}/>
                    <Chip label={`Horsepower: ${specificCar[0].Horsepower}`}/>
                    <Chip label={`Weight_in_lbs: ${specificCar[0].Weight_in_lbs}`}/>
                    <Chip label={`Acceleration: ${specificCar[0].Acceleration}`}/>
                    <Chip label={`Year: ${specificCar[0].Year}`}/>
                    <Chip label={`Origin: ${specificCar[0].Origin}`}/>
                </div>
            </Paper>
        </Container>
    )
}

export default Car