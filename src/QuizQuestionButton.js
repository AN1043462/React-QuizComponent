import React, { Component } from 'react'
import './App.css'

class QuizQuestionButton extends Component {
  render() {
    return (
	<ul>
   <li>
   <button>{this.props.button_text}</button>
   </li>
   </ul>
    )
  }
}

export default QuizQuestionButton
