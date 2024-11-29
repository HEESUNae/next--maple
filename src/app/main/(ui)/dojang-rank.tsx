import getDojangRank from '@/actions/dojang-rank-action';
import styles from './dojang-rank.module.css';
import { Badge } from '@/shared/ui/badge/badge';

type RankListType = Record<string, string | number>;

export async function DojangRank() {
  const { data: dojangRanksData, error } = await getDojangRank();
  const dojangRanks = dojangRanksData?.ranking?.slice(0, 10);

  if (!dojangRanks) return <>{error}</>;

  return (
    <>
      <ul className={styles.rankItem}>
        {dojangRanks.map(
          ({
            ranking,
            character_name,
            world_name,
            dojang_floor,
            class_name,
            sub_class_name,
            character_level,
          }: RankListType) => (
            <li key={ranking}>
              <Badge>{ranking}등</Badge>
              <p>{dojang_floor}층</p>

              <p className={styles.nickname}>{character_name}</p>
              <p className="font-body-03">
                {world_name} {character_level} {sub_class_name || class_name}
              </p>
            </li>
          )
        )}
      </ul>
    </>
  );
}
