import React from 'react';
import './app.css';

class AdminPanel extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      logged:'0',
      username:'',
      password:'',
    }
  }

  componentDidMount () {
    fetch('../checklogin.php')
    .then(response=>response.text())
    .then(data=>{this.setState({logged: data})})
  }

  handleChangeUsername (user) {
    this.setState({username: user});
  }

  handleChangePassword (pass) {
    this.setState({password: pass});
  }
  
  handleSubmitClick () {
    fetch('../checklogin.php?user='+this.state.username+'&password='+this.state.password)
    .then(response=>response.text())
    .then(data=>{this.setState({logged: data})})
  }
  render () {
    if (this.state.logged=='1') {
      return (
        <div className='AdminPanel'>
          <AñadirNuevaNoticia />  
          <ContactList />
        </div>
      );
    } else {
    return (
      <div>
        {this.state.logged}
        <LoginMenu onChangeUsername={(e)=>this.handleChangeUsername(e.target.value)}
                   onChangePassword={(e)=>this.handleChangePassword(e.target.value)}
                   onSubmitClick={()=>this.handleSubmitClick()} />
        
      </div>
    );
  }
}
}



//LOGIN MENU

class LoginMenu extends React.Component {
  render () {
    return (
      <div>
          <input type='text' placeholder='Usuario' onChange={(e)=>this.props.onChangeUsername(e)}></input>
          <input type='password' placeholder='Password' onChange={(e)=>this.props.onChangePassword(e)}></input>
          <input type='submit' onClick={()=>this.props.onSubmitClick()}></input>
      </div>
    );
  }
}






//LISTA CONTACT FORMULARIOS

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      contactos: Array(),
    }
  }
  componentDidMount () {
    fetch('../devolvercontactforms.php')
    .then(response=>response.text())
    .then(data=>{this.setState({contactos: JSON.parse(data)})})
  }
  
  render () {
    const contactosArray=this.state.contactos.map((contacto)=><ContactoElemento 
                                                                  nombre={contacto.nombre}
                                                                  email={contacto.email}
                                                                  mensaje={contacto.mensaje} />)
    return (
      <div className='ContactFormAdmin'>
        <h1 className='h1Admin'>Formularios de Contacto</h1>
        {contactosArray}
      </div>
    )
  }
}

class ContactoElemento extends React.Component {
  render () {
    return (
      <div  className='AdminPanel'>
        <div><h3>{this.props.nombre}: {this.props.email}</h3></div>
        <div>{this.props.mensaje}</div>
      </div>
    );
  }
}




//AÑADIR NOTICIA NUEVA

class AñadirNuevaNoticia extends React.Component {
  render () {
    return (
      <div className='NoticiasFormAdmin'>
        <form action='../insertarnoticias.php' method='POST' encType='multipart/form-data'>
        <h1 className='h1Admin'>Añadir Noticias</h1>
        <input type='text' name='titulo' placeholder='titulo'></input>
        <br />
        <input type='text' name='contenido' placeholder='contenido'></input>
        <br />
        <input type='text' name='linkextra' placeholder='link extra'></input>
        <br />
        <input type='file' name='file'></input>
        <br />
        <input type='submit' value='Añadir'></input>
        <input type='reset' value='Reiniciar'></input>
        </form>
      </div>
    )
  }
}
export default AdminPanel;

