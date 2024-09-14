// // reducer.js
// import { Type } from "./action.type";


// export const initialState = {
//   basket: [],
// };

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case Type.ADD_TO_BASKET:
//       const existingItem = state.basket.find(
//         (item) => item.id === action.item.id
//       );

//       if (!existingItem) {
//         return {
//           ...state,
//           basket: [...state.basket, { ...action.item, amount: 1 }],
//         };
//       } else {
//         const updatedBasket = state.basket.map((item) =>
//           item.id === action.item.id
//             ? { ...item, amount: item.amount + 1 }
//             : item
//         );

//         return {
//           ...state,
//           basket: updatedBasket,
//         };
//       }
//     case Type.REMOVE_FROM_BASKET:
//       const index = state.basket.findIndex(item => item.id === action.id);
//       let newBasket = [...state.basket];

//       if (index >= 0) {
//         if (newBasket[index].amount > 1) {
//           newBasket[index] = { ...newBasket[index], amount: newBasket[index].amount - 1 };
//         } else {
//           newBasket.splice(index, 1);
//         }
//       }
//       return {
//         ...state,
//         basket: newBasket
//       };
//     default:
//       return state;
//   }
// };

// *****************************************************************

import { Type } from "./action.type";

export const initialState = {
  basket: [],
};

// Helper function to add or update item in the basket
const addItemToBasket = (basket, item) => {
  const existingItem = basket.find((basketItem) => basketItem.id === item.id);

  if (!existingItem) {
    return [...basket, { ...item, amount: 1 }];
  }

  return basket.map((basketItem) =>
    basketItem.id === item.id
      ? { ...basketItem, amount: basketItem.amount + 1 }
      : basketItem
  );
};

// Helper function to remove item from the basket
const removeItemFromBasket = (basket, itemId) => {
  const index = basket.findIndex((item) => item.id === itemId);
  if (index < 0) return basket;

  const updatedBasket = [...basket];

  if (updatedBasket[index].amount > 1) {
    updatedBasket[index] = {
      ...updatedBasket[index],
      amount: updatedBasket[index].amount - 1,
    };
  } else {
    updatedBasket.splice(index, 1);
  }

  return updatedBasket;
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      return {
        ...state,
        basket: addItemToBasket(state.basket, action.item),
      };

    case Type.REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: removeItemFromBasket(state.basket, action.id),
      };

    default:
      // Return current state if action type is not recognized
      return state;
  }
};
