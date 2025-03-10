<?php
require 'config.php';

function getAllItems() {
    global $conn;
    $stmt = $conn->prepare("SELECT * FROM items");
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function addItem($name) {
    global $conn;
    $stmt = $conn->prepare("INSERT INTO items (name) VALUES (:name)");
    $stmt->bindParam(':name', $name);
    return $stmt->execute();
}

function deleteItem($id) {
    global $conn;
    $stmt = $conn->prepare("DELETE FROM items WHERE id = :id");
    $stmt->bindParam(':id', $id);
    return $stmt->execute();
}
?>
