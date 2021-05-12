type PalindromType = {
  text: string;
  feedback?: boolean;
};

const palindrom = ({ text, feedback }: PalindromType) => {
  /** fast way */
  // const textReverse = text
  //   .split("") // make it to array
  //   .reverse() // reverse array
  //   .join(""); // join array back to string;

  /** manual way  */
  const textArray = text.split("");
  let reversedTextArray = [];

  for (let i = textArray.length; i >= 0; i--) {
    reversedTextArray.push(textArray[i - 1]);
  }

  const reversedText = reversedTextArray.join("");

  /**
   *  either return boolean or feedback if feedback is true
   *  default return booelan
   */
  if (feedback)
    return text === reversedText
      ? `${text} is Palindrom`
      : `${text} is not Palindrom`;

  return text === reversedText;
};

export default palindrom;
