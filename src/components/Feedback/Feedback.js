import React from "react";
import styles from "../Feedback/Feedback.module.css";

const Feedback = ({ counter }) => {
    return (
        <>
            <div className={styles.btn}>
                <button
                    className={styles.button}
                    name="good"
                    type="button"
                    onClick={counter}
                >
                    Good
        </button>
                <button
                    className={styles.button}
                    name="neutral"
                    type="button"
                    onClick={counter}
                >
                    Neutral
        </button>
                <button
                    className={styles.button}
                    name="bad"
                    type="button"
                    onClick={counter}
                >
                    Bad
        </button>
            </div>
        </>
    );
};

export default Feedback;