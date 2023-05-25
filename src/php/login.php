<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once("settings.php");
$conn = @mysqli_connect($host, $user, $pwd, $sql_db);
$sql_table = "application";
if (!$conn) {
    echo json_encode(array('error' => 'Database connection failure'));
} else {
    $query = "SELECT * FROM user";
    $result = mysqli_query($conn, $query);
    
    if (!$result) {
        echo json_encode(array('error' => 'Table does not exist'));
    } else {
        $data = array()
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
        
        // Check email, password, and status conditions
        $email = $_GET['email']; // Assuming you receive the email as a parameter
        $password = $_GET['password']; // Assuming you receive the password as a parameter
        
        $response = "";
        $userId = ""; // Initialize userId variable
        foreach ($data as $row) {
            if ($row['email'] === $email && $row['status'] === 'Sessional' && $row['password'] === $password) {
                $response = "sessional";
                $userId = $row['applyNum']; // Store applyNum as userId
                break;
            } elseif ($row['email'] === $email && $row['status'] === 'Permanent' && $row['password'] === $password) {
                $response = "permanent";
                $userId = $row['applyNum']; // Store applyNum as userId
                break;
            }
        }
        
        // Return the appropriate value and userId
        if ($response !== "") {
            echo json_encode(array('response' => $response, 'userId' => $userId));
        } else {
            echo json_encode(array('response' => 'unknown'));
        }
    }
    
    mysqli_free_result($result);
    mysqli_close($conn);
}
?>
