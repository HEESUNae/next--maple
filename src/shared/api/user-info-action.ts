'use server';

import { myHeaders } from './action-util';

export default async function getUserInfo(OCID: string) {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/character/basic?ocid=${OCID}`, {
      headers: myHeaders,
      next: { revalidate: 86400 },
    }).then((res) => res.json());

    if (!data) {
      return {
        status: false,
        error: '캐릭터 정보가 없습니다.',
        data: null,
      };
    }

    return {
      status: true,
      error: '',
      data,
    };
  } catch (e) {
    return {
      status: false,
      error: `에러가 발생했습니다 ${e}`,
      data: null,
    };
  }
}
