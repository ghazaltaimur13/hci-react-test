
import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { useDispatch } from 'react-redux'
import { studentUpdated } from "../store/student";
import store from "../store";

export default function List(students){
    const dispatch = useDispatch()
    const columns = [
        { dataField: 'id', text: 'Id' },
        { dataField: 'name', text: 'Name' },
        { dataField: 'score', text: 'Score' },
        { dataField: 'grade', text: 'Grade' },
      ]

    return (
        <div className="m-3">
            <BootstrapTable
                keyField='id'
                data={ students.studentList }
                columns={ columns }
                loading={ true }
                cellEdit={ cellEditFactory({
                    mode: 'click',
                    beforeSaveCell: (oldValue, newValue, row, column) => { 
                        console.log(oldValue)
                        console.log('After Saving Cell!!'); 
                        dispatch(studentUpdated({ id: oldValue.id, name: newValue.name, score: newValue.score, grade: newValue.grade }))
                    }
                }) }
        />
        </div>
    );
}