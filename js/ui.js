function renderItems(items) {
    const tableBody = document.getElementById('items-table');
    tableBody.innerHTML = '';
    items.forEach(item => {
        const row = `<tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>
                            <button onclick="handleDelete(${item.id})">Delete</button>
                        </td>
                     </tr>`;
        tableBody.innerHTML += row;
    });
}
