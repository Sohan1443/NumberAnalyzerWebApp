
function check_prime(){
   let num1= document.getElementById("digit1").value;
    let pstyle=document.getElementById("msg1");
    let i;
    for(i=2;i<num1;i++){
        if(num1%i===0)
            break;
    }
    if(i==num1){
        pstyle.innerText=num1+" is Prime Number. ";
        pstyle.style.color="green";
        pstyle.style.fontWeight=500;
        
    }
    else{
        pstyle.innerText=num1+" is Not Prime Number.";
        pstyle.style.color="red";
        pstyle.style.fontWeight=500;
    }
    
}
function check_buzz(){
    let num2=document.getElementById("digit2").value;
    let bstyle=document.getElementById("msg2");
    let i;
    if(num2%7===0||num2%10==7){
        bstyle.innerText=num2+" is Buzz Number.";
        bstyle.style.color="green";
        bstyle.style.fontWeight=500;
    }
    else{
        bstyle.innerText=num2+" is Not Buzz Number.";
        bstyle.style.color="red";
        bstyle.style.fontWeight=500;
    }
}
function automorphic(){
    let num3=document.getElementById("digit3").value;
    let md=10;
    let astyle=document.getElementById("msg3");
    let len=num3.length;
    for(let i=1;i<len;i++)
        md=md*10;
    if((num3*num3)%md==num3){
        astyle.innerText=num3+" is Automorphic Number";
        astyle.style.color="green";
        astyle.style.fontWeight=500;
    }
    else {
        astyle.innerText=num3+" is Not Automorphic Number";
        astyle.style.color="red";
        astyle.style.fontWeight=500;
    }
}

function factorial(){
    let num4=document.getElementById("digit4").value;
    let fstyle=document.getElementById("msg4");
    let fact=1;
    for(let i=1;i<=num4;i++){
        fact=fact*i;
        fstyle.innerText= num4+" Factorial is "+ fact+".";
        fstyle.style.color="green";
        fstyle.style.fontWeight="red";
    }
}

function amicable(){
    let n1=document.getElementById("digit5").value;
    let n2=document.getElementById("digit6").value;
    let sum1=0;
    let sum2=0;
    let amstyle=document.getElementById("msg5");
    for(let i=1;i<=n1/2; i++){
        if(n1%i==0){
            sum1+=i;
        }
    }
    for(let i=1;i<=n2/2; i++){
        if(n2%i==0){
            sum2+=i;
        }
    }

    if(n1==sum2&&n2==sum1){
        amstyle.innerText=n1+" and "+n2+" is Amicable Number.";
        amstyle.style.color="green";
        amstyle.style.fontWeight=500;
    }
    else{
        amstyle.innerText=n1+" and "+n2+" is Not Amicable Number.";
        amstyle.style.color="red";
        amstyle.style.fontWeight=500;
    }
}

function prime_range(){
    let num6=document.getElementById("digit7").value;
    let num7=document.getElementById("digit8").value;
    let temp=num6;
    let range=[];
    let prstyle=document.getElementById("msg6");
    for(;num6<=num7;num6++){
        let i;
        for(i=2;i<num6;i++){
            if(num6%i==0)
                break;
        }
        if(i==num6){
            range.push(num6);

        }
    }
    prstyle.innerText="Prime Number in Range "+temp+" to "+num7+" is : "+range+".";
    prstyle.style.color="green";
    prstyle.style.fontWeight=500;
}


