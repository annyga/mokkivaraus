
import Slider from '@material-ui/core/Slider';
import {Typography} from '@material-ui/core';
import {useState} from 'react';


function Liuku (props) {

    

    function valuetext(value) {
        return `${value}°C`;
      }


      
    return(
      <>
      <Typography>
        Vuorokaudet
      </Typography>
        <Slider
          onChange={(e,val) => {props.handleLiukuChange(val)}}
          defaultValue={5}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={14}
        />
      </>
    )
}

export default Liuku;