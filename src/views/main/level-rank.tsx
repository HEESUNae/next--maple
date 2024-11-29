import getUserInfo from '@/actions/user-info-action';
import styles from './level-rank.module.css';
import Image from 'next/image';
import getLevelRank from '@/actions/level-rank-action';
import getUserOcidAction from '@/actions/ocid-action';
import { Badge } from '@/components/badge/badge';

interface LevelRanksType {
  ranking: number;
  world_name: string;
  character_name: string;
  character_level: number;
  character_image: string;
}

export async function LevelRank() {
  const { data: levelRanksData, error } = await getLevelRank();
  const ranks = levelRanksData?.ranking?.slice(0, 10);

  if (!ranks) return <>{error}</>;

  // 닉네임으로 캐릭터 이미지를 가져옵니다.
  const addRankUserImg = await Promise.all(
    ranks.map(async (item: LevelRanksType) => {
      try {
        const formData: FormData = new FormData();
        formData.set('character_name', item.character_name);
        const ocid = await getUserOcidAction('', formData);
        const characterImg = await getUserInfo(ocid.data?.ocid || '');

        return {
          ...item,
          character_image: characterImg.data.character_image,
        };
      } catch (e) {
        console.log(e);
        return {
          ...item,
          character_image: '/vercel.svg',
        };
      }
    })
  );

  if (!addRankUserImg) return <></>;

  return (
    <ul className={styles.lavelCardWrap}>
      {addRankUserImg.map(
        ({ ranking, world_name, character_name, character_level, character_image }: LevelRanksType) => (
          <li key={ranking} className={styles.levelCard}>
            <Badge>{ranking}등</Badge>
            <Image src={character_image || '/vercel.svg'} alt={character_name} width={100} height={100} />
            <p className="font-body-03">{world_name}</p>
            <p className="font-header-02">{character_name}</p>
            <p className="font-header-02-orange">Lv.{character_level}</p>
          </li>
        )
      )}
    </ul>
  );
}
