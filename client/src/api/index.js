import axios from 'axios';

export async function getTask() {
  const response = await axios.get('http://www.boredapi.com/api/activity/')
  return response.data
}