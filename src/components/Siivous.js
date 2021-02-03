import {FormControlLabel, Checkbox} from "@material-ui/core";
import { useState } from "react";

function Siivous (props) {



    return(
        <FormControlLabel
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
    )
}

export default Siivous;