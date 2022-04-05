export const checkInputDataPhoneNumber = (reduxStateData, newUserData) => {
  let result = "false";
  if (!reduxStateData) return "false";
  reduxStateData.forEach((userValue) => {
    if (userValue.phoneNumber === newUserData.phoneNumber) result = "true";
  });
  return result;
};

export const checkInputDataPassword = (reduxStateData, newUserData) => {
  let result = "false";
  reduxStateData.forEach((userValue) => {
    if (userValue.password === newUserData.password) result = "true";
  });
  return result;
};
