import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {emojiClicked: false}

  onClickEmoji = () => {
    const {emojiClicked} = this.state
    this.setState({emojiClicked: true})
    console.log(emojiClicked)
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-container">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="emojis-list">
          {emojis.map(eachEmoji => (
            <li className="emoji-and-emotion-container" key={eachEmoji.id}>
              <button
                type="button"
                className="emoji-button"
                onClick={this.onClickEmoji}
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji-image"
                />
              </button>
              <span className="emotion-type"> {eachEmoji.name} </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouSection = () => {
    const {resources} = this.props
    return (
      <div className="feedback-container">
        <img
          src={resources.loveEmojiUrl}
          alt="love emoji"
          className="love-emoji"
        />
        <h1 className="thank-you">Thank you</h1>
        <span className="thank-you-note">
          We will use your feedback to improve over customer support performance
        </span>
      </div>
    )
  }

  render() {
    const {emojiClicked} = this.state
    return (
      <div className="app-container">
        {emojiClicked
          ? this.renderThankYouSection()
          : this.renderFeedbackQuestion()}
      </div>
    )
  }
}

export default Feedback
