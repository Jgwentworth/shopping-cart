const orderItems = [];

$("#shipping").hide();

if (orderItems.length == 0){
        $("#cart").hide();
}

$("#inputAlert").hide()

$('button').click(function(){
    $("#cart").show()
    let $item = $(this).parents()[0];
    let $itemName = $($item).children()[1];
    $itemName = $($itemName).text();
    let $itemCost = $($item).children()[3];
    $itemCost = $($itemCost).text();
    let order = { name:$itemName, cost:$itemCost};
    orderItems.push(order);
    let subTotal = 0
    $(".cart").empty();
    for (let i= 0; i < orderItems.length; i++){
        let obj = orderItems[i];
        let cartObj = $("<div></div>");
        let objName = $("<p></p>").text(obj.name);
        cartObj.append(objName);
        let objCost = $("<p></p>").text(obj.cost);
        cartObj.append(objCost)
        let tempTotal = (obj.cost).slice(1);
        subTotal = subTotal + parseFloat(tempTotal);
        let tempTax = 10 * subTotal / 100;
        // tempTax = tempTax - .01
        let totalCost = subTotal + tempTax;
        tempTax = tempTax.toFixed(2);
        totalCost = totalCost.toFixed(2);
        subTotal = subTotal.toFixed(2);
        $(".cart").append(cartObj);
        $("#subtotal").text("$" + subTotal)
        $("#tax").text("$" + tempTax)
        $("#total").text("$" + totalCost)
        subTotal = parseFloat(subTotal);
    }
})

$("#confirmit").click(function(){
    $("#shipping").show()
})

$("#shipit").click(function(){
    let $inputName = $("#inputName").val();
    let $inputAddress = $("#inputAddress").val();
    let $inputAddress2 = $("#inputAddress2").val();
    let $inputCity = $("#inputCity").val();
    let $inputZip = $("#inputZip").val();
    if ($inputName == ""){
        $("#inputAlert").show();
        $("#inputName").addClass("form-control-danger");
    } else if ($inputAddress == "") {
        alert("Address field is empty");
    } else if ($inputCity == ""){
        alert("City field is empty")
    } else if ($inputZip == ""){
        alert("Zip field is empty")
    } else {
    alert("Thank you for your purchase! Your order has been shipped.")
    }
})




