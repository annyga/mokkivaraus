
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import format from "date-fns/format";
import fiLocale from "date-fns/locale/fi";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles( { 
    comps : {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin : "20px"
    }
})

class LocalizedUtils extends DateFnsUtils {
    getDatePickerHeaderText(date) {
      return format(date, "d MMM yyyy", { locale: this.locale });
    }
  }

function Varaaja (props) {

    const tyyli = useStyles();

    return(
        <Box className={tyyli.comps}>
            <MuiPickersUtilsProvider utils={LocalizedUtils} locale={fiLocale}>
            <DatePicker
                label="Saapumispäivä" 
                value={props.selectedDate} 
                onChange={props.handleDateChange}
                disablePast/>
            </MuiPickersUtilsProvider>
        </Box>
    )
}

export default Varaaja;