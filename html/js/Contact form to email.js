function emailSend() {
    var username = document.getElementById('username').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;

    var messageBody = "Name: " + username +
        "<br/>Phone: " + phone +
        "<br/>Email: " + email +
        "<br/>Comment: " + comment;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "mhdarfath868@gmail.com",
        Password: "ujhb tapw uphv qsjt",
        From: email,
        To: "mhdarfath868@gmail.com",
        Subject: "New Contact Form Enquiry",
        Body: messageBody
    }).then(
        message => alert("Email sent successfully: " + message)
    ).catch(
        error => alert("Failed to send email: " + error)
    );
}
