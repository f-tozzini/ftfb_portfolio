<?php
  require_once("config.php"); // connects the config page

  if (isset($_POST['name'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $street = $_POST['street'];
    $direct = "../thankyou.html";
    // echo $name; -> only to test if info is coming back
    // echo $email;
    // echo $message;
    // echo $street;

    if($street === "") {
      $sendMail = submitMessage($name, $email, $message, $direct);
    } // order matters

    //   echo "Street is empty";
    // }else{
    //   echo "Street was filled out";
    // }
  }
?>
