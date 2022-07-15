import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createAnecdote = async (content) => {
    const object = { content, votes:0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const updateAnecdote = async (content) => {
    const object = { ...content, votes: content.votes + 1}
    const response = await axios.put(`${baseUrl}/${content.id}`, object)
    return response.data
}

export default { getAll, createAnecdote, updateAnecdote }
