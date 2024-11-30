import { ReactNode } from 'react';
import styles from './list-item.module.css';

interface ListItemProps {
  children: ReactNode;
}

export function ListItem({ children }: ListItemProps) {
  return <li className={styles.listItem}>{children}</li>;
}
