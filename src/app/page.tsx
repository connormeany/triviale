"use client"

import { useState, useEffect, KeyboardEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Share2 } from "lucide-react"
import questions, { Question } from "@/lib/questions"

const initialGameState = {
  currentQuestion: 0,
  answers: ["", "", ""],
  isCorrect: [false, false, false],
  showAnswer: false,
  gameOver: false,
  date: (() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toLocaleDateString("en-CA", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  })(),
}

const initialGameResults = {
  easyCorrect: 0,
  easyTotal: 0,
  mediumCorrect: 0,
  mediumTotal: 0,
  hardCorrect: 0,
  hardTotal: 0,
}

export default function TrivialeGame() {
  const [gameState, setGameState] = useState(initialGameState)
  const [gameResults, setGameResults] = useState(initialGameResults)
  const [currentGuess, setCurrentGuess] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([])

  const [easyPercent, setEasyPercent] = useState(0)
  const [mediumPercent, setMediumPercent] = useState(0)
  const [hardPercent, setHardPercent] = useState(0)

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowDate = tomorrow.toLocaleDateString("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const today = tomorrow.toLocaleDateString("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('trivialeGameState') || '{}')
    const savedResults = localStorage.getItem('trivialeGameResults')

    if (savedState && savedState.date === tomorrowDate) {
      setGameState(savedState)
    }
    if (savedResults) {
      setGameResults(JSON.parse(savedResults))
    }
    const filtQuestions = questions
      .filter(q => new Date(q.date).toISOString().split('T')[0] === today)
      .sort((a, b) => a.difficulty - b.difficulty);
    setFilteredQuestions(filtQuestions)
    setIsLoading(false)
  }, [today])

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('trivialeGameState', JSON.stringify(gameState))
    }
  }, [gameState, isLoading])

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('trivialeGameResults', JSON.stringify(gameResults))
    }
  }, [gameResults, isLoading])

  useEffect(() => {
    if (gameState.gameOver) {
      const easyFinalPercent =
        gameResults.easyTotal > 0
          ? (gameResults.easyCorrect / gameResults.easyTotal) * 100
          : 0
      const mediumFinalPercent =
        gameResults.mediumTotal > 0
          ? (gameResults.mediumCorrect / gameResults.mediumTotal) * 100
          : 0
      const hardFinalPercent =
        gameResults.hardTotal > 0
          ? (gameResults.hardCorrect / gameResults.hardTotal) * 100
          : 0

      animatePercentage(easyFinalPercent, setEasyPercent)
      animatePercentage(mediumFinalPercent, setMediumPercent)
      animatePercentage(hardFinalPercent, setHardPercent)
    }
  }, [gameState.gameOver])

  const animatePercentage = (endValue: number, setter: (value: number) => void) => {
    let startValue = 0
    const duration = 1000
    const stepTime = 10
    const totalSteps = Math.ceil(duration / stepTime)
    const increment = endValue / totalSteps

    const animate = () => {
      startValue += increment
      if (startValue >= endValue) {
        setter(endValue)
      } else {
        setter(startValue)
        setTimeout(animate, stepTime)
      }
    }
    animate()
  }

  const handleSubmitGuess = () => {
    if (gameState.showAnswer) return

    const currentQuestion = filteredQuestions[gameState.currentQuestion]
    const isCorrect = currentQuestion.answers.some(answer => answer.toLowerCase() === currentGuess.toLowerCase())
    const newAnswers = [...gameState.answers]
    newAnswers[gameState.currentQuestion] = currentGuess
    const newIsCorrect = [...gameState.isCorrect]
    newIsCorrect[gameState.currentQuestion] = isCorrect

    setGameResults({
      easyCorrect: gameResults.easyCorrect + (currentQuestion.difficulty === 0 && isCorrect ? 1 : 0),
      easyTotal: gameResults.easyTotal + (currentQuestion.difficulty === 0 ? 1 : 0),
      mediumCorrect: gameResults.mediumCorrect + (currentQuestion.difficulty === 1 && isCorrect ? 1 : 0),
      mediumTotal: gameResults.mediumTotal + (currentQuestion.difficulty === 1 ? 1 : 0),
      hardCorrect: gameResults.hardCorrect + (currentQuestion.difficulty === 2 && isCorrect ? 1 : 0),
      hardTotal: gameResults.hardTotal + (currentQuestion.difficulty === 2 ? 1 : 0),
    })

    setGameState({
      ...gameState,
      answers: newAnswers,
      isCorrect: newIsCorrect,
      showAnswer: true,
    })
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmitGuess()
    }
  }

  const handleNextQuestion = () => {
    if (gameState.currentQuestion === filteredQuestions.length - 1) {
      setGameState({ ...gameState, gameOver: true })
    } else {
      setGameState({
        ...gameState,
        currentQuestion: gameState.currentQuestion + 1,
        showAnswer: false,
      })
    }
    setCurrentGuess("")
  }

  const shareResults = () => {
    const results = gameState.isCorrect.reduce((acc, curr) => acc + (curr ? "🟩" : "🟥"), "")
    const correctAnswers = gameState.isCorrect.filter(Boolean).length;
    const daysSince = Math.floor((new Date().getTime() - new Date("2024-09-12").getTime()) / (1000 * 60 * 60 * 24));
    const shareText = `Triviale ${daysSince} ${correctAnswers}/${filteredQuestions.length}:\n${results}`
    
    navigator.clipboard.writeText(shareText).then(() => {
      console.log('Results copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });

    if (navigator.share) {
      navigator.share({
        title: 'My Triviale Results',
        text: shareText,
      }).catch(console.error)
    } else {
      // Fallback for browsers that don't support Web Share API
      alert("Copy this to share:\n\n" + shareText)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Triviale</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!gameState.gameOver ? (
            <div className="space-y-4">
              <h3 className="font-semibold mb-2">{filteredQuestions[gameState.currentQuestion].question}</h3>
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Enter your answer"
                  value={currentGuess}
                  onChange={(e) => setCurrentGuess(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={gameState.showAnswer}
                />
                <Button onClick={handleSubmitGuess} disabled={gameState.showAnswer}>
                  Submit
                </Button>
              </div>
              {gameState.showAnswer && (
                <div className="mt-4">
                  <p className={gameState.isCorrect[gameState.currentQuestion] ? "text-green-600" : "text-red-600"}>
                    {gameState.isCorrect[gameState.currentQuestion] ? "Correct!" : "Incorrect."}
                  </p>
                  <p>The correct answer is: {filteredQuestions[gameState.currentQuestion].answers[0]}</p>
                  <Button className="mt-2" onClick={handleNextQuestion}>
                    {gameState.currentQuestion === filteredQuestions.length - 1 ? "See Results" : "Next Question"}
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">
                  Easy: {gameResults.easyCorrect}/{gameResults.easyTotal} (
                  {Math.round(easyPercent)}%)
                </h4>
                <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-green-500 h-full"
                    style={{
                      width: `${easyPercent}%`,
                      transition: "width 1s linear",
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold">
                  Medium: {gameResults.mediumCorrect}/{gameResults.mediumTotal} (
                  {Math.round(mediumPercent)}%)
                </h4>
                <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-yellow-500 h-full"
                    style={{
                      width: `${mediumPercent}%`,
                      transition: "width 1s linear",
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold">
                  Hard: {gameResults.hardCorrect}/{gameResults.hardTotal} (
                  {Math.round(hardPercent)}%)
                </h4>
                <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-red-500 h-full"
                    style={{
                      width: `${hardPercent}%`,
                      transition: "width 1s linear",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <Button className="w-full font-bold" onClick={shareResults}>
                <Share2 className="mr-2 h-4 w-4" /> Share Today&apos;s Results
            </Button>
            <h3 className="font-semibold mb-2">Today&apos;s Results:</h3>
            {filteredQuestions.map((q, index) => (
              <div key={index} className="border p-2 rounded-md">
                <p className="font-medium">{q.question}</p>
                <p className={gameState.isCorrect[index] ? "text-green-600" : "text-red-600"}>
                  Your answer: {gameState.answers[index]}
                </p>
                <p>Correct answer: {q.answers[0]}</p>
              </div>
            ))}
            
              
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}