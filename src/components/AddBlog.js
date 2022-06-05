import styles from "./AddBlog.module.css";
import { useState } from "react";

const AddBlog = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredContent, setEnteredContent] = useState("");

    const addSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddUser(enteredTitle, enteredContent);
        setEnteredTitle("");
        setEnteredContent("");
    };
    const addTitleHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const addDetailsHandler = (event) => {
        setEnteredContent(event.target.value);
    };

    return (
        <div className={styles.create}>
            <form onSubmit={addSubmitHandler}>
                <label htmlFor="title">Title</label>
                <input
                    className={styles.input}
                    type="text"
                    onChange={addTitleHandler}
                    value={enteredTitle}
                />
                <label htmlFor="content">Content</label>
                <textarea
                    className={styles.input}
                    placeholder="Add Details...."
                    onChange={addDetailsHandler}
                    value={enteredContent}
                />
                <button className={styles.button} type="submit">
                    Add Blog
                </button>
            </form>
        </div>
    );
};

export default AddBlog;
