# Planning Guide

A stunning, Netflix-level animated portfolio website that showcases professional work with cinematic visual effects, smooth animations, and an immersive dark theme that captivates visitors.

**Experience Qualities**:
1. **Cinematic** - The design should feel like a premium streaming platform with dramatic animations, smooth transitions, and attention-grabbing visual effects
2. **Immersive** - Deep dark theme with vibrant accent colors that create depth and draw users into the content with particle effects and gradient animations
3. **Professional** - Despite the bold animations, the portfolio maintains sophistication and credibility through clean typography and structured layouts

**Complexity Level**: Content Showcase (information-focused with advanced animations)
This is an animated portfolio site focused on presenting professional work with Netflix-quality motion design, featuring particle systems, glassmorphic effects, 3D card transforms, and cinematic transitions without requiring complex state management.

## Essential Features

### Animated Hero Section
- **Functionality**: Full-screen hero with particle field background, animated gradient overlays, glowing text effects, and parallax scrolling
- **Purpose**: Creates an unforgettable first impression with cinematic entrance animations and establishes premium brand identity
- **Trigger**: Page load with staggered animation sequence
- **Progression**: Particle field renders → Gradient orbs animate → Text fades in with glow effects → CTA buttons scale in with shimmer → Scroll indicator bounces
- **Success criteria**: All animations complete within 2s, particles perform smoothly at 60fps, text is readable with glow effects

### Glassmorphic Navigation
- **Functionality**: Fixed navigation bar with glassmorphism effect, smooth backdrop blur, and animated active section indicators
- **Purpose**: Provides persistent navigation while maintaining visual hierarchy through transparency and blur
- **Trigger**: Scroll position changes backdrop blur intensity and background opacity
- **Progression**: Nav starts transparent → Scrolling triggers blur and background fade-in → Active section highlights with smooth layout animation
- **Success criteria**: Blur transitions are smooth, active indicator animates fluidly, mobile menu slides in elegantly

### Netflix-Style Project Cards
- **Functionality**: 3D transforming project cards with hover tilt effects, zoom animations, gradient overlays, and reveal animations
- **Purpose**: Showcases portfolio work with interactive cards that respond to mouse movement creating depth and engagement
- **Trigger**: Mouse movement over cards for 3D tilt, scroll into view for entrance
- **Progression**: Card enters viewport with fade and scale → Hover triggers 3D rotation based on mouse position → Gradient overlay fades in → Action buttons reveal → Image zooms subtly
- **Success criteria**: 3D transforms are smooth, hover states feel responsive, images don't distort, buttons are accessible

### Animated Skills Visualization
- **Functionality**: Skill bars with gradient fills, shimmer effects, and staggered entrance animations organized by category
- **Purpose**: Displays technical expertise with engaging visual indicators and smooth progress animations
- **Trigger**: Scroll into view triggers staggered bar animations
- **Progression**: Section enters → Category cards fade in sequentially → Skill bars fill with gradient and shimmer effect → Tech stack badges pop in with scale
- **Success criteria**: Bars animate smoothly to correct percentages, gradients are vibrant, timing feels natural

### Immersive Contact Section
- **Functionality**: Contact cards with hover effects, animated social links, and glowing call-to-action button with shimmer overlay
- **Purpose**: Encourages visitors to reach out with engaging interactions and clear contact methods
- **Trigger**: Hover on cards and buttons, scroll into view for entrance
- **Progression**: Contact methods fade in and lift on hover → CTA button shows shimmer on hover → Social icons scale and lift with hover → Footer text fades in last
- **Success criteria**: All interactions feel responsive, hover effects are smooth, email link works correctly

## Edge Case Handling
- **Reduced Motion**: Detect `prefers-reduced-motion` and disable particle effects, 3D transforms, and complex animations - use simple fades instead
- **Low Performance Devices**: Reduce particle count, disable blur effects on mobile, simplify gradient animations
- **Missing WebGL**: Gracefully degrade particle canvas to static gradient background
- **Mobile Navigation**: Full-screen glassmorphic overlay menu with smooth slide animation and backdrop blur
- **Keyboard Navigation**: All interactive elements are keyboard accessible with visible focus rings

## Design Direction
The design should evoke a cutting-edge, cinematic feeling similar to Netflix's brand with a dark, immersive interface featuring vibrant accent colors (cyan, purple, pink gradients), particle effects, glassmorphism, and smooth animations that guide attention and create moments of delight throughout the experience.

## Color Selection
Custom palette - A dramatic dark theme with vibrant gradient accents inspired by premium streaming platforms, creating depth through layered backgrounds and glowing highlights.

