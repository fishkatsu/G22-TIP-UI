<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once("settings.php");

$conn = @mysqli_connect($host, $user, $pwd, $sql_db);
$sql_table = "Application";

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SERVER['CONTENT_TYPE']) && $_SERVER['CONTENT_TYPE'] === 'application/json') {
    $json_data = file_get_contents("php://input");
    $data = json_decode($json_data, true);

    if (!$conn) {
        echo json_encode(array('error' => 'Database connection failure'));
    } else {
        // Prepare the data for insertion into the database
        $jobrefNum = mysqli_real_escape_string($conn, $data['jobrefNum']);
        $firstname = mysqli_real_escape_string($conn, $data['firstname']);
        $lastname = mysqli_real_escape_string($conn, $data['lastname']);
        $gender = mysqli_real_escape_string($conn, $data['gender']);
        $dob = mysqli_real_escape_string($conn, $data['dob']);
        $street = mysqli_real_escape_string($conn, $data['street']);
        $suburb = mysqli_real_escape_string($conn, $data['suburb']);
        $state = mysqli_real_escape_string($conn, $data['state']);
        $postcode = mysqli_real_escape_string($conn, $data['postcode']);
        $phone = mysqli_real_escape_string($conn, $data['phone']);
        $email = mysqli_real_escape_string($conn, $data['email']);
        $password = mysqli_real_escape_string($conn, $data['password']);

        // Check if the 'timeAvailability' key exists in the data
        if (isset($data['timeAvailability'])) {
            $timeAvailability = $data['timeAvailability'];
            // Convert the TimeAvailability array to a string
            $availability = implode(',', $timeAvailability);
        } else {
            $availability = "";
        }

        // Insert the data into the database
        $query = "INSERT INTO $sql_table (jobrefNum, firstname, lastname, gender, dob, street, suburb, state, postcode, phone, email, password, availability) VALUES ('$jobrefNum', '$firstname', '$lastname', '$gender', '$dob', '$street', '$suburb', '$state', '$postcode', '$phone', '$email', '$password', '$availability')";

        if (mysqli_query($conn, $query)) {
            echo json_encode(array('success' => 'Application submitted successfully'));
            echo $availability;
            echo $data['timeAvailability'];
        } else {
            echo json_encode(array('error' => 'Error submitting application'));
        }

        mysqli_close($conn);
    }
} else {
    echo json_encode(array('error' => 'Invalid request'));
}
?>
