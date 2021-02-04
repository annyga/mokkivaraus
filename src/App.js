import Container from '@material-ui/core/Container';
import {Typography} from '@material-ui/core';
import Mokkivalinta from "./components/Mokkivalinta";
import Liuku from "./components/Liuku";
import Siivous from "./components/Siivous";
import Varaaja from "./components/Varaaja";
import Loppusumma from "./components/Loppusumma";
import Nappi from "./components/Nappi";
import Nimi from "./components/Nimi";
import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({
  temps : { flexGrow : 1
  },

});

function App() {

  const tyylit = useStyles();

  
  const [mokki, setMokki] = useState(180); //for Mokkivalinta
  const [vuorokaudet, setVuorokaudet] = useState(1); //for Liuku
  const[siivottu, setSiivottu] = useState(true);//for Siivous
  const [selectedDate, handleDateChange] = useState(new Date());   //for Varaaja
  const [nimi, setNimi] = useState("");   //for Varaaja
  const [summa, setSumma] = useState(0);   //for all
  const [open, setOpen] = useState(false);   //for Loppusumma


  function handleMokkiChange (e){
    setMokki(e.target.value);
  }

  function handleLiukuChange(val){
    setVuorokaudet(val);  
  }



  function muuta() {
    setSiivottu(!siivottu);
  }



  function nameChange(e){
      setNimi(e.target.value);
  }



  function addAll() {
    let sum = mokki * vuorokaudet;

    if(siivottu){
      sum += 100;
    }

    setSumma(sum);
  }



  function handleOpen(){
    setOpen(!open);
  }


  useEffect( () => {
    addAll();
  }, [mokki, vuorokaudet, siivottu]);



  return (
      <Container>
      <div className={tyylit.temps}>
        <Typography variant="h3" align='center'>Lomamökkivaraus</Typography>
        <Grid container justify="center" alignItems="center">                    
          <Grid item xs={12} >
            <Mokkivalinta 
              mokki={mokki} 
              setMokki={setMokki} 
              handleMokkiChange={handleMokkiChange}/>
          </Grid>
          <Grid item xs={9}>
            <Liuku  
              handleLiukuChange={handleLiukuChange}
              tyylit={tyylit}
              />
          </Grid>
          <Grid item xs={12}>
            <Nimi nameChange={nameChange}/>
          </Grid>
          <Grid item xs={12} >
            <Varaaja 
              selectedDate={selectedDate} 
              handleDateChange={handleDateChange} 
              />
          </Grid>
          <Grid item xs={4}>
            <Siivous 
              siivottu={siivottu} 
              muuta={muuta}/>
          </Grid>
          <Grid item xs={12} >
            <Nappi handleOpen={handleOpen}/>
          </Grid>
          <Typography>Kokonaissumma: {summa}€</Typography>
          <Loppusumma 
            open={open} 
            handleOpen={handleOpen} 
            summa={summa} 
            nimi={nimi} 
            selectedDate={selectedDate}/>
          </Grid>
      </div>
      </Container>
    
  );
}

export default App;
