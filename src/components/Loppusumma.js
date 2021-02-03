 import {Dialog, DialogTitle, Button} from '@material-ui/core';
 

  function Loppusumma(props){

    console.log(props.selectedDate);

    let apuAika = props.selectedDate.toLocaleDateString("fi-FI");
    return(
      <Dialog open={props.open}>
        <DialogTitle>Summa: {props.summa}€ Varaaja: {props.nimi} Saapumispäivämäärä: {apuAika}  </DialogTitle>
        <Button variant="contained" color="primary" onClick={props.handleOpen}>Ok</Button>
      </Dialog>
    )
  }

  export default Loppusumma;