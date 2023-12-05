import {
  useMutation,
  useQuery,
  useSuspenseQuery,
  useInfiniteQuery,
  useSuspenseInfiniteQuery,
  UseMutationOptions,
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

export type IUpsertCharacterMutationVariables = Exact<{
  args: Scalars['String']['input'];
}>;

export type IUpsertCharacterMutation = {
  upsertCharacter: {
    data?: {
      attack_power: number;
      charisma: number;
      class: string;
      courage: number;
      critical: number;
      domination: number;
      endurance: number;
      expertise: number;
      guild_name?: string | null;
      id: any;
      image_uri: string;
      ins_date: any;
      item_level: number;
      kindness: number;
      level: number;
      max_health: number;
      name: string;
      server_name: string;
      specialization: number;
      swiftness: number;
      upd_date: any;
      wisdom: number;
      character_accessory?: Array<{
        additional_effect?: string | null;
        base_effect?: string | null;
        bracelet_effect?: string | null;
        engraving?: string | null;
        id: any;
        quality: number;
        slot: number;
        item: {
          name: string;
          image_uri: string;
          grade?: number | null;
          set_name?: string | null;
          tier?: number | null;
          id: any;
        };
      }> | null;
      character_engraving?: Array<{
        id: any;
        level: number;
        slot: number;
        engraving: {
          class_yn: IClassYn;
          id: any;
          image_uri: string;
          info: string;
          name: string;
        };
      }> | null;
      character_gear?: Array<{
        base_effect?: string | null;
        honing: number;
        id: any;
        quality: number;
        slot: number;
        additional_effect?: string | null;
        item: {
          id: any;
          image_uri: string;
          name: string;
          set_name?: string | null;
          tier?: number | null;
          grade?: number | null;
        };
      }> | null;
      character_gem?: Array<{
        direction: string;
        effect_type: string;
        id: any;
        level: number;
        rate: number;
        skill_id: any;
        slot: number;
        skill: { image_uri: string; name: string; id: any };
        item: {
          id: any;
          grade?: number | null;
          image_uri: string;
          name: string;
          set_name?: string | null;
          tier?: number | null;
        };
      }> | null;
      character_skill?: Array<{
        attack_type?: string | null;
        counter_yn: ICharacterSkillCounterYn;
        id: any;
        level?: number | null;
        rune_id?: any | null;
        stagger_value?: string | null;
        super_armor?: string | null;
        weak_point?: number | null;
        character_skill_tripod?: Array<{
          level?: number | null;
          selected_yn: ISelectedYn;
          tripod: {
            name: string;
            image_uri: string;
            slot: number;
            tier: number;
          };
        }> | null;
        skill: {
          class: string;
          id: any;
          image_uri: string;
          name: string;
          tripod?: Array<{
            id: any;
            image_uri: string;
            name: string;
            slot: number;
            tier: number;
          }> | null;
        };
      }> | null;
    } | null;
  };
};

export type IFindCharacterQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;

export type IFindCharacterQuery = {
  findCharacter: {
    data?: {
      attack_power: number;
      charisma: number;
      class: string;
      courage: number;
      critical: number;
      domination: number;
      endurance: number;
      expertise: number;
      guild_name?: string | null;
      id: any;
      image_uri: string;
      ins_date: any;
      item_level: number;
      kindness: number;
      level: number;
      max_health: number;
      name: string;
      server_name: string;
      specialization: number;
      swiftness: number;
      upd_date: any;
      wisdom: number;
      character_accessory?: Array<{
        additional_effect?: string | null;
        base_effect?: string | null;
        bracelet_effect?: string | null;
        engraving?: string | null;
        id: any;
        quality: number;
        slot: number;
        item: {
          name: string;
          image_uri: string;
          grade?: number | null;
          set_name?: string | null;
          tier?: number | null;
          id: any;
        };
      }> | null;
      character_engraving?: Array<{
        id: any;
        level: number;
        slot: number;
        engraving: {
          class_yn: IClassYn;
          id: any;
          image_uri: string;
          info: string;
          name: string;
        };
      }> | null;
      character_gear?: Array<{
        base_effect?: string | null;
        honing: number;
        id: any;
        quality: number;
        slot: number;
        additional_effect?: string | null;
        item: {
          id: any;
          image_uri: string;
          name: string;
          set_name?: string | null;
          tier?: number | null;
          grade?: number | null;
        };
      }> | null;
      character_gem?: Array<{
        direction: string;
        effect_type: string;
        id: any;
        level: number;
        rate: number;
        skill_id: any;
        slot: number;
        skill: { image_uri: string; name: string; id: any };
        item: {
          id: any;
          grade?: number | null;
          image_uri: string;
          name: string;
          set_name?: string | null;
          tier?: number | null;
        };
      }> | null;
      character_skill?: Array<{
        attack_type?: string | null;
        counter_yn: ICharacterSkillCounterYn;
        id: any;
        level?: number | null;
        rune_id?: any | null;
        stagger_value?: string | null;
        super_armor?: string | null;
        weak_point?: number | null;
        character_skill_tripod?: Array<{
          level?: number | null;
          selected_yn: ISelectedYn;
          tripod: {
            name: string;
            image_uri: string;
            slot: number;
            tier: number;
          };
        }> | null;
        skill: {
          class: string;
          id: any;
          image_uri: string;
          name: string;
          tripod?: Array<{
            id: any;
            image_uri: string;
            name: string;
            slot: number;
            tier: number;
          }> | null;
        };
      }> | null;
    } | null;
  };
};

export type IFindCharacterRankingQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['BigInt']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  className?: InputMaybe<
    Array<Scalars['String']['input']> | Scalars['String']['input']
  >;
  engravingIds?: InputMaybe<
    Array<Scalars['BigInt']['input']> | Scalars['BigInt']['input']
  >;
}>;

