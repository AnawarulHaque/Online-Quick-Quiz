<?php
$email = $_POST['email'];
$email = $_POST['password'];

//Database connection
$conn = new mysqli('locaalhost','root','','test');
if ($conn->connection_error'){
    die('Connection Failed : '.$conn->connect-error');
}
else{
    $stmt = $conn->prepare("insert into login(email, password) values(?,?)");
    $stmt->bind_param("ss",$email, $password);
    $stmt->execute();
    echo "registration SUccessfully...";
    $stmt->close();
    $stmt->close();
}
?>