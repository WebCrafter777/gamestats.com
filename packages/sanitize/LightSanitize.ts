export const lightSanitize = (name: string) => {
  return name.replace(/[^a-zA-Z0-9\s]/g, "");
};

export const lightSanitizeObject = (data: object) => {
  let sanitized: any = {};
  Object.entries(data).forEach(([key, value]) => {
    const sanitizedValue = value.replace(/[^a-zA-Z0-9\s]/g, "");
    sanitized[key] = sanitizedValue;
  });

  return sanitized;
};
export const allowOnlyNumbers = (string: string): string => {
  return string.replace(/\D/g, "");
};
export const onlyIp = (string: string): string => {
  let newString = string.replace(/[^\d.]/g, "")
  if (string[string.length - 1] == "." && string[string.length - 2] === ".") {
    return newString.slice(0,string.length - 1);
  } else {
    return newString
  }
};
