<?php
include('connect.php');

if (isset($_GET['getAllContent'])) {

    $myQuery = "SELECT projects_id, projects_thumb, projects_title FROM tbl_projects"; //select id, project thumb and title instead of *

	$result = mysqli_query($conn, $myQuery);

	$rows = array();
        if(!empty($result))
        {
            while($row = mysqli_fetch_assoc($result)) {
              $rows[] = $row;
            }
        }else
        {
            $rows[] = "No Results";
        }
	$newResult = $rows;

	echo json_encode($newResult);
}

if (isset($_GET['projectId'])) {
  $id = $_GET['projectId'];

  $myQuery = "SELECT * FROM tbl_projects WHERE projects_id = $id";

  $result = mysqli_query($conn, $myQuery);

  $row = mysqli_fetch_assoc ($result);

  echo json_encode($row);
}

?>
