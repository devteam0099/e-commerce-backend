import { placeOrderModel } from "../models/placeOrder.model.js"


let placeOrderController = async(req,res)=>{
    const {orderType,currency,cardname,cardnumber,cvv,dateOfIssuance,dateOfExpiry,orderedProduct,
        orderCost,discount,productColor,productSize
    } = req.body

    const filter = [orderType,currency,cardname,cardnumber,cvv,dateOfIssuance,dateOfExpiry,orderedProduct,
        orderCost,discount,productColor,productSize].some((elem)=>elem === undefined || null)
  

  if(filter){
   try {
  const orderplace =  await placeOrderModel.collection.insertOne({
        paymentType : orderType,
        productName : orderedProduct,
        orderCost : orderCost,
        discount : discount,
        productColor : productColor || "none",
        productSize : productSize || "none"
        
    });
    console.log(orderplace)
    res.send({message : `your order with id ${orderplace.insertedId} has been placed successfully`})
   } catch (error) {
    res.send({message : "your order can not places due to server issue"})
   }
  }
  else{

    try {
      const order =  await placeOrderModel.collection.insertOne({
          paymentType: orderType,
          productName: orderedProduct,
          orderCost: orderCost,
          discount: discount,
          productColor: productColor ,
          productSize: productSize ,
          currency: currency,
          cardNumber: cardnumber,
          cardCVV: cvv,
          issueDate: dateOfIssuance,
          expityDate: dateOfExpiry,
          cardName: cardname
        });
        console.log(order)
        res.send({ message: `your order with id ${order.insertedId} has been placed successfully` });
      } catch (error) {
        console.log(error);
        res.send({ message: 'order did not place due to some issues' });
      }
     

  }

        

     

}
export default placeOrderController