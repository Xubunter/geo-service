function normalizeQ (str) {
  if(str == null) {
    return ''
  };
  let result = str.trim().replace(/\s+/g, ' ');
  return result;
}


module.exports = {
  normalizeQ,
};
