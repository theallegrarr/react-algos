import * as types from '../types'

export const moveToNext = (payload) => {
    const { current, children, visited, found } = payload.next().value
    return {
        type: types.NEXT_SUCCESS,
        payload: {
            current: current,
            children: children,
            visited: visited,
            found: found,
        }
    }
}

