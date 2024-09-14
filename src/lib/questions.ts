export interface Question {
    question: string;
    difficulty: number;
    date: string;
    answer: string;
}

const questions: Question[] = [
    {
        question: "What is the capital of France?",
        difficulty: 0,
        date: "2024-09-13",
        answer: "Paris",
    },
    {
        question: "What is the largest planet in our solar system?",
        difficulty: 1,
        date: "2024-09-13",
        answer: "Jupiter",
    },
    {
        question: "What is the square root of 256?",
        difficulty: 2,
        date: "2024-09-13",
        answer: "16",
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        difficulty: 0,
        date: "2024-09-14",
        answer: "William Shakespeare",
    },
    {
        question: "What is the chemical symbol for gold?",
        difficulty: 1,
        date: "2024-09-14",
        answer: "Au",
    },
    {
        question: "What is the capital of Australia?",
        difficulty: 2,
        date: "2024-09-14",
        answer: "Canberra",
    },
    {
        question: "What is the smallest prime number?",
        difficulty: 0,
        date: "2024-09-15",
        answer: "2",
    },
    {
        question: "What year did the Titanic sink?",
        difficulty: 1,
        date: "2024-09-15",
        answer: "1912",
    },
    {
        question: "What is the longest river in the world?",
        difficulty: 2,
        date: "2024-09-15",
        answer: "Nile",
    },
];

export default questions;