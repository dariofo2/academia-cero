import React from 'react';
import './app.css';

class Noticias extends React.Component {
  constructor (props){
    super(props);
    this.state={
      ArrayNoticias:Array(), //Importante que sea ARRAY desde el principio, sino da error.
    }
  }
  
  componentDidMount () {
    //fetch("http://localhost/phpacad/devolvernoticias.php")
    fetch("./devolvernoticias.php")
    .then(response=>response.text())
    .then(data=>{this.setState({ArrayNoticias: JSON.parse(data)});
                  })
  }
  

  render () {
    return (
      <div id='Noticias1' className='Noticias' style={{width:"100%"}}>
        {this.state.NoticiasMap}
        <NoticiasTitulo />
        <NoticiasContainer noticias={this.state.ArrayNoticias} />
      </div>
    );
  }
}





class NoticiasTitulo extends React.Component {
  render () {
    return (
      <div>
        <h1>NOTICIAS</h1>
      </div>
    );
  }
}
class NoticiasContainer extends React.Component {
  
  render () {
    const NoticiasArray=this.props.noticias
    const Noticias=NoticiasArray.map((elem)=><NoticiaElemento key={elem.id}
                                                  titulo={elem.titulo} 
                                                  contenido={elem.contenido}
                                                  image={elem.imagen}
                                                  linkextra={elem.linkextra}
                                                   />);
    
    return (
      
      <div className='NoticiasContainer'>
        {Noticias}
      </div>
    );
  }
}
class NoticiaElemento extends React.Component {
  render () {
    return (
      <div className='NoticiasElemento'>
        <a href={this.props.image} target='_blank'><img className='NoticiaImagen' src={this.props.image}></img></a>
        <h3>{this.props.titulo}</h3>
        <p>{this.props.contenido}</p>
        <a href={this.props.linkextra}><div className='NoticiaLinkExtra'>Mas informacion</div></a>
      </div>
    );
  }
}


export default Noticias;

