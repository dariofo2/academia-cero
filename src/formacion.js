import React from 'react';
import './app.css';

class Formacion extends React.Component {
  render () {
    return (
      <div id='Formacion1'>
        <FormacionContainer />
      </div>
    );
  }
}

class FormacionContainer extends React.Component {
  render () {
    const ApoyoDiario=new Array();
    ApoyoDiario[0]='img/bookicon2.png';
    ApoyoDiario[1]='Apoyo Diario'
    ApoyoDiario[2]='Recuperacións, reforzo a alumnos de EP, ESO e Bachiller, repaso e clases de apoio.'

    const PlanAFD=new Array();
    PlanAFD[0]='img/schoolicon.png';
    PlanAFD[1]='Plan AFD';
    PlanAFD[2]='Accións Formativas para Desempregados co obxetivo de conseguir un incremento da competencia, da empregabilidade e das posibilidades de inserción laboral .';

    const Informatica=new Array();
    Informatica[0]='img/computericon.png';
    Informatica[1]='Informática';
    Informatica[2]='Cursos personalizados de informática.Clases de ofimática, programación, deseño web, procesadores de texto, follas de cálculo, bases de datos,etc. Ofrecemos solución aos teus problemas informáticos.';

    return (
      <div className='Formacion'>
        <h1>FORMACIÓN</h1>
        <p className='FormacionDescripcionTexto'>
          Centro de Estudios Cero é un centro de formación Privado orientado en diversas áreas,
          todas elas relacionadas ca formación.
        
        </p>
        <div className='FormacionContainer'>
        <FormacionElemento image={ApoyoDiario[0]} titulo={ApoyoDiario[1]} texto={ApoyoDiario[2]}/>
        <FormacionElemento image={PlanAFD[0]} titulo={PlanAFD[1]} texto={PlanAFD[2]}/>
        <FormacionElemento image={Informatica[0]} titulo={Informatica[1]} texto={Informatica[2]}/>
        </div>
      </div>
    );
  }
}

class FormacionElemento extends React.Component {
  render () {
    return (
      <div className='FormacionElemento'>
        <img className='FotoElemento' src={this.props.image}></img>
        <h2>{this.props.titulo}</h2>
        <div><p className='FormacionElementoTexto'>{this.props.texto}</p></div>
      </div>
    );
  }
}


export default Formacion;

