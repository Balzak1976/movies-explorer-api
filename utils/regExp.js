const passRegExp = /^[!-z]{8,30}$/;

const urlRegExp = /^https?:\/\/(www.)?[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*#?$/;

const nameRuRegExp = /[а-яёА-ЯЁ]+/;

const nameEnRegExp = /^[ -~]+$/;

module.exports = {
  passRegExp, urlRegExp, nameRuRegExp, nameEnRegExp,
};
