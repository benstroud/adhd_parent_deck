const { test } = require("node:test");
const assert = require("node:assert");
const path = require("node:path");

const REPO = path.resolve(__dirname, "..");
const { DECK } = require(path.join(REPO, "content.js"));
const { toText } = require(path.join(REPO, "deck.js"));

test("deck has 21 slides with unique ids", () => {
  assert.strictEqual(DECK.slides.length, 21);
  const ids = DECK.slides.map((s) => s.id);
  assert.strictEqual(new Set(ids).size, ids.length);
});

test("every slide has title and non-empty body", () => {
  DECK.slides.forEach((s) => {
    assert.ok(s.title, `slide missing title: ${s.id}`);
    assert.ok(Array.isArray(s.body) && s.body.length > 0, `slide missing body: ${s.id}`);
  });
});

test("every non-placeholder slide carries a verbatim quote with a citation", () => {
  DECK.slides.forEach((s) => {
    if (s.placeholder) return;
    assert.ok(s.quote, `slide missing quote: ${s.id}`);
    assert.ok(s.cite, `slide missing cite: ${s.id}`);
    assert.ok(s.cite.url && s.cite.url.startsWith("https://www.youtube.com/watch?"), `bad cite url: ${s.id}`);
    assert.ok(s.cite.talk, `slide missing cite.talk: ${s.id}`);
    assert.ok(s.cite.ts, `slide missing cite.ts: ${s.id}`);
  });
});

test("no duplicate slide titles", () => {
  const seen = {};
  DECK.slides.forEach((s) => {
    assert.ok(!seen[s.title], `duplicate title: ${s.title}`);
    seen[s.title] = 1;
  });
});

test("title slide is first; one placeholder slide (takeaways)", () => {
  assert.strictEqual(DECK.slides[0].id, "title");
  const ph = DECK.slides.filter((s) => s.placeholder);
  assert.deepStrictEqual(ph.map((s) => s.id), ["takeaways"]);
});

test("every quote cites the correct talk id by URL", () => {
  DECK.slides.forEach((s) => {
    if (!s.cite) return;
    const url = new URL(s.cite.url);
    const v = url.searchParams.get("v");
    if (s.cite.talk.includes("2012")) {
      assert.strictEqual(v, "SCAGc-rkIfo");
    } else {
      assert.strictEqual(v, "52wQuMSUAkY");
    }
  });
});

test("toText flattens nested nodes and collapses whitespace", () => {
  const node = {
    childNodes: [
      { nodeType: 3, textContent: " hello " },
      { nodeType: 1, childNodes: [{ nodeType: 3, textContent: "   world" }] },
    ],
  };
  assert.strictEqual(toText(node), "hello world");
});
