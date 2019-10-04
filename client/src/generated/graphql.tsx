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

export type Plant = {
   __typename?: 'Plant',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  species?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  getPlants: Array<Plant>,
};

export type GetMyPlantsQueryVariables = {};


export type GetMyPlantsQuery = (
  { __typename?: 'Query' }
  & { getPlants: Array<(
    { __typename?: 'Plant' }
    & Pick<Plant, 'id' | 'name' | 'species'>
  )> }
);


export const GetMyPlantsDocument = gql`
    query GetMyPlants {
  getPlants {
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