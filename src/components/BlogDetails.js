import styles from "./BlogDetails.module.css";

const BlogDetails = (props) => {
    return props.blogs.map((blog) => (
        <div className={styles.card}>
            <h2 className={styles.heading}>{blog.title}</h2>
            <p className={styles.para}>{blog.content}</p>
        </div>
    ));
};

export default BlogDetails;
