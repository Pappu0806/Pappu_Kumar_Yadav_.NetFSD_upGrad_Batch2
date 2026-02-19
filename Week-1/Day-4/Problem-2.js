let purchaseAmount = 3000;
if(purchaseAmount >= 5000){
    let discount = 20/100 * purchaseAmount;
    let finalAmount = purchaseAmount - discount;
    console.log(`Discount: ${discount}\nFinal Amount: ${finalAmount}`);
}
if(purchaseAmount >= 3000 && purchaseAmount < 5000){
    let discount = 10/100 * purchaseAmount;
    let finalAmount = purchaseAmount - discount;
    console.log(`Discount: ${discount}\nFinal Amount: ${finalAmount}`);
}
if(purchaseAmount < 3000){
    console.log("No Discount");
}