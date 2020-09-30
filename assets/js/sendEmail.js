function sendMail(contactForm) {
    emailjs.send("gmail", "first_test_template", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                alert("Your message was successfully sent!");
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    document.getElementById('submit-button').innerHTML = '<img class="spiner" src="assets/images/loading.gif" alt="">';
    setTimeout(function () {
        document.getElementById("myForm").reset();
        document.getElementById('submit-button').innerHTML = 'Send';
    }, 3000);
    return false;  // To block from loading a new page
}