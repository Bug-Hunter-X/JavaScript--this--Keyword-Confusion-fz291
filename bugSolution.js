function myFunc() {
  console.log(this);
}

// Explicitly bind this using bind
const boundMyFunc = myFunc.bind({name: "bound object"});

boundMyFunc();

const obj = {
  myFunc: myFunc,
};

obj.myFunc(); // this will refer to obj

// Using call or apply
const obj2 = {name: 'obj2'};
myFunc.call(obj2);
myFunc.apply(obj2); 
