import getDojangRank from '@/shared/api/dojang-rank-action';
import styles from './dojang-rank.module.css';
import { Badge } from '@/shared/ui/badge/badge';

type RankListType = Record<string, string | number>;

export async function DojangRank() {
  const { data: dojangRanksData, error } = await getDojangRank();
  const dojangRanks = dojangRanksData?.ranking?.slice(0, 10);

  if (!dojangRanks) return <>{error}</>;

  return (
    <ul className={styles.rankItem}>
      {dojangRanks.map((item: RankListType) => (
        <li key={item.ranking}>
          <Badge>{item.ranking}등</Badge>
          <p>{item.dojang_floor}층</p>
          <p className={styles.nickname}>{item.character_name}</p>
          <p className="font-body-03">
            {item.world_name} {item.character_level} {item.sub_class_name || item.class_name}
          </p>
        </li>
      ))}
    </ul>
  );
}
