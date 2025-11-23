const baseDeConhecimento = [
    {
        identificacao: "inicio",
        descricao: "Você prefere trabalhar mais com lógica ou criatividade?",
        opcoes: [
            { opcao: "lógica", redireciona: "logica-1", confianca: true },
            { opcao: "criatividade", redireciona: "criativo-1", confianca: true },
            { opcao: "não sei", redireciona: "nao-sei-1", confianca: false }
        ]
    },
    {
        identificacao: "logica-1",
        descricao: "Você prefere trabalhar com dados ou com código?",
        opcoes: [
            { opcao: "dados", redireciona: "dados-1", confianca: true },
            { opcao: "código", redireciona: "codigo-1", confianca: true },
            { opcao: "não sei", redireciona: "nao-sei-logica", confianca: false }
        ]
    },
    {
        identificacao: "dados-1",
        descricao: "Você gosta de análises, estatística e inteligência artificial?",
        opcoes: [
            { opcao: "sim", resposta: "Cientista de Dados / IA", confianca: true },
            { opcao: "não", redireciona: "backend-ou-qa", confianca: true },
            { opcao: "não sei", redireciona: "backend-ou-qa", confianca: false }
        ]
    },
    {
        identificacao: "backend-ou-qa",
        descricao: "Você gosta mais de resolver problemas complexos ou encontrar erros?",
        opcoes: [
            { opcao: "resolver problemas complexos", resposta: "Programador Backend", confianca: true },
            { opcao: "encontrar erros", resposta: "QA (Quality Assurance)", confianca: true },
            { opcao: "não sei", redireciona: "nao-sei-logica", confianca: false }
        ]
    },
    {
        identificacao: "codigo-1",
        descricao: "Você prefere criar estruturas internas ou interfaces visuais?",
        opcoes: [
            { opcao: "estruturas internas", resposta: "Programador Backend", confianca: true },
            { opcao: "interfaces visuais", resposta: "Programador Frontend", confianca: true },
            { opcao: "não sei", redireciona: "nao-sei-logica", confianca: false }
        ]
    },
    {
        identificacao: "nao-sei-logica",
        descricao: "Você gosta da ideia de automatizar processos e sistemas?",
        opcoes: [
            { opcao: "sim", resposta: "DevOps", confianca: true },
            { opcao: "não", resposta: "QA (Quality Assurance)", confianca: true }
        ]
    },
    {
        identificacao: "criativo-1",
        descricao: "Você gosta de criar interfaces bonitas e fáceis de usar?",
        opcoes: [
            { opcao: "sim", resposta: "UX/UI", confianca: true },
            { opcao: "não", redireciona: "produto-1", confianca: true },
            { opcao: "não sei", redireciona: "produto-1", confianca: false }
        ]
    },
    {
        identificacao: "produto-1",
        descricao: "Você gosta de planejar, organizar e liderar projetos?",
        opcoes: [
            { opcao: "sim", resposta: "Gestão de Produtos", confianca: true },
            { opcao: "não", resposta: "Programador Frontend", confianca: true },
            { opcao: "não sei", resposta: "UX/UI", confianca: false }
        ]
    },
    {
        identificacao: "nao-sei-1",
        descricao: "Você prefere entender pessoas ou entender sistemas?",
        opcoes: [
            { opcao: "pessoas", resposta: "UX/UI", confianca: true },
            { opcao: "sistemas", resposta: "Programador Backend", confianca: true },
            { opcao: "não sei", resposta: "Gestão de Produtos", confianca: false }
        ]
    }
];

function selecionaPergunta(id) {
    return baseDeConhecimento.find(p => p.identificacao === id);
}

module.exports = { baseDeConhecimento, selecionaPergunta };
