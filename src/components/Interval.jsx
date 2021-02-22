import './Interval.css'
import React from 'react'
import Card from './Card'

import { connect } from 'react-redux'
import {updateMinNumber, updateMaxNumber } from '../store/actions/numbers'

function Interval(props) {
    const {min, max} = props
    return (
        <Card title="Number interval" dark>
            <div className='Interval'>
                <span>
                    <strong>Min:</strong>
                    <input type='number' value={ min } 
                    onChange={e => props.updateMinimum(+e.target.value)}/>
                </span>
                <span>
                    <strong>Max:</strong>
                    <input type='number' value={ max }
                    onChange={e => props.updateMaximum(+e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return{
        min: state.numbers.min,
        max: state.numbers.max
    }
}

function mapDispatchToProps(dispatch){
    return{
        updateMinimum(newNumber){
            const action = updateMinNumber(newNumber)
            dispatch(action)
        },
        updateMaximum(newNumber){
            const action = updateMaxNumber(newNumber)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval)