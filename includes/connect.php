<?php
   $user = "root";
   $pass = "root";
   $host = "localhost";
   $db = "db_portfolioprojects";
   $conn = mysqli_connect($host, $user, $pass, $db, 8889);
   if (!$conn) {
     echo 'not connected';
   }
   echo "connected!!!!!!!!!!!!!!";
 ?>