export type IFindCharacterRankingQuery = {
  findCharacterRanking: Array<{
    classEngraving?: Array<string> | null;
    className: string;
    guildName?: string | null;
    id: any;
    imageUri: string;
    insDate: any;
    itemLevel: number;
    name: string;
    serverName: string;
    setItem?: Array<string> | null;
    updDate: any;
  }>;
};

export type IFindAverageEngravingQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;

export type IFindAverageEngravingQuery = {
  findAverageEngraving: Array<{
    count: number;
    engraving: Array<{
      name: string;
      image_uri: string;
      id: any;
      class_yn: IClassYn;
      level: number;
    }>;
  }>;
};

export type IFindAverageStatsQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;

export type IFindAverageStatsQuery = {
  findAverageStats: Array<{
    name: string;
    stats: Array<{ name: string; value: number }>;
  }>;
};

export type IFindAverageWeaponQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;

export type IFindAverageWeaponQuery = { findAverageWeapon: number };

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

export const UpsertCharacterDocument = `
    mutation UpsertCharacter($args: String!) {
  upsertCharacter(args: $args) {
    data {
      attack_power
      character_accessory {
        additional_effect
        base_effect
        bracelet_effect
        engraving
        id
        item {
          name
          image_uri
          grade
          set_name
          tier
          id
        }
        quality
        slot
      }
      character_engraving {
        engraving {
          class_yn
          id
          image_uri
          info
          name
        }
        id
        level
        slot
      }
      character_gear {
        base_effect
        honing
        id
        item {
          id
          image_uri
          name
          set_name
          tier
          grade
        }
        quality
        slot
        additional_effect
      }
      character_gem {
        direction
        effect_type
        id
        level
        rate
        skill {
          image_uri
          name
          id
        }
        skill_id
        slot
        item {
          id
          grade
          image_uri
          name
          set_name
          tier
        }
      }
      character_skill {
        attack_type
        character_skill_tripod {
          level
          selected_yn
          tripod {
            name
            image_uri
            slot
            tier
          }
        }
        counter_yn
        id
        level
        rune_id
        skill {
          class
          id
          image_uri
          name
          tripod {
            id
            image_uri
            name
            slot
            tier
          }
        }
        stagger_value
        super_armor
        weak_point
      }
      charisma
      class
      courage
      critical
      domination
      endurance
      expertise
      guild_name
      id
      image_uri
      ins_date
      item_level
      kindness
      level
      max_health
      name
      server_name
      specialization
      swiftness
      upd_date
      wisdom
    }
  }
}
    `;

export const useUpsertCharacterMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    IUpsertCharacterMutation,
    TError,
    IUpsertCharacterMutationVariables,
    TContext
  >,
) => {
  return useMutation<
    IUpsertCharacterMutation,
    TError,
    IUpsertCharacterMutationVariables,
    TContext
  >({
    mutationKey: ['UpsertCharacter'],
    mutationFn: (variables?: IUpsertCharacterMutationVariables) =>
      gqlFetcher<IUpsertCharacterMutation, IUpsertCharacterMutationVariables>(
        UpsertCharacterDocument,
        variables,
      )(),
    ...options,
  });
};

