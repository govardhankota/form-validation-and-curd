var selectedRow = null

function onFormSubmit() {
    // if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    // }
}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["number"] = document.getElementById("number").value;
    formData["password"] = document.getElementById("password").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("vlist").getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.length);
    cell1 = row.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = row.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = row.insertCell(2);
    cell3.innerHTML = data.number;
    cell4 = row.insertCell(3);
    cell4.innerHTML = data.password;
    cell4 = row.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    document.getElementById("password").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("number").value = selectedRow.cells[2].innerHTML;
    document.getElementById("password").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.number;
    selectedRow.cells[3].innerHTML = formData.password;
}

function onDelete(td) {
    // if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("vlist").deleteRow(row.rowIndex);
        resetForm();
    
}
// function validate() {
//     isValid = true;
//     if (document.getElementById("name").value == "") {
//         isValid = false;
//         document.getElementById("fullNameValidationError").classList.remove("hide");
//     } else {
//         isValid = true;
//         if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
//             document.getElementById("fullNameValidationError").classList.add("hide");
//     }
//     return isValid;
// }
    // if (document.getElementById("number").value.length!=10){
    //     isValid =false;
    //     document.getElementById("numbervalidationError").classList.remove("hide");
    // }else {
    //     isValid = true;
    //     if (!document.getElementById("numbervalidationError").classList.contains("hide"))
    //         document.getElementById("numbervalidationError").classList.add("hide");
    // }
    






