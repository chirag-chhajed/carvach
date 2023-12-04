export function truncateText(text: string, length: number) {
  // Write your code here
  if (text.length > length) {
    return text.substring(0, length) + "...";
  } else {
    return text;
  }
}
