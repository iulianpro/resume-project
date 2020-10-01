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

function showPhone() {
    document.getElementById('personal-phone').innerHTML = '+44 7424 693338';
    document.getElementById('personal-phone').classList.remove('personal-phone-hide');
    document.getElementById('personal-phone').classList.add('personal-info-item');
}

function showEmail() {
    document.getElementById('personal-email').innerHTML = 'iulian.prodea@outlook.com';
    document.getElementById('personal-email').classList.remove('personal-email-hide');
    document.getElementById('personal-email').classList.add('personal-info-item');
}
