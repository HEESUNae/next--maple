'use client';

import { useActionState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './search-bar.module.css';
import getUserOcidAction from '@/actions/ocid-action';
import { Button, Input } from '@/shared/ui';
import { ocidStore } from '@/store/ocid-store';
import { confirmModalStore } from '@/store/confirm-modal-store';

export function SearchBar() {
  const [state, formAction] = useActionState(getUserOcidAction, null);
  const { setOcid } = ocidStore();
  const { setModal } = confirmModalStore();
  const router = useRouter();

  // 검색한 캐릭터명을 스토어에 저장
  useEffect(() => {
    if (!state) return;
    if (!state.status) {
      setModal({ open: true, content: state.error });
      return;
    }
    setOcid(state?.data.ocid);
    router.push('/info');
  }, [state]);

  return (
    <form action={formAction} className={styles.searchBar}>
      <Input placeholder={'캐릭터 닉네임을 입력하세요'} name={'character_name'} />
      <Button type={'submit'}>검색</Button>
    </form>
  );
}
