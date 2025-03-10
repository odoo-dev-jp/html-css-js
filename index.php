<?php
require_once('includes/Client.class.php');

// Obtener todos los clientes de la base de datos
ob_start();
Client::get_all_clients();
$clients_json = ob_get_clean();
$clients = json_decode($clients_json, true);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD API REST</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <h1>CRUD API REST</h1>

    <form id="client-form">
        <input type="text" id="name" placeholder="Enter Name" required>
        <input type="text" id="email" placeholder="Enter Email" required>
        <input type="text" id="city" placeholder="Enter City" required>
        <input type="text" id="telephone" placeholder="Enter Telephone" required>
        <button type="submit">Add Client</button>
    </form>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Telephone</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody id="client-list">
            <?php if ($clients): ?>
                <?php foreach ($clients as $client): ?>
                    <tr>
                        <td><?= $client["id"] ?></td>
                        <td><?= htmlspecialchars($client["name"]) ?></td>
                        <td><?= htmlspecialchars($client["email"]) ?></td>
                        <td><?= htmlspecialchars($client["city"]) ?></td>
                        <td><?= htmlspecialchars($client["telephone"]) ?></td>
                        <td>
                            <button onclick="deleteClient(<?= $client['id'] ?>)">Delete</button>
                        </td>
                    </tr>
                <?php endforeach; ?>
            <?php endif; ?>
        </tbody>
    </table>

    <script src="js/api.js"></script>
    <script src="js/ui.js"></script>
</body>
</html>

