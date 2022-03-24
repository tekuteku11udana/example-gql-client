import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
};

export type Message = {
  __typename?: 'Message';
  createdAt: Scalars['Time'];
  id: Scalars['String'];
  text: Scalars['String'];
  user: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  postMessage?: Maybe<Message>;
};


export type MutationPostMessageArgs = {
  text: Scalars['String'];
  user: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  messages: Array<Message>;
};

export type Subscription = {
  __typename?: 'Subscription';
  messagePosted: Message;
};


export type SubscriptionMessagePostedArgs = {
  user: Scalars['String'];
};
