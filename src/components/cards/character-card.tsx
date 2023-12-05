import Image from 'next/image';
import { PiKnifeFill } from 'react-icons/pi';

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
    <div className="flex w-52 max-w-md flex-col overflow-hidden rounded-md bg-card shadow-lg dark:bg-card-dark">
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
      <div className="flex flex-col p-2">
        <span className="font-medium">{name}</span>
        <span className="pb-2 text-sm text-gray-500">{classType}</span>
        <div className="flex flex-row justify-between border-t border-gray-100 dark:border-gray-700">
          <div className="flex flex-col">
            <span className="pt-2 text-sm text-gray-500">레벨</span>
            <span className="font-medium">
              {battleLevel}
              <span className="text-sm">.0</span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="pt-2 text-sm text-gray-500">무기</span>
            <span className="text-sm">
              +<span className="text-base font-medium">{'21'}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default characterCard;
