const testVar = {}

function testFunc() {
    return "hi"
}

superbowlWin = (array) => {
    let result = array.find(elem => elem.result === 'W');
    if (result) {
        return result.year;
    } else {
        return undefined;
    }
}