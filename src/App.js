import Container from '@material-ui/core/Container';
import {Button, Typography, Dialog, DialogTitle} from '@material-ui/core';
import Mokkivalinta from "./components/Mokkivalinta";
import Liuku from "./components/Liuku";
import Siivous from "./components/Siivous";
import Varaaja from "./components/Varaaja";
import Loppusumma from "./components/Loppusumma";
import {useState, useEffect} from 'react';



function App() {

  //for Mokkivalinta
  const [mokki, setMokki] = useState(0);

  function handleMokkiChange (e){
    setMokki(e.target.value);
  }

  //for Liuku
  const [vuorokaudet, setVuorokaudet] = useState(1);

  function handleLiukuChange(val){
    setVuorokaudet(val);  
  }

  //for Siivous
  const[siivottu, setSiivottu] = useState(true);

  function muuta() {
    setSiivottu(!siivottu);
  }

  //for Varaaja
  const [selectedDate, handleDateChange] = useState(new Date());
  const [nimi, setNimi] = useState("");

  function nameChange(e){
      setNimi(e.target.value);
  }

  //for all
  const [summa, setSumma] = useState(0);

  function addAll() {
    let sum = mokki * vuorokaudet;

    if(siivottu){
      sum += 100;
    }

    setSumma(sum);
  }

  //for Loppusumma

  const [open, setOpen] = useState(false);

  function handleOpen(){
    setOpen(!open);
  }


  useEffect( () => {
    addAll();
  }, [mokki, vuorokaudet, siivottu]);



  return (
    <Container>
      <Typography variant="h3" align='center'>Lomamökkivaraus</Typography>
      <Mokkivalinta 
        mokki={mokki} 
        setMokki={setMokki} 
        handleMokkiChange={handleMokkiChange}/>
      <Liuku  
        handleLiukuChange={handleLiukuChange}/>
      <Siivous 
        siivottu={siivottu} 
        muuta={muuta}/>
      <Varaaja 
        selectedDate={selectedDate} 
        handleDateChange={handleDateChange} 
        nameChange={nameChange}/>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleOpen}>
        Varaa Mökki
      </Button>
      <Typography>Kokonaissumma: {summa}€</Typography>
      <Loppusumma 
        open={open} 
        handleOpen={handleOpen} 
        summa={summa} 
        nimi={nimi} 
        selectedDate={selectedDate}/>
    </Container>
  );
}

export default App;
