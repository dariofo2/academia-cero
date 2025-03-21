import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app.js'
import AdminPanel from './adminpanel.js'

class Square extends React.Component {
  render() {
      return (
        <button className="square" onClick={()=>
            this.props.onClick() }>
          {this.props.value}
        </button>
      );
    }
  }

  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
      };
    }

    handleClick(i) {
      const squares= this.state.squares.slice();
      squares[i] = 'X';
      this.setState({squares: squares});
    }
    
    renderSquare(i) {
      return (
              <Square 
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
              />
      );
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
            
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  // Testing
  class Test extends React.Component {
    constructor(props){
      super(props);
      this.state={
      name:'Jorge'
    };
  }
    nombre='jorgito';

   handleClicker () {
      this.setState({name: 'condor'});
    }

    render() {
      const nose="holaaa";
      return (
        <div>
        <h1 onClick={()=>this.handleClicker()}>Test</h1>
          <h2>{this.state.name}</h2>
          <h3>{nose}</h3>
        </div>    
      );
    }
    }

    //Test Menu Desplegable

    class MenuDesplegable extends React.Component {
      constructor(props){
        super(props);
        this.state={
        name: 'nombre'
        };
      }

      render() {
        return (
          <div>
          <BotonDesplegable number='1' />
          <BotonDesplegable number='2' />
          <BotonDesplegable number='3' />
          </div>
        );
      }


    }

    class BotonDesplegable extends React.Component {
      constructor(props){
        super(props)
        this.state={
          displayStyle: 'none',
          valorTest: ''
        };
      }
      onClick (e,valor){
        this.setState({valorTest: e.target.id});
      }
      onMouseOver(){
        this.setState({displayStyle: 'flex'});
      }
      render() {
        return (
          <div onMouseOver={()=>this.onMouseOver()}>
            <div>Boton {this.props.number}</div>
            <div><ListaDesplegable display={this.state.displayStyle}
            valor={this.state.valorTest}
            onClick={(e,valor)=>this.onClick(e,valor)} /></div>
          </div>
        );
      }

    }

    class ListaDesplegable extends React.Component {
      render () {
        const variableRandom='holaaa';
        return (
          <div style={{display: this.props.display}}>
            <div>Opción 1</div>
            <div>Opcion 2</div>
            <div>Opción 3</div>
            <div id='idnueva' onClick={(e)=>this.props.onClick(e,variableRandom)}>Click Aquí</div>
            <div>Valor: {this.props.valor}</div>
          </div>
        );
      }
    }
  
//------------------------------- Other Test ----------

    class ListaBase extends React.Component {
      constructor(props){
        super(props);
        this.state={
          textoAñadir: '' ,
          elementos: Array() ,
          listaElementos: ''
          
        };
      }
      
      actualizarTexto(e){
        this.setState({textoAñadir: e.target.value})
      }

      añadirElemento(elemento){
        const elementos=this.state.elementos.slice();
        elementos.push(this.state.textoAñadir);
        this.setState({elementos: elementos});
        const listaElementos=elementos.map((element,index)=> <li key={index}><Elemento value={element} onClick={(e)=>this.actualizarTexto(e)} /></li>);
                                                       
                                   
        this.setState({listaElementos: listaElementos});
      }
      render () {
        return (
          <div>
            <AñadirNuevo 
              onChange={(e)=>this.actualizarTexto(e)}
              onClick={()=>this.añadirElemento()}
            />
            <div>{this.state.textoAñadir}</div>
            <div>
            <ListaElementos
              lista={this.state.listaElementos}
              />
            </div>
          </div>
        );
      }
    } 

    class AñadirNuevo extends React.Component {
      render () {
        return (
          <div>
            <input type='text'
             placeholder='Escribe'
             onChange={(e)=>this.props.onChange(e)} ></input>
            <button onClick={()=>this.props.onClick()}>Añadir</button> 
          </div>
        );
      }
    }

    class ListaElementos extends React.Component {
      render(){
        return (
        <ul>
          {this.props.lista}
        </ul>
        );  
    }
    }

    class Elemento extends React.Component {
      render(){
        return (
          <div>
            <div>
            {this.props.value}
            </div>
            <button value='hola' onClick={(e)=>this.props.onClick(e)}>
              Eliminar
            </button>
          </div>
        );
      }
    }

    
  
    
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);