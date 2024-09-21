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
    {
        question: "What material and artistic medium, whose name refers to fired but unglazed clay, was a favorite for architectural ornamentation during the Etruscan era and much later, during the Art Deco era? It was used in one of the most stunning archaeological finds in history, which occurred in 1974.",
        difficulty: 1,
        date: "2024-09-16",
        answers: ["Terra Cotta", "Terra-cotta", "Terra Cota", "Tera Cotta", "Tera Cota"],
    },
    {
        question: "The Tigers, Lions, Giants, Hawks, Buffaloes, Fighters, Dragons, Swallows, and Carp are names of professional clubs in a league playing what sport?",
        difficulty: 0,
        date: "2024-09-16",
        answers: ["Baseball"],
    },
    {
        question: "When it was admitted to the union in 1907, what US state's capital city was Guthrie, before relocating 32 miles south to its present location in 1910?",
        difficulty: 2,
        date: "2024-09-16",
        answers: ["Oklahoma"],
    },
    {
        question: "The first solid body electric guitar manufactured and sold by the Gibson Guitar Corporation, in 1952, was named after (and endorsed by) what American guitarist and inventor?",
        difficulty: 0,
        date: "2024-09-17",
        answers: ["Les Paul"],
    },
    {
        question: "While most mozzarella cheese produced globally is made from cow's milk, a higher end variety, originating in Italy (where it is given special protected geographic status) is made from the milk of what animal?",
        difficulty: 1,
        date: "2024-09-17",
        answers: ["Water Buffalo", "Buffalo"],
    },
    {
        question: "'Jumpman' was an early name for the video game character now known as Mario, and is also unrelatedly the name of a logo owned by what company?",
        difficulty: 2,
        date: "2024-09-17",
        answers: ["Nike"],
    },
    {
        question: "The psychological condition in which a hostage and their captor develop an unnatural and close relationship was first described in a group held hostage in a bank in 1973, who remained supportive of the thieves during and after their captivity. In what city did this episode take place?",
        difficulty: 0,
        date: "2024-09-18",
        answers: ["Stockholm"],
    },
    {
        question: "Virtually the entirety of the southern shore of the Black Sea is the northern coastline of what country?",
        difficulty: 1,
        date: "2024-09-18",
        answers: ["Turkey"],
    },
    {
        question: "The expression 'too big to fail', associated with the theory that some institutions are so large and interconnected with the economy that their failure would have outsized impacts on the economic system, was coined in the 1980s, but during the 2008 financial crisis, it was commonly used to describe several entities—and especially the actual collapse and bankruptcy of what financial-services firm, which was founded in 1850 and was (prior to its failure) the fourth-largest investment bank in the United States?",
        difficulty: 2,
        date: "2024-09-18",
        answers: ["Lehman Brothers", "Lehman", "The Lehman Brothers", "Lehman Brother"],
    },
    {
        question: "What is the largest ocean in the world?",
        difficulty: 0,
        date: "2024-09-19",
        answers: ["Pacific", "The Pacific", "Pacific Ocean", "The Pacific Ocean"],
    },
    {
        question: "A parabola is defined as a set of points on a plane equidistant from a given line and a given fixed point. The line is called the directrix; what is the term most commonly used for the fixed point?",
        difficulty: 1,
        date: "2024-09-19",
        answers: ["Focus", "the focus", "foci", "the foci", "focuses"],
    },
    {
        question: "In the history of the Grammy awards, three songs have won Record of the Year or Song of the Year whose titles reference an American city (New Orleans, San Francisco, Philadelphia). What is the only song to do so whose title references a Brazilian neighborhood?",
        difficulty: 2,
        date: "2024-09-19",
        answers: ["The Girl From Ipanema", "Ipanema"],
    },
    {
        question: "What sport is known as 'America's pastime'?",
        difficulty: 0,
        date: "2024-09-20",
        answers: ["Baseball"],
    },
    {
        question: "Australian food technologist Cyril P. Callister is widely credited as the inventor of what food, developed after imports of a similar (and similarly named) British item were interrupted following WWI?",
        difficulty: 1,
        date: "2024-09-20",
        answers: ["Vegemite"],
    },
    {
        question: "72% of the liquid natural gas (LNG) imported into the U.S. comes from what Caribbean twin-island nation which, due largely to its petrochemical and industrial economy, is, by per capita GDP, the third-richest country in the Americas after the U.S. and Canada?",
        difficulty: 2,
        date: "2024-09-20",
        answers: ["Trinidad and Tobago", "Trinidad", "Tobago", "Trinidad & Tobago"],
    },
    {
        question: "What is the largest desert in the world?",
        difficulty: 0,
        date: "2024-09-21",
        answers: ["Antarctica"],
    },
    {
        question: "Mars's reddish appearance (hence the 'Red Planet') is due to the prevalence on the planet's surface of what oxide?",
        difficulty: 2,
        date: "2024-09-21",
        answers: ["Iron Oxide", "Iron"],
    },
    {
        question: "In February 2024, what tech giant reported an annual revenue increase of 265%, thanks to booming sales of its generative-AI chips for servers, which sent its stock soaring toward a market capitalization of nearly $2 trillion?",
        difficulty: 1,
        date: "2024-09-21",
        answers: ["NVIDIA", "NVDA"],
    },
    {
        question: "What is the capital of California?",
        difficulty: 0,
        date: "2024-09-22",
        answers: ["Sacramento"],
    },
    {
        question: "The first woman to successfully claim the crown of England, doing so in 1553, was commonly known—especially by Protestants—by what sanguineous sobriquet?",
        difficulty: 1,
        date: "2024-09-22",
        answers: ["Bloody Mary"],
    },
    {
        question: "The English Premier League, Spanish Primera División (La Liga), the French Ligue 1, Italian Serie A, and Dutch Eredivisie: What is the German entity that corresponds to the items in this list?",
        difficulty: 2,
        date: "2024-09-22",
        answers: ["Bundesliga", "The Bundesliga"],
    },
];

export default questions;