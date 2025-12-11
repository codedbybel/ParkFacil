
function calcular() {
    const tipo = document.getElementById("veiculo").value;
    const horas = Number(document.getElementById("horas").value);
    const mensalista = document.getElementById("mensalista").checked;
    let valor = 0;

    // Validação
    if (horas <= 0 || isNaN(horas)) {
        document.getElementById("resultado").innerText =
            "❌ Erro: Informe um número de horas válido (maior que zero).";
        return;
    }

    // Cálculo por tipo de veículo
    if (tipo === "carro") {
        if (horas <= 2) {
            valor = 10;
        } else {
            valor = 10 + (horas - 2) * 3;
        }
    } else if (tipo === "moto") {
        if (horas <= 2) {
            valor = 8;
        } else {
            valor = 8 + (horas - 2) * 2;
        }
    } else {
        document.getElementById("resultado").innerText =
            "❌ Erro: Tipo de veículo inválido.";
        return;
    }

    // Desconto de mensalista
    if (mensalista) {
        valor *= 0.9; // 10% desconto
    }

    document.getElementById("resultado").innerText =
        `💰 Valor Total: R$ ${valor.toFixed(2)}`;
}
