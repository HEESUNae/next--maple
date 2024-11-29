import getEventList from '@/actions/event-list-action';
import Link from 'next/link';
import styles from './event-list.module.css';

type EventListType = Record<string, string | number>;

export async function EventList() {
  const { data: eventData, error } = await getEventList();
  const eventItems = eventData?.event_notice?.slice(0, 5);

  if (!eventItems) return <>{error}</>;
  return (
    <ul className={styles.eventList}>
      {eventItems.map(({ notice_id, title, date_event_start, date_event_end }: EventListType, idx: number) => (
        <li key={notice_id}>
          <p>{idx + 1}</p>
          <Link href={`/event/${notice_id}`}>{title}</Link>
          <p>{String(date_event_start).split('T')[0]}</p>
          <p>{String(date_event_end).split('T')[0]}</p>
        </li>
      ))}
    </ul>
  );
}
