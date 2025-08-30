// types/article.ts
import type { ReactNode } from 'react';

export type InternalArticleMeta = {
  id: string;                // required: used for routing/lookup
  title: string;
  description: string;
  date: string;
  readTime?: string;
  type?: 'internal';         // default internal
  link?: never;
};

export type ExternalArticleMeta = {
  id: string;                // keep an id so your list/keys are consistent
  title: string;
  description: string;
  date: string;
  readTime?: string;
  type: 'external';
  link: string;
};

export type Article = InternalArticleMeta | ExternalArticleMeta;

export type ArticleData = {
  meta: InternalArticleMeta; // content only exists for internal articles
  content: ReactNode;
};
