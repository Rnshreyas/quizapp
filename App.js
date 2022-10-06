import {useState} from "react"
function App(){
  const questions=[
    {
      questionText:"which is the javascript frontend framework used to create single page application?",
      answerOption:[
        {answerText:"NODE JS",isCorrect:false},
        {answerText:"REACT JS",isCorrect:true},
        {answerText:"EXPRESS JS",isCorrect:false},
        {answerText:"MANGO DB",isCorrect:false},
      ]
    },
    {
      questionText:"which is the framework of NODE JS?",
      answerOption:[
        {answerText:"ANGULAR JS",isCorrect:false},
        {answerText:"REACT JS",isCorrect:false},
        {answerText:"EXPRESS JS",isCorrect:true},
        {answerText:"MANGO DB",isCorrect:false},
      ]
    },
    {
    questionText:"in REACT,what method is used to change state?",
    answerOption:[
      {answerText:"chnageState()",isCorrect:false},
      {answerText:"onChange()",isCorrect:false},
      {answerText:"setState()",isCorrect:true},
      {answerText:"stateSet()",isCorrect:false},
  ]
},
{
  questionText:"what does HTML stands for?",
  answerOption:[
    {answerText:"Hyper text preprocessor",isCorrect:false},
    {answerText:"Hyper text markup language",isCorrect:true},
    {answerText:"Hyper text multiple language",isCorrect:false},
    {answerText:"Hyper tool multi language",isCorrect:false},
  ]
},
{
  questionText:"what does CSS stands for?",
  answerOption:[
    {answerText:"central style sheets",isCorrect:false},
    {answerText:"casecading style sheets",isCorrect:true},
    {answerText:"casecading simple sheets",isCorrect:false},
    {answerText:"case style sheets",isCorrect:false},
  ]
},
{
questionText:"everything in react is a",
answerOption:[
  {answerText:"Module",isCorrect:false},
  {answerText:"Component",isCorrect:true},
  {answerText:"Package",isCorrect:false},
  {answerText:"Class",isCorrect:false},
]
},
{
  questionText:"how many elements does a react component return?",
  answerOption:[
    {answerText:"2 elements",isCorrect:false},
    {answerText:"1 element",isCorrect:false},
    {answerText:"multiple elements",isCorrect:true},
    {answerText:"none of the above",isCorrect:false},
  ]
},
{
  questionText:"which is the javascript frontend framework used to create single page application?",
  answerOption:[
    {answerText:"NODE JS",isCorrect:false},
    {answerText:"REACT JS",isCorrect:true},
    {answerText:"EXPRESS JS",isCorrect:false},
    {answerText:"MANGO DB",isCorrect:false},
  ]
},
{
  questionText:"what is the full form of DOM?",
  answerOption:[
    {answerText:"document object modem",isCorrect:false},
    {answerText:"document object model",isCorrect:true},
    {answerText:"document output model",isCorrect:false},
    {answerText:"documents out modem",isCorrect:false},
  ]
},
{
  questionText:"what is the full form of jsx?",
  answerOption:[
    {answerText:"javascript library",isCorrect:false},
    {answerText:"javascript extension",isCorrect:true},
    {answerText:"jquery extension",isCorrect:false},
    {answerText:"jquery library",isCorrect:false},
  ]
}
  ]
  const [currentQuestion,setCurrentQuestion]=useState(0)
  const [showScore,setShowScore]=useState(false)
  const [score,setScore]=useState(0)
  const handle=(isCorrect)=>{
    if (isCorrect){
    setScore(score+1)
  }
  const nextQuestion=currentQuestion+1
  if(nextQuestion<questions.length){
    setCurrentQuestion(nextQuestion)
  }
  else{
    setShowScore(true)
  }
  }
  return(
    <div className="quiz">
      {showScore ?(
        <div className="score-section">
          you scored {score} out of {questions.length}
      </div>
      ):(
        <>
        <div className="question-section">
          <span>Question{currentQuestion+1}</span> / {questions.length}
          </div>
          <div>{questions[currentQuestion].questionText}</div>
          <div className="answer-section">
            {questions[currentQuestion].answerOption.map((answerOption) => (
              <button onClick={() => handle(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
          </>
      )}
      </div>
  )
}
export default App