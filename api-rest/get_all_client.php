<?php
    header('Content-Type: application/json');
    require_once('../includes/Client.class.php');

    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        Client::get_all_clients();
        }

?>
