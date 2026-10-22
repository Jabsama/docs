import { test, expect } from '@playwright/test'

const PAGE = '/docs/user_guides/ai_overview'

test.describe('AI Overview search guidance', () => {
  test('@scenario:ai-overview-web-search-explained web search names the composer, agents and both required services', async ({
    page,
  }) => {
    await page.goto(PAGE)
    const main = page.locator('main')
    await expect(main.getByRole('heading', { name: 'Searching', exact: true })).toBeVisible()
    await expect(main).toContainText('open the + palette in the message composer')
    await expect(main).toContainText('enable the Web Search capability in the Agent Builder')
    await expect(main).toContainText('needs both a search provider and a scraper')
  })

  test('@scenario:ai-overview-search-links-resolve the composer, missing-option and message search links reach their targets', async ({
    page,
  }) => {
    await page.goto(PAGE)
    const composer = page
      .locator('main')
      .getByRole('link', { name: 'message composer', exact: true })
    await expect(composer).toHaveAttribute('href', /\/docs\/features\/composer$/)

    const missing = page
      .locator('main')
      .getByRole('link', { name: 'Web Search option is not visible', exact: true })
    await expect(missing).toHaveAttribute(
      'href',
      /\/docs\/features\/web_search#web-search-option-is-not-visible$/,
    )
    await missing.click()
    await expect(page.locator('[id="web-search-option-is-not-visible"]')).toHaveCount(1)

    await page.goto(PAGE)
    const messageSearch = page
      .locator('main')
      .getByRole('link', { name: 'Message Search', exact: true })
    await expect(messageSearch).toHaveAttribute('href', /\/docs\/features\/search$/)
    await messageSearch.click()
    await expect(page.getByRole('heading', { level: 1, name: 'Message Search' })).toBeVisible()
  })

  test('@scenario:ai-overview-conversation-search-explained conversation search points to the sidebar and its Meilisearch condition', async ({
    page,
  }) => {
    await page.goto(PAGE)
    const main = page.locator('main')
    await expect(main).toContainText('Use the search box in the sidebar to find past messages')
    await expect(main).toContainText('It appears only when the admin has enabled Meilisearch')
  })
})
