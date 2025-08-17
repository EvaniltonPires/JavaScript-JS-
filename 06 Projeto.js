//  🚗 Exercício: Calculadora de Viagem em JavaScript

/*
📋 Requisitos:
1. Solicitar ao usuário:
* A distância percorrida (em Km)
* O consumo médio do veículo(Km/l)
* O preço do combustível(R$/litro)

2. Calcular:
* Quantos litros serão necessários
* Custo Total da viagem

3. Exibir
* Quantidade de Combustível necessária
* Custo da viagem
*/

// Função Principal
function CalcularViagem(){
    const distancia = parsetFloat(prompt("Digite a distância da viagem em km:"));
    const consumo = parsetFloat(prompt("Digite o consumo médio do carro (km/l):"));
    const precoCombustivel = parsetFloat(prompt("Digite o preço do combustível (R$/litro):"));

    if(isNaN(distancia) || isNaN(consumo) || isNaN(precoCombustivel)){
        alert("Por favor insira apenas números válidos:");
        return;
    }

    const litrosNecessarios = distancia / consumo;
    const custoTotal = LitrosNecessarios * precoCombustivel;

     alert(` Resultado:
- Combustível necessário: ${litrosNecessarios.toFixed(2)} litros
- Custo total da viagem: R$ ${custoTotal.toFixed(2)}`);
    
}