export const FindCharacterDocument = `
    query FindCharacter($name: String!) {
  findCharacter(name: $name) {
    data {
      attack_power
      character_accessory {
        additional_effect
        base_effect
        bracelet_effect
        engraving
        id
        item {
          name
          image_uri
          grade
          set_name
          tier
          id
        }
        quality
        slot
      }
      character_engraving {
        engraving {
          class_yn
          id
          image_uri
          info
          name
        }
        id
        level
        slot
      }
      character_gear {
        base_effect
        honing
        id
        item {
          id
          image_uri
          name
          set_name
          tier
          grade
        }
        quality
        slot
        additional_effect
      }
      character_gem {
        direction
        effect_type
        id
        level
        rate
        skill {
          image_uri
          name
          id
        }
        skill_id
        slot
        item {
          id
          grade
          image_uri
          name
          set_name
          tier
        }
      }
      character_skill {
        attack_type
        character_skill_tripod {
          level
          selected_yn
          tripod {
            name
            image_uri
            slot
            tier
          }
        }
        counter_yn
        id
        level
        rune_id
        skill {
          class
          id
          image_uri
          name
          tripod {
            id
            image_uri
            name
            slot
            tier
          }
        }
        stagger_value
        super_armor
        weak_point
      }
      charisma
      class
      courage
      critical
      domination
      endurance
      expertise
      guild_name
      id
      image_uri
      ins_date
      item_level
      kindness
      level
      max_health
      name
      server_name
      specialization
      swiftness
      upd_date
      wisdom
    }
  }
}
    `;

export const useFindCharacterQuery = <
  TData = IFindCharacterQuery,
  TError = unknown,
>(
  variables: IFindCharacterQueryVariables,
  options?: Omit<
    UseQueryOptions<IFindCharacterQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseQueryOptions<IFindCharacterQuery, TError, TData>['queryKey'];
  },
) => {
  return useQuery<IFindCharacterQuery, TError, TData>({
    queryKey: ['FindCharacter', variables],
    queryFn: gqlFetcher<IFindCharacterQuery, IFindCharacterQueryVariables>(
      FindCharacterDocument,
      variables,
    ),
    ...options,
  });
};

export const useSuspenseFindCharacterQuery = <
  TData = IFindCharacterQuery,
  TError = unknown,
>(
  variables: IFindCharacterQueryVariables,
  options?: Omit<
    UseSuspenseQueryOptions<IFindCharacterQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseQueryOptions<
      IFindCharacterQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useSuspenseQuery<IFindCharacterQuery, TError, TData>({
    queryKey: ['FindCharacterSuspense', variables],
    queryFn: gqlFetcher<IFindCharacterQuery, IFindCharacterQueryVariables>(
      FindCharacterDocument,
      variables,
    ),
    ...options,
  });
};

export const useInfiniteFindCharacterQuery = <
  TData = InfiniteData<IFindCharacterQuery>,
  TError = unknown,
>(
  variables: IFindCharacterQueryVariables,
  options: Omit<
    UseInfiniteQueryOptions<IFindCharacterQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseInfiniteQueryOptions<
      IFindCharacterQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useInfiniteQuery<IFindCharacterQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey: optionsQueryKey ?? ['FindCharacter.infinite', variables],
        queryFn: (metaData) =>
          gqlFetcher<IFindCharacterQuery, IFindCharacterQueryVariables>(
            FindCharacterDocument,
            { ...variables, ...(metaData.pageParam ?? {}) },
          )(),
        ...restOptions,
      };
    })(),
  );
};

export const useSuspenseInfiniteFindCharacterQuery = <
  TData = InfiniteData<IFindCharacterQuery>,
  TError = unknown,
>(
  variables: IFindCharacterQueryVariables,
  options: Omit<
    UseSuspenseInfiniteQueryOptions<IFindCharacterQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseInfiniteQueryOptions<
      IFindCharacterQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useSuspenseInfiniteQuery<IFindCharacterQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey: optionsQueryKey ?? [
          'FindCharacter.infiniteSuspense',
          variables,
        ],
        queryFn: (metaData) =>
          gqlFetcher<IFindCharacterQuery, IFindCharacterQueryVariables>(
            FindCharacterDocument,
            { ...variables, ...(metaData.pageParam ?? {}) },
          )(),
        ...restOptions,
      };
    })(),
  );
};

