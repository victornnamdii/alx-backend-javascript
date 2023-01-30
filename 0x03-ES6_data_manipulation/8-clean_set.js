export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const clean = [];
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const subValue = value.slice(startString.length);

      if (subValue && subValue !== value) {
        clean.push(subValue);
      }
    }
  }
  return clean.join('-');
}
