<?php
  $user = "root";
  $pass = "root";
  $host = "localhost";
  $db = "flavia"; // change this to what you called your database

  $conn = mysqli_connect($host, $user, $pass, $db, 8889);

  if (!$conn) {
    echo 'sumpin done gone wrong, son';
  }
?>
