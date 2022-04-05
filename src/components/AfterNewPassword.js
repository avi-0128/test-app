import { getCurrentUser } from "./CurrentUser";

const currentUser = getCurrentUser();

export const changePassword = (reduxState) => {
  let newUserState = [...reduxState];
  let index = -1;
  for (let i = 1; i <= newUserState.length; i++) {
    if (newUserState[i].phoneNumber === currentUser.phoneNumber) {
      index = i;

      break;
    }
  }
  newUserState[index] = currentUser;
  console.log(newUserState);
  return newUserState;
};
