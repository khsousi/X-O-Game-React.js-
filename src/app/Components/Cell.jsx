

export default function Cell({go , setGo , id, cells , setCells , cell , winningMessage}) {
  const handleClick = (e)=>{
    if(winningMessage){
      return
    }
    const notTaken = !cells[id]
    if (notTaken){
      if (go === "circle"){
      handleCillChange("circle")
      setGo("cross")
      }
      else if (go === "cross"){
        handleCillChange("cross")
        setGo("circle")
      }
  }
    }
    
  const handleCillChange = (cellToChange)=>{
    let copyCells = [...cells]
    copyCells[id] = cellToChange
    setCells(copyCells)
  }
  return (
    <div className="square" onClick={handleClick}>
      <div className={cell}>
        {cell ?(cell === "circle" ? "O" : "X"): ""}
      </div>
    </div>
  )
};
