<?php

  function redirect_to($location) {
    if($location != NULL) {
      header("Location: {$location}");
      exit;
    }
  }

  function submitMessage($name, $email, $message, $direct) { //mamp is not set locally to send email, so wont be able to test it
    $to = "flavia@ftfb.ca";
    $subj = "Message sent via ftfb.ca";
    $extra = "Reply-To: " .$email; //triggers the reply button so you won't get it back
    $msg = "Name: " .$name."\n\nEmail: ".$email."\n\nComments: ".$message;
    mail($to,$subj,$msg,$extra);
    // $direct = $direct. "?name={$name}"; //name the thank you message
    redirect_to($direct);
  }


 ?>
