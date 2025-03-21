import React from 'react';
import './app.css';

class Contacto extends React.Component {
  render () {
    return (
      <div id='Contacto1' className='Contacto'>
        <Titulo />
        <Mapa />
        <Formulario />
      </div>
    );
  }
}

class Titulo extends React.Component {
  render () {
    return (
      <div className='ContactoTitulo'>
        <h1>CONTACTO</h1>
      </div>
    );
  }
}

class Mapa extends React.Component {
  render () {
    return (
      <div className='Mapa'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23696.19981750894!2d-7.7242500000000005!3d42.064084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3ab38dbfe2f58b%3A0xe70fb3e88c2f9b2e!2sAcademia%20Cero!5e0!3m2!1ses!2sus!4v1681297699875!5m2!1ses!2sus" style={{width:'100%'}} height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    );
  }
}

class Formulario extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      nombre: '',
      email: '',
      mensaje: '',
    }
  }

    CambiarNombre (name) {
      this.setState ({nombre: name})
    }
    CambiarEmail(em) {
      this.setState ({email: em})
    }
    CambiarMensaje(mens) {
      this.setState ({mensaje: mens})
    }

    HandleSubmit () {
      //fetch('http://localhost/phpacad/insertarcontactforms.php?nombre='+this.state.nombre+'&email='+this.state.email+'&mensaje='+this.state.mensaje)
      fetch('./insertarcontactforms.php?nombre='+this.state.nombre+'&email='+this.state.email+'&mensaje='+this.state.mensaje)
      .then(response=>response.text)
    }

  render () {
    return (
      <div style={{marginTop:20}}>
        <form>
          
        <div className='Formulario'>
          <div style={{fontFamily: 'Tahoma', fontSize:'20px', alignItems:'center', display:'flex', columnGap:'20px'}}><img src='img/email.png' width='30px'></img> <div>info@academiacero.es</div></div>
          <input type='text' placeholder='Nombre' required onChange={(e)=>this.CambiarNombre(e.target.value)}></input>
          <input type='text' placeholder='Email' required onChange={(e)=>this.CambiarEmail(e.target.value)}></input>
          <textarea className='Mensaje' type='text' placeholder='Mensaje' required
          onChange={(e)=>this.CambiarMensaje(e.target.value)}></textarea>
          <div>Se Aplica nuestra <a>Política de Privacidad</a></div>
          <input className='BotonEnviarMensaje' type='submit' value='Enviar Mensaje' onClick={()=>this.HandleSubmit()}></input>
          
          </div>
          </form>
      </div>
    );
  }
}

export default Contacto;

