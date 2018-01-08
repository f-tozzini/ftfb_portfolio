<?php

      $user = "root";
      $pass = "root";
      $host = "localhost";
      $db = "db_portfolio";

      $conn = mysqli_connect($host, $user, $pass, $db);
      mysqli_set_charset($conn,'utf8');

      if (!$conn) {
        echo "Broken connection";
        exit;
      }

      echo "connected!!!!!!!!!!!!!!";

 ?>
