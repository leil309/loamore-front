import {
  useQuery,
  useSuspenseQuery,
  useInfiniteQuery,
  useSuspenseInfiniteQuery,
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseInfiniteQueryOptions,
  InfiniteData,
  UseSuspenseInfiniteQueryOptions,
} from '@tanstack/react-query';
import { gqlFetcher } from './fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigInt: { input: any; output: any };
  DateTime: { input: any; output: any };
};

export type IAverageEngravingOutput = {
  count: Scalars['Int']['output'];
  engraving: Array<IEngravingOutput>;
};

export type IAverageStatsOutput = {
  name: Scalars['String']['output'];
  stats: Array<IStatsOutput>;
};

export type ICharacterCount = {
  character_accessory: Scalars['Int']['output'];
  character_engraving: Scalars['Int']['output'];
  character_gear: Scalars['Int']['output'];
  character_gem: Scalars['Int']['output'];
  character_skill: Scalars['Int']['output'];
};

export type ICharacterOutput = {
  data?: Maybe<ICharacter>;
};

export type ICharacterRankOutput = {
  classEngraving?: Maybe<Array<Scalars['String']['output']>>;
  className: Scalars['String']['output'];
  guildName?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  imageUri: Scalars['String']['output'];
  insDate: Scalars['DateTime']['output'];
  itemLevel: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  serverName: Scalars['String']['output'];
  setItem?: Maybe<Array<Scalars['String']['output']>>;
  updDate: Scalars['DateTime']['output'];
};

export type ICharacterSkillCount = {
  character_skill_tripod: Scalars['Int']['output'];
};

export type IClassJobCount = {
  engraving: Scalars['Int']['output'];
};

export type IEngravingCount = {
  character_engraving: Scalars['Int']['output'];
};

