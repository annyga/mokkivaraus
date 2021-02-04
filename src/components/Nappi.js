import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {Button} from '@material-ui/core'


const useStyles = makeStyles( { 
    comps : {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "20px"
    }
})


function Nappi(props) {

    const tyyli = useStyles();

    return(
        <Box className={tyyli.comps}>
            <Button 
            variant="contained" 
            color="primary" 
            onClick={props.handleOpen}
            >
            Varaa Mökki
        </Button>
      </Box>
    )
}

export default Nappi;