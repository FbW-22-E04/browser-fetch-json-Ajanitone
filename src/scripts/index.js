// The following line makes sure your styles are included in the project. Don't remove this.
//import "../styles/main.scss";
// Import any additional modules you want to include below \/
import { recipeData } from "./data.js";

// \/ All of your javascript should go here \/

// Object.entries(parseData).forEach((entryCards) => {
//   const sections = [
//     document.querySelectorAll("#cakes"),
//     document.querySelectorAll("#biscuits"),
//     document.querySelectorAll("#bread"),
//   ];
//   entryCards[1].map((card) => {
//     sections.forEach((section) => {
//       if (card.type === section.id) {
//         let cardDetails = `<div class="card m-3" style="width: 18rem;">
//                <img src="${
//                  card.image
//                }" class="card-img-top" alt="Baked Goods" height="200rem">
//                <div class="card-body">
//                  <h4 class="card-title">${card.title}</h4>
//                  <h6>${card.author}<h6>
//                  <p class="border-top border-secondary pt-2">Ingredients: ${card.ingredients.join(
//                    ", "
//                  )}</p>
//                </div>
//              </div>`;
//         section.insertAdjacentHTML("afterbegin", cardDetails);
//       }
//     });
//   });
// });

// sectionCakes.forEach((el) => {
//   const img = document.createElement("img");
//   img.classList.add("#cake-img");
//   el.classList.add("card-img-top");
//   el.style.height = "18rem";
//   el.appendChild(img);
// });

// const image = document.querySelectorAll("cake-img");

// image.forEach((el, i) => {
//   el.setAttribute("src", `${parseData[i].img}`);
//   el.getElementsByClassName.width = "18rem";
// });

const sections = [
  document.querySelector("#cakes"),
  document.querySelector("#biscuits"),
  document.querySelector("#bread"),
];

let parseData = JSON.parse(recipeData);

let arrOfObject = Object.entries(parseData);

arrOfObject.forEach((entryCards) => {
  entryCards[1].map((card) => {
    sections.forEach((section) => {
      if (card.type === section.id) {
        let cardDetails = `<div class="card m-3" style="width: 18rem;">
            <img src="${
              card.image
            }" class="card-img-top" alt="Baked Goods" height="200rem">
            <div class="card-body">
              <h4 class="card-title">${card.title}</h4>
              <h6>${card.author}<h6>
              <p class="border-top border-secondary pt-2">Ingredients: ${card.ingredients.join(
                ", "
              )}</p>
            </div>
          </div>`;
        // section.insertAdjacentHTML("afterbegin", cardDetails);
        section.innerHTML += cardDetails;
      }
    });
  });
});
