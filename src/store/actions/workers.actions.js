import { reduxAction as action } from '../../utils';

export const WORKERS_FETCH = 'WORKERS_FETCH';
export const WORKERS_RECEIVED = 'WORKERS_RECEIVED';
export const WORKERS_ERROR = 'WORKERS_ERROR';
export const WORKERS_MESSAGE = 'WORKERS_MESSAGE';
export const WORKERS_REMOVE_MESSAGE = 'WORKERS_REMOVE_MESSAGE';
export const WORKERS_REMOVE_ERROR = 'WORKERS_REMOVE_ERROR';
export const WORKERS_CLEAN_MESSAGES = 'WORKERS_CLEAN_MESSAGES';
export const WORKERS_CLEAN_ERRORS = 'WORKERS_CLEAN_ERRORS';
export const WORKERS_SINGLE_FETCH = 'WORKERS_SINGLE_FETCH';
export const WORKERS_SINGLE_RECIEVED = 'WORKERS_SINGLE_RECIEVED';
export const WORKERS_UPDATE_FILTERS = 'WORKERS_UPDATE_FILTERS';
export const WORKERS_RESET_FILTER = 'WORKERS_RESET_FILTER';

export const workersFetch = (page = 1) => action(WORKERS_FETCH, { page });
export const workersReceived = (workers, count, page) => action(WORKERS_RECEIVED, { workers, count, page  });
export const workersError = error => action(WORKERS_ERROR, { error });
export const addWorkersMessage = message => action(WORKERS_MESSAGE, { message });
export const removeWorkersMessage = index => action(WORKERS_REMOVE_MESSAGE, { index });
export const removeWorkersError = index => action(WORKERS_REMOVE_ERROR, { index });
export const cleanWorkersMessages = () => action(WORKERS_CLEAN_MESSAGES);
export const cleanWorkersErrors = () => action(WORKERS_CLEAN_ERRORS);
export const fetchSingleWorker = address => action(WORKERS_SINGLE_FETCH, { address });
export const workerSingleReceived = record => action(WORKERS_SINGLE_RECIEVED, { record });
export const workersOrderByToggle = orderBy => action(WORKERS_FETCH, { orderBy });
export const workerUpdateFilter = (key, value) => action(WORKERS_UPDATE_FILTERS, { key, value });
export const doWorkersSearch = () => action(WORKERS_FETCH);
export const resetWorkersFilter = key => action(WORKERS_RESET_FILTER, { key });
