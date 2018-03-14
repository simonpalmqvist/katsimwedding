import pipe from './pipe'

const getTimeLeft = date => new Date(date) - new Date()
const convertToDays = date => date / (1000 * 60 * 60 * 24)

export default pipe(
  getTimeLeft,
  convertToDays,
  Math.round
)