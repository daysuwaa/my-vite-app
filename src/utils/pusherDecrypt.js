import config from "config";

export function pusherDecrypt(input, type = "JSON") {
  const decryptionKey = config.X_ENV_AUTH;

  // Make it backwards compatible
  if (typeof input.Data !== "string") return input;

  const inputBytes = atob(input.Data)
    .split("")
    .map(function(c) {
      return c.charCodeAt(0);
    });
  const keyBytes = decryptionKey.split("").map(function(c) {
    return c.charCodeAt(0);
  });

  for (let i = 0; i < inputBytes.length; i++) {
    inputBytes[i] = inputBytes[i] ^ keyBytes[i % keyBytes.length];
  }

  const decrypted = String.fromCharCode.apply(null, inputBytes);

  if (type === "string") return decrypted;

  return JSON.parse(decrypted);
}
