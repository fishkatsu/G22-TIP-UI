<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once("settings.php");
$conn = @mysqli_connect($host, $user, $pwd, $sql_db);
$sql_table = "TimeTable";
if (!$conn) {
    echo json_encode(array('error' => 'Database connection failure'));
} else {
    if(isset($_GET['applyNum'])) {
        $applyNum = $_GET['applyNum'];
        $query = "SELECT * FROM $sql_table WHERE applyNum = $applyNum";
    } else {
        $query = "SELECT * FROM $sql_table";
    }
    
    $result = mysqli_query($conn, $query);

    if (!$result) {
        echo json_encode(array('error' => 'Table does not exist'));
    } else {
        $data = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
        echo json_encode($data);
    }

    mysqli_free_result($result);
    mysqli_close($conn);
}
?>
