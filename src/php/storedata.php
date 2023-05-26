<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once("settings.php");

$conn = @mysqli_connect($host, $user, $pwd, $sql_db);
$sql_table = "Application";
$sql_table_education = "school";
$sql_table_experience = "WorkExperience";

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SERVER['CONTENT_TYPE']) && $_SERVER['CONTENT_TYPE'] === 'application/json') {
    $json_data = file_get_contents("php://input");
    $data = json_decode($json_data, true);

    if (!$conn) {
        echo json_encode(array('error' => 'Database connection failure'));
    } else {
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

        if (isset($data['timeAvailability'])) {
            $timeAvailability = $data['timeAvailability'];
            $availability = implode(',', $timeAvailability);
        } else {
            $availability = "";
        }

        $query = "INSERT INTO $sql_table (jobrefNum, firstname, lastname, gender, dob, street, suburb, state, postcode, phone, email, password, availability) VALUES ('$jobrefNum', '$firstname', '$lastname', '$gender', '$dob', '$street', '$suburb', '$state', '$postcode', '$phone', '$email', '$password', '$availability')";
        if (mysqli_query($conn, $query)) {
            $applicationId = mysqli_insert_id($conn);
            
            if (isset($data['educationalBackground'])) {
                $educationalBackground = $data['educationalBackground'];
                foreach ($educationalBackground as $background) {
                    $SFrom = mysqli_real_escape_string($conn, $background['start']);
                    $STo = mysqli_real_escape_string($conn, $background['end']);
                    $SName = mysqli_real_escape_string($conn, $background['institution']);
                    $Qualification = mysqli_real_escape_string($conn, $background['qualification']);
                    $eduQuery = "INSERT INTO $sql_table_education (applyNum, SFrom, STo, SName, Qualification) VALUES ('$applicationId', '$SFrom', '$STo', '$SName', '$Qualification')";
                    mysqli_query($conn, $eduQuery);
                }
            }

            if (isset($data['workExperience'])) {
                $workExperience = $data['workExperience'];
                foreach ($workExperience as $experience) {
                    $wFrom = mysqli_real_escape_string($conn, $experience['WFrom']);
                    $wTo = mysqli_real_escape_string($conn, $experience['WTo']);
                    $CName = mysqli_real_escape_string($conn, $experience['CName']);
                    $Position = mysqli_real_escape_string($conn, $experience['Position']);
                    echo json_encode(array('$wFrom' => $wFrom));
                    echo json_encode(array('$wTo' => $wTo));
                    echo json_encode(array('$CName' => $CName));
                    echo json_encode(array('$Position' => $Position));

                    $expQuery = "INSERT INTO $sql_table_experience (applyNum, WFrom, WTo, CName, Position) VALUES ('$applicationId', '$wFrom', '$wTo', '$CName', '$Position')";
                    mysqli_query($conn, $expQuery);
                }
            }

            echo json_encode(array('success' => 'Application submitted successfully'));
        } else {
            echo json_encode(array('error' => 'Application submission failed'));
        }
    }

    mysqli_close($conn);
} else {
    echo json_encode(array('error' => 'Invalid request'));
}
