// const INITIAL_STATE = {
//     userName: "Moid Khan"
// }

const quizData = [
    {
        question: "What does HTML stand for ?",
        options: ["Hyper Text Markup Language", "Hyper Text Makeup Language", "Hyper Text Markup Line", "Hyper Text Makeup Lines"],
        correctAnswers: "Hyper Text Markup Language",
      },
      {
        question: "What does CSS stand for ?",
        options: ["Cascading Study Sheet", "Computer Study Sheet", "Cascading Style Sheet", "None of these"],
        correctAnswers: "Cascading Style Sheet",
      },
      {
        question: "What does JS stand for ?",
        options: ["JavaSource", "JamStack", "JavaScript", "JarvisScript"],
        correctAnswers: "JavaScript",
      },
      {
        question: "In HTML, the element defining a table heading is ?",
        options: ["<style>", "<head>", "<thead>", "<th>"],
        correctAnswers: "<th>",
      },
      {
        question: "An HTML element is known to be <ins>, defines ?",
        options: ["Incapsulation", "Insertion", "Instance", "Instantiation"],
        correctAnswers: "Insertion",
      },
      {
        question: "Choose the correct option of defining a variable ?",
        options: ["var a : 10", "var 10 = a", "a var = 10", "var a = 10"],
        correctAnswers: "var a = 10",
      },
      {
        question: "Choose the correct CSS property ?",
        options: ["text-decoration", "text-decleration", "text-deformation", "text-description"],
        correctAnswers: "text-decoration",
      },
      {
        question: "How many ways we can use CSS in project ?",
        options: ["One", "Two", "Three", "Four"],
        correctAnswers: "Three",
      },
      {
        question: "Inside which HTML element do we put the JavaScript ?",
        options: ["<javascript>", "<scripting>", "<script>", "<js>"],
        correctAnswers: "<script>",
      },
      {
        question: "What is the correct syntax for referring to an external script called 'xxx.js' ?",
        options: ["<script name='xxx.js'>", "<script src='xxx.js'>", "<script href='xxx.js'>", "None of the above"],
        correctAnswers: "<script src='xxx.js'>",
      }
]


const reducer = ((state=quizData) => state)

export default reducer