import { isNumber, isString } from './helpers.js'

const BOARD_SIZE = 5

const DIRECTION = {
  NORTH: 'NORTH',
  EAST: 'EAST',
  SOUTH: 'SOUTH',
  WEST: 'WEST'
}

const ROTATION = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
}

let robot = { x: -1, y: -1, direction: null }

function placeRobot (x, y, direction) {
  if (!isValidRobotPlace(x, y, direction)) return
  setRobotPlace(x, y, direction)
}

function moveRobot () {
  const { x, y, direction } = getRobotPlace()
  if (!isValidRobotPlace(x, y, direction)) return

  if (direction === DIRECTION.EAST && x + 1 < BOARD_SIZE) robot.x++
  else if (direction === DIRECTION.WEST && x - 1 >= 0) robot.x--
  else if (direction === DIRECTION.NORTH && y + 1 < BOARD_SIZE) robot.y++
  else if (direction === DIRECTION.SOUTH && y - 1 >= 0) robot.y--
}

function changeDirection (orientation) {
  const { x, y, direction } = getRobotPlace()
  if (!isValidRobotPlace(x, y, direction)) return

  const directions = Object.values(DIRECTION)
  const currentDirectionIndex = directions.indexOf(direction)
  if (currentDirectionIndex === -1) return

  if (orientation === ROTATION.LEFT) {
    const nextDirectionIndex = currentDirectionIndex - 1
    robot.direction = directions.at(nextDirectionIndex)
  } else if (orientation === ROTATION.RIGHT) {
    const nextDirectionIndex = currentDirectionIndex + 1
    robot.direction = directions.at(nextDirectionIndex)
  }
}

const isValidPosition = (value) => {
  return isNumber(value) && (value >= 0 && value < BOARD_SIZE)
}

const isValidDirection = (value) => {
  return isString(value) && Object.values(DIRECTION).includes(value)
}

const isValidRobotPlace = (x, y, direction) => {
  return isValidPosition(x) && isValidPosition(y) && isValidDirection(direction)
}

const getRobotPlace = () => { return robot }

const setRobotPlace = (x, y, direction) => { robot = { x: Number(x), y: Number(y), direction } }

const reportRobotPlace = () => {
  const { x, y, direction } = getRobotPlace()
  if (!isValidRobotPlace(x, y, direction)) return
  return { x, y, direction }
}

export { changeDirection, moveRobot, placeRobot, reportRobotPlace }