export type IEngravingOutput = {
  class_yn: IClassYn;
  id: Scalars['BigInt']['output'];
  image_uri: Scalars['String']['output'];
  level: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type IItemCount = {
  character_accessory: Scalars['Int']['output'];
  character_gear: Scalars['Int']['output'];
  character_gem: Scalars['Int']['output'];
  character_skill: Scalars['Int']['output'];
};

export type IMutation = {
  /** character 최신정보 조회 */
  upsertCharacter: ICharacterOutput;
  /** class 추출 */
  upsertClass: Array<IClassJob>;
};

export type IMutationUpsertCharacterArgs = {
  args: Scalars['String']['input'];
};

export type IQuery = {
  /** 평균 각인 정보 조회 */
  findAverageEngraving: Array<IAverageEngravingOutput>;
  /** 평균 스탯 정보 조회 */
  findAverageStats: Array<IAverageStatsOutput>;
  /** 평균 무기품질 조회 */
  findAverageWeapon: Scalars['Float']['output'];
  /** character 빠른 조회 */
  findCharacter: ICharacterOutput;
  /** ranking 조회 */
  findCharacterRanking: Array<ICharacterRankOutput>;
  /** class 목록 조회 */
  findClass: Array<IClassJob>;
  /** 캐릭터 강제 업뎃 */
  updateForceCharacter: Array<IAverageEngravingOutput>;
};

export type IQueryFindAverageEngravingArgs = {
  name: Scalars['String']['input'];
};

export type IQueryFindAverageStatsArgs = {
  name: Scalars['String']['input'];
};

export type IQueryFindAverageWeaponArgs = {
  name: Scalars['String']['input'];
};

export type IQueryFindCharacterArgs = {
  name: Scalars['String']['input'];
};

export type IQueryFindCharacterRankingArgs = {
  className?: InputMaybe<Array<Scalars['String']['input']>>;
  cursor?: InputMaybe<Scalars['BigInt']['input']>;
  engravingIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type IQueryUpdateForceCharacterArgs = {
  name: Scalars['String']['input'];
};

export type ISkillCount = {
  character_gem: Scalars['Int']['output'];
  character_skill: Scalars['Int']['output'];
  tripod: Scalars['Int']['output'];
};

export type IStatsOutput = {
  name: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type ITripodCount = {
  character_skill_tripod: Scalars['Int']['output'];
};

export type ICharacter = {
  _count: ICharacterCount;
  attack_power: Scalars['Int']['output'];
  character_accessory?: Maybe<Array<ICharacterAccessory>>;
  character_engraving?: Maybe<Array<ICharacterEngraving>>;
  character_gear?: Maybe<Array<ICharacterGear>>;
  character_gem?: Maybe<Array<ICharacterGem>>;
  character_skill?: Maybe<Array<ICharacterSkill>>;
  charisma: Scalars['Int']['output'];
  class: Scalars['String']['output'];
  courage: Scalars['Int']['output'];
  critical: Scalars['Int']['output'];
  domination: Scalars['Int']['output'];
  endurance: Scalars['Int']['output'];
  expertise: Scalars['Int']['output'];
  guild_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  image_uri: Scalars['String']['output'];
  ins_date: Scalars['DateTime']['output'];
  item_level: Scalars['Float']['output'];
  kindness: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  max_health: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  server_name: Scalars['String']['output'];
  specialization: Scalars['Int']['output'];
  swiftness: Scalars['Int']['output'];
  upd_date: Scalars['DateTime']['output'];
  wisdom: Scalars['Int']['output'];
};

export type ICharacterAccessory = {
  additional_effect?: Maybe<Scalars['String']['output']>;
  base_effect?: Maybe<Scalars['String']['output']>;
  bracelet_effect?: Maybe<Scalars['String']['output']>;
  character: ICharacter;
  character_id: Scalars['BigInt']['output'];
  engraving?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  item: IItem;
  item_id: Scalars['BigInt']['output'];
  quality: Scalars['Int']['output'];
  slot: Scalars['Int']['output'];
  use_yn: IUseYn;
};

export type ICharacterEngraving = {
  character: ICharacter;
  character_id: Scalars['BigInt']['output'];
  engraving: IEngraving;
  engraving_id: Scalars['BigInt']['output'];
  id: Scalars['BigInt']['output'];
  level: Scalars['Int']['output'];
  slot: Scalars['Int']['output'];
  use_yn: IUseYn;
};

export type ICharacterGear = {
  additional_effect?: Maybe<Scalars['String']['output']>;
  base_effect?: Maybe<Scalars['String']['output']>;
  character: ICharacter;
  character_id: Scalars['BigInt']['output'];
  honing: Scalars['Int']['output'];
  id: Scalars['BigInt']['output'];
  item: IItem;
  item_id: Scalars['BigInt']['output'];
  quality: Scalars['Int']['output'];
  slot: Scalars['Int']['output'];
  use_yn: IUseYn;
};

export type ICharacterGem = {
  character: ICharacter;
  character_id: Scalars['BigInt']['output'];
  direction: Scalars['String']['output'];
  effect_type: Scalars['String']['output'];
  id: Scalars['BigInt']['output'];
  ins_date: Scalars['DateTime']['output'];
  item: IItem;
  item_id: Scalars['BigInt']['output'];
  level: Scalars['Int']['output'];
  rate: Scalars['Int']['output'];
  skill: ISkill;
  skill_id: Scalars['BigInt']['output'];
  slot: Scalars['Int']['output'];
  upd_date: Scalars['DateTime']['output'];
  use_yn: IUseYn;
};

export type ICharacterSkill = {
  _count: ICharacterSkillCount;
  attack_type?: Maybe<Scalars['String']['output']>;
  character: ICharacter;
  character_id: Scalars['BigInt']['output'];
  character_skill_tripod?: Maybe<Array<ICharacterSkillTripod>>;
  counter_yn: ICharacterSkillCounterYn;
  id: Scalars['BigInt']['output'];
  level?: Maybe<Scalars['Int']['output']>;
  rune?: Maybe<IItem>;
  rune_id?: Maybe<Scalars['BigInt']['output']>;
  skill: ISkill;
  skill_id: Scalars['BigInt']['output'];
  stagger_value?: Maybe<Scalars['String']['output']>;
  super_armor?: Maybe<Scalars['String']['output']>;
  use_yn: IUseYn;
  weak_point?: Maybe<Scalars['Int']['output']>;
};

export enum ICharacterSkillCounterYn {
  N = 'N',
  Y = 'Y',
}

export type ICharacterSkillTripod = {
  character_skill: ICharacterSkill;
  character_skill_id: Scalars['BigInt']['output'];
  id: Scalars['BigInt']['output'];
  level?: Maybe<Scalars['Int']['output']>;
  selected_yn: ISelectedYn;
  tripod: ITripod;
  tripod_id: Scalars['BigInt']['output'];
  use_yn: IUseYn;
};

/** This model has been renamed to 'classJob' during introspection, because the original name 'class' is reserved. */
export type IClassJob = {
  _count: IClassJobCount;
  engraving?: Maybe<Array<IEngraving>>;
  id: Scalars['BigInt']['output'];
  image_uri?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export enum IClassYn {
  N = 'N',
  Y = 'Y',
}

export type IEngraving = {
  _count: IEngravingCount;
  character_engraving?: Maybe<Array<ICharacterEngraving>>;
  classJob?: Maybe<IClassJob>;
  class_id?: Maybe<Scalars['BigInt']['output']>;
  class_yn: IClassYn;
  id: Scalars['BigInt']['output'];
  image_uri: Scalars['String']['output'];
  info: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type IItem = {
  _count: IItemCount;
  character_accessory?: Maybe<Array<ICharacterAccessory>>;
  character_gear?: Maybe<Array<ICharacterGear>>;
  character_gem?: Maybe<Array<ICharacterGem>>;
  character_skill?: Maybe<Array<ICharacterSkill>>;
  grade?: Maybe<Scalars['Int']['output']>;
  id: Scalars['BigInt']['output'];
  image_uri: Scalars['String']['output'];
  name: Scalars['String']['output'];
  set_name?: Maybe<Scalars['String']['output']>;
  tier?: Maybe<Scalars['Int']['output']>;
};

export enum ISelectedYn {
  N = 'N',
  Y = 'Y',
}

export type ISkill = {
  _count: ISkillCount;
  character_gem?: Maybe<Array<ICharacterGem>>;
  character_skill?: Maybe<Array<ICharacterSkill>>;
  class: Scalars['String']['output'];
  id: Scalars['BigInt']['output'];
  image_uri: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tripod?: Maybe<Array<ITripod>>;
};

export type ITripod = {
  _count: ITripodCount;
  character_skill_tripod?: Maybe<Array<ICharacterSkillTripod>>;
  id: Scalars['BigInt']['output'];
  image_uri: Scalars['String']['output'];
  name: Scalars['String']['output'];
  skill: ISkill;
  skill_id: Scalars['BigInt']['output'];
  slot: Scalars['Int']['output'];
  tier: Scalars['Int']['output'];
};

export enum IUseYn {
  N = 'N',
  Y = 'Y',
}

export type IFindClassQueryVariables = Exact<{ [key: string]: never }>;

export type IFindClassQuery = {
  findClass: Array<{
    id: any;
    name: string;
    image_uri?: string | null;
    type: string;
    engraving?: Array<{ name: string; id: any; image_uri: string }> | null;
  }>;
};

export const FindClassDocument = `
    query FindClass {
  findClass {
    id
    engraving {
      name
      id
      image_uri
    }
    name
    image_uri
    type
  }
}
    `;

export const useFindClassQuery = <TData = IFindClassQuery, TError = unknown>(
  variables?: IFindClassQueryVariables,
  options?: Omit<
    UseQueryOptions<IFindClassQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseQueryOptions<IFindClassQuery, TError, TData>['queryKey'];
  },
) => {
  return useQuery<IFindClassQuery, TError, TData>({
    queryKey:
      variables === undefined ? ['FindClass'] : ['FindClass', variables],
    queryFn: gqlFetcher<IFindClassQuery, IFindClassQueryVariables>(
      FindClassDocument,
      variables,
    ),
    ...options,
  });
};

export const useSuspenseFindClassQuery = <
  TData = IFindClassQuery,
  TError = unknown,
>(
  variables?: IFindClassQueryVariables,
  options?: Omit<
    UseSuspenseQueryOptions<IFindClassQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseQueryOptions<
      IFindClassQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useSuspenseQuery<IFindClassQuery, TError, TData>({
    queryKey:
      variables === undefined
        ? ['FindClassSuspense']
        : ['FindClassSuspense', variables],
    queryFn: gqlFetcher<IFindClassQuery, IFindClassQueryVariables>(
      FindClassDocument,
      variables,
    ),
    ...options,
  });
};

export const useInfiniteFindClassQuery = <
  TData = InfiniteData<IFindClassQuery>,
  TError = unknown,
>(
  variables: IFindClassQueryVariables,
  options: Omit<
    UseInfiniteQueryOptions<IFindClassQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseInfiniteQueryOptions<
      IFindClassQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useInfiniteQuery<IFindClassQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey:
          optionsQueryKey ?? variables === undefined
            ? ['FindClass.infinite']
            : ['FindClass.infinite', variables],
        queryFn: (metaData) =>
          gqlFetcher<IFindClassQuery, IFindClassQueryVariables>(
            FindClassDocument,
            { ...variables, ...(metaData.pageParam ?? {}) },
          )(),
        ...restOptions,
      };
    })(),
  );
};

export const useSuspenseInfiniteFindClassQuery = <
  TData = InfiniteData<IFindClassQuery>,
  TError = unknown,
>(
  variables: IFindClassQueryVariables,
  options: Omit<
    UseSuspenseInfiniteQueryOptions<IFindClassQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseInfiniteQueryOptions<
      IFindClassQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useSuspenseInfiniteQuery<IFindClassQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey:
          optionsQueryKey ?? variables === undefined
            ? ['FindClass.infiniteSuspense']
            : ['FindClass.infiniteSuspense', variables],
        queryFn: (metaData) =>
          gqlFetcher<IFindClassQuery, IFindClassQueryVariables>(
            FindClassDocument,
            { ...variables, ...(metaData.pageParam ?? {}) },
          )(),
        ...restOptions,
      };
    })(),
  );
};
