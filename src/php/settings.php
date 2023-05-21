<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php
$host = "feenix-mariadb.swin.edu.au";
$user = "s104261254";
$pwd = "147258";
$sql_db = "s104261254_db";

$conn = @mysqli_connect($host,
        $user,
        $pwd,
        $sql_db
        );
?>
    
</body>
</html>
