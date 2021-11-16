// First, tell us your name
let yourName = "Kristina Kinard" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    gb = gb + 1
    Total()

    document.querySelector('#qty-gb').textContent=gb
})
// Event listener for clicks on the "-" button for Gingerbread cookies
document.getElementById('minus-gb').addEventListener('click', function() {

    //TODO: Write the code to be run when the "-" button for "Gingerbread" is clicked
    if (gb !==0){
        gb = gb - 1
        Total()

        document.querySelector('#qty-gb').textContent=gb
}

// Event listener for clicks on the "+" button for Chocolate Chip cookies
document.getElementById('add-cc').addEventListener('click', function() {
    
    // TODO: Write the code to be run when the "+" button for "Chocolate Chip" is clicked
    cc = cc + 1
    Total()

    document.querySelector('#qty-cc').textContent=cc
})
// Event listener for clicks on the "-" button for Chocolate Chip cookies
document.getElementById('minus-cc').addEventListener('click', function() {

    //TODO: Write the code to be run when the "-" button for "Chocolate Chip" is clicked
    if (cc !==0){
        cc = cc - 1
        Total()
        document.querySelector('#qty-cc').textContent=cc
    }

})

// Event listener for clicks on the "+" button for Sugar cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    
    // TODO: Write the code to be run when the "+" button for "Sugar" is clicked
    sugar = sugar + 1
    Total()

    document.querySelector('#qty-sugar').textContent=sugar
})
// Event listener for clicks on the "-" button for Sugar cookies
document.getElementById('minus-sugar').addEventListener('click', function() {

    //TODO: Write the code to be run when the "-" button for "Sugar" is clicked
    if (sugar !==0){
        sugar = sugar - 1
        Total()
        document.querySelector('#qty-sugar').textContent=sugar
    }

})
    document.querySelector('#qty-total').textContent = total
})
function Total(){
    total=gb+cc+sugar
    document.querySelector('#qty-total').textContent=total
}