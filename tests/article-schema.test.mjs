import assert from "node:assert/strict";
import test from "node:test";
import {
  articleCanonicalUrl,
  articleTemplateFixture,
  getPublishedArticles,
  validateArticle,
} from "../app/lib/articles.ts";

test("production-like article fixture satisfies the editorial contract", () => {
  assert.deepEqual(validateArticle(articleTemplateFixture), []);
  assert.equal(
    articleCanonicalUrl(articleTemplateFixture),
    "https://fourthturning.capital/insights/editorial-system-validation-fixture",
  );
});

test("draft fixtures never enter public discovery surfaces", () => {
  assert.equal(articleTemplateFixture.status, "draft");
  assert.equal(getPublishedArticles().some((article) => article.slug === articleTemplateFixture.slug), false);
});
