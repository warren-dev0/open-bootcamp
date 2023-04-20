let data = {
  name: "Kratos",
  latName: "Tarantino",
  age: "400",
  height: 6.3,
  areDev: "yes",
};

let age = data.age;

let list = [
{
      name: "Julia",
      latName: "Tarantino",
      age: "400",
      height: 6.3,
      areDev: "yes",
    },
{
        name: "Pedro",
        latName: "Tarantino",
        age: "200",
        height: 6.3,
        areDev: "yes",
      }
];

list.push(data)

console.log(list);

list.pop(data)

console.log(list);

let newList = (list.sort((a, b) => a.age + b.age));

console.log(newList);