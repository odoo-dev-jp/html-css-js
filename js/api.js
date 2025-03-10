const API_URL = 'http://localhost:8000/items';

async function fetchItems() {
    const response = await fetch(API_URL);
    return response.json();
}

async function addItem(name) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name })
    });
    return response.json();
}

async function deleteItem(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
}
