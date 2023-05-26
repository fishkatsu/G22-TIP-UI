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
    $query = "SELECT * FROM Application";
    $result = mysqli_query($conn, $query);
    
    if (!$result) {
        echo json_encode(array('error' => 'Error executing query'));
    } else {
        $applications = array();
        
        while ($row = mysqli_fetch_assoc($result)) {
            $application = array(
                'applyNum' => $row['applyNum'],
                'jobrefNum' => $row['jobrefNum'],
                'firstname' => $row['firstname'],
                'lastname' => $row['lastname'],
                'gender' => $row['gender'],
                'dob' => $row['dob'],
                'street' => $row['street'],
                'suburb' => $row['suburb'],
                'state' => $row['state'],
                'postcode' => $row['postcode'],
                'phone' => $row['phone'],
                'email' => $row['email'],
                'availability' => $row['availability'],
                'status' => $row['status'],
                'schools' => array(), // Initialize an empty array to store school entries
                'WorkExperience' => array() // Initialize an empty array to store work experience entries
            );

            $schoolQuery = "SELECT * FROM school WHERE applyNum = '" . $row['applyNum'] . "'";
            $schoolResult = mysqli_query($conn, $schoolQuery);
            
            if ($schoolResult) {
                while ($schoolRow = mysqli_fetch_assoc($schoolResult)) {
                    $schoolEntry = array(
                        'SFrom' => $schoolRow['SFrom'],
                        'STo' => $schoolRow['STo'],
                        'SName' => $schoolRow['SName'],
                        'Qualification' => $schoolRow['Qualification']
                    );
                    $application['schools'][] = $schoolEntry;
                }
                mysqli_free_result($schoolResult);
            } else {
                echo json_encode(array('error' => 'Error executing school query'));
                exit;
            }
            
            $workQuery = "SELECT * FROM WorkExperience WHERE applyNum = '" . $row['applyNum'] . "'";
            $workResult = mysqli_query($conn, $workQuery);

            if ($workResult) {
                while ($workRow = mysqli_fetch_assoc($workResult)) {
                    $workEntry = array(
                        'WFrom' => $workRow['WFrom'],
                        'WTo' => $workRow['WTo'],
                        'CName' => $workRow['CName'],
                        'Position' => $workRow['Position'],
                    );
                    $application['WorkExperience'][] = $workEntry;
                }
                mysqli_free_result($workResult);
            } else {
                echo json_encode(array('error' => 'Error executing work query'));
                exit;
            }
            
            $applications[] = $application;
        }
        
        echo json_encode($applications);
    }
    
    mysqli_free_result($result);
    mysqli_close($conn);
}
?>
