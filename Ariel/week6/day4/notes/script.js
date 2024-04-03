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


  /** JSON */

let posts = `[
    {
      "userId": 4,
      "id": 31,
      "title": "ullam ut quidem id aut vel consequuntur",
      "body": "debitis eius sed quibusdam non quis consectetur vitae impedit ut qui consequatur sed aut in quidem sit nostrum et maiores adipisci atque quaerat voluptatem adipisci repudiandae"
    }
  ]`;
  
  let arr = JSON.parse(posts);
  // console.log(arr);
  // console.log(posts);
  
  let post = [
    {
      userId: 4,
      id: 31,
      title: "ullam ut quidem id aut vel consequuntur",
      body: "debitis eius sed quibusdam non quis consectetur vitae impedit ut qui consequatur sed aut in quidem sit nostrum et maiores adipisci atque quaerat voluptatem adipisci repudiandae",
    },
  ];
  
  // console.log(JSON.stringify(arr,null,2));
  
  let users = [
    { id: 1, username: "aaa", password: "123456" },
    { id: 2, username: "bbb", password: "ab45tf" },
    { id: 3, username: "ccc", password: "1q2w3e" },
  ];
  
  const whatever = (key, value) => {
    if(key === 'password') return undefined
    if (value === "bbb") {
      return 'xxxx';
    }
    if(key === 'id') {
      return 111
    }
    return value;
  };
  
  console.log(JSON.stringify(users, whatever, 2));
  /**
   * findIntersection function return an array that
   * contain the numbers exist in both strings from the array.
   * ["1,2,5,6,7", "2,5,7,8,15"] => [2,5,7]
   */
  
  function findIntersection(arr) {
    let arr1 = arr[0].split(",");
    let arr2 = arr[1].split(",");
    console.log(arr1, arr2);
    let ret = arr1.filter(
  
      (item) => {
        return arr2.includes(item);
    }
  
    );
    return ret;
  }
  
  console.log(findIntersection(["1,2,5,6,7", "2,5,7,8,15"]));
  
  function x(a, b) {
    return a + b;
  }
  let sum = x(1,6);
  console.log(sum);
  
  class Video {
    // a =title b=uploader c=time
    constructor(a, b, c) {
      this.title = a;
      this.uploader = b;
      this.time = c;
    }
    watch() {
      return `${this.uploader} watched all ${this.time} of ${this.title}!`;
    }
  }
  
  let video1 = new Video("aaa", "bbb", 5);
  let watch1 = video1.watch();
  console.log(video1);
  
  let video2 = new Video("cccc", "ddd", 5555);
  let watch2 = video2.watch();
  console.log(video2);
  
  let arr5videos = [
    { title: "aaa", uploader: "bbb", time: 8 },
    { title: "ccc", uploader: "ddd", time: 88 },
    { title: "eee", uploader: "fff", time: 888 },
    { title: "sss", uploader: "nnn", time: 5 },
    { title: "uuu", uploader: "ppp", time: 65 },
  ];
  
  let arr = [];
  arr5videos.forEach((item) => {
    let video = new Video(item.title, item.uploader, item.time);
    arr.push(video);
  });
  
  console.log(arr);
  
  arr.forEach(item => {
    console.log(item.watch());
  })