# DataLife Web Portal

> A privacy-conscious consultation and audit console for the DataLife e-Health ecosystem.

[![License: MIT](https://img.shields.io/badge/License-MIT-0b7285.svg)](LICENSE)
[![Project status: scaffold](https://img.shields.io/badge/status-scaffold-f59f00.svg)](#project-status)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-2f9e44.svg)](CONTRIBUTING.md)

`datalife-web-portal` is the planned clinician-facing web client for
[DataLife e-Health](https://github.com/datalife-ehealth). It will provide narrow,
auditable workflows for patient-authorized access, emergency access, and ledger
verification without turning the browser into a second health-record system.

> [!IMPORTANT]
> This repository contains an early, runnable Next.js application shell. Clinical
> workflows are not available. It is research software, not a certified EHR or
> medical device, and must not be used for clinical care.

## Project status

**Application foundation.** The accessible Next.js shell, status page, and initial
quality checks are in place. Clinical integrations require an agreed API contract
and security review before implementation.

## Scope

### This repository owns

- the clinician consultation experience;
- patient OTP entry and validation UX;
- the reason-capture and confirmation UX for glass-break access;
- a read-only integrity view for the tamper-evident audit chain; and
- browser-side session hygiene, accessibility, and safe error handling.

### This repository does not own

- patient identity storage or the patient-controlled PII vault;
- OTP issuance, authorization policy, or physician verification;
- clinical payload persistence, cryptographic audit primitives, or API policy;
- diagnosis, treatment recommendations, billing, or hospital operations; or
- a replacement for the core service's authorization checks.

Those server-side responsibilities remain in
[`datalife-datalake-core`](https://github.com/datalife-ehealth/datalife-datalake-core).

## Intended architecture

```mermaid
flowchart LR
    Patient[Patient-controlled device] -->|OTP out of band| Clinician[Clinician]
    Clinician --> Browser[Web portal]
    Browser -->|validate grant / request access| Core[DataLife core API]
    Core -->|short-lived response| Browser
    Core --> Ledger[(Merkle audit chain)]
    Browser -->|verify only| LedgerAPI[Audit verification endpoint]
    LedgerAPI --> Ledger
```

The portal is an untrusted client. Every authorization decision must be repeated by
the core API. Access tokens and clinical responses must remain memory-only wherever
possible and must never be written to logs, analytics, URLs, or persistent browser
storage.

## Core API dependency

The current core reference implementation exposes:

| Workflow | Method and path | Portal responsibility |
|---|---|---|
| Validate a patient grant | `POST /api/v1/access/otp/validate` | Submit the token and opaque `subject_key`; handle `valid: false` without leaking details. |
| Request emergency access | `POST /api/v1/access/glass-break` | Require an explicit reason and show that the event remains `UNCONFIRMED`. |
| Verify audit integrity | `GET /api/v1/audit/verify` | Present verification state and chain height without claiming independent consensus. |

The core does **not** currently expose a clinical-payload retrieval contract. This
portal must not invent or bypass that boundary. A versioned, authorized read API
and its threat model must be agreed upstream before record-viewing UI is connected.

## Proposed technical direction

- TypeScript with React and Next.js
- TanStack Query for server state
- Tailwind CSS with an accessible component foundation
- schema-generated API types once the core OpenAPI contract is stabilized
- unit, accessibility, contract, and end-to-end tests in CI

The current app uses TypeScript, React, and Next.js. Additional dependencies should
be introduced with a focused use case and review. Changes to the trust boundary
require an RFC; implementation details can evolve through normal review.

## Security and privacy invariants

- Never collect or persist names, CPF/tax identifiers, phone numbers, or emergency
  contacts in this repository's services.
- Treat `subject_key`, OTPs, physician identifiers, access reasons, and clinical
  content as sensitive even when they are pseudonymous.
- Do not place sensitive values in telemetry, crash reports, query strings, or
  client-side persistence.
- Render all clinical content as hostile input; prevent script, Markdown, and file
  preview injection.
- Do not describe the audit chain as a blockchain. It is a deterministic,
  tamper-evident Merkle chain within one administrative boundary.

See [SECURITY.md](SECURITY.md) for private vulnerability reporting.

### Dependency audit status

The current npm audit reports five high-severity findings that all trace to the
unpatched `braces` dependency used by `eslint-config-next` through `fast-glob` and
`micromatch` ([GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)).
The registry currently publishes no `braces` release newer than `3.0.3`; npm's
suggested automated fix downgrades `eslint-config-next` to 14.x.
The project keeps its compatible Next.js 15 lint configuration and does not apply
an unverified override. `npm audit --omit=dev` reports no production dependency
vulnerabilities. Recheck the full audit when upstream publishes a patched release.

## Getting started

### Prerequisites

- Node.js 22
- npm (the version bundled with Node.js 22)

### Run locally

```bash
git clone https://github.com/datalife-ehealth/datalife-web-portal.git
cd datalife-web-portal
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser. No environment
variables are currently required; `.env.example` is provided as a template for
future local configuration.

### Application scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the local development server. |
| `npm run lint` | Run ESLint across the repository. |
| `npm run typecheck` | Check TypeScript types without emitting files. |
| `npm run test` | Run the Vitest suite once. |
| `npm run test:watch` | Run Vitest in watch mode. |
| `npm run build` | Create a production build. |
| `npm start` | Serve the production build locally. |

### Directory structure

```text
.github/workflows/  CI workflows
public/             Static assets
src/app/            Next.js routes, layout, fonts, and global styles
src/components/ui/  Reusable page and shell components
tests/              Unit and accessibility tests
```

Then read [CONTRIBUTING.md](CONTRIBUTING.md), review the boundary above, and propose
a small, testable slice. Use synthetic identifiers only in mocked workflows.

## Stewardship and contact

| Area | Channel |
|---|---|
| Repository steward and review | [@FinalSunFlower](https://github.com/FinalSunFlower) via GitHub issues or pull requests |
| Implementation lead | Open — use the organization contribution-task template to propose ownership |
| Architecture and core API | [`datalife-datalake-core`](https://github.com/datalife-ehealth/datalife-datalake-core/issues) |
| Security disclosure | Follow [SECURITY.md](SECURITY.md); do not open a public issue |
| General support | See [SUPPORT.md](SUPPORT.md) |

Please follow the organization-wide
[contribution guide](https://github.com/datalife-ehealth/.github/blob/main/CONTRIBUTING.md)
and [Code of Conduct](https://github.com/datalife-ehealth/.github/blob/main/CODE_OF_CONDUCT.md).

## License

Copyright (c) 2026 Luchang Jiang. Released under the [MIT License](LICENSE).
