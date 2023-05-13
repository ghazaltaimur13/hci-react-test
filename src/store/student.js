
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	students: [],
	loading: false
}
const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
      studentAdded(state, action) {
        state.students.push(action.payload)
      },
      studentUpdated(state, action) {
        const { id, name, grade, score } = action
        const students = state.students.find(student => student.id === id)
        if (students) {
            students.name = name
            students.grade = grade
            students.score = score
        }
      },
      getStudents: (state, action) => {
        return {
          ...state,
        }
      },
    }
  })
  
  export const { studentAdded, studentUpdated, getStudents } = studentSlice.actions
  
  export default studentSlice.reducer