import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
};

export type G_AddCommentError = {
  msg: Scalars['String']['output'];
};

export type G_AddCommentInput = {
  storyId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};

export type G_AddCommentPayload = G_AddCommentError | G_AddCommentSuccess;

export type G_AddCommentSuccess = {
  newComment: G_Comment;
};

export type G_AddLikeError = {
  msg: Scalars['String']['output'];
};

export type G_AddLikeInput = {
  storyId: Scalars['ID']['input'];
};

export type G_AddLikePayload = G_AddLikeError | G_AddLikeSuccess;

export type G_AddLikeSuccess = {
  story: G_Story;
};

export enum G_Category {
  Environment = 'ENVIRONMENT',
  Science = 'SCIENCE',
  Technology = 'TECHNOLOGY'
}

export type G_Comment = G_Node & {
  id: Scalars['ID']['output'];
  story: G_Story;
  text: Scalars['String']['output'];
};

export type G_Contact = G_EMailContact | G_PhoneContact;

export type G_EMailContact = {
  email: Scalars['String']['output'];
};

export type G_Image = {
  uri: Scalars['String']['output'];
};

export type G_Mutation = {
  addComment: G_AddCommentPayload;
  addLike: G_AddLikePayload;
};


export type G_MutationAddCommentArgs = {
  input: G_AddCommentInput;
};


export type G_MutationAddLikeArgs = {
  input: G_AddLikeInput;
};

export type G_Node = {
  id: Scalars['ID']['output'];
};

export type G_PhoneContact = {
  phone: Scalars['String']['output'];
};

export type G_Query = {
  /** For testing the API, returns a simple string */
  hello: Scalars['String']['output'];
  node?: Maybe<G_Node>;
  /** Returns a list of stories */
  stories: G_StoriesResult;
  /**
   * Returns the `Story` with the given `storyId`.
   *
   * - If no `storyId` is provided, the _latest_ story will be returned
   * - If a `storyId` is provided, but there is no story with that id, `null` is returned
   */
  story?: Maybe<G_Story>;
  /** Returns a unique string for each request (for testing) */
  uuid: Scalars['String']['output'];
  /** Return all registered `Writers` */
  writers: Array<G_Writer>;
};


export type G_QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type G_QueryStoriesArgs = {
  orderBy?: InputMaybe<G_StoryOrderBy>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


export type G_QueryStoryArgs = {
  storyId?: InputMaybe<Scalars['ID']['input']>;
};

export type G_StoriesResult = {
  /** Number of the next page or empty if there is no next page */
  nextPage?: Maybe<Scalars['Int']['output']>;
  /**
   * The field that is used to sort the resulting stories from the request
   *
   * If the request doesn't specified an `orderBy`, it's set to the applied default value by the server.
   */
  orderBy: G_StoryOrderBy;
  /**
   * Number of the requested page.
   *
   * If the request doesn't specified a page, it's set to the applied default value by the server.
   */
  page: Scalars['Int']['output'];
  /**
   * Size of the requested page (i.e. maximum number of `Story` objects returned)
   *
   * If the request doesn't specified a page, it's set to the applied default value by the server.
   */
  pageSize: Scalars['Int']['output'];
  /**
   * Number of the previous page or empty when the returned page is the first page, so that there
   * is no previous page
   */
  prevPage?: Maybe<Scalars['Int']['output']>;
  /** List of Storys matching the query */
  results: Array<G_Story>;
};

export type G_Story = G_Node & {
  body: Scalars['String']['output'];
  category: G_Category;
  /**  Note: in real GraphQL API comments would be pageable */
  comments: Array<G_Comment>;
  date: Scalars['DateTime']['output'];
  /** Returns an excerpt of this story, with a maximum length of `maxLength` characters. */
  excerpt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<G_Image>;
  likes: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  /**
   * Returns the number of words of this story.
   *
   * Note: **for demo purposes to make values more realistic, the values returned do  _not match_ the real number of words!**
   */
  wordCount: Scalars['Int']['output'];
  writer: G_Writer;
};


export type G_StoryExcerptArgs = {
  maxLength?: Scalars['Int']['input'];
};

/** Defines all fields that can be used to sort the list of stories */
export enum G_StoryOrderBy {
  Category = 'CATEGORY',
  Date = 'DATE',
  Likes = 'LIKES'
}

export type G_Writer = G_Node & {
  contact?: Maybe<G_Contact>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type G_GetStoriesVariables = Exact<{
  size: Scalars['Int']['input'];
}>;


export type G_GetStories = {
  stories: {
    nextPage?: number,
    results: Array<{
      id: string
    }>
  }
};

export type G_HelloWorldVariables = Exact<{ [key: string]: never; }>;


export type G_HelloWorld = {
  hello: string
};


export const GetStoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"size"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"size"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nextPage"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<G_GetStories, G_GetStoriesVariables>;
export const HelloWorldDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HelloWorld"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hello"}}]}}]} as unknown as DocumentNode<G_HelloWorld, G_HelloWorldVariables>;