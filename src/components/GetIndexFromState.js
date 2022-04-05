export const GetIndexFromState = (reduxData, userInfo) => {
  let index = {};
  for (let i = 0; i < reduxData.length; i++) {
    if (reduxData[i].phoneNumber === userInfo.phoneNumber) {
      index = reduxData[i];
      break;
    }
  }
  return index;
};
