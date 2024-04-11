const express = require('express');
const app = express();
const path = require('path');
// Configurando o Express para usar arquivos estáticos (HTML, CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'public')));
// Rota para a página inicial
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



// Rota para a soma - modificado
app.get('/somar-idades', (req, res) => {
    // Recuperando os números enviados pelo formulário
    const idades = req.query.idades.split(',').map(Number);

    // Realizando a soma
    const soma = idades.reduce((total, idade) => total + idade, 0);

    // Encontrando a qtd de idades digitadas
    const quantidades = idades.length;

    // Encontrando a maior idade
    const maior = Math.max(...idades);

    // Enviando o resultado como resposta
    //res.send(`A soma das idades ${num1} e ${num2} é ${resultado}`);
    //res.send({
    //    quantidade: quantidades,
    //    soma: soma,
    //    maior: maior
    //});
    const respostas = {
        quantidade: `Quantidade de idades digitadas = ${quantidades}`,
        soma: `Soma das idades = ${soma}`,
        maior: `Maior idade digitada = ${maior}`
    };
    
    res.send(respostas);
});


    // Iniciando o servidor na porta 3000
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor rodando na
    porta ${PORT}`));



/*
// Rota para a soma
app.get('/somar-idades', (req, res) => {
    // Recuperando os números enviados pelo formulário
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    // Realizando a soma
    const resultado = num1 + num2;
    // Enviando o resultado como resposta
    res.send(`A soma das idades ${num1} e ${num2} é ${resultado}`);
    });
    // Iniciando o servidor na porta 3000
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor rodando na
    porta ${PORT}`));
*/

/*
// Rota para calcular estatísticas das idades
app.get('/somar-idades', (req, res) => {
    const idades = req.query.idades.split(',').map(Number);
    const quantidade = idades.length;
    const soma = idades.reduce((total, idade) => total + idade, 0);
    const maior = Math.max(...idades);

    res.send({
        quantidade: quantidade,
        soma: soma,
        maior: maior
    });
});

// Iniciando o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na
porta ${PORT}`));
*/