import config from "src/config";

export function pusherEncrypt(input = "", type = "JSON") {
  const encryptionKey = config.X_ENV_AUTH || "";

  // Make it backwards compatible
  if (typeof input !== "string") {
    if (type === "string") {
      return input.toString();
    } else {
      return JSON.stringify(input);
    }
  }

  const inputBytes = input.split("").map(function (c) {
    return c.charCodeAt(0);
  });
  const keyBytes = encryptionKey.split("").map(function (c) {
    return c.charCodeAt(0);
  });

  for (let i = 0; i < inputBytes.length; i++) {
    inputBytes[i] = inputBytes[i] ^ keyBytes[i % keyBytes.length];
  }

  const encrypted = String.fromCharCode.apply(null, inputBytes);

  return btoa(encrypted);
}
