/**

  {
    1: John,
    2: Doe,
    3: Superman  
  }
  
  ---->
  
  [{
    id: 1,
    name: John
  }, {
    id: 2,
    name: Doe  
  }, ...]
  
*/

export const objectTransform = obj => {
    return Object.entries(obj).reduce((result, [id, name]) => [...result, {
        ["id"]: id,
        ["name"]: name
    }], [])
}