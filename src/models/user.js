import http from "../utils/http";

export const user = {
  state: {
    current: null,
    isLoadingUser: false,
    collection: [],
    isLoading: false,
  },
  reducers: {
    setCurrentUserReducer(state, { payload }) {
      return { ...state, current: payload };
    },
    setCollectionUserReducer(state, { collection }) {
      return { ...state, collection };
    },
    addUserReducer(state, { payload }) {
      return { ...state, collection: [...state.collection, payload] };
    },
    updateUserReducer(state, { payload }) {
      return { ...state, collection: state.collection.map(user => (user.id === payload.id ? payload : user)) };
    },
    deleteUserReducer(state, { payload }) {
      return { ...state, collection: state.collection.filter(user => user.id !== payload.id) };
    },
  },
  effects: dispatch => ({
    addUser(payload) {
      http({
        url: "/users",
        method: "POST",
        data: payload,
        success: response => {
          dispatch.user.addUserReducer({ payload: response.data });
        },
        error: error => {
          console.log(error);
        },
      });
    },
  }),
};
