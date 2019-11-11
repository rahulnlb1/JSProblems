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

export const flatten_access = (object, acesss_string) => {
    const flattened_object = {};
    const flatten = (value, key = "") => {
        if (typeof value != "object" || value instanceof Date || Object.entries(value).length === 0) {
            flattened_object[key] = value;
        } else if (Array.isArray(value)) {
            Object.entries(value).forEach(([_index, _value]) => {
                flatten(_value, `${key}[${_index}]`)
            })
        } else {
            Object.entries(value).forEach(([_key, _value]) => {
                flatten(_value, key === "" ? _key : `${key}.${_key}`)
            })
        }
    }
    flatten(object);
    return flattened_object[acesss_string];
}