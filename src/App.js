import React, { useState, useEffect } from "react";
import "./App.css";

const quizData = [
  // 구성 요소 1: 기본적인 단어 인식 능력
  {
    question: "기본적인 단어 인식 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "기본인식",
  },
  {
    question: "기본적인 단어 인식 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "기본인식",
  },
  {
    question: "기본적인 단어 인식 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "기본인식",
  },
  {
    question: "기본적인 단어 인식 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "기본인식",
  },
  {
    question: "기본적인 단어 인식 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "기본인식",
  },
  {
    question: "기본적인 단어 인식 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "기본인식",
  },
  {
    question: "기본적인 단어 인식 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "기본인식",
  },
  {
    question: "기본적인 단어 인식 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "기본인식",
  },
  {
    question: "기본적인 단어 인식 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "기본인식",
  },
  {
    question: "기본적인 단어 인식 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "기본인식",
  },
  {
    question: "기본적인 단어 인식 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "기본인식",
  },
  {
    question: "기본적인 단어 인식 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "기본인식",
  },
  {
    question: "기본적인 단어 인식 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "기본인식",
  },
  {
    question: "기본적인 단어 인식 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "기본인식",
  },
  {
    question: "기본적인 단어 인식 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "기본인식",
  },
  {
    question: "기본적인 단어 인식 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "기본인식",
  },
  {
    question: "기본적인 단어 인식 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "기본인식",
  },
  {
    question: "기본적인 단어 인식 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "기본인식",
  },
  {
    question: "기본적인 단어 인식 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "기본인식",
  },
  {
    question: "기본적인 단어 인식 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "기본인식",
  },
  // ... 나머지 19문항 (기본인식)

  // 구성 요소 2: 해석 능력
  {
    question: "해석 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "해석능력",
  },
  {
    question: "해석 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "해석능력",
  },
  {
    question: "해석 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "해석능력",
  },
  {
    question: "해석 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "해석능력",
  },
  {
    question: "해석 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "해석능력",
  },
  {
    question: "해석 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "해석능력",
  },
  {
    question: "해석 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "해석능력",
  },
  {
    question: "해석 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "해석능력",
  },
  {
    question: "해석 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "해석능력",
  },
  {
    question: "해석 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "해석능력",
  },
  {
    question: "해석 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "해석능력",
  },
  {
    question: "해석 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "해석능력",
  },
  {
    question: "해석 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "해석능력",
  },
  {
    question: "해석 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "해석능력",
  },
  {
    question: "해석 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "해석능력",
  },
  {
    question: "해석 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "해석능력",
  },
  {
    question: "해석 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "해석능력",
  },
  {
    question: "해석 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "해석능력",
  },
  {
    question: "해석 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "해석능력",
  },
  {
    question: "해석 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "해석능력",
  },
  // ... 나머지 19문항 (해석능력)

  // 구성 요소 3: 비판적 사고 능력
  {
    question: "비판적 사고 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 2,
    category: "비판적사고",
  },
  {
    question: "비판적 사고 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 2,
    category: "비판적사고",
  },
  {
    question: "비판적 사고 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 2,
    category: "비판적사고",
  },
  {
    question: "비판적 사고 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 2,
    category: "비판적사고",
  },
  {
    question: "비판적 사고 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 2,
    category: "비판적사고",
  },
  {
    question: "비판적 사고 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 2,
    category: "비판적사고",
  },
  {
    question: "비판적 사고 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 2,
    category: "비판적사고",
  },
  {
    question: "비판적 사고 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 2,
    category: "비판적사고",
  },
  {
    question: "비판적 사고 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 2,
    category: "비판적사고",
  },
  {
    question: "비판적 사고 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 2,
    category: "비판적사고",
  },
  {
    question: "비판적 사고 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 2,
    category: "비판적사고",
  },
  {
    question: "비판적 사고 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 2,
    category: "비판적사고",
  },
  {
    question: "비판적 사고 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 2,
    category: "비판적사고",
  },
  {
    question: "비판적 사고 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 2,
    category: "비판적사고",
  },
  {
    question: "비판적 사고 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 2,
    category: "비판적사고",
  },
  {
    question: "비판적 사고 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 2,
    category: "비판적사고",
  },
  {
    question: "비판적 사고 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 2,
    category: "비판적사고",
  },
  {
    question: "비판적 사고 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 2,
    category: "비판적사고",
  },
  {
    question: "비판적 사고 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 2,
    category: "비판적사고",
  },
  {
    question: "비판적 사고 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 2,
    category: "비판적사고",
  },
  // ... 나머지 19문항 (비판적사고)

  // 구성 요소 4: 추론 능력
  {
    question: "추론 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "추론능력",
  },
  {
    question: "추론 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "추론능력",
  },
  {
    question: "추론 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "추론능력",
  },
  {
    question: "추론 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "추론능력",
  },
  {
    question: "추론 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "추론능력",
  },
  {
    question: "추론 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "추론능력",
  },
  {
    question: "추론 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "추론능력",
  },
  {
    question: "추론 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "추론능력",
  },
  {
    question: "추론 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "추론능력",
  },
  {
    question: "추론 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "추론능력",
  },
  {
    question: "추론 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "추론능력",
  },
  {
    question: "추론 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "추론능력",
  },
  {
    question: "추론 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "추론능력",
  },
  {
    question: "추론 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "추론능력",
  },
  {
    question: "추론 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "추론능력",
  },
  {
    question: "추론 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "추론능력",
  },
  {
    question: "추론 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "추론능력",
  },
  {
    question: "추론 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "추론능력",
  },
  {
    question: "추론 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "추론능력",
  },
  {
    question: "추론 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 0,
    category: "추론능력",
  },
  // ... 나머지 19문항 (추론능력)

  // 구성 요소 5: 정보의 활용
  {
    question: "정보의 활용 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "정보활용",
  },
  {
    question: "정보의 활용 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "정보활용",
  },
  {
    question: "정보의 활용 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "정보활용",
  },
  {
    question: "정보의 활용 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "정보활용",
  },
  {
    question: "정보의 활용 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "정보활용",
  },
  {
    question: "정보의 활용 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "정보활용",
  },
  {
    question: "정보의 활용 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "정보활용",
  },
  {
    question: "정보의 활용 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "정보활용",
  },
  {
    question: "정보의 활용 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "정보활용",
  },
  {
    question: "정보의 활용 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "정보활용",
  },
  {
    question: "정보의 활용 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "정보활용",
  },
  {
    question: "정보의 활용 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "정보활용",
  },
  {
    question: "정보의 활용 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "정보활용",
  },
  {
    question: "정보의 활용 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "정보활용",
  },
  {
    question: "정보의 활용 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "정보활용",
  },
  {
    question: "정보의 활용 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "정보활용",
  },
  {
    question: "정보의 활용 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "정보활용",
  },
  {
    question: "정보의 활용 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "정보활용",
  },
  {
    question: "정보의 활용 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "정보활용",
  },
  {
    question: "정보의 활용 능력 문제 1",
    options: ["옵션 1", "옵션 2", "옵션 3"],
    answer: 1,
    category: "정보활용",
  },
  // ... 나머지 19문항 (정보활용)
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [categoryScores, setCategoryScores] = useState({}); // 각 카테고리별 점수 저장

  useEffect(() => {
    // 각 카테고리별 점수 계산
    const categoryScoresObj = {};

    quizData.forEach((question, index) => {
      const category = question.category;
      if (category in categoryScoresObj) {
        if (selectedOption === question.answer) {
          categoryScoresObj[category] += 1;
        }
      } else {
        categoryScoresObj[category] =
          selectedOption === question.answer ? 1 : 0;
      }
    });

    setCategoryScores(categoryScoresObj);
  }, [selectedOption]);

  const handleOptionChange = (event) => {
    setSelectedOption(Number(event.target.value));
  };

  const handleSubmit = () => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="App">
        <h1>결과</h1>
        <p>정답 개수: {score}</p>
        <p>총 정답률: {((score / quizData.length) * 100).toFixed(2)}%</p>
        <h2>각 구성 요소별 정답률</h2>
        <ul>
          {Object.entries(categoryScores).map(([category, categoryScore]) => (
            <li key={category}>
              {category}: {((categoryScore / 20) * 100).toFixed(2)}%
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="App">
      {currentQuestion === 0 ? (
        <>
          <h1>독서능력진단검사</h1>
          <p>이것은 독서능력진단검사입니다...</p>
          <button onClick={() => setCurrentQuestion(1)}>시작하기</button>
        </>
      ) : (
        <>
          <h2>{quizData[currentQuestion].question}</h2>
          <form>
            {quizData[currentQuestion].options.map((option, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    value={index}
                    checked={selectedOption === index}
                    onChange={handleOptionChange}
                  />
                  {option}
                </label>
              </div>
            ))}
            <button type="button" onClick={handleSubmit}>
              {currentQuestion === quizData.length - 1 ? "완료" : "다음"}
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
