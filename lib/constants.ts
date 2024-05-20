export const PASSWORD_REGEX = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/
);

export const PASSWORD_REGEX_ERROR =
  "패스워드에는 최소 1자이상의 대문자, 소문자, 특수문자를 포함해야 합니다.";
export const PASSWORD_MINLENGTH = 4;