export const FindCharacterRankingDocument = `
    query FindCharacterRanking($cursor: BigInt, $take: Int, $className: [String!], $engravingIds: [BigInt!]) {
  findCharacterRanking(
    cursor: $cursor
    take: $take
    className: $className
    engravingIds: $engravingIds
  ) {
    classEngraving
    className
    guildName
    id
    imageUri
    insDate
    itemLevel
    name
    serverName
    setItem
    updDate
  }
}
    `;

export const useFindCharacterRankingQuery = <
  TData = IFindCharacterRankingQuery,
  TError = unknown,
>(
  variables?: IFindCharacterRankingQueryVariables,
  options?: Omit<
    UseQueryOptions<IFindCharacterRankingQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseQueryOptions<
      IFindCharacterRankingQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useQuery<IFindCharacterRankingQuery, TError, TData>({
    queryKey:
      variables === undefined
        ? ['FindCharacterRanking']
        : ['FindCharacterRanking', variables],
    queryFn: gqlFetcher<
      IFindCharacterRankingQuery,
      IFindCharacterRankingQueryVariables
    >(FindCharacterRankingDocument, variables),
    ...options,
  });
};

export const useSuspenseFindCharacterRankingQuery = <
  TData = IFindCharacterRankingQuery,
  TError = unknown,
>(
  variables?: IFindCharacterRankingQueryVariables,
  options?: Omit<
    UseSuspenseQueryOptions<IFindCharacterRankingQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseQueryOptions<
      IFindCharacterRankingQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useSuspenseQuery<IFindCharacterRankingQuery, TError, TData>({
    queryKey:
      variables === undefined
        ? ['FindCharacterRankingSuspense']
        : ['FindCharacterRankingSuspense', variables],
    queryFn: gqlFetcher<
      IFindCharacterRankingQuery,
      IFindCharacterRankingQueryVariables
    >(FindCharacterRankingDocument, variables),
    ...options,
  });
};

export const useInfiniteFindCharacterRankingQuery = <
  TData = InfiniteData<IFindCharacterRankingQuery>,
  TError = unknown,
>(
  variables: IFindCharacterRankingQueryVariables,
  options: Omit<
    UseInfiniteQueryOptions<IFindCharacterRankingQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseInfiniteQueryOptions<
      IFindCharacterRankingQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useInfiniteQuery<IFindCharacterRankingQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey:
          optionsQueryKey ?? variables === undefined
            ? ['FindCharacterRanking.infinite']
            : ['FindCharacterRanking.infinite', variables],
        queryFn: (metaData) =>
          gqlFetcher<
            IFindCharacterRankingQuery,
            IFindCharacterRankingQueryVariables
          >(FindCharacterRankingDocument, {
            ...variables,
            ...(metaData.pageParam ?? {}),
          })(),
        ...restOptions,
      };
    })(),
  );
};

export const useSuspenseInfiniteFindCharacterRankingQuery = <
  TData = InfiniteData<IFindCharacterRankingQuery>,
  TError = unknown,
>(
  variables: IFindCharacterRankingQueryVariables,
  options: Omit<
    UseSuspenseInfiniteQueryOptions<IFindCharacterRankingQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseInfiniteQueryOptions<
      IFindCharacterRankingQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useSuspenseInfiniteQuery<IFindCharacterRankingQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey:
          optionsQueryKey ?? variables === undefined
            ? ['FindCharacterRanking.infiniteSuspense']
            : ['FindCharacterRanking.infiniteSuspense', variables],
        queryFn: (metaData) =>
          gqlFetcher<
            IFindCharacterRankingQuery,
            IFindCharacterRankingQueryVariables
          >(FindCharacterRankingDocument, {
            ...variables,
            ...(metaData.pageParam ?? {}),
          })(),
        ...restOptions,
      };
    })(),
  );
};

export const FindAverageEngravingDocument = `
    query FindAverageEngraving($name: String!) {
  findAverageEngraving(name: $name) {
    count
    engraving {
      name
      image_uri
      id
      class_yn
      level
    }
  }
}
    `;

export const useFindAverageEngravingQuery = <
  TData = IFindAverageEngravingQuery,
  TError = unknown,
>(
  variables: IFindAverageEngravingQueryVariables,
  options?: Omit<
    UseQueryOptions<IFindAverageEngravingQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseQueryOptions<
      IFindAverageEngravingQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useQuery<IFindAverageEngravingQuery, TError, TData>({
    queryKey: ['FindAverageEngraving', variables],
    queryFn: gqlFetcher<
      IFindAverageEngravingQuery,
      IFindAverageEngravingQueryVariables
    >(FindAverageEngravingDocument, variables),
    ...options,
  });
};

