<?php
include('connect.php');

$myQuery = "SELECT * FROM tbl_projects";
$result = mysqli_query($link, $myQuery);

$rows = array();

while($row = mysqli_fetch_assoc($result)) {
  $rows[] = $row;
}

var_dump($row);
        //printf($rows);
        //
        //$myresult = json_encode($rows);
        //echo $myresult;

      if (isset($_GET['projectTitle'])) {
          $title = $_GET['projectTitle'];

          $myQuery = "SELECT * FROM tbl_projects WHERE projects_title = '$title'";
          $result = mysqli_query($link, $myQuery);

          $row = mysqli_fetch_assoc ($result);

          echo json_encode($row);
      }

      if (isset($_GET['projectDesc'])) {
          $desc = $_GET['projectDesc'];

          $myQuery = "SELECT * FROM tbl_projects WHERE projects_desc = '$desc'";
          $result = mysqli_query($link, $myQuery);

          $row = mysqli_fetch_assoc ($result);

          echo json_encode($row);
      }

      if (isset($_GET ['getImages'])) {
        $myQuery = "SELECT * FROM tbl_projects";
        $result = mysqli_query($link, $myQuery);

        $rows = array();
        while($row = mysqli_fetch_assoc($result)) {
          $rows[] = $row;

        }
          echo json_encode($rows);
      }


 ?>
