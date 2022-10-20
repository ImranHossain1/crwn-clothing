import {takeLatest, all, call, put} from 'redux-saga/effects'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { CATEGORIES_ACTION_TYPES } from './categgory.types';
import { fetchCategoriesFailed, fetchCategoriesSuccess } from './category.action';


export function* fetchCategoriesAsync(){
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
        yield put(fetchCategoriesSuccess(categoriesArray));
      } catch (error) {
        yield put(fetchCategoriesFailed(error))
      }
}

export function* onFetchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START,fetchCategoriesAsync )
}

export function* categoriesSaga(){
    yield all([call(onFetchCategories)]);

}