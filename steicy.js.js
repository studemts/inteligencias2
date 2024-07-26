let currentQuestion = 0;

const questions = [
    {
        text: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter. Ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        options: [
            { text: "Isso é assustador", next: 1 },
            { text: "Isso é maravilhoso", next: 2 }
        ]
    },
    {
        text: "Você acha que essa IA pode substituir empregos humanos?",
        options: [
            { text: "Sim, muitos empregos estão em risco", next: 3 },
            { text: "Não, ela vai criar novas oportunidades", next: 4 }
        ]
    },
    {
        text: "Você usaria essa IA para aprender novas habilidades?",
        options: [
            { text: "Sim, parece uma ferramenta incrível", next: 4 },
            { text: "Não, prefiro métodos tradicionais", next: 3 }
        ]
    },
    {
        text: "Você acha que o uso dessa IA deveria ser regulamentado?",
        options: [
            { text: "Sim, para evitar abusos", next: 5 },
            { text: "Não, confio nas pessoas", next: 6 }
        ]
    },
    {
        text: "Você acredita que a IA pode desenvolver sentimentos?",
        options: [
            { text: "Sim, é possível no futuro", next: 5 },
            { text: "Não, é apenas uma máquina", next: 6 }
        ]
    },
    {
        text: "Você acha que a IA pode ser uma boa companheira para pessoas solitárias?",
        options: [
            { text: "Sim, pode ajudar muito", next: 6 },
            { text: "Não, isso é preocupante", next: 7 }
        ]
    },
    {
        text: "O que você acha do futuro com IA?",
        options: [
            { text: "Estou otimista", next: 7 },
            { text: "Estou preocupado", next: 7 }
        ]
    },
    {
        text: "A história da primeira IA começa na década de 1950, quando os primeiros algoritmos foram desenvolvidos. Desde então, houve um crescimento exponencial nas capacidades das IAs, e a previsão é que até 2050 elas sejam capazes de realizar tarefas complexas e interagir de maneira quase indistinguível dos humanos. A evolução até 2050 pretende trazer IAs que possam colaborar em qualquer aspecto da vida humana, promovendo avanços significativos em saúde, educação e outras áreas essenciais."
    ,
        options: [
            { text: "Finalizar Questionário", next: null },
        ]
    },
];

function nextQuestion(optionText) {
    const question = questions[currentQuestion];
    const selectedOption = question.options.find(option => option.text === optionText);
    if (selectedOption && selectedOption.next !== null) {
        currentQuestion = selectedOption.next;
        updateQuestion();
    } else {
        alert("Fim das perguntas. Obrigado por participar!");
        currentQuestion = 0; // Reinicia o questionário
        updateQuestion(); // Atualiza para a primeira pergunta
    }
}

function updateQuestion() {
    const question = questions[currentQuestion];
    document.querySelector('h2').textContent = question.text;
    const buttons = document.getElementById('buttons');
    buttons.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.onclick = () => nextQuestion(option.text);
        buttons.appendChild(button);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateQuestion();
});