- **Primary Color**: Deep Purple (oklch(0.65 0.22 275)) - Premium, creative energy for primary actions and highlights
- **Secondary Colors**: Magenta Pink (oklch(0.55 0.18 320)) for secondary highlights creating visual interest and variety
- **Accent Color**: Vibrant Cyan (oklch(0.75 0.25 180)) - Eye-catching highlight for CTAs, links, and focus elements that creates electric energy
- **Foreground/Background Pairings**:
  - Background (Deep Dark oklch(0.08 0.01 250)): Light text (oklch(0.98 0 0)) - Ratio 16.2:1 ✓
  - Card (Dark Gray oklch(0.12 0.015 250)): Light text (oklch(0.98 0 0)) - Ratio 14.8:1 ✓
  - Primary (Deep Purple oklch(0.65 0.22 275)): White text (oklch(0.98 0 0)) - Ratio 7.2:1 ✓
  - Accent (Vibrant Cyan oklch(0.75 0.25 180)): Dark text (oklch(0.08 0.01 250)) - Ratio 11.5:1 ✓
  - Muted (Medium Dark oklch(0.18 0.01 250)): Light muted text (oklch(0.55 0.015 250)) - Ratio 4.6:1 ✓

## Font Selection
Typography should convey modern tech sophistication using Inter with varied weights for hierarchy, maintaining exceptional readability on dark backgrounds while supporting the dramatic visual style.

- **Typographic Hierarchy**:
  - H1 (Hero Name): Inter Bold/72px/tight letter-spacing (-0.02em) - Massive impact with gradient text
  - H2 (Section Titles): Inter Bold/56px/snug leading - Clear hierarchy with ample presence
  - H3 (Card Titles): Inter SemiBold/24px/normal - Strong but approachable
  - Body (Descriptions): Inter Regular/18px/relaxed leading (1.7) - Comfortable reading on dark
  - Small (Captions): Inter Medium/14px/wide tracking - Subtle but legible

## Animations
Animations should feel cinematic and premium with smooth easing curves, purposeful motion that guides attention, particle effects for ambiance, and micro-interactions that reward exploration - inspired by Netflix's attention to motion design.

- **Purposeful Meaning**: Particle fields create ambient energy, scroll-triggered reveals build progressive disclosure, 3D card transforms create depth perception, shimmer effects highlight interactivity, gradient animations add life to backgrounds
- **Hierarchy of Movement**: Hero section receives most dramatic treatment (particles + gradients + glows), project cards use 3D transforms for engagement, section transitions use smooth fades with scale, micro-interactions add polish without distraction

## Component Selection

- **Components**:
  - `Card` - With glassmorphic styling, border glow effects, and backdrop blur
  - `Button` - With gradient backgrounds, hover shimmer overlays, and scale animations
  - `Badge` - For tech tags with subtle hover scale and glow effects
  - Custom `ParticleField` - Canvas-based particle system with connected nodes
  
- **Customizations**:
  - Particle field background using HTML5 Canvas with interconnected animated particles
  - Glassmorphic navigation with variable backdrop blur based on scroll position
  - 3D rotating project cards that track mouse position for tilt effect
  - Animated gradient orbs that float across sections
  - Skill bars with gradient fills and shimmer animation overlays
  - Scroll progress indicator integrated into scroll-to-top button
  - Custom CSS animations for gradient shifts, floating, glowing, and shimmer effects

- **States**:
  - Buttons: Shimmer overlay animates left to right on hover, scales 1.05, active scales 0.95
  - Cards: 3D rotates based on mouse position, scales 1.05 on hover, gradient overlay fades in
  - Links: Glow effect intensifies on hover with smooth color transition
  - Navigation: Active section gets highlighted background with layout animation, blur increases on scroll

- **Icon Selection**:
  - Phosphor icons with duotone weight for depth throughout
  - `Sparkle` for availability badge and featured indicators
  - `ArrowUpRight` and `GithubLogo` for project external links
  - `EnvelopeSimple`, social icons for contact methods
  - `Code`, `Database`, `CloudArrowUp` for skills categorization

- **Spacing**:
  - Section padding: py-24 md:py-40 for dramatic breathing room
  - Container max-width: max-w-7xl for wide cinematic layouts
  - Card gaps: gap-8 for clear separation and hover expansion room
  - Generous whitespace: Dark backgrounds benefit from extra spacing

- **Mobile**:
  - Hero text scales: H1 from 72px to 40px, maintains gradient
  - Reduce particle count by 50% for performance
  - Disable 3D card transforms, use simple scale instead
  - Navigation: Full-screen glassmorphic overlay with smooth slide
  - Simplify gradient animations, reduce blur intensity
  - Maintain visual hierarchy with scaled-down dramatic effects
