document.addEventListener('DOMContentLoaded', () =>
{
    const grid=document.querySelector('.grid')
    let squares= Array.from(document.querySelectorAll('.grid div'))
    const grid2=document.querySelector('.grid2')
    let squares2= Array.from(document.querySelectorAll('.grid2 div'))
    const grid3=document.querySelector('.grid3')
    let squares3= Array.from(document.querySelectorAll('.grid3 div'))
    const width=10
    const ScoreDisplay= document.querySelector('#score')
    const StatDisplay=document.querySelector('#status')
    const StrtBtn=document.querySelector('#Start-Button')
    const grid1t=document.getElementById("vm1")
    const grid1b=document.getElementById("vm2")

    const grid2t=document.getElementById("vm3")
    const grid2b=document.getElementById("vm4")

    const grid3t=document.getElementById("vm5")
    const grid3b=document.getElementById("vm6")

    let focus=0
    let curr_play=Math.floor(Math.random()*2)
    grid1t.setAttribute("style","opacity: 1;")
    grid1b.setAttribute("style","opacity: 1;")


    grid2t.setAttribute("style","opacity: 0.2;")
    grid2b.setAttribute("style","opacity: 0.2;")

    grid3t.setAttribute("style","opacity: 0.2;")
    grid3b.setAttribute("style","opacity: 0.2;")

    let timerId
    let score=0
    let str1='On'
    let str2='Off'
    let str3='Pause'
    let str4='Ended'
    const colors=['orange','red','purple','#2E8B57','blue']
    //Tetrominoes

    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
      ]
    
const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ]

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]

  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

  let currentPosition=4
  let currentRotation=0
  let random=Math.floor(Math.random()*theTetrominoes.length)
  let current = theTetrominoes[random][currentRotation]

  function draw(){
    if(curr_play==0)
    {
      current.forEach(
          index=>{
              squares[currentPosition+index].classList.add('tetromino')
              squares[currentPosition+index].style.backgroundColor=colors[random]
          }
      )
    }
    else if(curr_play==1)
    {
      // console.log("In Here")
      current.forEach(
        index=>{
            squares2[currentPosition+index].classList.add('tetromino')
            squares2[currentPosition+index].style.backgroundColor=colors[random]
        }
    )

    }

    else if(curr_play==2)
    {
      // console.log("In Here")
      current.forEach(
        index=>{
            squares3[currentPosition+index].classList.add('tetromino')
            squares3[currentPosition+index].style.backgroundColor=colors[random]
        }
    )

    }


  }
  function undraw()
  {
    if(curr_play==0)
    {
    current.forEach(index=>{
          squares[currentPosition+index].classList.remove('tetromino')
          squares[currentPosition+index].style.backgroundColor=''
        })
    }
    else if(curr_play==1)
        {
          current.forEach(
            index=>{
                squares2[currentPosition+index].classList.remove('tetromino')
                squares2[currentPosition+index].style.backgroundColor=''
            })
        }
        else if(curr_play==2)
        {
          current.forEach(
            index=>{
                squares3[currentPosition+index].classList.remove('tetromino')
                squares3[currentPosition+index].style.backgroundColor=''
            })
        }
      }
