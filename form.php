<?php

if(isset($_POST['submit'])) {
    $to  = "alex.oltean97@gmail.com";
    $subject = wordwrap($_POST['subject'], 70);
    $body = $_POST['message'];
    $email = $_POST['email'];
    $header =  'MIME-Version: 1.0' . "\r\n";
    $header .= 'From: ' . $email . "\r\n";
    $header .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    mail($to,$subject,$body,$header);
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Form</title>
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="main.css"/>
</head>
<body>
<div class="container">
    <form class="col-lg-12" id="contact-form" name="contactform" method="post" action="form.php" novalidate>
        <div class="row">

            <div class="col-lg-12">
                <input type="text" name="name" id="name" placeholder="Name" onfocusout="validateName()"/>
                <span class="helper-text"></span>
            </div>

            <div class="col-lg-12">
                <input type="email" name="email" id="email" placeholder="Email" onfocusout="validateEmail()"/>
                <span class="helper-text"></span>
            </div>


            <div class="col-lg-12">
                <input type="text" name="subject" id="subject" placeholder="Subject" onfocusout="validateSubject()"/>
                <span class="helper-text"></span>
            </div>

            <div class="col-lg-12">
               <textarea name="message" placeholder="Your Message" id="message" onfocusout="validateMessage()"></textarea>
                <span class="helper-text"></span>
            </div>

            <div class="col-lg-12">
            <button class="btn btn-submit" name="submit" type="submit" >Submit</button>
            </div>

        </div>
    </form>
</div>
<script src="main.js"></script>
</body>
</html>