import { ReactNode } from 'react';
import styles from './badge.module.css';

interface BadgeProps {
  children: ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return <div className={styles.badge}>{children}</div>;
}
