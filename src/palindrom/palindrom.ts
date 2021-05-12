/**
 * @author Novanda Ahsan
 * @param text string that need to is-palindrom
 * @param feedback boolean - return boolean if true - default false
 * @returns feedback | boolean
 */
const palindrom = (text: string, feedback: boolean = false) => {
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
   * return either use feedback or boolean if feedback true
   */
  if (feedback)
    return text === reversedText
      ? `${text} is Palindrom`
      : `${text} is not Palindrom`;

  return text === reversedText;
};

export default palindrom;
