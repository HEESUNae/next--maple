import { TODAY } from '@/actions/action-util';
import styles from './page.module.css';
import { SearchBar } from '@/views';
import { DojangRank } from '@/views/main/dojang-rank';
import { Tab } from '@/components/tab/tab-basic';
import { LevelRank } from '@/views/main/level-rank';
import EventList from '@/views/main/event-list';

export default function Main() {
  const guildTabs = ['주간', '플래그', '지하수로'];

  return (
    <>
      <div className={styles.searchContainer}>
        <SearchBar />
      </div>
      <div className={styles.contents}>
        <section className={styles.dojangContainer}>
          <div className={styles.titleWrap}>
            <p className="font-header-01">무릉도장 10위</p>
            <p className="font-body-03">{TODAY}</p>
          </div>
          <DojangRank />
        </section>
        <section className={styles.LevelContainer}>
          <div className={styles.titleWrap}>
            <p className="font-header-01">전체랭킹 10위</p>
            <p className="font-body-03">{TODAY}</p>
          </div>
          <LevelRank />
        </section>
      </div>
      <div className={styles.contents}>
        <section>
          <div className={styles.titleWrap}>
            <p className="font-header-01">공지사항 목록</p>
          </div>
          <EventList />
        </section>
        <section>
          <div className={styles.titleWrap}>
            <p className="font-header-01">업데이트 목록</p>
          </div>
          <EventList />
        </section>
        <section>
          <div className={styles.titleWrap}>
            <p className="font-header-01">이벤트 목록</p>
          </div>
          <EventList />
        </section>
      </div>
    </>
  );
}
