async function fetchClients() {
    try {
        const response = await fetch('api-rest/get_all_client.php');
        
        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
        
        const clients = await response.json();
        console.log(clients);
        
        return Array.isArray(clients) ? clients : []; // Asegurar que sea un array
    } catch (error) {
        console.error('Error fetching clients:', error);
        return [];
    }
}

async function addClient(email, name, city, telephone) {
    try {
        const response = await fetch('api-rest/create_client.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ email, name, city, telephone })
        });

        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

        return await response.json();
    } catch (error) {
        console.error('Error adding client:', error);
        return null;
    }
}

async function deleteClient(id) {
    try {
        const response = await fetch(`api-rest/delete_client.php?id=${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

        return await response.json();
    } catch (error) {
        console.error('Error deleting client:', error);
        return null;
    }
}
