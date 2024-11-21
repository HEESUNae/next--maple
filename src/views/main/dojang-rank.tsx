import getDojangRank from "@/actions/dojang-rank-action";
import styles from './dojang-rank.module.css';

type RankListType = Record<string, string | number>;

export async function DojangRank(){
    const dojangRanks = (await getDojangRank()).data.ranking.slice(0,10);


    return (
        <>
            <ul className={styles.rankItem}>
            {dojangRanks.map(({ranking, character_name, world_name, dojang_floor, class_name, sub_class_name, character_level, dojang_time_record }:RankListType) => (
                <li key={ranking}>
                    <div className={styles.floor}>
                        <div className={styles.badge}>{ranking}등</div>
                        <p>{dojang_floor}층</p>
                    </div>
                    <p className={styles.nickname}>{character_name}</p>
                    <p className="font-body-03">{world_name} {character_level} {sub_class_name || class_name}</p>
                </li>
            ))}
            </ul>
        </>
    )
}