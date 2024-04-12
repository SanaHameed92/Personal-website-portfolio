console.log("hi")


document.getElementById("submit-form").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("message").value.trim();

    // Validate Name
    if (name === "") {
        alert("Please enter your name");
        event.preventDefault();
        return false;
    }

    // Validate Email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        event.preventDefault();
        return false;
    }

    // Validate Subject
    if (subject === "") {
        alert("Please enter the subject");
        event.preventDefault();
        return false;
    }

    // Validate Message
    if (message === "") {
        alert("Please enter your message");
        event.preventDefault();
        return false;
    }
});




$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwaSGloZ3ZiWlMPe_w58_s0prLkWeR6B5KFf6eSKMFq8LQ4CV55naeYGek3xwcWCjJCVQ/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})