const palindrom = (text, feedback = false) => {
  const textReverse = text.split("").reverse().join("");

  if (feedback)
    return text === textReverse
      ? `${text} is Palindrom`
      : `${text} is not palindrom`;

  return text === textReverse ? true : false;
};

export default palindrom