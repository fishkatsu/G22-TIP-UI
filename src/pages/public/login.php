<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
// Establish a connection to your database
$servername = "feenix-mariadb.swin.edu.au";
$username = "s104147215";
$password = "learnmysql";
$dbname = "s104147215_db";
echo "<p>Hello, !</p>";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve the form data
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// Insert the form data into the database
$sql = "INSERT INTO Users (username, email, password) VALUES ('$name', '$email', '$password')";
if ($conn->query($sql) === TRUE) {
    $response = "User created successfully";
} else {
    $response = "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();

// Send the response back to the client
echo $response;
?>

