import React from 'react';

import styles from './PageHeader.module.css';

const PageHeader = () => {
    return (
        <div className={styles.pagehead}>
            <header>
                <h1>ReactMeals</h1>
                <button>Your Cart</button>
            </header>
        </div>
    )
}

export default PageHeader;