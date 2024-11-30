'use server';

import { myHeaders, TODAY } from '@/shared/api/action-util';

export default async function getDojangRank() {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ranking/dojang?date=${TODAY}&difficulty=${1}`, {
      headers: myHeaders,
      cache: 'force-cache',
      next: { revalidate: 86400 },
    }).then((res) => res.json());

    if (data.error) {
      return {
        status: false,
        error: data.error.message,
        data: null,
      };
    }

    if (!data) {
      return {
        status: false,
        error: '무릉도장 정보가 없습니다.',
        data: null,
      };
    }

    // 요청 성공
    return {
      status: true,
      error: ``,
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
