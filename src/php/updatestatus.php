<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once("settings.php");
$conn = @mysqli_connect($host, $user, $pwd, $sql_db);
$sql_table = "Application";

if (!$conn) {
    echo json_encode(array('error' => 'Database connection failure'));
} else {
    $action = $_GET['action'];
    $applyNum = $_GET['applyNum'];
    
    if ($action === "accept") {
        $status = "Accepted";
    } elseif ($action === "decline") {
        $status = "Rejected";
    } else {
        echo json_encode(array('error' => 'Invalid action'));
        exit();
    }
    
    $query = "UPDATE $sql_table SET status='$status' WHERE applyNum='$applyNum'";
    $result = mysqli_query($conn, $query);
    
    if (!$result) {
        echo json_encode(array('error' => 'Failed to update status'));
    } else {
        echo json_encode(array('success' => 'Status updated successfully'));
    }
    
    mysqli_close($conn);
}
?>
