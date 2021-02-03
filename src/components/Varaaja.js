import {TextField} from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { useState } from "react";
import DateFnsUtils from '@date-io/date-fns';
import format from "date-fns/format";
import fiLocale from "date-fns/locale/fi";


class LocalizedUtils extends DateFnsUtils {
    getDatePickerHeaderText(date) {
      return format(date, "d MMM yyyy", { locale: this.locale });
    }
  }

function Varaaja (props) {



    return(
        <>
        <TextField id="standard-basic"
            label="Nimi"
            onChange={(e) => {props.nameChange(e)}} />
        <MuiPickersUtilsProvider utils={LocalizedUtils} locale={fiLocale}>
        <DatePicker 
            value={props.selectedDate} 
            onChange={props.handleDateChange}
            disablePast/>
        </MuiPickersUtilsProvider>
        </>
    )
}

export default Varaaja;