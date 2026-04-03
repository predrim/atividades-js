const tabelaPrecos = {
    gasolina: 6.79,
    etanol: 5.40,
    diesel: 6.20
};

const comboCombustivel = document.getElementById("combustivel");
const inputLitros = document.getElementById("litros");
const displayResultado = document.getElementById("resultado");

const formatarMoeda = (valor) => {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
};

const calcularAbastecimento = (precoCombustivel, litros) => {
    const valorTotal = precoCombustivel * litros;
    displayResultado.textContent = `Total: ${formatarMoeda(valorTotal)}`;
};

const atualizarValor = () => {
    const tipo = comboCombustivel.value;
    const litrosStr = inputLitros.value;
    const litros = parseFloat(litrosStr);

    if (!tipo) {
        displayResultado.textContent = "Por favor, selecione o combustível.";
        return;
    }

    if (litrosStr === "" || isNaN(litros)) {
        displayResultado.textContent = "Aguardando quantidade...";
        return;
    }

    if (litros <= 0) {
        alert("Erro: A quantidade de litros deve ser maior que zero!");
        displayResultado.textContent = "Valor inválido.";
        inputLitros.value = "";
        return;
    }

    const precoPorLitro = tabelaPrecos[tipo];
    
    if (precoPorLitro) {
        calcularAbastecimento(precoPorLitro, litros);
    }
};

comboCombustivel.addEventListener("change", atualizarValor);
inputLitros.addEventListener("input", atualizarValor);

inputLitros.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        atualizarValor();
    }
});