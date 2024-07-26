import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const [itemText, setItemText] = useState("");
    const [items, setItems] = useState([]);
    const [isUpdating, setIsUpdating] = useState("");
    const [updateItemText, setUpdateItemText] = useState("");

    const addItem = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/item", {
                item: itemText,
            });
            console.log(res);
            console.log(res.data);
            setItems((prev) => [...prev, res.data]);
            setItemText("");
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const getItems = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/items");
                console.log(res);
                setItems(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getItems();
    }, []);

    const deleteItem = async (id) => {
        try {
            const res = await axios.delete(
                `http://localhost:5000/api/item/${id}`
            );
            console.log(res.data);
            setItems(items.filter((item) => item._id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    const renderUpdateForm = () => {
        <form className="update-form" onSubmit={(e) => updateItem(e)}>
            {/* value={itemText} onChange={(e) => setItemText(e.target.value)} */}
            <input
                className="update-new-input"
                type="text"
                placeholder="New Item"
                onChange={(e) => {
                    setUpdateItemText(e.target.value);
                }}
                value={updateItemText}
            />
            <button className="update-new-btn" type="submit">
                Update
            </button>
        </form>;
    };

    const updateItem = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(
                `http://localhost:5000/api/item/${isUpdating}`,
                { item: itemText }
            );
            console.log(res.data);
            setUpdateItemText("");
            setIsUpdating("");
            const updatedItemIndex = items.findIndex(
                (item) => item._id === isUpdating
            );
            const updateItem = (items[updatedItemIndex].item = updateItemText);

            // setItems(items.map(item => item._id === id ? { ...item, item: itemText } : item))
            // setItemText('');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="Home">
            <h1>Todo List</h1>
            <form className="form" onSubmit={(e) => addItem(e)}>
                <input
                    type="text"
                    name="todo"
                    placeholder="Add To-Do Item"
                    onChange={(e) => setItemText(e.target.value)}
                    value={itemText}
                />
                <button type="submit">Add</button>
            </form>
            <div className="todo-list-items">
                {items.map((item) => (
                    <div className="todo-item">
                        {isUpdating === item._id ? (
                            renderUpdateForm()
                        ) : (
                            <>
                                <p className="item-content">{item.item}</p>
                                <button
                                    className="update-item"
                                    onClick={() => {
                                        setIsUpdating(item._id);
                                    }}
                                >
                                    Update
                                </button>
                                <button
                                    className="delete-item"
                                    onClick={() => {
                                        deleteItem(item._id);
                                    }}
                                >
                                    Delete
                                </button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
