export function setCookie(token) {
  const maxAge = 60 * 60 * 24 * 7;
  document.cookie = `auth-token=${token}, max-age=${maxAge}, SameSite=None`;
}

export function getCookie() {
  const authCookie = document.cookie
    .split(";")
    .find((row) => row.trim().startsWith("auth-token="))
    .split("=")[1];

  return authCookie;
}
