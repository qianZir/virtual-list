export function parseQueryString() {
  const url = window.location.href;
  if (url.indexOf('?') === -1) {
    return {};
  }
  const search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);
  if (search === '') {
    return {};
  }
  const newSearch = search.split('&');
  const query = {};
  for (let i = 0; i < newSearch.length; i += 1) {
    const pair = newSearch[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}
