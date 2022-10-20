import { CATEGORIES_ACTION_TYPES } from "./categgory.types";

export const CATEGORIES_INITIAL_STATE={
    categories: [],
    isLoading: false,
    error: null,

}

export const CategoriesReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
      case CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START:
        return {...state, isLoading: true};
      case CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_SUCCESS:
        return {
          ...state,
          isLoading: false,
          categories: payload,

        };
      case CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_FAILED:
        return {
          ...state,
          error: payload,
          isLoading: false
        };
      default:
        return state;
    }
  }; 