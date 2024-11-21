import { TODAY } from '@/actions/action-util';
import styles from './page.module.css';
import {SearchBar} from "@/views";
import {DojangRank} from "@/views/main/dojang-rank";
import { Tab } from '@/components/tab/tab-basic';

export default function Main(){
    const guildTabs = ['주간', '플래그', '지하수로'];
    
    return (
        <>
            <div className={styles.searchContainer}>
                <SearchBar/>
            </div>
            <div className={styles.contents}>
                <section className={styles.dojangContainer}>
                    <div className={styles.titleWrap}>
                        <p className="font-header-01">무릉도장 10위</p>
                        <p className="font-body-03">{TODAY}</p>
                    </div>
                    <DojangRank/>
                </section>
                <section className={styles.dojangContainer}>
                    <div className={styles.titleWrap}>
                        <p className="font-header-01">길드 랭킹</p>
                        <Tab tabLists={guildTabs}/>
                    </div>
                </section>
            </div>
        </>
    )
}