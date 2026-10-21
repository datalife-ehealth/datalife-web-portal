import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { expect, it } from "vitest";
import HomePage from "@/app/page";
import SiteShell from "@/components/ui/SiteShell";

expect.extend(toHaveNoViolations);

it("has no automatically detected accessibility violations", async () => {
  const { container } = render(<SiteShell><HomePage /></SiteShell>);

  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
