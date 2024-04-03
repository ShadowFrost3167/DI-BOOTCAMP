//exercise

let doubleString = [`1,2,3,4`, `3,4,5,6`];

//want to make a function that returns array [3,4]

function sameDig(firstStr, scndStr){
    const arr1 = firstStr.split(`,`);
    const arr2 = scndStr.split(`,`);

    const duplicateDig = arr1.filter(letter => arr2.includes(letter));

    return duplicateDig;
}

console.log(sameDig(doubleString[0], doubleString[1]));

//JSON

let object = [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }]

//   let arr = JSON.parse(object);
//   console.log(arr);
//   console.log(object);

  let users = [
    {id: 1, username: `aaa`, password: `muchimi`},
    {id: 2, username: `bbb`, password: `abc`},
    {id: 3, username: `ccc`, password: `sonic2`}
  ]

const replacer = (key, value) =>{
    if(key===`password`){
        return null
    }return value;
}

  console.log(JSON.stringify(users, replacer, 2));