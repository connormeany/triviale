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
        question: "Name any one of the three most abundant elements in the earth's crust (making up roughly 47%, 28%, and 8% by weight, respectively).",
        difficulty: 0,
        date: "2024-09-14",
        answers: ["Oxygen, Silicon, and Aluminum", "Oxygen", "Silicon", "Aluminum"],
    },
    {
        question: "In December of 2010, an arrest warrant was issued against WikiLeaks founder Julian Assange to extradite him to what country, for questioning on charges related to alleged sex offenses?",
        difficulty: 1,
        date: "2024-09-14",
        answers: ["Sweden"],
    },
    {
        question: "The lost and hidden (and fictional) Incan city of Parapata is central to the plot of a 2019 film that features the first live-action film appearance of what title character?",
        difficulty: 2,
        date: "2024-09-14",
        answers: ["Dora the Explorer", "Dora"],
    },
    {
        question: "The cities of New York, Venice, Berlin, Las Vegas, and Bilbao are current or previous homes to art museums established by what foundation (after which the museums are all named)? ",
        difficulty: 0,
        date: "2024-09-15",
        answers: ["Guggenheim", "The Guggenheim"],
    },
    {
        question: "The HBO drama series The Idol was co-created by and stars Abel Tesfaye, who is better known by what stage name? ",
        difficulty: 1,
        date: "2024-09-15",
        answers: ["The Weeknd", "Weeknd", "The Weekend", "Weekend"],
    },
    {
        question: "What word, derived in part from a term in Old Norse for color, is used for a water-soluble mixture of various naturally occurring organic dyes extracted from lichens that is used to test materials for acidity?",
        difficulty: 2,
        date: "2024-09-15",
        answers: ["Litmus"],
    },
];

export default questions;