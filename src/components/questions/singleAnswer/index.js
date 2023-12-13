import { useEffect, useRef, useState } from 'react';
import './style.css';
import * as uuid from 'uuid';

const SingleAnswerComponent = (props) => {
  let selectedAnswerIndex = null;
  /**
   * Відображення кнопки
   */
  const [showCorrectButton, setShowCorrectButton] = useState(false);
  /**
   * Підрахунок не вдалих спроб
   */
  const [attempts, setAttempts] = useState(0);

  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);


  useEffect(() => {
    if (attempts > 2) {
      setShowCorrectButton(true);
    }
  }, [attempts]);


  const radioClick = (index) => {
    selectedAnswerIndex = index;
    wrongRef.current.classList.remove('selected');
    correctRef.current.classList.remove('selected');
    setShowCorrectButton(false);
  };

  const correctRef = useRef(null);
  const wrongRef = useRef(null);

  const checkOnClick = () => {
    if (selectedAnswerIndex === props.correctAnswer) {
      correctRef.current.classList.add('selected');
      wrongRef.current.classList.remove('selected');
    } else {
      wrongRef.current.classList.add('selected');
      correctRef.current.classList.remove('selected');
      /**
       * false => false + 1 >= 3
       *          0 >= 3
       * new value => false
       * prev => prev + 1 >= 3
       */
      // setShowCorrectButton((prev) => prev + 1 >= 3);
      setAttempts(prev => prev + 1);
    }
  };

  const showCorrectAnswerClick = () => {
    setShowCorrectAnswer(true);
    // correctRef.current.classList.add('selected');
    // wrongRef.current.classList.remove('selected');
    // Додаткова логіка, яка може змінитися в залежності від потреб
    // Наприклад, можна реалізувати дію після відображення правильної відповіді
  };

  const qId = uuid.v1();

  return (
    <div className='question single-answer'>
      <div><h3>{props.question}</h3></div>
      <div className='answers'>
        {props.answers.map((answer, i) => {
          const id = uuid.v1();
          return (
            <div key={id}>
              <input
                id={id}
                type='radio'
                name={`group-${qId}`}
                onClick={() => radioClick(i)}
                checked={showCorrectAnswer ? i === props.correctAnswer : undefined}
              />
              <label htmlFor={id}>{answer}</label>
            </div>
          );
        })}
      </div>
      <div className='check'>
        <div className='button' onClick={checkOnClick}>
          check my answer
          <div ref={correctRef} className='correct'>correct</div>
          <div ref={wrongRef} className='wrong'>wrong</div>
        </div>
        {showCorrectButton && (
          <button onClick={showCorrectAnswerClick}>show me correct answer</button>
        )}
      </div>
    </div>
  );
};

export default SingleAnswerComponent;
