import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Mutation = {
   __typename?: 'Mutation',
  CreatePlant: Plant,
};


export type MutationCreatePlantArgs = {
  name: Scalars['String'],
  species: Scalars['String']
};

export type Plant = {
   __typename?: 'Plant',
  id: Scalars['ID'],
  name: Scalars['String'],
  species: Scalars['String'],
  schedule?: Maybe<Schedule>,
};

export type Query = {
   __typename?: 'Query',
  plants: Array<Plant>,
  plant?: Maybe<Plant>,
  schedule?: Maybe<Schedule>,
};


export type QueryPlantArgs = {
  id: Scalars['ID']
};

export type Schedule = {
   __typename?: 'Schedule',
  id: Scalars['ID'],
  date: Scalars['String'],
  plants?: Maybe<Array<Maybe<Plant>>>,
};

export type GetMyPlantsQueryVariables = {};


export type GetMyPlantsQuery = (
  { __typename?: 'Query' }
  & { plants: Array<(
    { __typename?: 'Plant' }
    & Pick<Plant, 'id' | 'name' | 'species'>
  )> }
);

export type GetPlantQueryVariables = {
  id: Scalars['ID']
};


export type GetPlantQuery = (
  { __typename?: 'Query' }
  & { plant: Maybe<(
    { __typename?: 'Plant' }
    & Pick<Plant, 'id' | 'name' | 'species'>
    & { schedule: Maybe<(
      { __typename?: 'Schedule' }
      & Pick<Schedule, 'id' | 'date'>
    )> }
  )> }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  Plant: ResolverTypeWrapper<Plant>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Schedule: ResolverTypeWrapper<Schedule>,
  Mutation: ResolverTypeWrapper<{}>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  Plant: Plant,
  ID: Scalars['ID'],
  String: Scalars['String'],
  Schedule: Schedule,
  Mutation: {},
  Boolean: Scalars['Boolean'],
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  CreatePlant?: Resolver<ResolversTypes['Plant'], ParentType, ContextType, RequireFields<MutationCreatePlantArgs, 'name' | 'species'>>,
};

export type PlantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Plant'] = ResolversParentTypes['Plant']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  species?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  schedule?: Resolver<Maybe<ResolversTypes['Schedule']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  plants?: Resolver<Array<ResolversTypes['Plant']>, ParentType, ContextType>,
  plant?: Resolver<Maybe<ResolversTypes['Plant']>, ParentType, ContextType, RequireFields<QueryPlantArgs, 'id'>>,
  schedule?: Resolver<Maybe<ResolversTypes['Schedule']>, ParentType, ContextType>,
};

export type ScheduleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Schedule'] = ResolversParentTypes['Schedule']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  plants?: Resolver<Maybe<Array<Maybe<ResolversTypes['Plant']>>>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>,
  Plant?: PlantResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Schedule?: ScheduleResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
