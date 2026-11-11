import { expect, test } from "@playwright/test";
import { credits, hotspots, work } from "../src/content.js";

test("the room names its owner and lists everything in it", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Andell Jean-Jacques/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Jean-Jacques");
  await expect(page.getByText("Applied AI Engineer").first()).toBeVisible();
  await expect(page.locator(".hud nav button")).toHaveCount(hotspots.length);
  await expect(page.locator("canvas.room, .room canvas").first()).toBeVisible();
});

test("a chip opens that object's card, Escape closes it", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "3D configurator" }).click();
  await expect(page.locator(".card h2")).toHaveText(work[0].title);
  await expect(page.locator(".card")).toContainText(work[0].figure);
  await page.keyboard.press("Escape");
  await expect(page.locator(".card")).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Go into the computer" })).toBeVisible();
});

test("resume download link points at a real PDF", async ({ page, request }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Résumé" }).click();
  const href = await page.locator(".card a[download]").getAttribute("href");
  const res = await request.get(href);
  expect(res.status()).toBe(200);
  expect(res.headers()["content-type"]).toContain("pdf");
});

test("the computer runs commands, completes on Tab, and Escape leaves", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Go into the computer" }).click();
  const input = page.getByLabel("Terminal input");
  const out = page.locator(".term pre");
  await input.fill("help");
  await input.press("Enter");
  await expect(out).toContainText("Commands: help ls cat");
  await input.fill("cat ab");
  await input.press("Tab");
  await expect(input).toHaveValue("cat about.txt");
  await input.press("Enter");
  await expect(out).toContainText("Applied AI Engineer in Orlando");
  await input.fill("nope");
  await input.press("Enter");
  await expect(out).toContainText("nope: command not found");
  await input.fill("open brickout");
  await input.press("Enter");
  await expect(page.locator(".win-brickout canvas")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator(".os")).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("notes hold the full resume, and windows close", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Computer", exact: true }).click();
  await page.getByRole("button", { name: "Notes", exact: true }).click();
  await page.locator(".notes nav").getByRole("button", { name: "Experience" }).click();
  await expect(page.locator(".notes article")).toContainText("Everly Health");
  // CC-BY models must stay credited.
  await page.locator(".notes nav").getByRole("button", { name: "Credits" }).click();
  await expect(page.locator(".notes article a")).toHaveCount(credits.length);
  await page.getByRole("button", { name: "Close Notes" }).click();
  await expect(page.locator(".win-notes")).toHaveCount(0);
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
  await expect(page.locator(".room-fallback")).toBeVisible();
  await page.getByRole("button", { name: "About" }).click();
  await expect(page.locator(".card")).toContainText("Orlando");
});
