import type { Cell } from '../types';
import type { ActionType } from '../action-types';

interface BundleStartAction {
  type: ActionType.BUNDLE_START;
  payload: string;
}

interface BundleCompleteAction {
  type: ActionType.BUNDLE_COMPLETE;
  payload: { code: string; id: string };
}

interface BundleErrorAction {
  type: ActionType.BUNDLE_ERROR;
  payload: { id: string; error: string };
}

export interface InsertCell {
  type: ActionType.INSERT_CELL;
  payload: Cell;
}

export interface UpdateCell {
  type: ActionType.UPDATE_CELL;
  payload: { id: string; content: string };
}

export interface DeleteCell {
  type: ActionType.DELETE_CELL;
  payload: string;
}

interface CreatePlaygroundStart {
  type: ActionType.CREATE_PLAYGROUND_START;
}

interface CreatePlaygroundComplete {
  type: ActionType.CREATE_PLAYGROUND_COMPLETE;
  // The inserted document id
  payload: string;
}

interface CreatePlaygroundError {
  type: ActionType.CREATE_PLAYGROUND_ERROR;
  payload: string;
}

interface FetchPlaygroundStart {
  type: ActionType.FETCH_PLAYGROUND_START;
}

interface FetchPlaygroundComplete {
  type: ActionType.FETCH_PLAYGROUND_COMPLETE;
  payload: Cell[];
}

interface FetchPlaygroundError {
  type: ActionType.FETCH_PLAYGROUND_ERROR;
  payload: string;
}

export type Action =
  | BundleStartAction
  | BundleCompleteAction
  | BundleErrorAction
  | InsertCell
  | UpdateCell
  | DeleteCell
  | CreatePlaygroundStart
  | CreatePlaygroundComplete
  | CreatePlaygroundError
  | FetchPlaygroundStart
  | FetchPlaygroundComplete
  | FetchPlaygroundError;