//  draw()
//  timerId=setInterval(moveDown,500)
  function moveDown()
  {
      undraw()
      currentPosition+=width
      draw()
      freeze()
  }
  let nextRandom=0

  function gameOver()
  {
      if(curr_play==0 && current.some(index=>squares[currentPosition+ index].classList.contains('taken')) )
      {
          StatDisplay.innerHTML=str4
          clearInterval(timerId)
          score=0
          document.addEventListener('click',()=>{
            for(let i=0;i<199;i+=width)
            {
              const row=[i,i+1,i+2,i+3,i+4,i+5,i+6,i+7,i+8,i+9]
            
              row.forEach(index => 
                  {squares[index].classList.remove('taken')
                  squares[index].classList.remove('tetromino')
                  squares[index].style.backgroundColor=''
              })
              const squaresRemoved=squares.splice(i,width)
      //        squaresRemoved.forEach(index=> {squaresRemoved[index].classList.remove('tetromino')})
              squares=squaresRemoved.concat(squares)
              squares.forEach(cell=> grid.appendChild(cell))
            
            }
                })
      }

      if(curr_play==1 && current.some(index=>squares2[currentPosition+ index].classList.contains('taken2')) )
      {
          StatDisplay.innerHTML=str4
          clearInterval(timerId)
          score=0
          document.addEventListener('click',()=>{
            for(let i=0;i<199;i+=width)
            {
              const row=[i,i+1,i+2,i+3,i+4,i+5,i+6,i+7,i+8,i+9]
            
              row.forEach(index => 
                  {squares2[index].classList.remove('taken2')
                  squares2[index].classList.remove('tetromino')
                  squares2[index].style.backgroundColor=''
              })
              const squaresRemoved2=squares2.splice(i,width)
      //        squaresRemoved.forEach(index=> {squaresRemoved[index].classList.remove('tetromino')})
              squares2=squaresRemoved2.concat(squares2)
              squares2.forEach(cell=> grid2.appendChild(cell))
            
            }
                })
      }
      if(curr_play==2 && current.some(index=>squares3[currentPosition+ index].classList.contains('taken3')) )
      {
          StatDisplay.innerHTML=str4
          clearInterval(timerId)
          score=0
          document.addEventListener('click',()=>{
            for(let i=0;i<199;i+=width)
            {
              const row=[i,i+1,i+2,i+3,i+4,i+5,i+6,i+7,i+8,i+9]
            
              row.forEach(index => 
                  {squares3[index].classList.remove('taken3')
                  squares3[index].classList.remove('tetromino')
                  squares3[index].style.backgroundColor=''
              })
              const squaresRemoved3=squares3.splice(i,width)
      //        squaresRemoved.forEach(index=> {squaresRemoved[index].classList.remove('tetromino')})
              squares3=squaresRemoved3.concat(squares3)
              squares3.forEach(cell=> grid3.appendChild(cell))
            
            }
                })
      }

    }
  
  function freeze()
  {
    if(curr_play==0)
    {
      if (current.some(index=> squares[currentPosition+index+width].classList.contains('taken'))){
        let tp=setInterval(control,1000)  
        current.forEach(index=> squares[currentPosition+index].classList.add('taken'))
          random=nextRandom
          nextRandom=Math.floor(Math.random()*theTetrominoes.length)
          current=theTetrominoes[random][currentRotation]
          currentPosition=4
          displayShape()
          addscore()
          gameOver()
          curr_play=Math.floor(Math.random()*3)
          // curr_play=(curr_play+1)%3
          draw()
        }
    }
    else if(curr_play==1)
    {
      if (current.some(index=> squares2[currentPosition+index+width].classList.contains('taken2'))){
        let tp=setInterval(control,1000)  
        current.forEach(index=> squares2[currentPosition+index].classList.add('taken2'))
          random=nextRandom
          nextRandom=Math.floor(Math.random()*theTetrominoes.length)
          current=theTetrominoes[random][currentRotation]
          currentPosition=4
          displayShape()
          addscore()
          gameOver()
          curr_play=Math.floor(Math.random()*3)
          // curr_play=(curr_play+1)%3
          draw()
        }
    }

    else if(curr_play==2)
    {
      if (current.some(index=> squares3[currentPosition+index+width].classList.contains('taken3'))){
        let tp=setInterval(control,1000)  
        current.forEach(index=> squares3[currentPosition+index].classList.add('taken3'))
          random=nextRandom
          nextRandom=Math.floor(Math.random()*theTetrominoes.length)
          current=theTetrominoes[random][currentRotation]
          currentPosition=4
          displayShape()
          addscore()
          gameOver()
          curr_play=Math.floor(Math.random()*3)
          // curr_play=(curr_play+1)%3
          draw()
        }
    }


  }
  function moveLeft()
  {
    if(focus==curr_play)
    {
      if(curr_play==0)
      {
      undraw()
      const isAtLeftEdge = current.some(index=>(currentPosition+index)%width===0)
      if(!isAtLeftEdge){currentPosition-=1}
      if(current.some(index=>squares[currentPosition+index].classList.contains('taken'))){currentPosition+=1}
      draw()
      }
      else if(curr_play==1)
      {
      undraw()
      const isAtLeftEdge = current.some(index=>(currentPosition+index)%width===0)
      if(!isAtLeftEdge){currentPosition-=1}
      if(current.some(index=>squares2[currentPosition+index].classList.contains('taken2'))){currentPosition+=1}
      draw()
      }
      else if(curr_play==2)
      {
      undraw()
      const isAtLeftEdge = current.some(index=>(currentPosition+index)%width===0)
      if(!isAtLeftEdge){currentPosition-=1}
      if(current.some(index=>squares3[currentPosition+index].classList.contains('taken3'))){currentPosition+=1}
      draw()
      }
    }
  }

  function moveRight()
  {
    if(focus==curr_play)
    {
      if(curr_play==0)
      {
      undraw()
      const isAtRightEdge = current.some(index=>(currentPosition+index)%width===width-1)
      if(!isAtRightEdge){currentPosition+=1}
      if(current.some(index=>squares[currentPosition+index].classList.contains('taken'))){currentPosition-=1}
      draw()
      }
      else if(curr_play==1)
      {
      undraw()
      const isAtRightEdge = current.some(index=>(currentPosition+index)%width===width-1)
      if(!isAtRightEdge){currentPosition+=1}
      if(current.some(index=>squares2[currentPosition+index].classList.contains('taken2'))){currentPosition-=1}
      draw()
      }
      else if(curr_play==2)
      {
      undraw()
      const isAtRightEdge = current.some(index=>(currentPosition+index)%width===width-1)
      if(!isAtRightEdge){currentPosition+=1}
      if(current.some(index=>squares3[currentPosition+index].classList.contains('taken3'))){currentPosition-=1}
      draw()
      }
    }
  }

  function rotate()
  {
    if(focus==curr_play)
    {
      undraw()
      currentRotation=(currentRotation+1)%4
      current=theTetrominoes[random][currentRotation]
      const isAtRightEdgerot = current.some(index=>(currentPosition+index)%width===width-1)
      const isAtLeftEdgerot = current.some(index=>(currentPosition+index)%width===0)
    if(isAtLeftEdgerot + isAtRightEdgerot===2)
    {
        currentRotation-=1
        currentRotation=currentRotation%4
        current=theTetrominoes[random][currentRotation]
    }
      else
        {
          if(curr_play==0)
          {
        if(current.some(index=>squares[currentPosition+index].classList.contains('taken')))
        {
            currentRotation-=1
            currentRotation=currentRotation%4
            current=theTetrominoes[random][currentRotation]    
        }
          }

          else if(curr_play==1)
          {
        if(current.some(index=>squares2[currentPosition+index].classList.contains('taken2')))
        {
            currentRotation-=1
            currentRotation=currentRotation%4
            current=theTetrominoes[random][currentRotation]    
        }
          }

          else if(curr_play==2)
          {
        if(current.some(index=>squares3[currentPosition+index].classList.contains('taken3')))
        {
            currentRotation-=1
            currentRotation=currentRotation%4
            current=theTetrominoes[random][currentRotation]    
        }
          }


        }
        currentRotation=currentRotation%4
        current=theTetrominoes[random][currentRotation]
      draw()
      }
  }

  function control(e){
      if(e.keyCode===37){moveLeft()}
      else if(e.keyCode==38 && StatDisplay.innerHTML!=str4)
      {
          rotate()
      }
      else if(e.keyCode==39 && StatDisplay.innerHTML!=str4)
      {
          moveRight()
      }
      else if(e.keyCode==40 && StatDisplay.innerHTML!=str4)
      {
        if(focus==curr_play)
        {
          moveDown()
        }
      }
      else if(e.keyCode==77 && StatDisplay.innerHTML!=str4)
      {
          shift()
      }
      
  }
  document.addEventListener('keyup',control)

