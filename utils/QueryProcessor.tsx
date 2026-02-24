export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "amtom";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "amtom";
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g)
    if (numbers == null || numbers.length < 2) {
      return "Error";
    }
    const firstNumber = Number(numbers[0]);
    const secondNumber = Number(numbers[1]);
    return String(firstNumber + secondNumber);
    }
  
  if (query.toLowerCase().includes("multiplied")) {
    const numbers = query.match(/\d+/g)
    if (numbers == null || numbers.length < 2) {
      return "Error";
    }
    const firstNumber = Number(numbers[0]);
    const secondNumber = Number(numbers[1]);
    return String(firstNumber * secondNumber);
  }

  return "";
}
