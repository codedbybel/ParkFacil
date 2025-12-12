Claro! Aqui está um **README.md profissional, direto e organizado**, ideal para postar no GitHub no seu projeto ParkFácil.

Se quiser depois posso colocar badges, GIFs, imagens, ou traduzir para inglês.

---

# 🅿️ ParkFácil – Sistema de Cálculo de Estacionamento

Este projeto é um sistema simples desenvolvido para auxiliar os atendentes da empresa **ParkFácil** no cálculo automático do valor a ser pago pelos clientes, com base no tipo de veículo, tempo estacionado e desconto para mensalistas.

A aplicação foi feita utilizando **HTML**, **CSS** e **JavaScript**, sendo totalmente executada no navegador, sem dependências externas e sem necessidade de instalação.

---

## 🚀 Funcionalidades

* Seleção do tipo de veículo:

  * 🚗 **Carro**
  * 🏍️ **Moto**
* Entrada da quantidade de horas estacionadas
* Opção para marcar se o cliente é **mensalista**
* Cálculo automático seguindo as regras:

### 🔹 Carros

* R$ 10,00 pelas primeiras 2 horas
* * R$ 3,00 por hora adicional

### 🔹 Motos

* R$ 8,00 pelas primeiras 2 horas
* * R$ 2,00 por hora adicional

### 🔹 Mensalista

* **Desconto de 10%** aplicado automaticamente

* Tratamento de erros:

  * Horas menores ou iguais a zero
  * Campos não preenchidos

---

## 🧠 Lógica do cálculo (resumo)

```javascript
if (tipo === "carro") {
    valor = horas <= 2 ? 10 : 10 + (horas - 2) * 3;
} else if (tipo === "moto") {
    valor = horas <= 2 ? 8 : 8 + (horas - 2) * 2;
}

if (mensalista) {
    valor *= 0.9; // 10% de desconto
}
```

---

## 🛠️ Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla)**
  Nenhuma biblioteca externa é utilizada.

---

## 📂 Estrutura do Projeto

```
/
├── index.html
├── style.css
└── script.js
```

---

## 📦 Como executar

1. Baixe ou clone este repositório:

```bash
git clone https://github.com/codedbybel/ParkFacil.git
```

2. Abra o arquivo **index.html** no navegador.
   Pronto! O sistema já está funcionando.

---

## 📸 Previa da Interface

*(Se quiser posso gerar a imagem da interface para você colocar aqui)*

---

## 🤝 Contribuições

Contribuições são bem-vindas!
Sinta-se à vontade para abrir **Issues** ou enviar **Pull Requests**.

---

## 📄 Licença

Este projeto é de uso livre. Você pode modificar, estudar e melhorar como quiser.

