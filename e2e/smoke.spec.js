import { expect, test } from "@playwright/test";
import { manifest, work } from "../src/content.js";

test("page renders the resume content", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Andell Jean-Jacques/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Jean-Jacques");
  await expect(page.getByText("Forward Deployed Engineer").first()).toBeVisible();
  await expect(page.locator(".crate")).toHaveCount(work.length);
  await expect(page.locator("#manifest tbody tr")).toHaveCount(manifest.length);
});

test("resume download link points at a real PDF", async ({ page, request }) => {
  await page.goto("/");
  const href = await page.locator(".hero-actions a[download]").getAttribute("href");
  const res = await request.get(href);
  expect(res.status()).toBe(200);
  expect(res.headers()["content-type"]).toContain("pdf");
});

test("picking a variety retints the page accent", async ({ page }) => {
  await page.goto("/");
  const accent = () => page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue("--accent").trim());
  await page.locator("label.variety", { hasText: "Key Lime" }).click();
  await expect.poll(accent).toBe("#a9d05a");
  await expect(page.locator('input[value="lime"]')).toBeChecked();
});

// Regression: the unfurl animation's end state used to clip off the swallowtail ends.
test("ribbon tails stay visible after the unfurl", async ({ page }) => {
  await page.goto("/");
  const ribbon = page.locator(".ribbon");
  await expect.poll(() => ribbon.evaluate((el) => getComputedStyle(el).clipPath), { timeout: 3000 }).toBe("none");
});

// Regression: a WebGL failure used to blank the whole page.
test("page survives without WebGL", async ({ page }) => {
  await page.addInitScript(() => {
    const real = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...rest) {
      return /webgl/.test(type) ? null : real.call(this, type, ...rest);
    };
  });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator(".fruit-fallback")).toBeVisible();
  await expect(page.locator("#contact")).toBeAttached();
});
