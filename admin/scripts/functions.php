<?php 
include('connect.php');

// get all the content when the page loads
if (isset($_GET['getAllContent'])) {
	$myQuery = "SELECT * FROM tbl_projects";

	$result = mysqli_query($conn, $myQuery);

	$rows = array();

	while($row = mysqli_fetch_assoc($result)) {
	  $rows[] = $row;
	}

	$newResult = json_encode($rows);

	echo $newResult;
}



// this query gets a single result by project title -> not sure how you're calling this from your js stuff

if (isset($_GET['projectTitle'])) {
  $title = $_GET['projectTitle'];

  $myQuery = "SELECT * FROM tbl_projects WHERE projects_title = '$title'";

  $result = mysqli_query($conn, $myQuery);

  $row = mysqli_fetch_assoc ($result);

  echo json_encode($row);
}

// this query does the same thing as above, but by description instead... why are you doing this?

if (isset($_GET['projectDesc'])) {
  $desc = $_GET['projectDesc'];

  $myQuery = "SELECT * FROM tbl_projects WHERE projects_desc = '$desc'";

  $result = mysqli_query($conn, $myQuery);

  $row = mysqli_fetch_assoc ($result);

  echo json_encode($row);
}

// this query does the same as the query at the very top of the file... you should probable rework this to get just the images that you want (or just that column from the database) - I changed the query for your reference

if (isset($_GET ['getImages'])) {
	$myQuery = "SELECT projects_image FROM tbl_projects";

	$result = mysqli_query($conn, $myQuery);

	$rows = array();

	while($row = mysqli_fetch_assoc($result)) {
	  $rows[] = $row;
	}
	
	echo json_encode($rows);
}

?>