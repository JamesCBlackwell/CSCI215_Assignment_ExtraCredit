function ajaxSuccess()
{
    document.getElementById('button').onClick = function() {
        alert("Hello World");
        alreadyExistingFunc();
    }
}