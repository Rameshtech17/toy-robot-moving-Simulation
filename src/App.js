/* eslint-disable no-useless-concat */
/* eslint-disable eqeqeq */
import './App.css';
import { Face } from './Face';
import React, { useState } from 'react';
function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(5);
  const [instruction, setInstruction] = useState("");
  const [history, setHistory] = useState([]);
  const [direction, setDirection] = useState("RIGHT")
  const [rotate, setRotate] = useState(0)
  const [result, setResult] = useState("")

  const setVal = () => {
    let cmd = instruction.split(" ");
    history.push(instruction)
    if (cmd[0] == "PLACE") {
      let pos = cmd[1].split(',')
      setX(parseInt(pos[0]))
      setY(parseInt(pos[1]))
      if (pos[2] === "NORTH") (setRotate(180))
      if (pos[2] === "SOUTH") (setRotate(0))
      if (pos[2] === "EAST") (setRotate(270))
      if (pos[2] === "WEST") setRotate(90)

    }
    if (cmd[0] == "RIGHT") {
      setDirection("RIGHT")
      setRotate(rotate + 90)
    }
    if (cmd[0] == "LEFT") {
      setDirection("LEFT")
      setRotate(rotate - 90)
    }
    if (direction == "RIGHT") {
      if (cmd[0] == "MOVE") {
        if (rotate % 360 == 180 || rotate % 360 == -180) {
          if (y < 4)
            setY(y + 1)
        }
        if (rotate % 360 == 0 || rotate % 360 == -0) {
          if (y > 0)
            setY(y - 1)
        }
        if (rotate % 360 == 270 || rotate % 360 == -270) {
          if (x < 4)
            setX(x + 1)
        }
        if (rotate % 360 == 90 || rotate % 360 == -90) {
          if (x > 0)
            setX(x - 1)
        }
      }
    }
    if (direction == "LEFT") {
      if (cmd[0] == "MOVE") {
        if (rotate % 360 == 180 || rotate % 360 == -180) {
          if (y < 4)
            setY(y + 1)
        }
        if (rotate % 360 == 0 || rotate % 360 == -0) {
          if (y > 0)
            setY(y - 1)
        }
        if (rotate % 360 == 270 || rotate % 360 == -270) {
          if (x > 0)
            setX(x - 1)
        }
        if (rotate % 360 == 90 || rotate % 360 == -90) {
          if (x < 4)
            setX(x + 1)
        }
      }
    }
    if (cmd[0] == "REPORT") {
      // console.log("dir:", result)

      if (rotate % 360 == 180 || rotate % 360 == -180) setResult(x + ',' + y + ',' + "NORTH")
      if (rotate % 360 == 0 || rotate % 360 == -0) setResult(x + ',' + y + ',' + "SOUTH")
      if (rotate % 360 == 270 || rotate % 360 == -270) setResult(x + ',' + y + ',' + "EAST")
      if (rotate % 360 == 90 || rotate % 360 == -90) setResult(x + ',' + y + ',' + "WEST")
    }
    // console.log("X,Y:", x, y);
    // console.log("direction:", direction, cmd)
    // console.log("rotate:", rotate % 360);
  }
  const reSetVal = () => {
    setX(0)
    setY(0)
    setRotate(0)
    setInstruction('')
    setHistory([])
    setResult('')
  }

  return (
    <div style={{ display: "flex", flexDirection: 'row' }}>
      <div style={{ margin: "10px 10px 10px 10px", backgroundColor: "#77ba94", width: '338px' }}>
        <input type="text" value={instruction} onChange={(e) => { setInstruction(e.target.value) }} />
        <div>
          <button onClick={setVal} style={{ marginLeft: '20px' }}>Run</button>
          <button onClick={reSetVal} style={{ margin: '10px 0px 10px 40px' }}> Reset</button>
          <p style={{ fontSize: '18px', paddingLeft: "100px", backgroundColor: "#52649c", color: "white" }}>Result:{result} </p>
        </div>
        <div class="wrapper">
          <div class="box ">
            {x === 0 && y === 4 && <Face x={0} y={2.7} r={rotate} />}
          </div>
          <div class="box "> {x === 0 && y === 3 && <Face x={0} y={4} r={rotate} />}
          </div>
          <div class="box "> {x === 0 && y === 2 && <Face x={0} y={5.3} r={rotate} />}
          </div>
          <div class="box ">{x === 0 && y === 1 && <Face x={0} y={6.7} r={rotate} />}
          </div>
          <div class="box ">{x === 0 && y === 0 && <Face x={0} y={8} r={rotate} />}
          </div>
          <div class="box "> {x === 1 && y === 4 && <Face x={1.3} y={2.7} r={rotate} />}
          </div>
          <div class="box ">{x === 1 && y === 3 && <Face x={1.3} y={4} r={rotate} />}
          </div>
          <div class="box ">{x === 1 && y === 2 && <Face x={1.3} y={5.3} r={rotate} />}
          </div>
          <div class="box ">{x === 1 && y === 1 && <Face x={1.3} y={6.7} r={rotate} />}
          </div>
          <div class="box ">{x === 1 && y === 0 && <Face x={1.3} y={8} r={rotate} />}
          </div>
          <div class="box "> {x === 2 && y === 4 && <Face x={2.6} y={2.7} r={rotate} />}
          </div>
          <div class="box ">{x === 2 && y === 3 && <Face x={2.6} y={4} r={rotate} />}
          </div>
          <div class="box ">{x === 2 && y === 2 && <Face x={2.6} y={5.3} r={rotate} />}
          </div>
          <div class="box ">{x === 2 && y === 1 && <Face x={2.6} y={6.7} r={rotate} />}
          </div>
          <div class="box ">{x === 2 && y === 0 && <Face x={2.6} y={8} r={rotate} />}
          </div>
          <div class="box "> {x === 3 && y === 4 && <Face x={3.9} y={2.7} r={rotate} />}
          </div>
          <div class="box ">{x === 3 && y === 3 && <Face x={3.9} y={4} r={rotate} />}
          </div>
          <div class="box ">{x === 3 && y === 2 && <Face x={3.9} y={5.3} r={rotate} />}
          </div>
          <div class="box ">{x === 3 && y === 1 && <Face x={3.9} y={6.7} r={rotate} />}
          </div>
          <div class="box ">{x === 3 && y === 0 && <Face x={3.9} y={8} r={rotate} />}
          </div>
          <div class="box "> {x === 4 && y === 4 && <Face x={5.2} y={2.7} r={rotate} />}
          </div>
          <div class="box ">{x === 4 && y === 3 && <Face x={5.2} y={4} r={rotate} />}
          </div>
          <div class="box ">{x === 4 && y === 2 && <Face x={5.2} y={5.3} r={rotate} />}
          </div>
          <div class="box ">{x === 4 && y === 1 && <Face x={5.2} y={6.7} r={rotate} />}
          </div>
          <div class="box ">{x === 4 && y === 0 && <Face x={5.2} y={8} r={rotate} />}
          </div>
        </div>
      </div>
      <div style={{ margin: "10px 10px 0px 10px", backgroundColor: "#77ba94", width: '335px', height: "460px", overflowY: "auto" }} >
        <p style={{ fontSize: '30px', paddingLeft: "100px", backgroundColor: "#32a852" }}>History</p>
        <ul>
          {history && history.map((item) => {
            return (
              <div>
                <li>{item}</li>
              </div>)
          })}
        </ul>
      </div>
    </div >
  )
}

export default App;
