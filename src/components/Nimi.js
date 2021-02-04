import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {TextField} from '@material-ui/core'


const useStyles = makeStyles( { 
    comps : {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "20px"
    }
})


function Nimi(props) {

    const tyyli = useStyles();

    return(
        <Box className={tyyli.comps}>
            <TextField 
                label="Nimi"
                onChange={(e) => {props.nameChange(e)}}
                />
        </Box>
    )

}

export default Nimi;