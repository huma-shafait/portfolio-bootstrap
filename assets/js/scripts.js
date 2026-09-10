document.addEventListener("DOMContentLoaded", function () {
  // variable declaration
  let item;

  // selector
  item = document.getElementById("item");
  item.textContent = "Web Developer";

  // while loop
  let a = 0;
  while (a < 10) {
    console.log(a);
    a++;
  }

  //   for loop
  for (let i = 1; i <= 10; i++) {
    let output = i * 2;
    // console.log(2 +" * " + i + " = " + output);
    console.log(`2 x ${i} = ${output}`);
  }

  // forEach
  const fruits = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Orange",
    "Grapes",
    "Mango",
    "Pineapple",
    "Strawberry",
  ];

  fruits.forEach((fruit, i) => {
    console.log(`${i + 1}: ${fruit}`);
  });

  // ifelse
  let smallNum = 10;
  let largeNum = 100;

  if (smallNum < largeNum) {
    console.log(`${smallNum} is less than ${largeNum}`);
  } else if (smallNum > largeNum) {
    console.log(`${smallNum} is greater than ${largeNum}`);
  } else {
    console.log(`${smallNum} is equal to ${largeNum}`);
  }

  // Nested ifelse
  if (smallNum < 100) {
    if (smallNum > 50) {
      console.log(`${smallNum} is between 50 and 100`);
    } else {
      console.log(`${smallNum} is less than 50`);
    }
  }

  // switch statement
  switch (smallNum) {
    case 10:
      console.log(`Number is equal to 10`);
      break;
    case 100:
      console.log(`Number is equal to 100`);
      break;
    default:
      console.log(`Default case: ${smallNum} is not equal to 10 or 100`);
      break;
  }

  console.log("End of the script");
});
let body = document.querySelector("body");
let divcontainer = document.querySelector(".empty");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

divcontainer.innerHTML = `
  <h3 class="empty-heading">Dummy Heading</h3>
  <p class="empty-para">Dummy Paragraph</p>
`;

btn.addEventListener("click", () => {
  divcontainer.classList.add("new-cls");
});

btn2.addEventListener("click", () => {
  divcontainer.classList.remove("new-cls");
});

btn3.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
