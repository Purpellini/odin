let display=document.querySelector('.display')
display.style.cssText="color: rgba(255,255,255,0.2)"
let currentValue='0';
let previousValue=null
let operator=null
let result=0
let isON = false;
display.readOnly=true
let memory = 0;

//memory
const btnMemory=document.querySelectorAll('.memory-btn')
btnMemory.forEach(button=>{
    button.addEventListener("click",()=>{
        if(!isON) return;
        memory = isNaN(parseFloat(memory)) || memory === '' ? 0 : parseFloat(memory);
        result = isNaN(parseFloat(result)) || result === '' ? 0 : parseFloat(result);
        const memoryTitle = button.closest('.memory').querySelector('.memory-title'); // Znajdź tytuł pamięci
        console.log("Kliknięty tytuł pamięci: " + memoryTitle.textContent); // Logujemy kliknięty tytuł pamięci
        switch(memoryTitle.textContent){
            case 'M-':
                memory -= result
                console.log('odjeto w pamieci: '+memory-result)
                break;
            case 'M+':
                console.log('dodano do pamieci: '+memory+result)
                memory += result
   
                break;
            case 'MRC':
                result=memory;
                display.value = result;
                previousValue=result
                currentValue=result
                operator=null
                console.log('pamiec: '+memory)
                break;
            default:
                console.log('Nieznana operacja pamięci');
        }
})})

//wyłączenie kalkulatora
const btnOff=document.querySelector('#off')
btnOff.addEventListener("click",(isON)=>{
    isON=false
    display.style.cssText="color: rgba(255,255,255,0.2)"
    previousValue=0;
    currentValue=0;
    operator=null;
    result=0;
    memory=0;
    display.value=0;
    display.addEventListener('keydown', function(event) {
        if (!/[0-9.]/.test(event.key) && event.key !== 'Backspace' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
            event.preventDefault(); 
        }
    });

})

//włączanie kalkulatora
const btnON=document.querySelector('.power-btn')
btnON.addEventListener("click",(isOn)=>{
    isOn==false ? (isON=true, display.style.cssText="color: rgb(0, 0, 0)", display.readOnly=false) :
     (isON=true,previousValue=0, currentValue=0,memory=0, operator=null,result=0,display.value=0,display.style.cssText="color: rgb(0, 0, 0)",
        display.readOnly=false
     )
})
//blokowanie liter
display.addEventListener('keydown', function(event) {
    if (!/[0-9.]/.test(event.key) && event.key !== 'Backspace' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
        event.preventDefault(); 
    }
});

//pobieranie cyferek
const btnNum=document.querySelectorAll(".btn-num")
btnNum.forEach(button=>{
    button.addEventListener("click",()=>{
        if (!isON) return;
       currentValue=='0' ? currentValue=button.textContent : currentValue+=button.textContent
       display.value=currentValue
    })
})

//aktywacja obliczen
const btnMod = document.querySelectorAll('.btn-mod');
btnMod.forEach(button => {
    button.addEventListener("click", () => {
        if (!isON) return;

        if (operator !== null) {
            if (currentValue !== '0') {

                MathOperations(operator);
                display.value = result;
                previousValue = result;
                currentValue = '0';    
            }
        } else {
            previousValue = currentValue;
            currentValue = '0'; 
        }

        operator = button.textContent;
    });
});

const btnEqual=document.querySelector('#equal-sign')
btnEqual.addEventListener("click",()=>{
    if (!isON) return;
    if(operator!==null){
        MathOperations(operator)
        display.value=result
        previousValue=result;
        currentValue='0';

    }
})

function MathOperations(button){
    previousValue = isNaN(parseFloat(previousValue)) || previousValue === '' ? 0 : parseFloat(previousValue);
    currentValue = isNaN(parseFloat(currentValue)) || currentValue === '' ? 0 : parseFloat(currentValue);
    console.log("[1 liczba: "+previousValue+"][, 2 liczba: " +currentValue+ "][, operator:"+operator+"]")
    switch(button){
        case '+':
            result = previousValue + currentValue;
          
            break;
        case "−":
            result = previousValue - currentValue;
      
            break;
        case "×":
            result = previousValue * currentValue;
        
            break;
        case"÷":
            result = previousValue / currentValue;
            
            break;
        case"%":
            result = previousValue % currentValue;
           
            break;
        case"√":
            result= Math.floor( Math.sqrt(previousValue))
            
            break;
        default:
            result = 0
    } 
    display.value=result
}

//aside

const asideBtn=document.querySelector('.aside-btn')
asideBtn.addEventListener("click",()=>{
    let asidebg = document.querySelector('.aside-container')
    asidebg.style.left = (asidebg.style.left !== '0px') ? '0' : '-250px';
    asideBtn.textContent = asideBtn.textContent === '>' ? '<' : '>';

})

//tło
const body = document.body
const bgBtn = document.querySelectorAll('.bg-box')
bgBtn.forEach(button=>{
    button.addEventListener("click",()=>{
        const imgSrc = button.querySelector('img').src;
        body.style.backgroundImage=`url(${imgSrc})`
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';
        body.style.backgroundRepeat = 'no-repeat';
    })
})