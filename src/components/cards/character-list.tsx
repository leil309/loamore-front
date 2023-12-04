import CharacterCard from '@/components/cards/character-card';

type tempCharacter = {
  imgUrl: string;
  name: string;
  classType: string;
  level: string;
  battleLevel: string;
};

const characterList = () => {
  const cl = [
    {
      imgUrl:
        'https://img.lostark.co.kr/armory/6/bf1f03a0ed13f9998b003ebe215af411f9f42cbf76b875ba180b146e57bccce5.png?v=20230918122933',
      name: '최고성능의가드',
      classType: '워로드',
      level: '60',
      battleLevel: '1500',
    },
    {
      imgUrl:
        'https://img.lostark.co.kr/armory/6/bf1f03a0ed13f9998b003ebe215af411f9f42cbf76b875ba180b146e57bccce5.png?v=20230918122933',
      name: '최고성능의가드',
      classType: '워로드',
      level: '60',
      battleLevel: '1500',
    },
    {
      imgUrl:
        'https://img.lostark.co.kr/armory/6/bf1f03a0ed13f9998b003ebe215af411f9f42cbf76b875ba180b146e57bccce5.png?v=20230918122933',
      name: '최고성능의가드',
      classType: '워로드',
      level: '60',
      battleLevel: '1500',
    },
    {
      imgUrl:
        'https://img.lostark.co.kr/armory/6/bf1f03a0ed13f9998b003ebe215af411f9f42cbf76b875ba180b146e57bccce5.png?v=20230918122933',
      name: '최고성능의가드',
      classType: '워로드',
      level: '60',
      battleLevel: '1500',
    },
    {
      imgUrl:
        'https://img.lostark.co.kr/armory/6/bf1f03a0ed13f9998b003ebe215af411f9f42cbf76b875ba180b146e57bccce5.png?v=20230918122933',
      name: '최고성능의가드',
      classType: '워로드',
      level: '60',
      battleLevel: '1500',
    },
    {
      imgUrl:
        'https://img.lostark.co.kr/armory/6/bf1f03a0ed13f9998b003ebe215af411f9f42cbf76b875ba180b146e57bccce5.png?v=20230918122933',
      name: '최고성능의가드',
      classType: '워로드',
      level: '60',
      battleLevel: '1500',
    },
    {
      imgUrl:
        'https://img.lostark.co.kr/armory/6/bf1f03a0ed13f9998b003ebe215af411f9f42cbf76b875ba180b146e57bccce5.png?v=20230918122933',
      name: '최고성능의가드',
      classType: '워로드',
      level: '60',
      battleLevel: '1500',
    },
    {
      imgUrl:
        'https://img.lostark.co.kr/armory/6/bf1f03a0ed13f9998b003ebe215af411f9f42cbf76b875ba180b146e57bccce5.png?v=20230918122933',
      name: '최고성능의가드',
      classType: '워로드',
      level: '60',
      battleLevel: '1500',
    },
    {
      imgUrl:
        'https://img.lostark.co.kr/armory/6/bf1f03a0ed13f9998b003ebe215af411f9f42cbf76b875ba180b146e57bccce5.png?v=20230918122933',
      name: '최고성능의가드',
      classType: '워로드',
      level: '60',
      battleLevel: '1500',
    },
    {
      imgUrl:
        'https://img.lostark.co.kr/armory/6/bf1f03a0ed13f9998b003ebe215af411f9f42cbf76b875ba180b146e57bccce5.png?v=20230918122933',
      name: '최고성능의가드',
      classType: '워로드',
      level: '60',
      battleLevel: '1500',
    },
    {
      imgUrl:
        'https://img.lostark.co.kr/armory/6/bf1f03a0ed13f9998b003ebe215af411f9f42cbf76b875ba180b146e57bccce5.png?v=20230918122933',
      name: '최고성능의가드',
      classType: '워로드',
      level: '60',
      battleLevel: '1500',
    },
  ];
  return (
    <div className="justify-content flex flex-wrap">
      {cl.map((x, index) => {
        return (
          <div key={index} className="mb-2 mr-2">
            <CharacterCard
              imgUrl={x.imgUrl}
              name={x.name}
              classType={x.classType}
              level={x.level}
              battleLevel={x.battleLevel}
            />
          </div>
        );
      })}
    </div>
  );
};
export default characterList;
