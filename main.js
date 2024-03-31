















Form.addEventListener ( "submit" , (e) => {
    e.preventDefault();
    console.log("here")
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