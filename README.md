# formio-stats

> **The production library.** A TypeScript-first, MIT-licensed analytics layer for [form.io](https://formio.github.io/formio.js/) — enabling population-level analysis of form submissions directly in your application.

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com)
[![Jest](https://img.shields.io/badge/tested_with-Jest-C21325?style=flat-square&logo=jest&logoColor=white)](https://jestjs.io)
[![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)](https://github.com/seansqlifting29/formio-stats/blob/main/LICENSE)
[![formio.js](https://img.shields.io/badge/form.io-JS_SDK-blue?style=flat-square)](https://formio.github.io/formio.js/)

---

## Overview

`formio-stats` is an open-source TypeScript library that hooks into [form.io's JavaScript SDK](https://formio.github.io/formio.js/) to provide aggregated statistical analysis of form submissions.

form.io is a powerful tool for building, rendering, and collecting forms — used by [hundreds of thousands of developers](https://www.npmjs.com/package/formiojs). But it has one significant gap: **there is no way to analyse submissions as a population.** Every response must be reviewed individually.

`formio-stats` fills that gap.

---

## Why It Exists

Within **JustTrain** — a fitness coaching application using form.io's JS SDK — two needs emerged that form.io couldn't address natively:

**1. Population snapshots**
Give coaches an at-a-glance view of how their entire user base responded to a form. Rather than reading 1,000 submissions, get: *"82% of users are satisfied, 11% are neutral, 7% are dissatisfied."*

**2. Longitudinal tracking**
See how a tracked value changes over time across a population. If 1,000 users submit a weekly weight check-in, surface the relative change for each individual and the group trend — without exporting to a spreadsheet or third-party tool.

This replaces the need for services like SurveyMonkey when form.io is already handling your data collection.

---

## Installation

```bash
npm install formio-stats
```

---

## Usage

### Checkbox Distribution

Analyse the true/false split across all submissions for a given checkbox field:

```typescript
import { distribution } from 'formio-stats';

const result = distribution(formioSubmissions, 'userSatisfied');

console.log(result);
// { percentageOfTrue: 82, percentageOfFalse: 18 }
```

### Source

```typescript
export const distribution = function(formioSubmissions: any, checkBoxId: string) {
    var trueCount = 0;
    var falseCount = 0;
    for (var key in formioSubmissions) {
        for (var sub_key in formioSubmissions[key].data) {
            if (formioSubmissions[key].data[sub_key] === true && sub_key === checkBoxId) {
                trueCount++;
            }
            if (formioSubmissions[key].data[sub_key] === false && sub_key === checkBoxId) {
                falseCount++;
            }
        }
    }
    return {
        percentageOfTrue: (trueCount * 100) / (trueCount + falseCount),
        percentageOfFalse: (falseCount * 100) / (trueCount + falseCount)
    }
}
```

### Input Format

`formioSubmissions` is a standard form.io submissions object — the JSON array returned by the form.io JS SDK when fetching saved submissions:

```typescript
const formioSubmissions = {
  "submission_1": {
    data: {
      userSatisfied: true,
      weight: 74
    }
  },
  "submission_2": {
    data: {
      userSatisfied: false,
      weight: 81
    }
  }
  // ...
}
```

---

## API

### `distribution(formioSubmissions, checkBoxId)`

Iterates all submissions and returns the percentage distribution of `true` and `false` values for a given checkbox field.

| Parameter | Type | Description |
|---|---|---|
| `formioSubmissions` | `any` | form.io submissions JSON object |
| `checkBoxId` | `string` | The field key of the checkbox component to analyse |

**Returns:**

```typescript
{
  percentageOfTrue: number,   // % of submissions where field === true
  percentageOfFalse: number   // % of submissions where field === false
}
```

---

## Repository Structure

```
formio-stats/
├── src/
│   └── checkbox/          # Checkbox analysis functions
├── index.ts               # Library entry point
├── jest.config.js         # Jest configuration
├── tsconfig.json          # TypeScript configuration
├── package.json
├── .npmignore
├── .gitignore
└── LICENSE                # MIT
```

---

## Development

```bash
# Clone the repo
git clone https://github.com/seansqlifting29/formio-stats.git
cd formio-stats

# Install dependencies
npm install

# Run tests
npm test

# Build
npx tsc
```

---

## Testing

Tests are written with **Jest** and cover the core statistical functions across a variety of submission shapes and edge cases.

```bash
npm test
```

---

## Roadmap

- [x] Checkbox field distribution (`percentageOfTrue` / `percentageOfFalse`)
- [ ] Numeric field aggregation (mean, median, min, max)
- [ ] Longitudinal tracking (value change over time per user)
- [ ] Population trend analysis (relative change across N users)
- [ ] Select / radio field distribution
- [ ] UI visualisation layer (charts, dashboards)
- [ ] Single-page portal for no-code data upload and visualisation

---

## Related Repositories

| Repo | Role |
|---|---|
| [`formioResultsStatistics`](https://github.com/seansqlifting29/formioResultsStatistics) | Original research & prototype |
| [`formioResultsStatisticsNpm`](https://github.com/seansqlifting29/formioResultsStatisticsNpm) | npm packaging experiments |
| [`formio-stats`](https://github.com/seansqlifting29/formio-stats) | ← You are here — production library |

---

## License

[MIT](https://github.com/seansqlifting29/formio-stats/blob/main/LICENSE) — free to use, modify, and distribute.

---

## Author

**Sean Tyndale** — Creative Developer

[![Portfolio](https://img.shields.io/badge/Portfolio-seantyndale.com-informational?style=flat-square)](https://seantyndale.com)
[![GitHub](https://img.shields.io/badge/GitHub-seansqlifting29-181717?style=flat-square&logo=github)](https://github.com/seansqlifting29)

---

<div align="center">
  <sub>Built for JustTrain · Open sourced for the form.io community</sub>
</div>