export const useSuspenseFindAverageEngravingQuery = <
  TData = IFindAverageEngravingQuery,
  TError = unknown,
>(
  variables: IFindAverageEngravingQueryVariables,
  options?: Omit<
    UseSuspenseQueryOptions<IFindAverageEngravingQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseQueryOptions<
      IFindAverageEngravingQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useSuspenseQuery<IFindAverageEngravingQuery, TError, TData>({
    queryKey: ['FindAverageEngravingSuspense', variables],
    queryFn: gqlFetcher<
      IFindAverageEngravingQuery,
      IFindAverageEngravingQueryVariables
    >(FindAverageEngravingDocument, variables),
    ...options,
  });
};

export const useInfiniteFindAverageEngravingQuery = <
  TData = InfiniteData<IFindAverageEngravingQuery>,
  TError = unknown,
>(
  variables: IFindAverageEngravingQueryVariables,
  options: Omit<
    UseInfiniteQueryOptions<IFindAverageEngravingQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseInfiniteQueryOptions<
      IFindAverageEngravingQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useInfiniteQuery<IFindAverageEngravingQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey: optionsQueryKey ?? [
          'FindAverageEngraving.infinite',
          variables,
        ],
        queryFn: (metaData) =>
          gqlFetcher<
            IFindAverageEngravingQuery,
            IFindAverageEngravingQueryVariables
          >(FindAverageEngravingDocument, {
            ...variables,
            ...(metaData.pageParam ?? {}),
          })(),
        ...restOptions,
      };
    })(),
  );
};

export const useSuspenseInfiniteFindAverageEngravingQuery = <
  TData = InfiniteData<IFindAverageEngravingQuery>,
  TError = unknown,
>(
  variables: IFindAverageEngravingQueryVariables,
  options: Omit<
    UseSuspenseInfiniteQueryOptions<IFindAverageEngravingQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseInfiniteQueryOptions<
      IFindAverageEngravingQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useSuspenseInfiniteQuery<IFindAverageEngravingQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey: optionsQueryKey ?? [
          'FindAverageEngraving.infiniteSuspense',
          variables,
        ],
        queryFn: (metaData) =>
          gqlFetcher<
            IFindAverageEngravingQuery,
            IFindAverageEngravingQueryVariables
          >(FindAverageEngravingDocument, {
            ...variables,
            ...(metaData.pageParam ?? {}),
          })(),
        ...restOptions,
      };
    })(),
  );
};

export const FindAverageStatsDocument = `
    query FindAverageStats($name: String!) {
  findAverageStats(name: $name) {
    name
    stats {
      name
      value
    }
  }
}
    `;

export const useFindAverageStatsQuery = <
  TData = IFindAverageStatsQuery,
  TError = unknown,
>(
  variables: IFindAverageStatsQueryVariables,
  options?: Omit<
    UseQueryOptions<IFindAverageStatsQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseQueryOptions<
      IFindAverageStatsQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useQuery<IFindAverageStatsQuery, TError, TData>({
    queryKey: ['FindAverageStats', variables],
    queryFn: gqlFetcher<
      IFindAverageStatsQuery,
      IFindAverageStatsQueryVariables
    >(FindAverageStatsDocument, variables),
    ...options,
  });
};

export const useSuspenseFindAverageStatsQuery = <
  TData = IFindAverageStatsQuery,
  TError = unknown,
>(
  variables: IFindAverageStatsQueryVariables,
  options?: Omit<
    UseSuspenseQueryOptions<IFindAverageStatsQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseQueryOptions<
      IFindAverageStatsQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useSuspenseQuery<IFindAverageStatsQuery, TError, TData>({
    queryKey: ['FindAverageStatsSuspense', variables],
    queryFn: gqlFetcher<
      IFindAverageStatsQuery,
      IFindAverageStatsQueryVariables
    >(FindAverageStatsDocument, variables),
    ...options,
  });
};

export const useInfiniteFindAverageStatsQuery = <
  TData = InfiniteData<IFindAverageStatsQuery>,
  TError = unknown,
>(
  variables: IFindAverageStatsQueryVariables,
  options: Omit<
    UseInfiniteQueryOptions<IFindAverageStatsQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseInfiniteQueryOptions<
      IFindAverageStatsQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useInfiniteQuery<IFindAverageStatsQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey: optionsQueryKey ?? ['FindAverageStats.infinite', variables],
        queryFn: (metaData) =>
          gqlFetcher<IFindAverageStatsQuery, IFindAverageStatsQueryVariables>(
            FindAverageStatsDocument,
            { ...variables, ...(metaData.pageParam ?? {}) },
          )(),
        ...restOptions,
      };
    })(),
  );
};

