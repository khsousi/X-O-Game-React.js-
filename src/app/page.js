"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Cell from "./Components/Cell";

const winningCombs = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

export default function Home() {

  const [cells , setCells] = useState(["","","","","","","","","",])
  const [go , setGo] = useState("circle")
  const [winningMessage , setWinningMessage] = useState(null)

  useEffect(()=>{
    winningCombs.forEach((compo)=>{
      const circleWins = compo.every((cell)=> cells[cell] === "circle")
      const crossWins = compo.every((cell)=> cells[cell] === "cross")

      if (circleWins){
        setWinningMessage("Circle Wins 🎉")
      }
      else if (crossWins){
        setWinningMessage("Cross Wins 🎉")
      }
    })
  },[cells])

  useEffect(()=>{
    if (cells.every((cell)=> cell !== "") && !winningMessage ) {
        setWinningMessage("Its A Draw !")
    }
  }, [cells , winningMessage])
    
  return (
    <div className="container">
      <div className="gameboard">
        {cells.map( (cell , index) => (
          <Cell id={index} key={index} go={go} setGo={setGo} cells={cells} setCells={setCells} cell={cell} winningMessage={winningMessage} />
        ))}
      </div>
      {winningMessage && <h3>{winningMessage}</h3>}
      {!winningMessage && <h3>{`Its Now ${go} Turn !`}</h3>}
    </div>
  );
}


