import Link from 'next/link';
import styles from './page.module.css';
import getEventDetail from '@/action/event/event-detail-action';
import { Button, Markdown } from '@/shared/ui';

interface EventDetailProps {
  params: Promise<{ id: string }>;
}

export default async function EventDetail({ params }: EventDetailProps) {
  const { id } = await params;
  const { data, error } = await getEventDetail(id);

  if (!data) return <>{error}</>;

  return (
    <main className={styles.content}>
      <div className={styles.titleWrap}>
        <p className="font-header">{data.title}</p>
        <p className="font-body-03">
          {String(data.date_event_start).split('T')[0]} ~ {String(data.date_event_end).split('T')[0]}
        </p>
      </div>
      <Markdown
        content={JSON.stringify(data.contents)
          .replace('<body>', '')
          .replace(/\\|''/g, '')
          .replace(/(^|>)[^<]+(?=<|$)/g, '$1')}
      />
      <div className={styles.btnWrap}>
        <Button>
          <Link href="/main">이전 페이지로 이동</Link>
        </Button>
      </div>
    </main>
  );
}
