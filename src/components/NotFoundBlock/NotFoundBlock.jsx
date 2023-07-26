import styles from './NotFoundBlock.module.scss'

function NotFoundBlock() {
    return (
        <>
            <h1 className={styles.root}>
                <span>@</span>
                <br />
                Ничего не найдено!
                <p className={styles.texter}>Неверная страница</p>
            </h1>
        </>
    );
}

export default NotFoundBlock;