function onSubmit() {
    var name = document.getElementById("name").value;
    if (name == null || name == "") {
        window.alert("Name is empty");
        return;
    }
    var num = document.getElementById("num").value;
    if (num == null || num == "") {
        window.alert("Number is incorrectly formatted");
        return;
    }
    var em = document.getElementById("em").value;
    if (em == null || em == "") {
        window.alert("Email is empty");
        return;
    }
    else if (!em.includes("@")) {
        window.alert("Email is incorrect");
        return;
    }
    window.alert("Submitted Successfully!");

}