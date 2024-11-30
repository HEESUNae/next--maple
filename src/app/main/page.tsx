import { TODAY } from '@/shared/api/action-util';
import styles from './page.module.css';
import { SearchBar } from '@/widgets';
import { DojangRank } from './dojang-rank';
import { LevelRank } from './level-rank';
import { EventList } from './event-list';
import { UpdateList } from './update-list';
import { NoticeList } from './notice-list';

export default function Main() {
  return (
    <main>
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
          <NoticeList />
        </section>
        <section>
          <div className={styles.titleWrap}>
            <p className="font-header-01">업데이트 목록</p>
          </div>
          <UpdateList />
        </section>
        <section>
          <div className={styles.titleWrap}>
            <p className="font-header-01">이벤트 목록</p>
          </div>
          <EventList />
        </section>
      </div>
    </main>
  );
}
