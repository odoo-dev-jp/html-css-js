document.addEventListener('DOMContentLoaded', async () => {
    const items = await fetchItems();
    renderItems(items);

    document.getElementById('crud-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const itemName = document.getElementById('item-name').value;
        await addItem(itemName);
        const updatedItems = await fetchItems();
        renderItems(updatedItems);
    });
});

async function handleDelete(id) {
    await deleteItem(id);
    const updatedItems = await fetchItems();
    renderItems(updatedItems);
}
