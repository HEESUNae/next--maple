import Link from 'next/link';
import styles from './page.module.css';
import getNoticeDetail from '@/action/notice/notice-detail-action';
import { Button, Markdown } from '@/shared/ui';

interface NoticeDetailProps {
  params: Promise<{ id: string }>;
}

export default async function NoticeDetail({ params }: NoticeDetailProps) {
  const { id } = await params;
  const { data, error } = await getNoticeDetail(id);

  if (!data) return <>{error}</>;

  return (
    <main className={styles.content}>
      <div className={styles.titleWrap}>
        <p className="font-header">{data.title}</p>
        <p className="font-body-03">{String(data.date).split('T')[0]}</p>
      </div>
      <Markdown
        content={JSON.stringify(data.contents)
          .replace('<body>', '')
          .replace(/\\|''/g, '')
          .replace(/^"|"$|(?<=\n)"|"$|(?=\n)"$/gm, '')}
      />
      <div className={styles.btnWrap}>
        <Button>
          <Link href="/main">이전 페이지로 이동</Link>
        </Button>
      </div>
    </main>
  );
}
