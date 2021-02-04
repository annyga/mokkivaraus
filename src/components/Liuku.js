
import Slider from '@material-ui/core/Slider';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


function Liuku (props) {

  const useStyles = makeStyles( { 
    comps : {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
})

    function valuetext(value) {
        return `${value}°C`;
      }

      const tyyli = useStyles();
      
    return(
      <Box className={tyyli.comps}>
        <Typography>
          Vuorokaudet
        </Typography>
          <Slider           
            onChange={(e,val) => {props.handleLiukuChange(val)}}
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={14}
            className={tyyli.comps}
          />
      </Box>
    )
}

export default Liuku;