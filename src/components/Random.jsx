import React from 'react'
import Card from './Card'

import { connect } from 'react-redux'

function Random (props) {
    const {min, max} = props
    const random = parseInt(Math.random() * (max - min)) + min
    return (
        <Card title="Random Number" color2>
            <div>
                <span>
                    <span>Result: </span>
                    <strong>{ random }</strong>
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

export default connect(mapStateToProps)(Random)