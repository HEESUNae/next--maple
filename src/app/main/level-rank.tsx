import getUserInfo from '@/shared/api/user-info-action';
import styles from './level-rank.module.css';
import Image from 'next/image';
import getLevelRank from '@/action/main/level-rank-action';
import getUserOcidAction from '@/shared/api/ocid-action';
import { Badge } from '@/shared/ui/badge/badge';

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
      {addRankUserImg.map((item: LevelRanksType) => (
        <li key={item.ranking} className={styles.levelCard}>
          <Badge>{item.ranking}등</Badge>
          <Image src={item.character_image || '/vercel.svg'} alt={item.character_name} width={100} height={100} />
          <p className="font-body-03">{item.world_name}</p>
          <p className="font-header-02">{item.character_name}</p>
          <p className="font-header-02-orange">Lv.{item.character_level}</p>
        </li>
      ))}
    </ul>
  );
}
