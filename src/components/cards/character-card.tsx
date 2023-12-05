import Image from 'next/image';

type CharacterCardProps = {
  imgUrl: string;
  name: string;
  classType: string;
  level: string;
  battleLevel: string;
};

const characterCard = ({
  imgUrl,
  name,
  classType,
  level,
  battleLevel,
}: CharacterCardProps) => {
  return (
    <div className=" flex w-56 max-w-md flex-col overflow-hidden rounded-md bg-card shadow-md dark:bg-card-dark">
      <div className="relative h-36">
        <Image
          src={
            'https://img.lostark.co.kr/armory/6/bf1f03a0ed13f9998b003ebe215af411f9f42cbf76b875ba180b146e57bccce5.png?v=20230918122933'
          }
          alt="Picture of the author"
          fill={true}
          style={{
            objectPosition: '0px 0px',
            objectFit: 'cover',
          }}
        />
      </div>
      <span>{name}</span>
      <span>{classType}</span>
      <span>레벨 {level}</span>
      <span>전투 {battleLevel}</span>
    </div>
  );
};
export default characterCard;
