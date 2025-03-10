<?php
// Simulación de datos (esto debería venir de una base de datos)
$clients = [
    ["id" => 1, "name" => "John Doe"],
    ["id" => 2, "name" => "Jane Doe"],
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD API REST</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>CRUD API REST</h1>

    <form id="client-form" method="POST" action="add_client.php">
        <input type="text" name="name" placeholder="Enter Name" required>
        <button type="submit">Add Client</button>
    </form>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($clients as $client): ?>
                <tr>
                    <td><?= $client["id"] ?></td>
                    <td><?= htmlspecialchars($client["name"]) ?></td>
                    <td>
                        <a href="delete.php?id=<?= $client["id"] ?>">Delete</a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>

    <script src="api.js"></script>
    <script src="ui.js"></script>
</body>
</html>

