const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está explorando uma praia paradisíaca e se depara com uma cena desoladora: várias espécies marinhas presas em sacolas plásticas e outros resíduos. Qual é sua primeira reação?",
        alternativas: [
            {
                texto: "Isso é devastador!",
                afirmacao: "Ficou profundamente chocado com o impacto da poluição marinha na vida selvagem."
            },
            {
                texto: "Isso é alarmante!",
                afirmacao: "Sentiu uma urgência em aprender mais sobre como combater a poluição marinha."
            }
        ]
    },
    {
        enunciado: "Ao se conscientizar sobre a gravidade da poluição marinha, você decide participar de um projeto de educação ambiental na sua comunidade. O projeto envolve criar materiais educativos sobre o problema da poluição nos oceanos. Como você contribui?",
        alternativas: [
            {
                texto: "Utiliza ferramentas de design que destacam o impacto visual para chamar atenção para a questão da poluição marinha.",
                afirmacao: "Utilizou tecnologias modernas para sensibilizar mais pessoas sobre a importância da preservação dos oceanos."
            },
            {
                texto: "Conduz pesquisas extensivas e elabora materiais educativos com base em dados científicos e experiências pessoais.",
                afirmacao: "Preferiu utilizar seu conhecimento direto e experiências pessoais para educar sobre os perigos da poluição marinha."
            }
        ]
    },
    {
        enunciado: "Durante uma conferência sobre conservação marinha, um debate acalorado surgiu sobre o papel das tecnologias na redução da poluição. Qual é sua opinião?",
        alternativas: [
            {
                texto: "Acredito que as novas tecnologias podem ajudar a monitorar e limpar os oceanos, mas devemos considerar seu impacto ambiental.",
                afirmacao: "Defendeu a inovação tecnológica responsável como uma solução para mitigar os efeitos da poluição marinha."
            },
            {
                texto: "Tenho receios sobre o uso indiscriminado de tecnologias, pois elas podem não resolver as causas raiz da poluição marinha.",
                afirmacao: "Preocupou-se em não confiar exclusivamente em soluções tecnológicas sem abordar as causas fundamentais da poluição dos oceanos."
            }
        ]
    },
    {
        enunciado: "Após participar de um evento de limpeza de praia, você é convidado a criar uma obra de arte que represente sua visão sobre a poluição marinha. Como você decide proceder?",
        alternativas: [
            {
                texto: "Cria uma escultura utilizando plásticos recolhidos durante a limpeza da praia.",
                afirmacao: "Transformou resíduos em arte para sensibilizar o público sobre a urgência de combater a poluição marinha."
            },
            {
                texto: "Cria uma obra digital utilizando tecnologias de design que simulam o impacto visual da poluição nos oceanos.",
                afirmacao: "Utilizou ferramentas digitais para amplificar a mensagem sobre os danos da poluição marinha de maneira impactante."
            }
        ]
    },
    {
        enunciado: "Você está em um projeto acadêmico sobre os impactos da poluição marinha e um colega sugere usar um gerador de texto para produzir o relatório final rapidamente. Como você reage?",
        alternativas: [
            {
                texto: "Utilizar um gerador de texto pode ajudar na formatação, mas é essencial revisar cuidadosamente para incluir perspectivas pessoais e corrigir erros.",
                afirmacao: "Entendeu a utilidade das ferramentas modernas, mas priorizou a integridade e autenticidade do trabalho acadêmico sobre a poluição marinha."
            },
            {
                texto: "Prefiro não usar geradores de texto para manter o trabalho autêntico e genuíno.",
                afirmacao: "Optou por realizar o trabalho manualmente para garantir que cada palavra refletisse seu compromisso pessoal com a preservação dos oceanos."
            }
        ]
    },
    {
        enunciado: "Você está em um projeto acadêmico sobre os impactos da poluição marinha e um colega sugere usar um gerador de texto para produzir o relatório final rapidamente. Como você reage?",
        alternativas: [
            {
                texto: "Utilizar um gerador de texto pode ajudar na formatação, mas é essencial revisar cuidadosamente para incluir perspectivas pessoais e corrigir erros.",
                afirmacao: "Entendeu a utilidade das ferramentas modernas, mas priorizou a integridade e autenticidade do trabalho acadêmico sobre a poluição marinha."
            },
            {
                texto: "Prefiro não usar geradores de texto para manter o trabalho autêntico e genuíno.",
                afirmacao: "Optou por realizar o trabalho manualmente para garantir que cada palavra refletisse seu compromisso pessoal com a preservação dos oceanos."
            }
        ]
    },
    ];
    


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

