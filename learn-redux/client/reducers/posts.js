// A reducer takes in 2 things:

// 1. The action: info about what happened
// 2. copy of current state

function posts (state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES' :
      console.log('Incrementing Likes!!')
      const i = action.index
      // Return the updated state
      return [
        ...state.slice(0, i), // before the one being udpated
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1) // after the one being updated
      ]
    default:
      return state
  }
}

export default posts
