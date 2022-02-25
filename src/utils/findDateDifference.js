export default function dateDifference(from, to) {
  const fromDate = new Date(from);
  const toDate = new Date(to);
  const difference = toDate.getTime() - fromDate.getTime();
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 30 * 12));

  if (years > 0 && months > 0) {
    const yearMessage = years === 1 ? `${years} year` : `${years} years`;
    const monthMessage = months === 1 ? `${months} month` : `${months} months`;
    const combinedMessage = `${yearMessage}  ${monthMessage}`;
    return combinedMessage;
  }

  if (years > 0) {
    const yearMessage = years === 1 ? `${years} year` : `${years} years`;
    return yearMessage;
  }

  if (months > 0) {
    const monthMessage = months === 1 ? `${months} month` : `${months} months`;
    return monthMessage;
  }

  if (days > 0) {
    const dayMessage = days === 1 ? `${days} month` : `${days} months`;
    return dayMessage;
  }
}
