import getDojangRank from "@/actions/dojang-rank-action";

type RankListType = Record<string, string | number>;

export async function DojangRank(){
    const dojangRanks = async () => {
        const data  = await getDojangRank();
        return data;
    };

    const rankLists:RankListType[] = (await dojangRanks()).data.ranking;

    return (
        <>
            {rankLists.map(({ranking, character_name, world_name, dojang_floor, class_name, sub_class_name, character_level, dojang_time_record }:RankListType) => (
                <div key={ranking}>
                    <p>{ranking}등 {dojang_time_record}초</p>
                    <p>{dojang_floor}층</p>
                    <p>{world_name}</p>
                    <p></p>
                    <p>{character_name}</p>
                    <p>{character_level} {class_name} {sub_class_name}</p>
                </div>
            ))}
        </>
    )
}