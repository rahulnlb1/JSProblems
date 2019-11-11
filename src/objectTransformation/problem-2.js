/**
  
  [{
    id: 1,
    name: John
  }, {
    id: 2,
    name: Doe  
  }, ...]

  ---->

    {
    1: John,
    2: Doe,
    3: Superman  
  }

  
*/

export const objectTransform = arr => arr.reduce((result, {
    id,
    name
}) => {
    result[id] = name;
    return result
}, {});