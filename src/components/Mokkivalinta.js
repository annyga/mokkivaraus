import {InputLabel, Select, MenuItem, FormControl} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles( { 
    comps : {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "20px"
    }
})

function Mokkivalinta(props){

    const tyyli = useStyles();

    return(
      <Box className={tyyli.comps}>
        <FormControl>
          <InputLabel id="label">Mökki</InputLabel>
          <Select labelId="label" id="select" value={props.mokki} onChange={props.handleMokkiChange}>
            <MenuItem value={180}>Taipale 180€/vuorokausi</MenuItem>
            <MenuItem value={150}>Levi 150€/vuorokausi</MenuItem>
            <MenuItem value={230}>Ylläs 230€/vuorokausi</MenuItem>
            <MenuItem value={105}>Ruka 105€/vuorokausi</MenuItem>
          </Select>
        </FormControl>
        </Box>
    )
} 

export default Mokkivalinta;