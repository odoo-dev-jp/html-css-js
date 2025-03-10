<?php
require 'db.php';
header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    echo json_encode(getAllItems());
} elseif ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(["success" => addItem($data['name'])]);
} elseif ($method === 'DELETE') {
    $id = $_GET['id'] ?? null;
    echo json_encode(["success" => deleteItem($id)]);
}
?>
