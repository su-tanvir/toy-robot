# Toy robot
Simulation of a toy robot moving on a square tabletop, i.e: dimensions 5 units x 5 units.

The application can read the following commands:
```
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
```
- *PLACE* will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
- The origin (0,0) can be considered to be the SOUTH WEST most corner.
- The first valid command to the robot is a *PLACE* command, after that, any sequence of commands may be issued, in any order, including another *PLACE* command. The application should discard all commands in the sequence until a
valid *PLACE* command has been executed.
- *MOVE* will move the toy robot one unit forward in the direction it is currently facing.
- *LEFT* and *RIGHT* will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
- *REPORT* will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient.
- A robot that is not on the table can choose to ignore the *MOVE*, *LEFT*, *RIGHT* and *REPORT* commands.
- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed.
- <ins>**Constraints**</ins>
  - The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot.
  - Any move that would cause the robot to fall must be ignored.

## Requirements
- Node v18+
- Npm

## Execution
- Give a look test data files: *std.input.txt*, *expected-output.txt*
```bash
npm install
npm start     # result: output.txt
```

## Notes
- Standard linter
- Standard input/output
- Module pattern