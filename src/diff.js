import _ from 'lodash';

const CompareResult = {
  onlyLeft: 1,
  onlyRight: 2,
  equal: 3,
  different: 4,
  empty: 5,
};

const compareObjectsKey = (key, obj1, obj2) => {
  if (_.has(obj1, key) && !_.has(obj2, key)) {
    return CompareResult.onlyLeft;
  }

  if (!_.has(obj1, key) && _.has(obj2, key)) {
    return CompareResult.onlyRight;
  }

  if (!_.has(obj1, key) && !_.has(obj2, key)) {
    return CompareResult.empty;
  }

  if (obj1[key] === obj2[key]) {
    return CompareResult.equal;
  }

  return CompareResult.different;
};

const getKeyStr = (key, obj, indent = '    ') => `${indent}${key}: ${obj[key]}`;

const genDiff = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  const keys = _.union(obj1Keys, obj2Keys).sort();

  const result = [];
  keys.forEach((key) => {
    const compareResult = compareObjectsKey(key, obj1, obj2);
    switch (compareResult) {
      case CompareResult.equal:
        result.push(getKeyStr(key, obj1));
        break;

      case CompareResult.onlyLeft:
        result.push(getKeyStr(key, obj1, '  - '));
        break;

      case CompareResult.onlyRight:
        result.push(getKeyStr(key, obj2, '  + '));
        break;

      case CompareResult.different:
        result.push(getKeyStr(key, obj1, '  - '));
        result.push(getKeyStr(key, obj2, '  + '));
        break;

      default:
        throw Error('Error');
    }
  });

  return ['{', ...result, '}'].join('\n');
};

export default genDiff;
