'use client';

import styles from './modal-confirm.module.css';
import { Button } from '@/shared/ui';
import { confirmModalStore } from '@/store/confirm-modal-store';

export function ModalConfirm() {
  const { modal, setModal } = confirmModalStore();

  const handleModalClose = () => {
    setModal({ open: false });
  };

  return (
    <>
      {modal.open && (
        <dialog className={styles.dialog}>
          <div className={styles.confirmModal}>
            <p>{modal.content}</p>
            <Button onClick={handleModalClose}>닫기</Button>
          </div>
        </dialog>
      )}
    </>
  );
}
