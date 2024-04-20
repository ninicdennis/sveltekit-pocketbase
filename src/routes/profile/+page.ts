export async function load({ url }) {
  const tab = url.searchParams.get('tab');
  return { tab }
}