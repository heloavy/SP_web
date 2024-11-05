import { useState, useEffect } from 'react';
import {
  Timer,
  CheckCircle,
  Cancel,
  NavigateNext,
  NavigateBefore,
  Flag
} from '@mui/icons-material';
import './QuizSystem.css';

function QuizSystem() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [quizComplete, setQuizComplete] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What is the value of π (pi) to two decimal places?",
      options: ["3.14", "3.12", "3.16", "3.18"],
      correct: 0
    },
    // More questions...
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          setQuizComplete(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSelectOption = (questionId, optionIndex) => {
    if (quizComplete) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    Object.entries(selectedAnswers).forEach(([questionId, answer]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      if (question.correct === answer) correct++;
    });
    return (correct / questions.length) * 100;
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="quiz-container">
        <div className="result-summary">
          <h2>Quiz Complete!</h2>
          <div className={`score-circle ${score >= 70 ? 'pass' : 'fail'}`}>
            {score}%
          </div>
          <h3>Your Score: {score}%</h3>
          <p>{score >= 70 ? 'Congratulations!' : 'Keep practicing!'}</p>
          <button className="button button-primary" onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>Mathematics Quiz</h2>
        <div className={`timer-display ${timeLeft < 300 ? 'warning' : ''}`}>
          <Timer />
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="progress-bar">
        <div 
          className="progress" 
          style={{width: `${(currentQuestion + 1) / questions.length * 100}%`}}
        ></div>
      </div>

      <div className="question-card">
        <h3>Question {currentQuestion + 1} of {questions.length}</h3>
        <p>{questions[currentQuestion].question}</p>

        <div className="option-list">
          {questions[currentQuestion].options.map((option, index) => (
            <div
              key={index}
              className={`option ${
                selectedAnswers[questions[currentQuestion].id] === index ? 'selected' : ''
              }`}
              onClick={() => handleSelectOption(questions[currentQuestion].id, index)}
            >
              {option}
            </div>
          ))}
        </div>

        <div className="navigation-buttons">
          <button
            className="button button-secondary"
            onClick={() => setCurrentQuestion(prev => prev - 1)}
            disabled={currentQuestion === 0}
          >
            <NavigateBefore /> Previous
          </button>
          
          {currentQuestion === questions.length - 1 ? (
            <button 
              className="button button-primary"
              onClick={() => setShowResults(true)}
            >
              Submit Quiz
            </button>
          ) : (
            <button
              className="button button-primary"
              onClick={() => setCurrentQuestion(prev => prev + 1)}
              disabled={currentQuestion === questions.length - 1}
            >
              Next <NavigateNext />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizSystem; 