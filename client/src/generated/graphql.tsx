import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
  DeletePlant?: Maybe<Plant>,
};


export type MutationCreatePlantArgs = {
  name: Scalars['String'],
  species: Scalars['String']
};


export type MutationDeletePlantArgs = {
  id: Scalars['ID']
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

export type CreatePlantMutationVariables = {
  name: Scalars['String'],
  species: Scalars['String']
};


export type CreatePlantMutation = (
  { __typename?: 'Mutation' }
  & { CreatePlant: (
    { __typename?: 'Plant' }
    & Pick<Plant, 'id'>
  ) }
);

export type DeletePlantMutationVariables = {
  id: Scalars['ID']
};


export type DeletePlantMutation = (
  { __typename?: 'Mutation' }
  & { DeletePlant: Maybe<(
    { __typename?: 'Plant' }
    & Pick<Plant, 'id'>
  )> }
);


export const GetMyPlantsDocument = gql`
    query GetMyPlants {
  plants {
    id
    name
    species
  }
}
    `;
export type GetMyPlantsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetMyPlantsQuery, GetMyPlantsQueryVariables>, 'query'>;

    export const GetMyPlantsComponent = (props: GetMyPlantsComponentProps) => (
      <ApolloReactComponents.Query<GetMyPlantsQuery, GetMyPlantsQueryVariables> query={GetMyPlantsDocument} {...props} />
    );
    

/**
 * __useGetMyPlantsQuery__
 *
 * To run a query within a React component, call `useGetMyPlantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyPlantsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyPlantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyPlantsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMyPlantsQuery, GetMyPlantsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMyPlantsQuery, GetMyPlantsQueryVariables>(GetMyPlantsDocument, baseOptions);
      }
export function useGetMyPlantsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMyPlantsQuery, GetMyPlantsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMyPlantsQuery, GetMyPlantsQueryVariables>(GetMyPlantsDocument, baseOptions);
        }
export type GetMyPlantsQueryHookResult = ReturnType<typeof useGetMyPlantsQuery>;
export type GetMyPlantsLazyQueryHookResult = ReturnType<typeof useGetMyPlantsLazyQuery>;
export type GetMyPlantsQueryResult = ApolloReactCommon.QueryResult<GetMyPlantsQuery, GetMyPlantsQueryVariables>;
export const GetPlantDocument = gql`
    query GetPlant($id: ID!) {
  plant(id: $id) {
    id
    name
    species
    schedule {
      id
      date
    }
  }
}
    `;
export type GetPlantComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPlantQuery, GetPlantQueryVariables>, 'query'> & ({ variables: GetPlantQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetPlantComponent = (props: GetPlantComponentProps) => (
      <ApolloReactComponents.Query<GetPlantQuery, GetPlantQueryVariables> query={GetPlantDocument} {...props} />
    );
    

/**
 * __useGetPlantQuery__
 *
 * To run a query within a React component, call `useGetPlantQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlantQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlantQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlantQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPlantQuery, GetPlantQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPlantQuery, GetPlantQueryVariables>(GetPlantDocument, baseOptions);
      }
export function useGetPlantLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPlantQuery, GetPlantQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPlantQuery, GetPlantQueryVariables>(GetPlantDocument, baseOptions);
        }
export type GetPlantQueryHookResult = ReturnType<typeof useGetPlantQuery>;
export type GetPlantLazyQueryHookResult = ReturnType<typeof useGetPlantLazyQuery>;
export type GetPlantQueryResult = ApolloReactCommon.QueryResult<GetPlantQuery, GetPlantQueryVariables>;
export const CreatePlantDocument = gql`
    mutation CreatePlant($name: String!, $species: String!) {
  CreatePlant(name: $name, species: $species) {
    id
  }
}
    `;
export type CreatePlantMutationFn = ApolloReactCommon.MutationFunction<CreatePlantMutation, CreatePlantMutationVariables>;
export type CreatePlantComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreatePlantMutation, CreatePlantMutationVariables>, 'mutation'>;

    export const CreatePlantComponent = (props: CreatePlantComponentProps) => (
      <ApolloReactComponents.Mutation<CreatePlantMutation, CreatePlantMutationVariables> mutation={CreatePlantDocument} {...props} />
    );
    

/**
 * __useCreatePlantMutation__
 *
 * To run a mutation, you first call `useCreatePlantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlantMutation, { data, loading, error }] = useCreatePlantMutation({
 *   variables: {
 *      name: // value for 'name'
 *      species: // value for 'species'
 *   },
 * });
 */
export function useCreatePlantMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePlantMutation, CreatePlantMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePlantMutation, CreatePlantMutationVariables>(CreatePlantDocument, baseOptions);
      }
export type CreatePlantMutationHookResult = ReturnType<typeof useCreatePlantMutation>;
export type CreatePlantMutationResult = ApolloReactCommon.MutationResult<CreatePlantMutation>;
export type CreatePlantMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePlantMutation, CreatePlantMutationVariables>;
export const DeletePlantDocument = gql`
    mutation DeletePlant($id: ID!) {
  DeletePlant(id: $id) {
    id
  }
}
    `;
export type DeletePlantMutationFn = ApolloReactCommon.MutationFunction<DeletePlantMutation, DeletePlantMutationVariables>;
export type DeletePlantComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeletePlantMutation, DeletePlantMutationVariables>, 'mutation'>;

    export const DeletePlantComponent = (props: DeletePlantComponentProps) => (
      <ApolloReactComponents.Mutation<DeletePlantMutation, DeletePlantMutationVariables> mutation={DeletePlantDocument} {...props} />
    );
    

/**
 * __useDeletePlantMutation__
 *
 * To run a mutation, you first call `useDeletePlantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePlantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePlantMutation, { data, loading, error }] = useDeletePlantMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePlantMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeletePlantMutation, DeletePlantMutationVariables>) {
        return ApolloReactHooks.useMutation<DeletePlantMutation, DeletePlantMutationVariables>(DeletePlantDocument, baseOptions);
      }
export type DeletePlantMutationHookResult = ReturnType<typeof useDeletePlantMutation>;
export type DeletePlantMutationResult = ApolloReactCommon.MutationResult<DeletePlantMutation>;
export type DeletePlantMutationOptions = ApolloReactCommon.BaseMutationOptions<DeletePlantMutation, DeletePlantMutationVariables>;