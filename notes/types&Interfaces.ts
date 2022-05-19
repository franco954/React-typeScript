

  // let name: string;
  let age: number;
  let isStudent: boolean;
  let hobbies: string[];
  let role: [number, string]

  interface animals {
    race: string,
    age?: number | string
  }

  interface dog extends animals {
    color: string
  }

  type Person = {
    name: string,
    age?: number
  }

  let person1: Person = {
    name: "piyush"
  }

  // establezco el type de cada pos del array
  let lotsPersons: Person[]


  // function, type or agumnets and what returns it?  
  let printName : (name:string) => never;
