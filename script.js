// Lista de itens e suas respostas corretas
const itens = [
    {
        nome: "Lixo Papel",
        imagem: "lixo-papel.png",
        descricao: "Você encontrou um lixo de papel na rua. O que fazer?",
        correta: false,  // Papel vai no lixo reciclável
        alternativas: {
            correto: "Colocar no Lixo Reciclável",
            errado: "Colocar no Lixo Orgânico"
        }
    },
    {
        nome: "Lixo Papelão",
        imagem: "lixo-papelao.png",
        descricao: "Você encontrou um lixo de papelão na rua. O que fazer?",
        correta: false,  // Papelão vai no lixo reciclável
        alternativas: {
            correto: "Colocar no Lixo Reciclável",
            errado: "Colocar no Lixo Orgânico"
        }
    },
    {
        nome: "Lixo Casca de Bala",
        imagem: "lixo-casca-bala.png",
        descricao: "Você encontrou uma casca de bala na rua. O que fazer?",
        correta: true,  // Casca de bala vai no lixo orgânico
        alternativas: {
            correto: "Colocar no Lixo Orgânico",
            errado: "Colocar no Lixo Reciclável"
        }
    },
    {
        nome: "Lixo Plástico",
        imagem: "lixo-plastico.png",
        descricao: "Você encontrou um lixo de plástico na rua. O que fazer?",
        correta: false,  // Plástico vai no lixo reciclável
        alternativas: {
            correto: "Colocar no Lixo Reciclável",
            errado: "Colocar no Lixo Orgânico"
        }
    },
    {
        nome: "Lixo Copo Plástico",
        imagem: "lixo-copo-plastico.png",
        descricao: "Você encontrou um copo plástico na rua. O que fazer?",
        correta: false,  // Copo plástico vai no lixo reciclável
        alternativas: {
            correto: "Colocar no Lixo Reciclável",
            errado: "Colocar no Lixo Orgânico"
        }
    },
    {
        nome: "Lixo Latinha de Refrigerante",
        imagem: "lixo-latinha.png",
        descricao: "Você encontrou uma latinha de refrigerante na rua. O que fazer?",
        correta: false,  // Latinha vai no lixo reciclável
        alternativas: {
            correto: "Colocar no Lixo Reciclável",
            errado: "Colocar no Lixo Orgânico"
        }
    }
];

let acertos = 0;
let itemAtual = 0;

function atualizarTela() {
    const item = itens[itemAtual];
    document.getElementById("personagem-img").src = item.imagem;
    document.getElementById("descricao-personagem").textContent = item.descricao;
    
    // Atualizar alternativas
    const alternativas = item.alternativas;
    document.getElementById("alternativas").innerHTML = `
        <button onclick="escolherAlternativa(true)">${alternativas.correto}</button>
        <button onclick="escolherAlternativa(false)">${alternativas.errado}</button>
    `;
}

function escolherAlternativa(correto) {
    const item = itens[itemAtual];
    const feedback = document.getElementById("feedback");

    if (correto === item.correta) {
        acertos++;
        feedback.textContent = "Parabéns! Você escolheu corretamente.";
    } else {
        feedback.textContent = "Ops! Essa não é a resposta correta. Tente novamente.";
    }

    document.getElementById("acertos").textContent = acertos;

    // Passar para o próximo item
    itemAtual = (itemAtual + 1) % itens.length;
    setTimeout(atualizarTela, 2000);  // Atualizar após 2 segundos
}

// Inicializa o simulador
atualizarTela();
