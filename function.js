window.function = function(string) {
  const value = string.value;

  // Function to convert string to camelCase
  function toCamelCase(str) {
    return str
      .replace(/[^a-zA-Z0-9 ]/g, ' ') // Replace special characters with space
      .split(' ') // Split string by space
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');
  }

  // Function to generate a random 5-number sequence
  function getRandomNumberSequence() {
    return Math.floor(Math.random() * 100000).toString().padStart(5, '0');
  }

  // Check if the input is only numbers
  const isNumeric = /^\d+$/.test(value);

  // Transform the string to camelCase
  let transformedString = toCamelCase(value);

  // Append random 5-number sequence if not numeric
  if (!isNumeric) {
    transformedString += getRandomNumberSequence();
  }

  return transformedString;
}
