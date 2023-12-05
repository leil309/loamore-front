import CharacterCard from '@/components/cards/character-card';
import GearCard from '@/components/cards/gear-card';
import AccessoryCard from '@/components/cards/accessory-card';
import EngravingCard from '@/components/cards/engraving-card';
import CharacterDetailCard from '@/components/cards/character-detail-card';

export default function Home() {
  return (
    <main className="w-full flex-wrap p-5 pl-0">
      <div className="flex flex-wrap gap-y-2">
        <CharacterDetailCard
          imgUrl={
            'https://img.lostark.co.kr/armory/6/bf1f03a0ed13f9998b003ebe215af411f9f42cbf76b875ba180b146e57bccce5.png?v=20230918122933'
          }
          name={'최고성능의가드'}
          classType={'워로드'}
          level={'60'}
          battleLevel={'1585'}
        />
        <GearCard />
        <AccessoryCard />
        <EngravingCard />
      </div>
    </main>
  );
}
