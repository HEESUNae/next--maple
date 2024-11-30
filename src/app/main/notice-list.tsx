import getNoticeList from '@/action/notice/notice-list-action';
import { ListItem } from '@/widgets';

type NoticeType = Record<string, string | number>;

export async function NoticeList() {
  const { data, error } = await getNoticeList();
  const noticeItems = data?.notice?.slice(0, 5);

  if (!noticeItems) return <>{error}</>;
  return (
    <>
      {noticeItems.map((item: NoticeType, idx: number) => (
        <ListItem key={item.notice_id}>
          <p className="font-header-02-orange">{idx + 1}</p>
          <a href={`/notice/${item.notice_id}`}>{item.title}</a>
          <p className="font-body-03">{String(item.date).split('T')[0]}</p>
        </ListItem>
      ))}
    </>
  );
}
