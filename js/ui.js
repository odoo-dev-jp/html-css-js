document.addEventListener("DOMContentLoaded", () => {
    const itemList = document.getElementById("item-list");
    const addItemForm = document.getElementById("add-item-form");
    const itemNameInput = document.getElementById("item-name");

    // Cargar elementos al iniciar
    async function loadItems() {
        try {
            const response = await fetch("api/items.php");
            const items = await response.json();
            itemList.innerHTML = "";
            items.forEach(item => addItemToDOM(item));
        } catch (error) {
            console.error("Error loading items:", error);
        }
    }

    // Agregar un nuevo elemento
    addItemForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = itemNameInput.value.trim();
        if (!name) return;

        try {
            const response = await fetch("api/items.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name })
            });
            const result = await response.json();
            if (result.success) {
                loadItems();
                itemNameInput.value = "";
            }
        } catch (error) {
            console.error("Error adding item:", error);
        }
    });

    // Eliminar un elemento
    async function deleteItem(id) {
        try {
            const response = await fetch(`api/items.php?id=${id}`, {
                method: "DELETE"
            });
            const result = await response.json();
            if (result.success) {
                loadItems();
            }
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    }

    // Agregar elementos al DOM
    function addItemToDOM(item) {
        const li = document.createElement("li");
        li.textContent = item.name;
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => deleteItem(item.id));

        li.appendChild(deleteBtn);
        itemList.appendChild(li);
    }

    loadItems();
});

