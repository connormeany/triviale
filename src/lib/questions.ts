export interface Question {
    question: string;
    difficulty: string;
    date: string;
    answer: string;
}

const questions: Question[] = [
    {
        question: "What is the capital of France?",
        difficulty: "easy",
        date: "2024-09-13",
        answer: "Paris",
    },
    {
        question: "What is the largest planet in our solar system?",
        difficulty: "medium",
        date: "2024-09-13",
        answer: "Jupiter",
    },
    {
        question: "What is the square root of 256?",
        difficulty: "hard",
        date: "2024-09-13",
        answer: "16",
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        difficulty: "easy",
        date: "2024-09-14",
        answer: "William Shakespeare",
    },
    {
        question: "What is the chemical symbol for gold?",
        difficulty: "medium",
        date: "2024-09-14",
        answer: "Au",
    },
    {
        question: "What is the capital of Australia?",
        difficulty: "hard",
        date: "2024-09-14",
        answer: "Canberra",
    },
    {
        question: "What is the smallest prime number?",
        difficulty: "easy",
        date: "2024-09-15",
        answer: "2",
    },
    {
        question: "What year did the Titanic sink?",
        difficulty: "medium",
        date: "2024-09-15",
        answer: "1912",
    },
    {
        question: "What is the longest river in the world?",
        difficulty: "hard",
        date: "2024-09-15",
        answer: "Nile",
    },
];

export default questions;