module.exports = function reverse(n) {
    var arrReversed = [];
    var nArray = n.toString().split('');
    for (let index = nArray.length - 1; index >= 0; index--) {
      arrReversed.push(nArray[index]);
    }
    return parseInt(arrReversed.join(''));
  };
