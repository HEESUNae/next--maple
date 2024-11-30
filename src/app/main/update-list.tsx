import getUpdateList from '@/action/update/update-list-action';
import { ListItem } from '@/widgets';

type UpdateNoticeType = Record<string, string | number>;

export async function UpdateList() {
  const { data, error } = await getUpdateList();
  const updateItems = data?.update_notice?.slice(0, 5);

  if (!updateItems) return <>{error}</>;
  return (
    <>
      {updateItems.map((item: UpdateNoticeType, idx: number) => (
        <ListItem key={item.notice_id}>
          <p className="font-header-02-orange">{idx + 1}</p>
          <a href={`/update/${item.notice_id}`}>{item.title}</a>
          <p className="font-body-03">{String(item.date).split('T')[0]}</p>
        </ListItem>
      ))}
    </>
  );
}
