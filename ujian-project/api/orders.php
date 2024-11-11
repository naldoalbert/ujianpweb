<?php
$host = 'localhost';
$db = 'shoe_store';
$user = 'root'; // Ganti dengan username MySQL Anda
$pass = ''; // Ganti dengan password MySQL Anda

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$phone = $data->phone;
$address = $data->address;
$product_id = $data->product_id;

$sql = "INSERT INTO orders (product_id, name, phone, address) VALUES ('$product_id', '$name', '$phone', '$address')";
$conn->query($sql);

echo json_encode(["status" => "success"]);
$conn->close();
?>