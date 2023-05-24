<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once("settings.php");

$conn = @mysqli_connect($host, $user, $pwd, $sql_db);
$sql_table = "application";
$sql_table_education = "school";
$sql_table_experience = "WorkExperience";

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SERVER['CONTENT_TYPE']) && $_SERVER['CONTENT_TYPE'] === 'application/json') {
    $json_data = file_get_contents("php://input");
    $data = json_decode($json_data, true);

    if (!$conn) {
        echo json_encode(array('error' => 'Database connection failure'));
    } else {
        // Prepare the data for insertion into the database
        $jobRefNum = mysqli_real_escape_string($conn, $data['jobRefNum']);
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

        // Insert the main application data into the database
        $query = "INSERT INTO $sql_table (jobRefNum, firstname, lastname, gender, dob, street, suburb, state, postcode, phone, email, password, availability) VALUES ('$jobRefNum', '$firstname', '$lastname', '$gender', '$dob', '$street', '$suburb', '$state', '$postcode', '$phone', '$email', '$password', '$availability')";
        if (mysqli_query($conn, $query)) {
            $applicationId = mysqli_insert_id($conn);
            
            // Check if educational background data is present
            if (isset($data['educationalBackground'])) {
                // echo json_encode($data['educationalBackground']);
                $educationalBackground = $data['educationalBackground'];
                // echo json_encode(array('$educationalBackground' => $educationalBackground));
                // Loop through each educational background entry
                foreach ($educationalBackground as $background) {
                    $SFrom = mysqli_real_escape_string($conn, $background['start']);
                    $STo = mysqli_real_escape_string($conn, $background['end']);
                    $SName = mysqli_real_escape_string($conn, $background['institution']);
                    $Qualification = mysqli_real_escape_string($conn, $background['qualification']);
                    // echo json_encode(array('$SFrom' => $SFrom));
                    // echo json_encode(array('$STo' => $STo));
                    // echo json_encode(array('$SName' => $SName));
                    // echo json_encode(array('$Qualification' => $Qualification));
                    // Insert educational background data into the database
                    $eduQuery = "INSERT INTO $sql_table_education (applyNum, SFrom, STo, SName, Qualification) VALUES ('$applicationId', '$SFrom', '$STo', '$SName', '$Qualification')";
                    mysqli_query($conn, $eduQuery);
                }
            }

            // Check if work experience data is present
            if (isset($data['workExperience'])) {
                $workExperience = $data['workExperience'];
                // echo "Test 2";

                // Loop through each work experience entry
                foreach ($workExperience as $experience) {
                    $wFrom = mysqli_real_escape_string($conn, $experience['WFrom']);
                    $wTo = mysqli_real_escape_string($conn, $experience['WTo']);
                    $CName = mysqli_real_escape_string($conn, $experience['CName']);
                    $Position = mysqli_real_escape_string($conn, $experience['Position']);
                    echo json_encode(array('$wFrom' => $wFrom));
                    echo json_encode(array('$wTo' => $wTo));
                    echo json_encode(array('$CName' => $CName));
                    echo json_encode(array('$Position' => $Position));

                    // Insert work experience data into the database
                    $expQuery = "INSERT INTO $sql_table_experience (applyNum, WFrom, WTo, CName, Position) VALUES ('$applicationId', '$wFrom', '$wTo', '$CName', '$Position')";
                    mysqli_query($conn, $expQuery);
                }
            // echo json_encode(array('$workExperience' => $workExperience));

            }

            echo json_encode(array('success' => 'Application submitted successfully'));
            // echo json_encode(array('$workExperience' => $workExperience));
        } else {
            echo json_encode(array('error' => 'Application submission failed'));
        }
    }

    mysqli_close($conn);
} else {
    echo json_encode(array('error' => 'Invalid request'));
}
