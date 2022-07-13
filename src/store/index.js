import { configureStore } from "@reduxjs/toolkit";

import addToListSlice from './add-to-list-slice'

const store = configureStore({
    reducer: { addToList: addToListSlice.reducer }
})

export default store;