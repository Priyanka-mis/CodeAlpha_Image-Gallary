







// Query selectors
let div1 = document.querySelector(".div"); 
let imgDiv = document.querySelector("#img-div"); // Correct the ID
let mainDiv = document.querySelectorAll(".main .flow1"); // Correct the class selector
let closeBtn = document.querySelector(".div span")
let mainConatiner = document.querySelector(".main")


mainDiv.forEach(allImage => {
    allImage.addEventListener("click", () => {
        openImage(allImage.src); // Pass the image's src to the function
    });
});


function openImage(image) {
    div1.style.display = "flex"; 
    imgDiv.src = image; 

    mainConatiner.classList.add("blurred")
}

closeBtn.addEventListener("click", function() {
    div1.style.display = "none"; 
    mainConatiner.classList.remove("blurred")
});
