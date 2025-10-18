// Character count with Input()
commentsInput.addEventListener("input", () => {
    console.log("Characters:", commentsInput.value.length);
})

// Display tooltip with mouseover()
const emailInput = document.getElementById("emailInput");
const tooltip = document.getElementById("tooltip")

function showTooltip(){
    tooltip.style.display = "block";
}
function hideTooltip(){
    tooltip.style.display = "none";
}

emailInput.addEventListener("mouseover", () => showTooltip())
emailInput.addEventListener("mouseout", ()=> hideTooltip())

// Prevent submission if empty field
document.querySelector("#submitBtn").addEventListener("click", (event) => {
    event.preventDefault();
    const nameValue = document.querySelector("#nameInput").value;
    const emailValue = document.querySelector("#emailInput").value;

    if (nameValue ==="" || emailValue === "") {
        alert("Please fill out all required fields before submitting.");     
    } else {
        alert("Form submitted successfully!");
    }
});

