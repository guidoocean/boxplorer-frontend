import { reduxAction as action } from '../../utils';

export const DATASETS_FETCH = 'DATASETS_FETCH';
export const DATASETS_RECEIVED = 'DATASETS_RECEIVED';
export const DATASETS_ERROR = 'DATASETS_ERROR';
export const DATASETS_MESSAGE = 'DATASETS_MESSAGE';
export const DATASETS_REMOVE_MESSAGE = 'DATASETS_REMOVE_MESSAGE';
export const DATASETS_REMOVE_ERROR = 'DATASETS_REMOVE_ERROR';
export const DATASETS_CLEAN_MESSAGES = 'DATASETS_CLEAN_MESSAGES';
export const DATASETS_CLEAN_ERRORS = 'DATASETS_CLEAN_ERRORS';
export const DATASETS_SINGLE_FETCH = 'DATASETS_SINGLE_FETCH';
export const DATASETS_SINGLE_RECIEVED = 'DATASETS_SINGLE_RECIEVED';
export const DATASETS_UPDATE_FILTERS = 'DATASETS_UPDATE_FILTERS';
export const DATASETS_RESET_FILTER = 'DATASETS_RESET_FILTER';

export const datasetsFetch = (page = 1) => action(DATASETS_FETCH, { page });
export const datasetsReceived = (datasets, count, page) => action(DATASETS_RECEIVED, { datasets, count, page });
export const datasetsError = error => action(DATASETS_ERROR, { error });
export const addDatasetsMessage = message => action(DATASETS_MESSAGE, { message });
export const removeDatasetsMessage = index => action(DATASETS_REMOVE_MESSAGE, { index });
export const removeDatasetsError = index => action(DATASETS_REMOVE_ERROR, { index });
export const cleanDatasetsMessages = () => action(DATASETS_CLEAN_MESSAGES);
export const cleanDatasetsErrors = () => action(DATASETS_CLEAN_ERRORS);
export const fetchSingleDataset = address => action(DATASETS_SINGLE_FETCH, { address });
export const datasetSingleReceived = record => action(DATASETS_SINGLE_RECIEVED, { record });
export const datasetsOrderByToggle = orderBy => action(DATASETS_FETCH, { orderBy });
export const datasetUpdateFilter = (key, value) => action(DATASETS_UPDATE_FILTERS, { key, value });
export const doDatasetsSearch = () => action(DATASETS_FETCH);
export const resetDatasetsFilter = key => action(DATASETS_RESET_FILTER, { key });
