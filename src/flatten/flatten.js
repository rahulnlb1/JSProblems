import {
  access
} from "fs";

/**
  
  {  
    a: {
    
      b: {
      
        c: {
        
          d: [{
          
            e: "Hello"
          }]
        }
      },
      
      f: {
        fg: {
           gg: [{
           
               abc: {
                 some: "Value"
               }
           }] 
        }
      }
    }
  }


  flatten_access(input, "a.b.c.d[0].e");
*/

export const flatten_access = (object, key) => {

  const flattenedObject = {}

  const flatten = (_object, string = "") => {

    if (typeof _object != "object" || _object instanceof Date || Object.entries(_object).length === 0)
      flattenedObject[string] = _object;
    else {

      for (const [_key, _value] of Object.entries(_object)) {

        let stringToForward = "";

        if (Array.isArray(_object)) {

          stringToForward = `${string}[${_key}]`;

        } else {

          stringToForward = string === "" ? _key : `${string}.${_key}`

        }

        flatten(_value, stringToForward);

      }

    }
  }

  flatten(object);
  return flattenedObject[key]

}