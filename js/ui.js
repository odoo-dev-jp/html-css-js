document.getElementById('client-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    await addClient(name);
    loadClients();
});

async function loadClients() {
    const clients = await fetchClients();
    const list = document.getElementById('client-list');
    list.innerHTML = '';
    clients.forEach(client => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${client.id}</td>
            <td>${client.name}</td>
            <td>
                <button onclick="deleteClient(${client.id})">Delete</button>
            </td>
        `;
        list.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', loadClients);
