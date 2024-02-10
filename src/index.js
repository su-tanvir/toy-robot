import readline from 'readline'
import { changeDirection, moveRobot, placeRobot, reportRobotPlace } from './robot.js'

const COMMAND = {
  PLACE: 'PLACE',
  MOVE: 'MOVE',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  REPORT: 'REPORT'
}

const lineReader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

lineReader.on('line', (input) => {
  const [key, values] = input.split(' ')

  if (key === COMMAND.PLACE) {
    const [x, y, direction] = values.split(',')
    placeRobot(x, y, direction)
  } else if (key === COMMAND.MOVE) {
    moveRobot()
  } else if (key === COMMAND.LEFT || key === COMMAND.RIGHT) {
    changeDirection(key)
  } else if (key === COMMAND.REPORT) {
    const report = reportRobotPlace()
    if (!report) return
    const { x, y, direction } = report
    console.log(`${x},${y},${direction}`)
  }
})
