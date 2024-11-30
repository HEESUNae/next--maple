'use server';

import { myHeaders } from '@/shared/api/action-util';

export default async function getUserOcidAction(_: any, formData: FormData) {
  const CHARACTER_NAME = formData.get('character_name')?.toString();

  // 닉네임을 입력하지않은 경우
  if (!CHARACTER_NAME) {
    return {
      status: false,
      error: '캐릭터 닉네임을 입력해주세요',
    };
  }

  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/id?character_name=${CHARACTER_NAME}`, {
      headers: myHeaders,
      cache: 'force-cache',
      next: { revalidate: 86400 },
    }).then((res) => res.json());

    // 요청은 성공했지만 요청결과가 없는 경우
    if (!data.ocid) {
      return {
        status: false,
        error: '캐릭터 정보가 없습니다.',
      };
    }

    // 요청 성공
    return {
      status: true,
      error: '',
      data,
    };
  } catch (e) {
    return {
      status: false,
      error: `에러가 발생했습니다 ${e}`,
    };
  }
}
