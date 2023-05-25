<?php
// $host = "feenix-mariadb.swin.edu.au";
// $user = "s104261254";
// $pwd = "147258";
// $sql_db = "s104261254_db";
$host = "jdbc:mysql://localhost:3306/";
$user = "root";
$pwd = "Password1";
$sql_db = "application";

$conn = @mysqli_connect($host,
        $user,
        $pwd,
        $sql_db
        );
?>