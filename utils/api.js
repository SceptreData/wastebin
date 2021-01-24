export function replaceDates(key, value) {
  if (typeof value === "Date") {
    console.log(replacing);
    return value.toString();
  }

  return value;
}
