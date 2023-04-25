import React from 'react'
import { formatDistance } from 'date-fns'

export const ThoughtItem = ({ thought, thoughtId }) => {
  const sendHearts = () => {
    // handleLikesIncrease();
    const options = {
      method: 'POST'
    }
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`, options)
      .then((response) => response.json())
      .then((data) => { console.log(data) })
      .catch((error) => console.log(error))
      .finally(() => { console.log('heart count increased') })
  }

  const heartBtn = thought.hearts > 0 ? 'heart-btn heart-btn-active' : 'heart-btn';

  return (
    <div className="card">
      <p className="thought-text">{thought.message}</p>

      <div className="likes">
        <div className="button-card" />
        <button
          className={heartBtn}
          type="button"
          aria-label="like this thought"
          aria-pressed={thought.hearts > 0 ? 'true' : 'false'}
          onClick={sendHearts}>
          <span className="heart">❤️</span>
        </button>
         x   {thought.hearts}
      </div>
      <p className="date">
        {formatDistance(new Date(thought.createdAt), Date.now(), {
          addSuffix: true
        })}
      </p>
    </div>
  )
};

export default ThoughtItem