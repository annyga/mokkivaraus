import {FormControlLabel, Checkbox} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

function Siivous (props) {

  const useStyles = makeStyles( { 
    comps : {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
})


const tyyli = useStyles();

    return(
      <Box className={tyyli.comps}>
        <FormControlLabel
          className={tyyli.comps}
          control={
            <Checkbox
              checked={props.siivottu}
              onChange={props.muuta}
              name="checkedB"
              color="primary"
            />
          }
          label="Siivous"
        />
      </Box>
    )
}

export default Siivous;