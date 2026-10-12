import test from 'node:test';
import assert from 'node:assert/strict';
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3003';
const response = await fetch(base);
const html = (await response.text()).replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');

test('Red Hot opens at the deployment root with its own metadata', () => {
  assert.equal(response.status, 200);
  assert.match(html, /<title>Red Hot/);
  assert.match(html, /Fogo na chapa/);
  assert.doesNotMatch(html, /Me Poupa|saladao/i);
});
test('all 17 menu products and WhatsApp ordering survive packaging', () => {
  assert.equal((html.match(/<article\b/g) || []).length, 17);
  assert.match(html, /href="https:\/\/wa.me\/message\/47EH53KWH5EII1"/);
  assert.doesNotMatch(html, /href="https?:\/\/[^"]*ifood/);
  assert.match(html, /Fazer pedido pelo WhatsApp/);
});
test('every rendered local image and video is served by this root', async () => {
  const urls = [...html.matchAll(/(?:src|poster)="([^"]+)"/g)].map(m => m[1].replaceAll('&amp;', '&'));
  const assets = new Set(urls.filter(url => url.startsWith('/')).map(url => {
    const parsed = new URL(url, base);
    return parsed.pathname === '/_next/image' ? parsed.searchParams.get('url') : url;
  }));
  assert.ok(assets.size >= 12);
  for (const asset of assets) {
    const result = await fetch(new URL(asset, base), { method: 'HEAD' });
    assert.equal(result.status, 200, asset);
  }
});
test('the standalone deployment does not expose the Bigus demo', async () => {
  assert.equal((await fetch(base + '/conceito/bigus')).status, 404);
});
