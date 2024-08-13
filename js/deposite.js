// // step-3========
//     document.getElementById('btn-deposit').addEventListener('click',function(){
//     // step-2=============
    
//     const depositField =document.getElementById('deposit-feild');
//     const newDipositAmountString =depositField.value 
//     const newDipositAmount= parseFloat(newDipositAmountString);
//     // ==========step3 get the current diposit total ============

//     const dipositTotalElement= document.getElementById('deposit-total');
//     const previousDipositTotalString=dipositTotalElement.innerText;
//     const previousDipositTotal =parseFloat(previousDipositTotalString);

// // ==========step-4 add number to set the  total diposit===============
//     const currentDiposittotal  = previousDipositTotal + newDipositAmount;
//     dipositTotalElement.innerText = currentDiposittotal;

//     // ============step 5 get balance current total====================
//     const balanceTotalElement= document.getElementById('balance-total');
//     const previousBalanceTotalString=balanceTotalElement.innerText;
//     const previousBalanceTotal =parseFloat(previousBalanceTotalString);

//     //========== step-6 calculet current total balance==============
//     const currentBalanceTotal = previousBalanceTotal+newDipositAmount;
//     balanceTotalElement.innerText=currentBalanceTotal;


//     // step7=======
//     depositField.value="";
    
// })



// document.getElementById('btn-deposit').addEventListener('click', function(){
//     const depositField =document.getElementById('deposit-feild');
//     const newDipositAmountString =depositField.value;
//     const  newDipositAmount= parseFloat(newDipositAmountString);

//     const dipositTotalElement =document.getElementById('deposit-total');
//     const previousDipositTotalString=dipositTotalElement.innerText;
//     const previousDipositTotal=parseFloat(previousDipositTotalString);

//     const currentDipositTotal=previousDipositTotal+newDipositAmount;
//     dipositTotalElement.innerText=currentDipositTotal;

//     const balanceTotalElement= document.getElementById('balance-total');
//     const previousBalanceTotalString=balanceTotalElement.innerText;
//     const previousBalanceTotal =parseFloat(previousBalanceTotalString);

//     const currentBalanceTotal = previousBalanceTotal+newDipositAmount;
//     balanceTotalElement.innerText=currentBalanceTotal;


//     // step7=======
//     depositField.value="";

// })



document.getElementById('btn-deposit').addEventListener('click', function(){
    const dipositField = document.getElementById('deposit-feild');
    const newDipositAmountString =dipositField.value;
    const newDipositAmount = parseFloat(newDipositAmountString);

    const dipositTotalElement = document.getElementById('deposit-total');
    const previousDipositTotalString= dipositTotalElement.innerText;
    const previousDipositTotal =parseFloat(previousDipositTotalString);

    const currentDipositTotal= previousDipositTotal+newDipositAmount;
    dipositTotalElement.innerText=currentDipositTotal;

    const balanceTotalElement =document.getElementById('balance-total')
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    const currentBalanceTotal =previousBalanceTotal+newDipositAmount;
    balanceTotalElement.innerText=currentBalanceTotal

    dipositField.value= "";
})


