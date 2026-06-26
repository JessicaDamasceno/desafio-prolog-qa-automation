import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { FormPage } from '../pages/FormPage';
import { DetailsPage } from '../pages/DetailsPage';

type Pages = {
  listPage: HomePage;
  formPage: FormPage;
  detailsPage: DetailsPage;
};

export const test = base.extend<Pages>({
  listPage: async ({ page }, use) => { await use(new HomePage(page)); },
  formPage: async ({ page }, use) => { await use(new FormPage(page)); },
  detailsPage: async ({ page }, use) => { await use(new DetailsPage(page)); },
});

export { expect } from '@playwright/test';
