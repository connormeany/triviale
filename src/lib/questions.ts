export interface Question {
    question: string;
    difficulty: number;
    date: string;
    answers: string[];
}

const questions: Question[] = [
    {
        question: "What is the capital of France?",
        difficulty: 0,
        date: "2024-09-13",
        answers: ["Paris"],
    },
    {
        question: "What is the largest planet in our solar system?",
        difficulty: 1,
        date: "2024-09-13",
        answers: ["Jupiter"],
    },
    {
        question: "What is the square root of 256?",
        difficulty: 2,
        date: "2024-09-13",
        answers: ["16"],
    },
    {
        question: "Who wrote Romeo and Juliet?",
        difficulty: 0,
        date: "2024-09-14",
        answers: ["William Shakespeare", "Shakespeare"],
    },
    {
        question: "What is the chemical symbol for gold?",
        difficulty: 1,
        date: "2024-09-14",
        answers: ["Au"],
    },
    {
        question: "What is the capital of Australia?",
        difficulty: 2,
        date: "2024-09-14",
        answers: ["Canberra"],
    },
    {
        question: "Name any one of the three most abundant elements in the earth's crust (making up roughly 47%, 28%, and 8% by weight, respectively).",
        difficulty: 0,
        date: "2024-09-15",
        answers: ["Oxygen, Silicon, and Aluminum", "Oxygen", "Silicon", "Aluminum"],
    },
    {
        question: "In December of 2010, an arrest warrant was issued against WikiLeaks founder Julian Assange to extradite him to what country, for questioning on charges related to alleged sex offenses?",
        difficulty: 1,
        date: "2024-09-15",
        answers: ["Sweden"],
    },
    {
        question: "The lost and hidden (and fictional) Incan city of Parapata is central to the plot of a 2019 film that features the first live-action film appearance of what title character?",
        difficulty: 2,
        date: "2024-09-15",
        answers: ["Dora", "Dora the Explorer"],
    },
];

export default questions;