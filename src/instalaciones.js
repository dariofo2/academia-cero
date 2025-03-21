import React from 'react';
import './app.css';

class Instalaciones extends React.Component {
  render () {
    return (
      <div id='Instalaciones1'>
        <InstalacionesContainer />
      </div>
    );
  }
}
class InstalacionesContainer extends React.Component {
  render () {
    const Informatica=new Array();
    Informatica[0]=<img className='FotoElementoInst' src='img/aula_informatica1.jpg'></img>;
    Informatica[1]=<img className='FotoElementoInst' src='img/aulainformatica2.jpg'></img>;
    const InformaticaTexto=<p>Dispomos de aula de informática, con equipos de última xeración.</p>
    
    const Estudio=new Array();
    Estudio[0]=<img className='FotoElementoInst' src='img/aulasdeestudio1.jpg'></img>;
    Estudio[1]=<img className='FotoElementoInst' src='img/aulasdeestudio2.jpg'></img>;
    const EstudioTexto=<p>Dispomos de varias aulas de estudo adaptadas ás necesidades individuais ou de grupo.</p>

    const SalonDeActos=new Array();
    SalonDeActos[0]=<img className='FotoElementoInst' src='img/salondeactos1.jpg'></img>;
    SalonDeActos[1]=<img className='FotoElementoInst' src='img/salondeactos2.jpg'></img>;
    const SalonDeActosTexto=<p>Disponemos dun amplo salón de actos donde realizar presentacións, prácticas, entregas de diplomas, etc.</p>
    
    const Oficinas=new Array();
    Oficinas[0]=<img className='FotoElementoInst' src='img/oficinas1.jpg'></img>;
    Oficinas[1]=<img className='FotoElementoInst' src='img/instalaciones1.jpg'></img>;
    const OficinasTexto=<p>Nas nosas oficiñas trataremos de resolver as tuas dubidas rapidamente.</p>


    return (
      <div className='InstalacionesContainer'>
        <div className='InstalacionesTituloDesc'>
          <h1>INSTALACIONES</h1>
          <p className='InstalacionesDescripcionTexto'>
          O Centro dispón de 6 aulas con iluminación e ventilación natural, cunha superficie total de 360 Metros Cuadrados. 
          Está acondicionado de acordo cas exixencias docentes e un atractivo deseño, que dan ao conxunto un aspecto elegante, 
          espacioso, alegre e ben iluminado.
        <br />
        <br />
          Centro de Estudios Cero ofrécelle a oportunidades de dispor de aulas para impartir os seus cursos de formación.
        
        </p>
        <br />
        </div>
       
        <InstalacionesElemento titulo='Aula de Informática' images={Informatica} ElementoTexto={InformaticaTexto} />
        <InstalacionesElemento titulo='Aulas de Estudio' images={Estudio} ElementoTexto={EstudioTexto} />
        <InstalacionesElemento titulo='Salon de Actos' images={SalonDeActos} ElementoTexto={SalonDeActosTexto} />
        <InstalacionesElemento titulo='Oficinas' images={Oficinas} ElementoTexto={OficinasTexto} />
      </div>
    );
  }
}

class InstalacionesElemento extends React.Component {
  render () {
    return (
      <div className='InstalacionesElemento'>
        <h2>{this.props.titulo}</h2>
        <div className='InstalacionesFotosFlex'>
          {this.props.images}
        </div>
        <div className='ElementoTexto'>
         {this.props.ElementoTexto}
        </div>
      </div>
    );
  }
}


export default Instalaciones;

