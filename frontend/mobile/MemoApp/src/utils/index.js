import { format } from "date-fns";

export function dateToString(date) {
  if (!date) {
    return "";
  }
  return format(date, "yyyy年M月d日 HH時mm分");
}

export function translateErrors(code) {
  const error = { title: "Error", description: "Try again later" };
  switch (code) {
    case "auth/invalid-email":
      error.description = "Invalid email";
      break;
    case "auth/user-disabled":
      error.description = "Disabled user";
      break;
    case "auth/user-not-found":
      error.description = "User ot found";
      break;
    case "auth/wrong-password":
      error.description = "Wrong password";
      break;
    case "auth/email-already-in-use":
      error.description = "Email already in use";
      break;
    case "auth/operation-not-allowed":
      error.description = "Operation not allowed";
      break;
    case "auth/wreal-password":
      error.description = "Wreak password";
      break;
    default:
  }
  return ferro;
}
