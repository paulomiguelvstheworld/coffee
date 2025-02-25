// function spoon(coffee_type){
//     console.log(coffee_type);
// }

// function flavor(){
//     var cof = document.getElementById("coffee").value
//     document.getElementById("type").innerHTML = "selected: " + cof
// }

function display() {
    var type = document.getElementById("type").value;
    var flavor = document.getElementById("flavor").value;
    var size = document.getElementById("size").value;
    var pump = document.getElementById("pump").value;

    let price = 0;
    if (size === "Small") price = 100;
    else if (size === "Medium") price = 150;
    else if (size === "Large") price = 200;

    // Display SweetAlert confirmation
    Swal.fire({
    title: 'Order Confirmed',
    html: `
        <strong>Type: </strong> ${type} Coffee <br>
        <strong>Flavor: </strong>${flavor}  <br>
        <strong>Size: </strong>${size} - P${price} <br>
        <strong>Sugar Level: </strong>${pump} <br> <br>
        <h4>Total: P${price}</h4>
        `,
        icon: 'success',
        confirmButtonText: 'OK'
    });

    document.getElementById("receipt").style.display = "block" ;
    document.getElementById("receipt").innerHTML =  `
    <div class= "alert alert-info">
        <strong>Receipt:</strong><br>
        ${type} ${flavor} ${size} coffee with ${pump} sugar level. <br>
        <strong>Total:</strong> P${price}
        </div>
        `

    // var orderText = `You ordered ${type} ${flavor} with a size of ${size} and a ${pump} sugar level.`
    // document.getElementById("order").innerText = orderText
}