function shift()
  {
    // console.log("Beg"+focus)
    focus=(focus+1)%3

    if(focus==0)
      {
        
        console.log("Here!")
        grid1t.setAttribute("style","opacity: 1;")
        grid1b.setAttribute("style","opacity: 1;")
        grid2t.setAttribute("style","opacity: 0.2;")
        grid2b.setAttribute("style","opacity: 0.2;")
        
        grid3t.setAttribute("style","opacity: 0.2;")
        grid3b.setAttribute("style","opacity: 0.2;")
      }

    else if(focus==1)
      {
        grid1t.setAttribute("style","opacity: 0.2;")
        grid1b.setAttribute("style","opacity: 0.2;")    
        grid2t.setAttribute("style","opacity: 1;")
        grid2b.setAttribute("style","opacity: 1;")
        grid3t.setAttribute("style","opacity: 0.2;")
        grid3b.setAttribute("style","opacity: 0.2;")
        
      }
    
      else if(focus==2)
      {
        grid1t.setAttribute("style","opacity: 0.2;")
        grid1b.setAttribute("style","opacity: 0.2;")    
        grid2t.setAttribute("style","opacity: 0.2;")
        grid2b.setAttribute("style","opacity: 0.2;")
        grid3t.setAttribute("style","opacity: 1;")
        grid3b.setAttribute("style","opacity: 1;")
        
      }
  
  }

  const displaySquares=document.querySelectorAll('.mini-grid div')
  const displaySquares2=document.querySelectorAll('.mini-grid2 div')
  const displaySquares3=document.querySelectorAll('.mini-grid3 div')
  const displayWidth =4
  let displayIndex=0
  //let nextRandom=0
  const upNextTetrominoes = [
    [1, displayWidth+1, displayWidth*2+1, 2], //lTetromino
    [0, displayWidth, displayWidth+1, displayWidth*2+1], //zTetromino
    [1, displayWidth, displayWidth+1, displayWidth+2], //tTetromino
    [0, 1, displayWidth, displayWidth+1], //oTetromino
    [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1] //iTetromino
  ]
  StrtBtn.addEventListener('click',()=>{
    if(StatDisplay.innerHTML==str4){
      StatDisplay.innerHTML=str1
      let score=0
      ScoreDisplay.innerHTML=score

        cleargrid()
        curr_play=Math.floor(Math.random()*3)
        let currentPosition=4
        let currentRotation=0
        let random=Math.floor(Math.random()*theTetrominoes.length)
        let current = theTetrominoes[random][currentRotation]
        draw()
        timerId=setInterval(moveDown,500)
        nextRandom=Math.floor(Math.random()*theTetrominoes.length)
        displayShape()
      }

  
      if(timerId){
        StatDisplay.innerHTML=str3
          clearInterval(timerId)
          timerId=null
      }
      else if(StatDisplay.innerHTML!=str4){
        StatDisplay.innerHTML=str1
        ScoreDisplay.innerHTML=score

          // curr_play=Math.floor(Math.random()*3)
          // let currentPosition=4
          // let currentRotation=0
          // let random=Math.floor(Math.random()*theTetrominoes.length)
          // let current = theTetrominoes[random][currentRotation]
          draw()
          timerId=setInterval(moveDown,500)
          nextRandom=Math.floor(Math.random()*theTetrominoes.length)
          displayShape()
        }
  
  })

  function cleargrid()
  {
    for(let i=0;i<199;i+=width)
    {
        const row=[i,i+1,i+2,i+3,i+4,i+5,i+6,i+7,i+8,i+9]
      row.forEach(index => 
          {squares[index].classList.remove('taken')
          squares[index].classList.remove('tetromino')
          squares[index].style.backgroundColor=''
      })
      const squaresRemoved=squares.splice(i,width)
      //        squaresRemoved.forEach(index=> {squaresRemoved[index].classList.remove('tetromino')})
              squares=squaresRemoved.concat(squares)
              squares.forEach(cell=> grid.appendChild(cell))
      

      row.forEach(index => 
          {squares2[index].classList.remove('taken2')
          squares2[index].classList.remove('tetromino')
          squares2[index].style.backgroundColor=''
      })

      const squaresRemoved2=squares2.splice(i,width)
      //        squaresRemoved2.forEach(index=> {squaresRemoved2[index].classList.remove('tetromino')})
              squares2=squaresRemoved2.concat(squares2)
              squares2.forEach(cell=> grid2.appendChild(cell))
      

      row.forEach(index => 
          {squares3[index].classList.remove('taken3')
          squares3[index].classList.remove('tetromino')
          squares3[index].style.backgroundColor=''

          const squaresRemoved3=squares3.splice(i,width)
          //        squaresRemoved2.forEach(index=> {squaresRemoved2[index].classList.remove('tetromino')})
                  squares3=squaresRemoved3.concat(squares3)
                  squares3.forEach(cell=> grid3.appendChild(cell))
          
    
      })
  }

  }

  function addscore()
  {
      for(let i=0;i<199;i+=width)
      {
          const row=[i,i+1,i+2,i+3,i+4,i+5,i+6,i+7,i+8,i+9]
      if(row.every(index=> squares[index].classList.contains('taken')))
      {
          score+=10
          ScoreDisplay.innerHTML=score
        row.forEach(index => 
            {squares[index].classList.remove('taken')
            squares[index].classList.remove('tetromino')
            squares[index].style.backgroundColor=''
        })
        const squaresRemoved=squares.splice(i,width)
//        squaresRemoved.forEach(index=> {squaresRemoved[index].classList.remove('tetromino')})
        squares=squaresRemoved.concat(squares)
        squares.forEach(cell=> grid.appendChild(cell))
      }
      

      if(row.every(index=> squares2[index].classList.contains('taken2')))
      {
          score+=10
          ScoreDisplay.innerHTML=score
        row.forEach(index => 
            {squares2[index].classList.remove('taken2')
            squares2[index].classList.remove('tetromino')
            squares2[index].style.backgroundColor=''
        })
        const squaresRemoved2=squares2.splice(i,width)
//        squaresRemoved2.forEach(index=> {squaresRemoved2[index].classList.remove('tetromino')})
        squares2=squaresRemoved2.concat(squares2)
        squares2.forEach(cell=> grid2.appendChild(cell))
      }
 
      if(row.every(index=> squares3[index].classList.contains('taken3')))
      {
          score+=10
          ScoreDisplay.innerHTML=score
        row.forEach(index => 
            {squares3[index].classList.remove('taken3')
            squares3[index].classList.remove('tetromino')
            squares3[index].style.backgroundColor=''
        })
        const squaresRemoved3=squares3.splice(i,width)
//        squaresRemoved2.forEach(index=> {squaresRemoved2[index].classList.remove('tetromino')})
        squares3=squaresRemoved3.concat(squares3)
        squares3.forEach(cell=> grid3.appendChild(cell))
      }
    }
    
  }
  function displayShape()
  {
      displaySquares.forEach(square=>{
          square.classList.remove('tetromino')
          square.style.backgroundColor=''
      })
      nextRandom=nextRandom%5
      upNextTetrominoes[nextRandom].forEach(
          index=>{
              displaySquares[displayIndex+index].classList.add('tetromino')
              displaySquares[displayIndex+index].style.backgroundColor=colors[nextRandom]
              
          }
      )

      displaySquares2.forEach(square=>{
        square.classList.remove('tetromino')
        square.style.backgroundColor=''
    })
    nextRandom=nextRandom%5
    upNextTetrominoes[nextRandom].forEach(
        index=>{
            displaySquares2[displayIndex+index].classList.add('tetromino')
            displaySquares2[displayIndex+index].style.backgroundColor=colors[nextRandom]
            
        }
    )

    displaySquares3.forEach(square=>{
      square.classList.remove('tetromino')
      square.style.backgroundColor=''
  })
  nextRandom=nextRandom%5
  upNextTetrominoes[nextRandom].forEach(
      index=>{
          displaySquares3[displayIndex+index].classList.add('tetromino')
          displaySquares3[displayIndex+index].style.backgroundColor=colors[nextRandom]
          
      }
  )

    }
})