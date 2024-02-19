export function formatDate(dateStr: string | null): string {
  if (dateStr === null) return "Present";

  const date = new Date(dateStr);
  // Specify the locale and options to get the desired format
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };
  return date.toLocaleString("en-US", options);
}
export function calculateYearMonthDifference(
  startDateStr: string,
  endDateStr: string
): string {
  if (endDateStr === null) return "";
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  // Calculate the difference in years and months
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  // Adjust years and months for the case where end month is less than start month
  if (months < 0) {
    years--;
    months += 12; // Add 12 months to the negative month difference
  }

  // Format the result
  let result = "";
  if (years > 0) {
    result += `${years} year${years > 1 ? "s" : ""} `;
  }
  if (months > 0) {
    result += `${months} month${months > 1 ? "s" : ""}`;
  }

  return result.trim();
}
