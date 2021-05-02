import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width:300
    }
})

function valueText(value) {
    return `${value}`
}

export default function MoodSlider() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Slider
                defaultValue={5}
                getAriaValueText={valueText}
                aria-labelledby="mood-slider"
                step={1}
                min={1}
                max={10}
                valueLabelDisplay="auto"
            />
        </div>
    )
}