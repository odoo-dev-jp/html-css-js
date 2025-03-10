async function fetchClients() {
    const response = await fetch('api-rest/get_all_client.php');
    const clients = await response.json();
    return clients;
}

async function addClient(name) {
    await fetch('api-rest/create_client.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
    });
}

async function deleteClient(id) {
    await fetch(`api-rest/delete_client.php?id=${id}`, {
        method: 'DELETE'
    });
}
