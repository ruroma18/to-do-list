import axios from 'axios';

export async function getTask() {
  const response = await axios.get('http://www.boredapi.com/api/activity/')
  return response.data
}

export async function getIdeas() {
  const response = await axios.get('http://localhost:5000/api/ideas');

  return response.data;
}

export async function createIdeas(myIdeas, doneIdeas, achievements) {
  const response = await axios.post('http://localhost:5000/api/ideas', {
    myIdeas,
    doneIdeas,
    achievements
  })

  return response.data
}