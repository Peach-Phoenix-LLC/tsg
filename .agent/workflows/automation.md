---
description: automated-maintenance-and-testing
---

# Autonomous Maintenance & Testing Workflow

This workflow defines how agentic systems operate concurrently to maintain the tsgabrielle® platform.

## 1. Daily Verification Cycle

Agents should trigger a verification cycle every 24 hours or upon significant content updates.

- **Action**: Run `npx playwright test`.
- **Verification**: Ensure all core flows (Checkout, Admin Login, SEO) are green.
- **Reporting**: Update `walkthrough.md` with latest verification results.

## 2. SEO & Performance Audit

Automated audit of page titles, meta descriptions, and image alt tags.

- **Action**: Use `browser_subagent` to check Lighthouse scores.
- **Automation**: Propose fixes for any score below 90.

## 3. Database Integrity Checks

Autonomous monitoring of Supabase data health.

- **Action**: Run `npx prisma validate`.
- **Security**: Monitor `User` table for suspicious auth patterns.

## 4. Concurrent Operation Protocol

When multiple agents are active:

- **Locking**: Use `task.md` as the source of truth for "In Progress" states.
- **Conflict Resolution**: Prioritize `EXECUTION` of approved `implementation_plan.md` over ad-hoc research.
