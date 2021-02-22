import React from 'react'
import Card from './Card'

import { connect } from 'react-redux'

function Average(props) {
    const {min, max} = props
    return (
        <Card title="Average" color1>
            <div>
                <span>
                    <span>Result: </span>
                    <strong>{ (min + max) / 2}</strong>
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

export default connect(mapStateToProps)(Average)