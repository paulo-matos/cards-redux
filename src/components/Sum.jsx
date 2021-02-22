import React from 'react'
import Card from './Card'

import { connect } from 'react-redux'

function Sum (props) {
    const {min, max} = props
    return (
        <Card title="Sum" light>
            <div>
                <span>
                    <span>Result: </span>
                    <strong>{ min + max }</strong>
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

export default connect(mapStateToProps)(Sum)