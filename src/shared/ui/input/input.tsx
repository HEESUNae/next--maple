import styles from './input.module.css';

interface InputProps {
  placeholder?: string;
  name: string;
}

export function Input({ ...rest }: InputProps) {
  return <input {...rest} className={styles.basicInput} />;
}
