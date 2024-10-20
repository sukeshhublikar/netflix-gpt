export const validateLoginData = (email:string, password:string) => {
  const emailPattern =
    /[A-Za-z0-9\\._%+\\-]+@[A-Za-z0-9.\\-]+\.[A-Za-z]{2,}/.test(email);
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!emailPattern) {
    return "Enter valid Email";
  }
  if (!passwordPattern) {
    return "Enter valid Password";
  }
  return null;
};

export const validateSignUpData = (name:string, email:string, password:string) => {
  const emailPattern =
    /[A-Za-z0-9\\._%+\\-]+@[A-Za-z0-9.\\-]+\.[A-Za-z]{2,}/.test(email);
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  const fullName = /^[A-Za-z\\s]+$/.test(name);
  if (!fullName) {
    return "Enter valid Name";
  }

  if (!emailPattern) {
    return "Enter valid Email";
  }
  if (!passwordPattern) {
    return "Enter valid Password";
  }
  return null;
};
