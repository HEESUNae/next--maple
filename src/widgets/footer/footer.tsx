import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.title}>HEESUN PORTFOLIO</p>
      <p>이 홈페이지는 메이플스토리 무료 API를 활용하여 만든 포트폴리오 홈페이지입니다.</p>
    </footer>
  );
}
