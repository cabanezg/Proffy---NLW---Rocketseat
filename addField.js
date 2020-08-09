// Search button
    document.querySelector("#add-time")
//When I click in button
    .addEventListener("click", cloneField)


//Run an action
function cloneField() {
    //Duplicate the fields
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)// boolean: true or false
    //Take the fields
    const fields = newFieldContainer.querySelectorAll("input")
    //Clear all the fields
    fields.forEach(function(field) {
        // Take the moment field and clear it
        field.value = ""
    })
    //Put on page
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}