export function updateMinNumber(newNumber) {
    return {
        type: 'MIN_NUM_UPDATED',
        payload: newNumber
    }
}
export function updateMaxNumber(newNumber) {
    return {
        type: 'MAX_NUM_UPDATED',
        payload: newNumber
    }
}