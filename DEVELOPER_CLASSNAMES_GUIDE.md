# Hearth UI - Developer-Friendly Class Names Guide

## Overview

This guide explains how to use the semantic, developer-friendly class naming system in the Hearth project. All common Tailwind CSS patterns have been extracted into reusable constants for better maintainability and readability.

## File Location

- **Main utility file**: `src/styles/classNames.js`

## Quick Start Usage

### Importing

```jsx
import classNames from "@/styles/classNames";
// OR import specific utilities
import { buttons, cards, layouts, spacing } from "@/styles/classNames";
```

### Using Class Names

#### Buttons

```jsx
<Button className={buttons.primary}>Click Me</Button>
<Button className={buttons.primaryGradient}>Premium Button</Button>
<Button className={buttons.outline}>Outline Button</Button>
```

#### Cards

```jsx
<Card className={cards.primary}>Primary Card</Card>
<Card className={`${cards.base} ${cards.hover}`}>Hoverable Card</Card>
<Card className={cards.featured}>Featured Card</Card>
```

#### Layouts

```jsx
<div className={layouts.grid2Col}>
  <div>Column 1</div>
  <div>Column 2</div>
</div>
```

#### Typography

```jsx
<h1 className={typography.h1}>Main Title</h1>
<p className={typography.textMuted}>Secondary Text</p>
```

#### Icons

```jsx
<HelpCircle className={`${icons.xl} ${icons.colorPrimary}`} />
<Star className={`${icons.lg} ${icons.colorAccent}`} />
```

#### Spacing & Responsiveness

```jsx
<div className={`${spacing.spaceY6} ${responsive.hiddenMobile}`}>Content</div>
```

## Available Utility Categories

### 1. **Buttons**

- `buttons.primary` - Standard primary button (amber)
- `buttons.primaryLg` - Large primary button
- `buttons.primaryGradient` - Gradient button (amber to orange)
- `buttons.outline` - Outlined button
- `buttons.ghost` - Ghost/transparent button

### 2. **Cards**

- `cards.base` - Base card styling
- `cards.primary` - Primary card with amber background
- `cards.accent` - Accent card with orange background
- `cards.hover` - Card with hover shadow effect
- `cards.featured` - Featured card with thicker border
- `cards.heroBg` - Hero section gradient background

### 3. **Layouts**

- `layouts.grid2Col` - 2-column grid with gap
- `layouts.grid3Col` - 3-column grid
- `layouts.grid4Col` - 4-column grid
- `layouts.grid6Col` - 6-column grid
- `layouts.flexBetween` - Flex with space-between
- `layouts.flexCenter` - Centered flex container
- `layouts.flexCol` - Flex column layout
- `layouts.flexWrap` - Wrapping flex

### 4. **Typography**

- `typography.h1` - H1 heading style
- `typography.h2` - H2 heading style
- `typography.h2Center` - Centered H2
- `typography.h3` - H3 heading style
- `typography.h4` - H4 heading style
- `typography.body` - Body text
- `typography.bodySm` - Small body text
- `typography.textMuted` - Muted gray text
- `typography.textBold` - Bold text

### 5. **Icons**

- `icons.sm` (size-4), `icons.md` (size-5), `icons.lg` (size-6)
- `icons.xl` (size-8), `icons.xxl` (size-10), `icons.xxxl` (size-12)
- `icons.huge` (size-16)
- `icons.colorPrimary` - Amber color
- `icons.colorAccent` - Orange color
- `icons.colorMuted` - Gray color

### 6. **Spacing**

- `spacing.gap4`, `spacing.gap6`, `spacing.gap12`
- `spacing.spaceY4`, `spacing.spaceY6`, `spacing.spaceY8`

### 7. **Sections**

- `sections.hero` - Hero section styling
- `sections.container` - Standard container
- `sections.containerLarge` - Large container
- `sections.containerXL` - Extra-large container

### 8. **Responsive**

- `responsive.hiddenMobile` - Hidden on mobile
- `responsive.mobileOnly` - Visible only on mobile
- `responsive.desktopOnly` - Visible only on desktop

### 9. **Animations**

- `animations.pulse` - Pulsing animation
- `animations.transition` - Smooth transition
- `animations.transitionShadow` - Shadow transition

## Helper Functions

### `getButtonClasses(variant)`

```jsx
<Button className={getButtonClasses('primary')}>Primary</Button>
<Button className={getButtonClasses('primaryGradient')}>Gradient</Button>
```

### `getCardClasses(type)`

```jsx
<Card className={getCardClasses('base')}>Base Card</Card>
<Card className={getCardClasses('featured')}>Featured Card</Card>
```

## Combining Classes

You can combine multiple utilities using string concatenation or template literals:

```jsx
// Using spread operator with classNames library
import { clsx } from 'clsx';

<div className={clsx(layouts.grid2Col, spacing.spaceY6, responsive.hiddenMobile)}>
  Content
</div>

// Or using template literals
<div className={`${layouts.grid2Col} ${spacing.spaceY6}`}>
  Content
</div>
```

## Color Palette

The Hearth application uses a warm, homely color palette:

- **Primary Color**: Amber (amber-700)
- **Accent Color**: Orange (orange-600)
- **Text Colors**: Gray scale
- **Backgrounds**: Warm tones (orange-50, amber-50)

## Best Practices

1. **Always use semantic names** - Use `buttons.primary` instead of hardcoding classes
2. **Combine utilities** - Mix and match utilities for flexibility
3. **Create new utilities** - Add new patterns to `classNames.js` for reuse
4. **Keep consistency** - Use the same utility across similar components
5. **Document custom usage** - If you create custom classes, add them to the utility file

## Future Enhancements

Consider adding:

- `elevation` - Shadow depth utilities
- `breakpoints` - Responsive breakpoint helpers
- `states` - Focus, active, disabled states
- `transitions` - Transition timing utilities

## Support

For questions or to suggest new utilities, refer to this documentation and the `src/styles/classNames.js` file.
