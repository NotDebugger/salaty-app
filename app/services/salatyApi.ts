export async function getPrayerData() {
  const date = new Date();
  const nowFormattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

  const response = await fetch(
    `https://api.aladhan.com/v1/timingsByCity/${nowFormattedDate}?city=dubai&country=dubai&method=5`,
  );
  return response.json();
}
