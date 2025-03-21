import React from 'react';
import './app.css';

class NavBar extends React.Component {
  constructor (props) {
    super (props)
    this.state={
      MenuDesplegable:'none',
    }
  }

  MostrarMenu () {
    if (this.state.MenuDesplegable=='none') {
      this.setState({MenuDesplegable:'flex'})
    } else {
    this.setState({MenuDesplegable:'none'})
    }
  }
  
  render () {
    return (
      <div className='NavBar'>
        <div className='NavBarContainer'>
        <LogoNavBar />
        <LinksNavBar 
            onClick={()=>this.props.onLinksOver()}
            BarraScrollPortada={this.props.BarraScrollPortada}
            BarraScrollNoticias={this.props.BarraScrollNoticias}
            BarraScrollFormacion={this.props.BarraScrollFormacion}
            BarraScrollInstalaciones={this.props.BarraScrollInstalaciones}
            BarraScrollContacto={this.props.BarraScrollContacto}  
            />
        <MenuMoviles onClick={()=>this.MostrarMenu()}/>
        <SocialMedia />
        </div>

        <div className='DesplegableLinksMoviles' style={{display:this.state.MenuDesplegable}}>
        <LinkElemento value='Inicio' href='#Portada' BarraScrollWidth={this.props.BarraScrollPortada} />
        <LinkElemento value='Formacion' href='#Formacion' BarraScrollWidth={this.props.BarraScrollFormacion} />
        <LinkElemento value='Instalaciones' href='#Instalaciones' BarraScrollWidth={this.props.BarraScrollInstalaciones} />
        <LinkElemento value='Noticias' href='#Noticias' BarraScrollWidth={this.props.BarraScrollNoticias} />
        <LinkElemento value='Aula Virtual' href='' />
        <LinkElemento value='Contacto' href='#Contacto' BarraScrollWidth={this.props.BarraScrollContacto} />
        </div>
      </div>
    );
  }
}

class LogoNavBar extends React.Component {
  render() {
    return (
      <div>
        <img src='img/academiacerologo.jpg'></img>
      </div>
    );
  }
}

class LinksNavBar extends React.Component {
  render() {
    return (
      <div className='NavBarLinksContainer' onClick={()=>this.props.onClick()}>
        
        <LinkElemento value='Inicio' href='#Portada' BarraScrollWidth={this.props.BarraScrollPortada} />
        <LinkElemento value='Formacion' href='#Formacion' BarraScrollWidth={this.props.BarraScrollFormacion} />
        <LinkElemento value='Instalaciones' href='#Instalaciones' BarraScrollWidth={this.props.BarraScrollInstalaciones} />
        <LinkElemento value='Noticias' href='#Noticias' BarraScrollWidth={this.props.BarraScrollNoticias} />
        <LinkElemento value='Aula Virtual' href='' />
        <LinkElemento value='Contacto' href='#Contacto' BarraScrollWidth={this.props.BarraScrollContacto} />
      </div>
    );
  }
}

class LinkElemento extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      BarraWidth: '0%'
    };
  }
  
  HandleOnMouseOver () {
    this.setState ({BarraWidth: '100%'});
  }

  HandleOnMouseOut () {
    this.setState ({BarraWidth: '0%'})
  }
  render () {
    return (
      <div className='NavBarLinkElemento' 
            onMouseOver={()=>this.HandleOnMouseOver()}
            onMouseOut={()=>this.HandleOnMouseOut()}>

        <a href={this.props.href}>
          <div className='BarraLinkElementoScroll' style={{width:this.props.BarraScrollWidth}}></div>
          <div>{this.props.value}</div>
          <div className='BarraLinkElemento' style={{width:this.state.BarraWidth}}></div>
        </a>
      </div>
    );
  }
}
class SocialMedia extends React.Component {
  render() {
    return (
      <div className='NavBarSocialMedia'>
        <a href='https://www.facebook.com/AcademiaCero'><img style= {{width:'20px', filter:'invert(100%)'}}src='./img/fbicon.png'></img></a>
        <img style={{width:'20px', filter:'invert(100%)'}} src='./img/telephoneback.png'></img>
        <div className='NavBarTelefonos'>
          <div>988 46 12 37</div>
          <div className='TelefonosSeparador'></div>
          <div>619 48 00 30</div>
        </div>
      </div>
    );
  }
}

class MenuMoviles extends React.Component {
  render() {
    return (
      <div className='MenuMoviles' onClick={()=>this.props.onClick()}>
        <h2>MENU</h2>

      </div>
    );
  }
}

export default NavBar;

