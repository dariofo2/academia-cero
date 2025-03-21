import React from 'react';
import './app.css';
import Instalaciones from './instalaciones.js'
import Formacion from './formacion.js'
import NavBar from './navbar.js'
import Portada from './portada.js'
import Contacto from './contacto.js'
import Noticias from './noticias.js'

//SCRIPTS INICIALES
document.getElementById('html').style.scrollBehavior='auto';


let scrollVar=0;
let scrollScale=0;
let scrollScale2=0;
/*
let ScrollInicialRotacion = (e)=> {
    if (scrollVar<=360) {
      window.scrollTo(0,0);
      if (scrollVar>=1){
      document.getElementById('LogoGirar').style.transform='rotate('+scrollVar+'deg) scale('+(0.5+scrollScale)+')';
      document.getElementById('LetrasPortada').style.transform='scale('+(0.90+scrollScale2)+')'
      }
    } else {
    document.getElementById('html').style.scrollBehavior='smooth';
    }
    scrollScale=(scrollVar/360)/2;
    scrollScale2=(scrollVar/360)/5;
    scrollVar+=4;
}

document.addEventListener("scroll",ScrollInicialRotacion);
*/
let ScrollCortar= ()=> {
  if (scrollVar<=360) {
    document.getElementById('LogoGirar').style.transform='rotate(360deg) scale(1.0)';
    document.getElementById('html').style.scrollBehavior='smooth';
    document.getElementById('LetrasPortada').style.transform='scale(1.0)'
    scrollVar='400';
  }
}



class App extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      Portada:'',
      Formacion:'',
      Noticias:'',
      Instalaciones:'',
      Contacto:''
    };
  }
  componentDidMount(){
    document.addEventListener("scroll",()=>this.ComprobarScrollVisible())
  }

  ComprobarScrollVisible () {
    let NoticiasElement=document.getElementById('Noticias1');
    let Noticias1Rect=NoticiasElement.getBoundingClientRect();
    let FormacionElement=document.getElementById('Formacion1');
    let Formacion1Rect=FormacionElement.getBoundingClientRect();
    let PortadaElement=document.getElementById('Portada');
    let Portada1Rect=PortadaElement.getBoundingClientRect();
    let InstalacionesElement=document.getElementById('Instalaciones1');
    let Instalaciones1Rect=InstalacionesElement.getBoundingClientRect();
    let ContactoElement=document.getElementById('Contacto1');
    let Contacto1Rect=ContactoElement.getBoundingClientRect();

    if (Noticias1Rect.top<=120 & Noticias1Rect.top>=(-Noticias1Rect.height+20)) {
      this.setState({Noticias:'100%'});
    } else {
      this.setState({Noticias:'0%'})
    }
    
    if (Portada1Rect.top<=0 & Portada1Rect.top>=(-Portada1Rect.height)) {
      this.setState({Portada:'100%'});
    } else {
      this.setState({Portada:'0%'})
    }
    
    if (Formacion1Rect.top<=120 & Formacion1Rect.top>=(-Formacion1Rect.height+20)) {
      this.setState({Formacion:'100%'});
    } else {
      this.setState({Formacion:'0%'})
    }
  
    if (Instalaciones1Rect.top<=120 & Instalaciones1Rect.top>=(-Instalaciones1Rect.height+20)) {
      this.setState({Instalaciones:'100%'});
    } else {
      this.setState({Instalaciones:'0%'})
    }
  
    if (Contacto1Rect.top<=120 & Contacto1Rect.top>=(-Contacto1Rect.height+20)) {
      this.setState({Contacto:'100%'});
    } else {
      this.setState({Contacto:'0%'})
    }

  }


  render () {
    return (
      <div>
        <NavBar 
            onLinksOver={()=>ScrollCortar()}
            BarraScrollPortada={this.state.Portada}
            BarraScrollNoticias={this.state.Noticias}
            BarraScrollFormacion={this.state.Formacion}
            BarraScrollInstalaciones={this.state.Instalaciones}
            BarraScrollContacto={this.state.Contacto}
         />

        <Portada />
        <div className='ContainerGlobal'>
          <div className='Separador' id='Formacion'></div>
          <Formacion />
          <div className='Separador' id='Instalaciones'></div>
          <Instalaciones />
          <div className='Separador' id='Noticias'></div>
          <Noticias />
          <div className='Separador' id='Contacto'></div>
          <Contacto />

          <LogosFinal />
        </div>
        <Footer />
      </div>
    );
  }
}

class LogosFinal extends React.Component {
  render () {
    return (
      <div className='LogosFinal'>
        <br />
        <img className='LogoFinalImagen' src='./img/logo1.png'></img>
        <img className='LogoFinalImagen' width='auto' src='./img/logo2.jpg'></img>
        <img className='LogoFinalImagen' width='auto' src='./img/logo3.png'></img>
        <img className='LogoFinalImagen' width='auto' src='./img/logo4.png'></img>
        <img className='LogoFinalImagen' width='auto' src='./img/logo5.png'></img>
        <img className='LogoFinalImagen' width='auto' src='./img/logo6.png'></img>
        <br />
        <br />
      </div>
    );
  }
}
class Footer extends  React.Component {
  render () {
    return (
      <div>
        <footer className='Footer'>
          <div>
            
          </div>
          <div className='FooterContenido'>
          Todos los Derechos Reservados. Proyens S.L. 1992
          </div>
        </footer>
      </div>
    );
  }
}

export default App;

