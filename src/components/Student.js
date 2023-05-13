import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { studentAdded } from '../store/student'
import store from "../store";
import List from './List';

export default function Student() {
    const [name, setName] = useState('')
    const [score, setScore] = useState('')
    const [grade, setGrade] = useState('')
    const [studentList, setStudentList] = useState(store.getState().student.students);

    const dispatch = useDispatch()

    const onNameChanged = e => setName(e.target.value)
    const onScoreChanged = e => setScore(e.target.value)
    const onGradeChanged = e => setGrade(e.target.value)
    const canSave = name && score && grade

    const onSavePostClicked = () => {
        const prevState = store.getState().student.students;
        if (name && score) {
            dispatch(studentAdded({ id: prevState.length+1, name, score, grade }))
            setName('')
            setScore('')
            setGrade('')
            setStudentList(store.getState().student.students)
        }
    }
   

    return (
        <div className="m-3">
            <Form >
                <Form.Group controlId="name" className="m-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" onChange={onNameChanged} value={name}/>
                </Form.Group>
                <Form.Group controlId="score" className="m-3">
                    <Form.Label>Score</Form.Label>
                    <Form.Control type="score" placeholder="Enter Score" onChange={onScoreChanged}  value={score}/>
                </Form.Group>
                <Form.Group controlId="grade" className="m-3">
                    <Form.Label>Grade</Form.Label>
                    <Form.Control type="grade" placeholder="Enter Grade" onChange={onGradeChanged} value={grade}/>
                </Form.Group>
                <Button  className="m-3" type="submit" onClick={onSavePostClicked} disabled={!canSave}>Submit</Button>
            </Form>
            <List studentList={studentList} />
        </div>

    )
}