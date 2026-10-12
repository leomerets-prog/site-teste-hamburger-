import test from 'node:test';
import assert from 'node:assert/strict';

// Run against the real, freshly built preview:
// node --test --test-isolation=none tests/redhot-layout.test.mjs
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3002';
const response = await fetch(`${base}/conceito/red-hot`);
assert.equal(response.status, 200);
const html = await response.text();
const rendered = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');

test('the burger animation is encountered before the menu', () => {
  assert.ok(rendered.indexOf('id="videos"') > rendered.indexOf('id="inicio"'));
  assert.ok(rendered.indexOf('id="videos"') < rendered.indexOf('id="cardapio"'));
});

const groups = [
  ['burgers', ['Yankee Burger', 'Smash Bacon', 'Smash Salada', 'Indians', 'BLT']],
  ['hot-dogs', ['Red Socks Hot Dog']],
  ['sanduiches', ['Orleans', 'Potland', 'Chicken Pesto']],
];
for (const [id, names] of groups) {
  test(`visitors can find exactly the correct dishes in ${id}`, () => {
    const start = rendered.indexOf(`id="${id}"`);
    assert.notEqual(start, -1, `Missing category ${id}`);
    const section = rendered.slice(start, rendered.indexOf('</section>', start));
    const actual = [...section.matchAll(/<h4[^>]*>(.*?)<\/h4>/g)].map(m => m[1]);
    assert.deepEqual(actual, names);
    assert.ok(rendered.includes(`href="#${id}"`), 'Category navigation reaches its section');
  });
}

test('all 17 dishes remain unique and the approved media are preserved', () => {
  assert.equal((rendered.match(/<article\b/g) || []).length, 17);
  assert.ok(rendered.includes('/conceitos/red-hot/hero-montagem-v2.mp4'));
  assert.ok(rendered.includes('/conceitos/red-hot/transicao-burgers.mp4'));
  assert.ok(rendered.includes('fachada.webp'));
});

test('eight supplied photos have prices and ordering links before the expandable menu', () => {
  const featured = rendered.slice(rendered.indexOf('id="vitrine"'), rendered.indexOf('<details'));
  assert.equal((featured.match(/<article\b/g) || []).length, 8);
  for (const name of ['Hawaii Burger', 'Texas Burger', 'Dodgers Burger', 'Tiger Burger', 'BLT Hot Dog', 'Yankee Hot Dog', 'Astros Dog', 'Milkshake de paçoca 440 ml']) {
    assert.ok(featured.includes(name), name);
  }
  assert.equal((featured.match(/Pedir pelo WhatsApp/g) || []).length, 8);
  assert.ok(featured.includes('R$ 25,90'));
  assert.ok(rendered.includes('Ver cardápio completo'));
  assert.ok(!/<details[^>]*\bopen\b/.test(rendered));
});

test('Red Hot ordering uses WhatsApp and includes an accessible floating contact link', () => {
  assert.ok(!/href="https?:\/\/[^"]*ifood|pelo iFood|no iFood/i.test(rendered));
  const links = [...rendered.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>/g)];
  assert.ok(links.filter(m => m[1] === 'https://wa.me/message/47EH53KWH5EII1').length >= 13);
  assert.ok(rendered.includes('aria-label="Fazer pedido pelo WhatsApp"'));
});

test('Bigus keeps its existing menu and section order', async () => {
  const bigus = (await (await fetch(`${base}/conceito/bigus`)).text()).replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
  assert.ok(bigus.indexOf('id="cardapio"') < bigus.indexOf('id="videos"'));
  assert.ok(!bigus.includes('id="burgers"'));
  assert.equal((bigus.match(/<article\b/g) || []).length, 3);
});
