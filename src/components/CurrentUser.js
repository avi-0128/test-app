export const setCurrentUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const getCurrentUser = () =>
  JSON.parse(localStorage.getItem("currentUser"));

export const deleteCurrentUser = () => localStorage.removeItem("currentUser");
