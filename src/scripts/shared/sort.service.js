export { dynamicSort };
/**
 * find on the stack overflow,
 * good thing, sorting array of object if put onside sort native method
 * @param {string} property 
 */
function dynamicSort(property) {
    let sortOrder = 1;

    if (property[0] === '-') {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;

        return result * sortOrder;
    };
}
