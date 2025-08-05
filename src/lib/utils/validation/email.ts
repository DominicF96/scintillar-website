export const validateEmail = (email: string): boolean => {
  // Source https://stackoverflow.com/a/201378/12691545
  const emailRe =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return !!email && emailRe.test(email);
};
