import { Action } from 'react-fetching-library';

export type TCarInfoResourceParams = { search: string };

export const getCarsRecourse = (params: TCarInfoResourceParams): Action => ({
  method: 'POST',
  endpoint: `/api/v1/car-info/${params.search}`,
});

export type TCarInfoResource = {
  readonly search: string | undefined;
  readonly owner: string | undefined;
  readonly year: number | undefined;
  readonly crashesCount: number | undefined;
  readonly ownersCount: number | undefined;
}