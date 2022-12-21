import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import Fab from '@mui/material/Fab';

export default function Home() {
  
  const scrollDown = () => {
    window.scrollTo({ 
        top: document.documentElement.scrollHeight, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour 
           in place of 'smooth' */
      }); 
};
return (

<div>
    <h1>Yuri Uchida</h1>
    <div style={{height: '100vh'}}>Hi! I'm Yuri.
    <Fab onClick={scrollDown}>
    <ExpandMoreOutlinedIcon />
    </Fab>
    </div>
    <div style={{height: '100vh'}}>I am a musician and a coder who likes to try new things</div>
    <Fab variant="extended" href="/about">
        Enter site
    </Fab>
</div>
)
}
