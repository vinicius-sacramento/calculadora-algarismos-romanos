import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: "",
      resultado: "",
    };
  }

  verificaOperador() {
    let valor = this.state.valor;
    let arrayRoman = valor.split("");

    let arrayNumero = [];
    let resultado = "";
    let j = 0;
    for (let i = 0; i <= arrayRoman.length; i++) {
      if (arrayRoman[i] == "+" || arrayRoman[i] == "-") {
        resultado = this.handleRetornaNumero(resultado);
        arrayNumero[j] = resultado;
        resultado = "";
        j++;
        arrayNumero[j] = arrayRoman[i];
        j++;
      } else if (i == arrayRoman.length) {
        resultado = this.handleRetornaNumero(resultado);
        arrayNumero[j] = resultado;
      } else {
        resultado = resultado.concat(arrayRoman[i]);
      }
    }
    let final = arrayNumero.join("");
    resultado = eval(final.toString());
    let resultRoman = this.handleRetornaRomano(resultado);
    this.setState({ resultado: resultRoman });
  }

  handleRetornaNumero(input) {
    let sm = 0;

    for (let i = 0; i < input.length; i++) {
      if (input[i] == "M") {
        if (input[i - 1] != "C") sm += 1000;
        else sm += 900;
      }

      if (input[i] == "D") {
        if (input[i - 1] != "C") sm += 500;
        else sm += 400;
      }

      if (input[i] == "C") {
        if (input[i - 1] != "X") sm += 100;
        else sm += 90;
      }

      if (input[i] == "L") {
        if (input[i - 1] != "X") sm += 50;
        else sm += 40;
      }

      if (input[i] == "X") {
        if (input[i - 1] != "I") sm += 10;
        else sm += 9;
      }

      if (input[i] == "V") {
        if (input[i - 1] != "I") sm += 5;
        else sm += 4;
      }

      if (input[i] == "I") sm += 1;
    }

    return sm;
  }

  handleRetornaRomano(num) {
    {
      let numString = num.toString();
      let tamanho = numString.length;
      let smRomana = "";

      if (num <= 0 || num > 3999)
        return `Este número \"${num}\" não pode ser escrito em algarismo romano.`;
      else {
        if (tamanho == 4) {
          smRomana += "M".repeat(numString[0]);

          // CASA DAS CENTENAS

          if (numString[1] >= 1 && numString[1] <= 3)
            smRomana += "C".repeat(numString[1]);

          if (numString[1] == 4) smRomana += "CD";

          if (numString[1] == 5) smRomana += "D";

          if (numString[1] > 5 && numString[1] < 9)
            smRomana += "D" + "C".repeat(numString[1] - 5);

          if (numString[1] == 9) smRomana += "CM";

          // CASA DAS DEZENAS

          if (numString[2] >= 1 && numString[2] <= 3)
            smRomana += "X".repeat(numString[2]);

          if (numString[2] == 4) smRomana += "XL";

          if (numString[2] == 5) smRomana += "L";

          if (numString[2] > 5 && numString[2] < 9)
            smRomana += "L" + "X".repeat(numString[2] - 5);

          if (numString[2] == 9) smRomana += "XC";

          // CASA DAS UNIDADES

          if (numString[3] >= 1 && numString[3] <= 3)
            smRomana += "I".repeat(numString[3]);

          if (numString[3] == 4) smRomana += "IV";

          if (numString[3] == 5) smRomana += "V";

          if (numString[3] > 5 && numString[3] < 9)
            smRomana += "V" + "I".repeat(numString[3] - 5);

          if (numString[3] == 9) smRomana += "IX";
        } else if (tamanho == 3) {

        /* ----------------------------------------------------------------------------------------------------------- */
          // CASA DAS CENTENAS

          if (numString[0] >= 1 && numString[0] <= 3)
            smRomana += "C".repeat(numString[0]);

          if (numString[0] == 4) smRomana += "CD";

          if (numString[0] == 5) smRomana += "D";

          if (numString[0] > 5 && numString[0] < 9)
            smRomana += "D" + "C".repeat(numString[0] - 5);

          if (numString[0] == 9) smRomana += "CM";

          // CASA DAS DEZENAS

          if (numString[1] >= 1 && numString[1] <= 3)
            smRomana += "X".repeat(numString[1]);

          if (numString[1] == 4) smRomana += "XL";

          if (numString[1] == 5) smRomana += "L";

          if (numString[1] > 5 && numString[1] < 9)
            smRomana += "L" + "X".repeat(numString[1] - 5);

          if (numString[1] == 9) smRomana += "XC";

          // CASA DAS UNIDADES

          if (numString[2] >= 1 && numString[2] <= 3)
            smRomana += "I".repeat(numString[2]);

          if (numString[2] == 4) smRomana += "IV";

          if (numString[2] == 5) smRomana += "V";

          if (numString[2] > 5 && numString[2] < 9)
            smRomana += "V" + "I".repeat(numString[2] - 5);

          if (numString[2] == 9) smRomana += "IX";
        } else if (tamanho == 2) {

        /*-----------------------------------------------------------------------------------------------------*/
          if (numString[0] >= 1 && numString[0] <= 3)
            smRomana += "X".repeat(numString[0]);

          if (numString[0] == 4) smRomana += "XL";

          if (numString[0] == 5) smRomana += "L";

          if (numString[0] > 5 && numString[0] < 9)
            smRomana += "L" + "X".repeat(numString[0] - 5);

          if (numString[0] == 9) smRomana += "XC";

          // CASA DAS UNIDADES

          if (numString[1] >= 1 && numString[1] <= 3)
            smRomana += "I".repeat(numString[1]);

          if (numString[1] == 4) smRomana += "IV";

          if (numString[1] == 5) smRomana += "V";

          if (numString[1] > 5 && numString[1] < 9)
            smRomana += "V" + "I".repeat(numString[1] - 5);

          if (numString[1] == 9) smRomana += "IX";
        } else {

        /* ------------------------------------------------------------------------------------------------------------------------- */
          // CASA DAS UNIDADES

          if (numString[0] >= 1 && numString[0] <= 3)
            smRomana += "I".repeat(numString[0]);

          if (numString[0] == 4) smRomana += "IV";

          if (numString[0] == 5) smRomana += "V";

          if (numString[0] > 5 && numString[0] < 9)
            smRomana += "V" + "I".repeat(numString[0] - 5);

          if (numString[0] == 9) smRomana += "IX";
        }
      }

      return smRomana;
    }
  }

  handlePegaEquacao(evento) {
    evento.stopPropagation();
    this.setState({ valor: evento.target.value.toUpperCase() });
  }

  handleLimpaCampo(evento) {
    this.setState({ resultado: "" });
  }

  render() {
    return (
      <div className="App">
        <div className="AppCard">
          <input
            type="text"
            placeholder="Digite sua operação aqui..."
            onChange={this.handlePegaEquacao.bind(this)}
          />
          <div className="Button-container">
            <button
              className="Button-clear"
              onClick={this.handleLimpaCampo.bind(this)}
            >
              Clear
            </button>
            <button
              className="Button-operator"
              onClick={this.verificaOperador.bind(this)}
            >
              =
            </button>
          </div>
          <div className="Result">
            {this.state.resultado && (
              <div>
                {this.state.valor} = {this.state.resultado}
              </div>
            )}
            {this.state.resultado.length == 0 && (
              <div>Seu resultado aparecerá aqui!</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
