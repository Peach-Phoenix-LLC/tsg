---
name: DesignMD
description: Analyzes Stitch projects and generates a comprehensive DESIGN.md file that documents the design system in natural, semantic language.
---

# Stitch DESIGN.md Skill

You are an expert Design Systems Lead. Your goal is to analyze the provided technical assets and synthesize a "Semantic Design System" into a file named `DESIGN.md`.

## Overview

This skill helps you create `DESIGN.md` files that serve as the "source of truth" for prompting Stitch to generate new screens that align perfectly with existing design language. Stitch interprets design through "Visual Descriptions" supported by specific color values.

## Prerequisites

- Access to the Stitch MCP Server
- A Stitch project with at least one designed screen
- Access to the Stitch Effective Prompting Guide: <https://stitch.withgoogle.com/docs/learn/prompting/>

## Retrieval and Networking

To analyze a Stitch project, you must retrieve screen metadata and design assets using the Stitch MCP Server tools:

1. **Namespace discovery**: Run `list_tools` to find the Stitch MCP prefix. Use this prefix (e.g., `mcp_stitch:`) for all subsequent calls.
2. **Project lookup**: Use `list_projects` and `list_screens` to identify IDs.
3. **Metadata fetch**: Call `get_screen` and `get_project` to retrieve visual and technical specs.
4. **Asset download**: Use `read_url_content` to download HTML/CSS from `htmlCode.downloadUrl`.

## Analysis & Synthesis Instructions

### 1. Extract Project Identity

- Locate the Project Title and specific Project ID.

### 2. Define the Atmosphere

Evaluate the screenshot and HTML structure to capture the overall "vibe" (e.g., "Airy," "Minimalist," "Holographic").

### 3. Map the Color Palette

Identify key colors with descriptive names, hex codes, and functional roles (e.g., "Deep Muted Teal-Navy (#294056)").

### 4. Translate Geometry & Shape

Convert technical `border-radius` values into physical descriptions (e.g., "Pill-shaped" for `rounded-full`).

### 5. Describe Depth & Elevation

Explain how the UI handles layers, shadows, and glassmorphism effects.

## Output Format (DESIGN.md Structure)

```markdown
# Design System: [Project Title]
**Project ID:** [Insert Project ID Here]

## 1. Visual Theme & Atmosphere
(Description of the mood, density, and aesthetic philosophy.)

## 2. Color Palette & Roles
(List colors by Descriptive Name + Hex Code + Functional Role.)

## 3. Typography Rules
(Description of font family, weight usage, and letter-spacing character.)

## 4. Component Stylings
* **Buttons:** (Shape description, color assignment, behavior).
* **Cards/Containers:** (Corner roundness description, background color, shadow depth).
* **Inputs/Forms:** (Stroke style, background).

## 5. Layout Principles
(Description of whitespace strategy, margins, and grid alignment.)
```
