import MultiAnswerComponent from './multiAnswers';
import SingleAnswerComponent from './singleAnswer';
import './style.css';

const questions = [
 {
  question: 'Do consectetur ullamco ipsum veniam.',
  answers: [
   'Esse dolore esse sint proident voluptate cillum.',
   'Deserunt adipisicing est anim aliqua officia non ut do in.',
   'Amet magna proident labore laboris est commodo culpa ea.'
  ],
  correctAnswer: 0
 },
 {
  question: 'Velit nulla fugiat reprehenderit deserunt.',
  answers: [
   'Esse exercitation et minim mollit aute dolore incididunt reprehenderit tempor velit labore officia.',
   'Non cupidatat nisi officia ullamco.',
   'Ad nostrud voluptate ea duis.'
  ],
  correctAnswer: 0
 },
 {
  question: 'Consectetur quis anim ullamco sunt irure cillum irure aliqua culpa consectetur cupidatat nostrud Lorem incididunt.',
  answers: [
   'Dolore consequat exercitation magna aliquip quis ipsum dolore.',
   'Lorem pariatur excepteur commodo voluptate deserunt duis eiusmod pariatur culpa fugiat.',
   'Amet cupidatat velit deserunt officia laboris proident deserunt et.'
  ],
  correctAnswer: 0
 }
 ,
 {
  question: 'Mollit amet adipisicing laboris cupidatat esse velit exercitation culpa.',
  answers: [
   'Irure laboris tempor ut in in.',
   'Do consectetur occaecat ad dolore.',
   'Nulla deserunt voluptate id qui esse sint sit do in.'
  ],
  correctAnswer: [0, 2]
 }
];


const QuestionsComponent = () => {

 return (
  <div className='questions'>
   <h1>Questions</h1>
   <div className='container'>

    {
     questions.map(el => (
      Array.isArray(el.correctAnswer)
       ? <MultiAnswerComponent
        answers={el.answers}
        question={el.question}
        correctAnswer={el.correctAnswer}
       />
       : <SingleAnswerComponent
        answers={el.answers}
        question={el.question}
        correctAnswer={el.correctAnswer}
       />
     ))
    }

   </div>
  </div>
 );
};

export default QuestionsComponent;