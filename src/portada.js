import React from 'react';
import './app.css';

class Portada extends React.Component {
  render () {
    return (
      <div id='Portada' className='PortadaContainer'>
        <PortadaContainerInterior />
      </div>
    );
  }
}

class PortadaContainerInterior extends React.Component {
  render () {
    return (
      <div className='PortadaContainerInterior'>
        <div id='LetrasPortada' className='PortadaIzquierda'>
          {/*<div className='PortadaIzquierdaTitulo'>Academia Cer0</div>
          <p className='PortadaIzquierdaTexto'>Centro de Estudios</p>
    */}
          <img src='img/cero.jpg' width='600px' style={{transform:"scale(1.2)"}}/>
          
        </div>
        <div className='PortadaDerecha'>
          <img id='LogoGirar' src='./img/imaxecerotrans.png' className='FotoLogoPortada' style={{width:400, height:400, transform:"scale(1.2)"}}></img>
        </div>
      </div>
    );
  }
}

class PortadaSocialMedia extends React.Component {
  constructor (props) {
  super(props) 
    this.state= {
      hola:'hi'
    }
  }
  
  render () {
    return (
      <div className='SocialMediaContainer'>
        <div className='PortadaSocialMedia'>
          <img className='SocialImage' src='./img/telephoneback.png'></img>
          <img className='SocialImage' src='./img/fbicon.png'></img>
          <img className='SocialImage' src='./img/fbicon.png'></img>
          <img className='SocialImage' src='./img/fbicon.png'></img>
        </div>
        <SocialMediaTexto />
      </div>
    );
  }
}

class SocialMediaTexto extends React.Component {
  render () {
    return (
      <div className='SocialMediaTexto' style={{width:this.props.width}}>
        {this.props.value}
      </div>
    );
  }
}
export default Portada;

