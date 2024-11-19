'use server';

import {myHeaders, TODAY} from "@/actions/action-util";

export default async function getDojangRank(){
    console.log(TODAY)
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ranking/dojang?date=${TODAY}&difficulty=${1}`,{
            headers: myHeaders
        }).then(res => res.json());

        // 요청은 성공했지만 요청결과가 없는 경우
        if(!data){
            return {
                status: false,
                error: '무릉도장 기록이 없습니다.',
                data: null,
            }
        }

        // 요청 성공
        return {
            status: true,
            error: ``,
            data
        }
    }catch (e) {
        return {
            status: false,
            error: `에러가 발생했습니다 ${e}`,
            data: null,
        }
    }
}