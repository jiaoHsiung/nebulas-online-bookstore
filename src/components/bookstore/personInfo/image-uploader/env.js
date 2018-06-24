
const domain = window.location.hostname.toLocaleLowerCase().split('.')[0];
const preview = '//www{env}.dianrong.com/events/page/preview/{pageId}';
export const ENV = (/-([a-z]+)$/.exec(domain) || [])[1] || '';

// domain{env}.hostname.xx
export function formatUrl(url = '') {
  return url.replace('{env}', ENV ? `-${ENV}` : '');
}

export function getPreviewUrl(pageId) {
  return formatUrl(preview.replace('{pageId}', pageId));
}
