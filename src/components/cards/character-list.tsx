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
      battleLevel: '1585',
    },
    {
      imgUrl:
        'https://img.lostark.co.kr/armory/9/af508d884bf6a4ecfcde7539dabf825d2dfae4995cdc3512b666ab9884fe38c3.png?v=20231107135616',
      name: '카아안',
      classType: '워로드',
      level: '60',
      battleLevel: '1655',
    },
    {
      imgUrl:
        'https://img.lostark.co.kr/armory/0/c23219fc668afcdf65d2a218788e75f12cc9cf4d2ba9313d301c42ea9a8a11ca.png?v=20231204143000',
      name: '베오냐르',
      classType: '워로드',
      level: '60',
      battleLevel: '1655',
    },
    {
      imgUrl:
        'https://img.lostark.co.kr/armory/8/14f86f4b93aeab26b89b9d5a78edde76f42b2fc288afaa277ae9c1672c13212d.png?v=20231204200248',
      name: '카제로스친구',
      classType: '워로드',
      level: '60',
      battleLevel: '1535',
    },
    {
      imgUrl:
        'https://img.lostark.co.kr/armory/3/417abf2b349e9243b4ba669caaf571a86db8f64d9c2ada97c94fd41a2a3cdd80.png?v=20231205022513',
      name: '와이타하펭귄',
      classType: '리퍼',
      level: '60',
      battleLevel: '1385',
    },
    {
      imgUrl:
        'https://img.lostark.co.kr/armory/7/67c9bcc8acbe2c18e8c4319273a66a19e979dad1d9c61a91972501f5466a9f8e.png?v=20231130110016',
      name: '파나민트다람쥐',
      classType: '도화가',
      level: '60',
      battleLevel: '1550',
    },
    {
      imgUrl:
        'https://img.lostark.co.kr/armory/5/98dec88589be21230350b7b4e0f08b567906e8b9019af00a45a8b00ab9a07559.png?v=20231129132218',
      name: '산솜꼬리토끼',
      classType: '바드',
      level: '60',
      battleLevel: '1550',
    },
    {
      imgUrl:
        'https://img.lostark.co.kr/armory/9/5a7faca412206ad75a162bef81d8b9210fe318b11f216f37f61a30cab2ef9285.png?v=20231122145924',
      name: '원한바케돌대아드유산',
      classType: '스카우터',
      level: '60',
      battleLevel: '1417',
    },
  ];
  return (
    <div className="flex flex-wrap">
      {cl.map((x, index) => {
        return (
          <div key={index} className="mb-3 ml-3">
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
