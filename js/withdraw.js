document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField =document.getElementById('withdraw-feild');
    const newWithdrawAmountString =withdrawField.value ;
    const newWithdrawAmount= parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);
    

    const withdrawTotalElement= document.getElementById('withdraw-total');
    const previousWithdrawTotalString=withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat( previousWithdrawTotalString);
    // console.log(previousWithdrawTotal);
 


    

    const balanceTotalElement= document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
     const previousBalanceTotal =parseFloat(previousBalanceTotalString ); 
     console.log(previousBalanceTotal);
     withdrawField.value="";

     if ( newWithdrawAmount > previousBalanceTotal){
        alert("tor bank a taka nai");
        return;
     }
     const currentWithdrawTotal  =previousWithdrawTotal+newWithdrawAmount;
    withdrawTotalElement.innerText =  currentWithdrawTotal;

     const newBalanceTotal =previousBalanceTotal - newWithdrawAmount;
     balanceTotalElement.innerText = newBalanceTotal;


    
    
})





