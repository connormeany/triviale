"use client"

import { useState, useEffect, KeyboardEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Share2 } from "lucide-react"
import questions, { Question } from "@/lib/questions" // Import Question interface

const initialGameState = {
  currentQuestion: 0,
  answers: ["", "", ""],
  isCorrect: [false, false, false],
  showAnswer: false,
  gameOver: false,
}

export default function TrivialeGame() {
  const [gameState, setGameState] = useState(initialGameState)
  const [currentGuess, setCurrentGuess] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]) // Use Question interface

  // Get today's date in EST
  const today = new Date().toLocaleDateString("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  

  // Filter questions based on today's date
  useEffect(() => {
    const savedState = localStorage.getItem('trivialeGameState')
    if (savedState) {
      setGameState(JSON.parse(savedState))
    }
    const filtQuestions = questions.filter(q => new Date(q.date).toISOString().split('T')[0] === today);
    setFilteredQuestions(filtQuestions)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('trivialeGameState', JSON.stringify(gameState))
    }
  }, [gameState, isLoading])

  const handleSubmitGuess = () => {
    if (gameState.showAnswer) return

    const isCorrect = currentGuess.toLowerCase() === filteredQuestions[gameState.currentQuestion].answer.toLowerCase()
    const newAnswers = [...gameState.answers]
    newAnswers[gameState.currentQuestion] = currentGuess
    const newIsCorrect = [...gameState.isCorrect]
    newIsCorrect[gameState.currentQuestion] = isCorrect

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
    const shareText = `Triviale 1 ${correctAnswers}/${filteredQuestions.length}:\n${results}`
    
    // Copy to clipboard
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
                  <p>The correct answer is: {filteredQuestions[gameState.currentQuestion].answer}</p>
                  <Button className="mt-2" onClick={handleNextQuestion}>
                    {gameState.currentQuestion === filteredQuestions.length - 1 ? "See Results" : "Next Question"}
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="font-semibold mb-2">Your Results:</h3>
              {filteredQuestions.map((q, index) => (
                <div key={index} className="border p-4 rounded-md">
                  <p className="font-medium">{q.question}</p>
                  <p className={gameState.isCorrect[index] ? "text-green-600" : "text-red-600"}>
                    Your answer: {gameState.answers[index]}
                  </p>
                  <p>Correct answer: {q.answer}</p>
                </div>
              ))}
              <Button className="w-full" onClick={shareResults}>
                <Share2 className="mr-2 h-4 w-4" /> Share Results
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}