import React from 'react';
 
function InputFild() {
    const [val, setVal] = React.useState([]);
    let ope = ['+','x','÷','-','.'];
    let nums = [];
 
    function showresult(event) {
        let value = event.target.innerText;
        let isOpe = false;
        if(ope.includes(value)){
            isOpe = true
        }else{
            isOpe = false;
        }
        setVal(prevval => {
            if (isOpe && ope.includes(val[val.length-1]) || isOpe && val.length === 0){
                if (val.length === 0){
                    return [];
                }else{
                    val.pop();
                    return [...prevval,value];
                }
                
            }else{
                if (isOpe){
                    doOperation();
                    console.log(value);
                    return [...prevval,value];
                }else{
                    return [...prevval,value];
                }
                
            }
        })
        

    }



    function clearReasult() {
        setVal([]);
    }



    function doOperation() {
       nums = [];
       let allNum ='';
       let signs = '';
       for (let i = 0; i < val.length; i++){
            if (ope.slice(0,ope.length-1).includes(val[i])){
                signs = val[i];
                nums.push(Number(allNum));
                allNum = '';
            }else{
                allNum += val[i];
            }
       }
       nums.push(Number(allNum));
        if (signs === '+'){
            setVal([nums[0] + nums[1]]);
        }
        if (signs === 'x'){
            setVal([nums[0] * nums[1]]);
        }
        if (signs === '-'){
            setVal([nums[0] - nums[1]]);
        }
        if (signs === '÷'){
            setVal([nums[0] / nums[1]]);
        }
        
    }




    function doPercent(){
        let isWorking = true;
        let theFinalNumber = 0;
        if (ope.includes(val[val.length-1])){
            isWorking = false;
        }
        if (isWorking){
            let nums = '';
            let i = val.length-1;
            if (val.length > 1){
                while (i >= 0){
                    if (ope.includes(val[i])){
                        break;
                    }
                    nums += val.pop();
                    i -= 1;
                }
                let splitNums = nums.split("");
                let reverseNums = splitNums.reverse();
                let finalNums = reverseNums.join("");
                theFinalNumber = Number(finalNums);
                setVal(prvVal => [...prvVal, theFinalNumber / 100]);
            }else{
                theFinalNumber = val[0];
                setVal([theFinalNumber / 100]);
            }
            
        }
    }
    
 
    return <div className='cal-fild'>
        <h1 className='res-show'>{val}</h1>
        <div className='num-fild'>
            <table>
                <tr>
                    <td onClick={clearReasult}><h2>AC</h2></td>
                    <td onClick={showresult}><h2>+/-</h2></td>
                    <td onClick={doPercent}><h2>%</h2></td>
                    <td onClick={showresult} className='signs'><h2>÷</h2></td>
                </tr>
                <tr>
                    <td onClick={showresult}><h2>7</h2></td>
                    <td onClick={showresult}><h2>8</h2></td>
                    <td onClick={showresult}><h2>9</h2></td>
                    <td onClick={showresult} className='signs'><h2>x</h2></td>
                </tr>
                <tr>
                    <td onClick={showresult}><h2>4</h2></td>
                    <td onClick={showresult}><h2>5</h2></td>
                    <td onClick={showresult}><h2>6</h2></td>
                    <td onClick={showresult} className='signs'><h2>-</h2></td>
                </tr>
                <tr>
                    <td onClick={showresult}><h2>1</h2></td>
                    <td onClick={showresult}><h2>2</h2></td>
                    <td onClick={showresult}><h2>3</h2></td>
                    <td onClick={showresult} className='signs'><h2>+</h2></td>
                </tr>
                <tr>
                    <td onClick={showresult} colSpan='2'><h2>0</h2></td>
                    <td onClick={showresult}><h2>.</h2></td>
                    <td onClick={doOperation} className='signs'><h2>=</h2></td>
                </tr>
            </table>
 
        </div>
        
    </div>
}
 
export default InputFild;
