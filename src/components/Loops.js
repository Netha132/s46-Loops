import React, { useRef } from 'react'

function Loops() {
    let loopsParaRef=useRef();
    let tableLoops=useRef();
  return (
    <div>

        {/* //=========while========= */}

      <button type='button'  onClick={()=>{
        let a=1;
        let b = " ";
        while(a<=100){
                b +=`${a} <br>`
                loopsParaRef.current.innerHTML=b;
                console.log(`a is ${a}` );
                a++ 
        }
      }}>while</button>

      {/* //==========Do while============== */}

      <button type='button' onClick={()=>{
        let c=10;
        do{
            console.log(c)
        }
        while(c>100)
      }}>Do while</button>


{/* //==============For=================== */}

      <button type='button' onClick={()=>{
        for(let i=1;i<=10000;i++){
            console.log(i)
        }

      }}>For</button>


      <button type='button'  onClick={()=>{
        let output="";
        for(let i=1;i<=1000;i++){
            for(let j=1;j<=100;j++){
                // if(i==756 || i==549 || i==643 || i==721 || i==135 || i==601 || i==611 || j==6 || j==7 || j==8 || j==9 || j==12 || j==14 || j==15 || j==23 || j==46 || j==79 || j==86){
                //     continue;
                // }
                // console.log(`${i}*${j}=${i*j}`)
                // output+=`${i}*${j}=${i*j} <br>`
                if(i==756 || i==549 || i==643 || i==721 || i==135 || i==601 || i==611 ){
                    continue;
                }
                // output+=`${i*j}`;
                if(j==6 || j==7 || j==8 || j==9 || j==12 || j==14 || j==15 || j==23 || j==46 || j==79 || j==86){
                    continue;
                }
                output+=`${i}*${j}=${i*j} <br>`
            }
                output+=`<hr>`
        }
        tableLoops.current.innerHTML=output
      }}>Tables</button>


{/* //========Break==================== */}

      <button type='button' onClick={()=>{
        for(let i=1;i<=100;i++){
            console.log(i);
            if(i==90){
                break;
            }
        }
      }}>Break</button>
<div className='tableDiv'>
      <h3 className='tables' ref={tableLoops}></h3>
      </div>
      <p ref={loopsParaRef}></p>
    </div>
  )
}

export default Loops
