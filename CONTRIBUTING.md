# Contributing to DataLife Web Portal

Thank you for helping build a safer clinical web experience. The organization-wide
[contribution rules](https://github.com/datalife-ehealth/.github/blob/main/CONTRIBUTING.md)
apply here; this file adds portal-specific expectations.

## Before coding

1. Search existing issues and pull requests.
2. Open or claim a focused issue before significant implementation work.
3. Use an RFC for trust-boundary changes, new services, framework changes, or a new
   clinical workflow.
4. Use synthetic identifiers and records in every fixture, screenshot, and demo.

## Definition of done

A portal change should include the tests appropriate to its risk:

- unit tests for application logic;
- API contract tests for core integrations;
- keyboard and automated accessibility checks for UI changes;
- end-to-end tests for authorization and glass-break flows; and
- evidence that secrets and sensitive values are absent from logs and storage.

Never weaken server authorization to make a client workflow pass. Do not submit
real patient data, credentials, generated build output, or screenshots containing
sensitive information.

## Pull requests

Keep one concern per pull request, link its issue or RFC, and complete the privacy
and test sections in the template. Approval from the repository steward is required.
Use `feat/`, `fix/`, or `docs/` branches from `main`.
