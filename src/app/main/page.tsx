import styles from './page.module.css';
import {SearchBar} from "@/views";
import {DojangRank} from "@/views/main/dojang-rank";

export default function Main(){
    return (
        <>
            <div className={styles.searchContainer}>
                <SearchBar/>
            </div>
            <DojangRank/>
        </>
    )
}