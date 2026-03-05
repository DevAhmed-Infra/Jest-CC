function filterName(name = 'unknown') {
  if (name.includes(' ')) {
    name = name.trim();
  }
  if (name.length > 10) {
    name = name.substring(0, 10);
  }
  if (name.startsWith("_")) {
    name = name.substring(1);
  }
  return name;
}

module.exports = filterName;