export const COUNT_ADDED = 'COUNT_ADDED';

export function addRandom() {
    return ({ type: COUNT_ADDED, payload: Math.random() });
}