import { configureStore } from '@reduxjs/toolkit'
import studentReducer from './student'
export default configureStore({
  reducer: {
    student: studentReducer,
  },
})