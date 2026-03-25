const { saudacao, soma } = require('./app');

function testar() {
    if (saudacao("Gabriel") !== "Olá, Gabriel!") {
        throw new Error("Erro na função saudacao");
    }

    if (soma(2, 3) !== 5) {
        throw new Error("Erro na função soma");
    }

    console.log("Todos os testes passaram!");
}

testar();
