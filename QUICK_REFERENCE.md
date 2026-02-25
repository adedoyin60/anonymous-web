# HEARTH - Quick Class Names Reference

## 🚀 Quick Start

```jsx
import { buttons, cards, layouts, typography } from '@/styles/classNames';

<Button className={buttons.primary}>Click</Button>
<Card className={cards.primary}>Content</Card>
<div className={layouts.grid2Col}>Grid</div>
<h1 className={typography.h1}>Title</h1>
```

## 🎨 Colors & Buttons

| Name                      | Usage                    |
| ------------------------- | ------------------------ |
| `buttons.primary`         | Standard amber button    |
| `buttons.primaryGradient` | Amber to orange gradient |
| `buttons.outline`         | Bordered button          |
| `buttons.ghost`           | Transparent hover effect |

```jsx
<Button className={buttons.primary}>Primary</Button>
<Button className={buttons.primaryGradient}>Premium</Button>
```

## 📦 Cards

| Pattern                   | Use Case                     |
| ------------------------- | ---------------------------- |
| `cards.primary`           | Default card (amber bg)      |
| `cards.accent`            | Alternative card (orange bg) |
| `cards.hover`             | Adds shadow hover effect     |
| `cards.featured`          | Thicker border, highlighted  |
| `getCardClasses('hover')` | Full card with hover         |

```jsx
<Card className={`${cards.primary} ${cards.hover}`}>Content</Card>
```

## 📐 Layouts

| Name                  | Description          |
| --------------------- | -------------------- |
| `layouts.grid2Col`    | 2 columns on desktop |
| `layouts.grid3Col`    | 3 columns on desktop |
| `layouts.flexCenter`  | Centered flex        |
| `layouts.flexBetween` | Space between items  |
| `layouts.flexCol`     | Column direction     |

```jsx
<div className={layouts.grid2Col}>
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## ✍️ Typography

| Name                   | Style                         |
| ---------------------- | ----------------------------- |
| `typography.h1`        | Main heading (text-5xl, bold) |
| `typography.h2`        | Section heading (text-3xl)    |
| `typography.h3`        | Subsection (text-2xl)         |
| `typography.body`      | Normal text                   |
| `typography.bodySm`    | Small text                    |
| `typography.textMuted` | Gray secondary text           |

```jsx
<h1 className={typography.h1}>Title</h1>
<p className={typography.textMuted}>Description</p>
```

## 🎯 Icons

| Name                 | Size | Color  |
| -------------------- | ---- | ------ |
| `icons.sm`           | 16px | -      |
| `icons.md`           | 20px | -      |
| `icons.lg`           | 24px | -      |
| `icons.xl`           | 32px | -      |
| `icons.xxl`          | 40px | -      |
| `icons.colorPrimary` | -    | Amber  |
| `icons.colorAccent`  | -    | Orange |

```jsx
<Heart className={`${icons.xl} ${icons.colorPrimary}`} />
```

## 📏 Spacing

| Name              | Classes   |
| ----------------- | --------- |
| `spacing.gap4`    | gap-4     |
| `spacing.gap6`    | gap-6     |
| `spacing.spaceY6` | space-y-6 |
| `spacing.spaceY8` | space-y-8 |

```jsx
<div className={spacing.spaceY6}>
  <p>Line 1</p>
  <p>Line 2</p>
</div>
```

## 📵 Responsive

| Name                      | Behavior         |
| ------------------------- | ---------------- |
| `responsive.hiddenMobile` | Hidden on mobile |
| `responsive.mobileOnly`   | Only on mobile   |
| `responsive.desktopOnly`  | Only on desktop  |

```jsx
<div className={responsive.hiddenMobile}>Desktop Only</div>
<div className={responsive.mobileOnly}>Mobile Only</div>
```

## 🎁 Backgrounds

| Name                      | Usage                   |
| ------------------------- | ----------------------- |
| `backgrounds.heroBg`      | Hero section gradient   |
| `backgrounds.cardBg`      | Card with backdrop blur |
| `backgrounds.primaryInfo` | Info box (amber)        |
| `backgrounds.accentInfo`  | Info box (orange)       |

```jsx
<section className={backgrounds.heroBg}>Hero</section>
<div className={backgrounds.primaryInfo}>Info</div>
```

## 🎊 Animations

| Name                          | Effect             |
| ----------------------------- | ------------------ |
| `animations.pulse`            | Pulsing effect     |
| `animations.transition`       | Smooth transitions |
| `animations.transitionShadow` | Shadow animation   |

```jsx
<div className={animations.pulse}>Loading...</div>
```

## 🔄 Common Combinations

### Hero Section

```jsx
<section className={sections.hero}>
  <div className={sections.containerXL}>
    <div className={layouts.grid2Col}>
      <div className={spacing.spaceY6}>
        <h1 className={typography.h1}>Title</h1>
      </div>
    </div>
  </div>
</section>
```

### Feature Grid

```jsx
<div className={layouts.grid3Col}>
  <Card className={`${cards.primary} ${cards.hover}`}>
    <Icon className={`${icons.xl} ${icons.colorPrimary}`} />
    <h3 className={typography.h3}>Title</h3>
  </Card>
</div>
```

### Info Alert

```jsx
<div className={backgrounds.primaryInfo}>
  <Icon className={icons.lg} />
  <p className={typography.bodySm}>Message</p>
</div>
```

### Button Group

```jsx
<div className={`${layouts.flexCenter} ${spacing.gap4}`}>
  <Button className={buttons.primary}>Primary</Button>
  <Button className={buttons.outline}>Secondary</Button>
</div>
```

## 🎓 Import Examples

```jsx
// Import everything (use with prefix)
import classNames from "@/styles/classNames";
classNames.buttons.primary;

// Import specific utilities (recommended)
import { buttons, cards, layouts, typography } from "@/styles/classNames";
buttons.primary;

// Mix and match
import { getButtonClasses, getCardClasses } from "@/styles/classNames";
```

## ✨ Pro Tips

1. **Combine classes**: Use backticks to combine utilities

   ```jsx
   className={`${cards.primary} ${cards.hover} ${spacing.spaceY4}`}
   ```

2. **Use helper functions**: For complex patterns

   ```jsx
   className={getCardClasses('featured')}
   ```

3. **Add comments**: For clarity

   ```jsx
   className={typography.h1} // Main page title
   ```

4. **Create new utilities**: Don't repeat patterns
   - Add to `classNames.js` instead of inline classes

5. **Order matters**: Group semantic utilities together
   ```jsx
   className={`${layouts.grid3Col} ${spacing.gap6} ${animations.transition}`}
   ```

## 📚 More Info

- Full guide: `DEVELOPER_CLASSNAMES_GUIDE.md`
- Examples: `DEVELOPER_EXAMPLES.js`
- Utilities: `src/styles/classNames.js`
