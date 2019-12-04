import H from 'history';
import { ParsedQuery } from 'query-string';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LocationWithQuery = H.Location & {
  query: ParsedQuery;
};
