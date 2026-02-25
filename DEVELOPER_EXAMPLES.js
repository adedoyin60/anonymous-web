// ============================================
// EXAMPLE: Using Developer-Friendly Class Names
// ============================================

// BEFORE: Hard to read, repeated patterns
/*
<div className="grid md:grid-cols-2 gap-12 items-center">
  <h1 className="text-5xl font-bold text-gray-900">Title</h1>
  <Button className="bg-amber-700 hover:bg-amber-800">
    <MessageCircle className="size-5 mr-2" />
    Click Me
  </Button>
</div>

<Card className="rounded-lg border bg-amber-50 border-amber-200 hover:shadow-lg transition-shadow">
  <div className="flex justify-between items-center">
    <p className="text-gray-600">Description</p>
  </div>
</Card>
*/

// AFTER: Clean, semantic, maintainable
/*
import { layouts, buttons, cards, typography, icons } from '@/styles/classNames';

<div className={layouts.grid2Col}>
  <h1 className={typography.h1}>Title</h1>
  <Button className={buttons.primary}>
    <MessageCircle className={`${icons.md} mr-2`} />
    Click Me
  </Button>
</div>

<Card className={`${cards.base} ${cards.primary} ${cards.hover}`}>
  <div className={layouts.flexBetween}>
    <p className={typography.textMuted}>Description</p>
  </div>
</Card>
*/

// ============================================
// COMMON PATTERNS & EXAMPLES
// ============================================

// 1. HERO SECTION
/*
<section className={sections.hero}>
  <div className={sections.containerLarge}>
    <div className={layouts.grid2Col}>
      <div className={spacing.spaceY6}>
        <h1 className={typography.h1}>Main Title</h1>
        <p className={typography.textMuted}>Subtitle</p>
      </div>
    </div>
  </div>
</section>
*/

// 2. FEATURE CARDS GRID
/*
<div className={layouts.grid3Col}>
  {features.map((feature) => (
    <Card key={feature.id} className={`${cards.base} ${cards.primary} ${cards.hover}`}>
      <feature.icon className={`${icons.xl} ${icons.colorPrimary}`} />
      <h3 className={typography.h3}>{feature.title}</h3>
      <p className={typography.textMuted}>{feature.description}</p>
    </Card>
  ))}
</div>
*/

// 3. ACTION BUTTONS
/*
<div className={`${layouts.flexCenter} ${spacing.gap4}`}>
  <Button className={buttons.primary}>Primary Action</Button>
  <Button className={buttons.primaryGradient}>Premium Action</Button>
  <Button className={buttons.outline}>Secondary Action</Button>
</div>
*/

// 4. INFO BOX
/*
<div className={backgrounds.primaryInfo}>
  <div className={layouts.flexBetween}>
    <InfoIcon className={icons.lg} />
    <p className={typography.bodySm}>Important information</p>
  </div>
</div>
*/

// 5. RESPONSIVE SECTION
/*
<section className={`${sections.container} ${responsive.hiddenMobile}`}>
  Desktop-only content here
</section>

<section className={`${sections.container} ${responsive.mobileOnly}`}>
  Mobile-only content here
</section>
*/

// 6. CARD WITH HOVER EFFECT
/*
<Card className={getCardClasses('hover')}>
  <CardHeader>
    <CardTitle className={typography.h3}>Premium Features</CardTitle>
  </CardHeader>
  <CardContent className={spacing.spaceY4}>
    <p className={typography.body}>Feature description</p>
  </CardContent>
</Card>
*/

// 7. FEATURED/HIGHLIGHTED ELEMENT
/*
<Card className={getCardClasses('featured')}>
  <div className={`${backgrounds.heroBg} ${spacing.spaceY6}`}>
    <Crown className={`${icons.xxl} ${icons.colorPrimary}`} />
    <h2 className={typography.h2Center}>Premium Access</h2>
  </div>
</Card>
*/

// 8. BADGE WITH ICON
/*
<div className={`${badges.primary} text-white rounded-full px-4 py-2 ${layouts.flexCenter}`}>
  <Star className={`${icons.sm} mr-2`} />
  Premium Therapist
</div>
*/

// 9. FULL-PAGE LAYOUT EXAMPLE
/*
export function ExamplePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className={sections.hero}>
        <div className={sections.containerXL}>
          <div className={layouts.grid2Col}>
            <div className={spacing.spaceY6}>
              <h1 className={typography.h1}>Welcome</h1>
              <p className={typography.textMuted}>Get started today</p>
              <Button className={buttons.primaryGradient}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`${sections.containerLarge} py-16`}>
        <h2 className={typography.h2Center}>Why Choose Us?</h2>
        
        <div className={`${layouts.grid3Col} mt-12`}>
          {features.map((f) => (
            <Card key={f.id} className={`${cards.base} ${cards.primary} ${cards.hover}`}>
              <f.Icon className={`${icons.xl} ${icons.colorPrimary}`} />
              <h3 className={typography.h3}>{f.title}</h3>
              <p className={typography.textMuted}>{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={backgrounds.heroBg}>
        <div className={sections.containerLarge}>
          <div className={layouts.flexCenter}>
            <div className="text-center">
              <h2 className={typography.h2Center}>Ready to Start?</h2>
              <Button className={buttons.primaryGradient}>
                Begin Your Journey
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
*/

// ============================================
// TIPS FOR DEVELOPERS
// ============================================

// 1. Combine classes with template literals:
// className={`${layouts.grid2Col} ${spacing.spaceY6}`}

// 2. Import only what you need:
// import { buttons, cards, typography } from '@/styles/classNames';

// 3. Create new utilities for repeated patterns:
// Add to classNames.js instead of repeating inline

// 4. Use helper functions for complex patterns:
// className={getCardClasses('hover')}

// 5. Comment your class usage for clarity:
// className={typography.h1} // Main page heading

// 6. Check classNames.js for available utilities before creating new ones

// 7. Organize imports at top of component:
// import classNames from '@/styles/classNames';
// or
// import { buttons, cards, spacing, layouts } from '@/styles/classNames';

// ============================================
// CREATING NEW UTILITIES
// ============================================

// If you need a new class pattern, add it to classNames.js:

// export const cardPatterns = {
//   withBadge: "relative rounded-lg border bg-amber-50 border-amber-200",
//   premium: "rounded-lg border-2 border-amber-700 bg-gradient-to-br from-amber-50 to-orange-50",
// };

// Then import and use:
// <Card className={cardPatterns.withBadge} />