export const useSuspenseInfiniteFindAverageStatsQuery = <
  TData = InfiniteData<IFindAverageStatsQuery>,
  TError = unknown,
>(
  variables: IFindAverageStatsQueryVariables,
  options: Omit<
    UseSuspenseInfiniteQueryOptions<IFindAverageStatsQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseInfiniteQueryOptions<
      IFindAverageStatsQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useSuspenseInfiniteQuery<IFindAverageStatsQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey: optionsQueryKey ?? [
          'FindAverageStats.infiniteSuspense',
          variables,
        ],
        queryFn: (metaData) =>
          gqlFetcher<IFindAverageStatsQuery, IFindAverageStatsQueryVariables>(
            FindAverageStatsDocument,
            { ...variables, ...(metaData.pageParam ?? {}) },
          )(),
        ...restOptions,
      };
    })(),
  );
};

export const FindAverageWeaponDocument = `
    query FindAverageWeapon($name: String!) {
  findAverageWeapon(name: $name)
}
    `;

export const useFindAverageWeaponQuery = <
  TData = IFindAverageWeaponQuery,
  TError = unknown,
>(
  variables: IFindAverageWeaponQueryVariables,
  options?: Omit<
    UseQueryOptions<IFindAverageWeaponQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseQueryOptions<
      IFindAverageWeaponQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useQuery<IFindAverageWeaponQuery, TError, TData>({
    queryKey: ['FindAverageWeapon', variables],
    queryFn: gqlFetcher<
      IFindAverageWeaponQuery,
      IFindAverageWeaponQueryVariables
    >(FindAverageWeaponDocument, variables),
    ...options,
  });
};

export const useSuspenseFindAverageWeaponQuery = <
  TData = IFindAverageWeaponQuery,
  TError = unknown,
>(
  variables: IFindAverageWeaponQueryVariables,
  options?: Omit<
    UseSuspenseQueryOptions<IFindAverageWeaponQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseQueryOptions<
      IFindAverageWeaponQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useSuspenseQuery<IFindAverageWeaponQuery, TError, TData>({
    queryKey: ['FindAverageWeaponSuspense', variables],
    queryFn: gqlFetcher<
      IFindAverageWeaponQuery,
      IFindAverageWeaponQueryVariables
    >(FindAverageWeaponDocument, variables),
    ...options,
  });
};

export const useInfiniteFindAverageWeaponQuery = <
  TData = InfiniteData<IFindAverageWeaponQuery>,
  TError = unknown,
>(
  variables: IFindAverageWeaponQueryVariables,
  options: Omit<
    UseInfiniteQueryOptions<IFindAverageWeaponQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseInfiniteQueryOptions<
      IFindAverageWeaponQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useInfiniteQuery<IFindAverageWeaponQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey: optionsQueryKey ?? ['FindAverageWeapon.infinite', variables],
        queryFn: (metaData) =>
          gqlFetcher<IFindAverageWeaponQuery, IFindAverageWeaponQueryVariables>(
            FindAverageWeaponDocument,
            { ...variables, ...(metaData.pageParam ?? {}) },
          )(),
        ...restOptions,
      };
    })(),
  );
};

export const useSuspenseInfiniteFindAverageWeaponQuery = <
  TData = InfiniteData<IFindAverageWeaponQuery>,
  TError = unknown,
>(
  variables: IFindAverageWeaponQueryVariables,
  options: Omit<
    UseSuspenseInfiniteQueryOptions<IFindAverageWeaponQuery, TError, TData>,
    'queryKey'
  > & {
    queryKey?: UseSuspenseInfiniteQueryOptions<
      IFindAverageWeaponQuery,
      TError,
      TData
    >['queryKey'];
  },
) => {
  return useSuspenseInfiniteQuery<IFindAverageWeaponQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey: optionsQueryKey ?? [
          'FindAverageWeapon.infiniteSuspense',
          variables,
        ],
        queryFn: (metaData) =>
          gqlFetcher<IFindAverageWeaponQuery, IFindAverageWeaponQueryVariables>(
            FindAverageWeaponDocument,
            { ...variables, ...(metaData.pageParam ?? {}) },
          )(),
        ...restOptions,
      };
    })(),
  );
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
