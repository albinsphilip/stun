# Planning Guide

A modern, visually striking portfolio website that showcases professional work and personality through elegant design, smooth animations, and thoughtful interactions.

**Experience Qualities**:
1. **Sophisticated** - The design should feel polished and professional, reflecting attention to detail and quality craftsmanship
2. **Fluid** - Interactions should feel seamless and natural, with smooth transitions that guide the user's attention
3. **Memorable** - The experience should leave a lasting impression through subtle delights and purposeful motion

**Complexity Level**: Content Showcase (information-focused)
This is a portfolio site focused on presenting information about work, skills, and experience in an engaging way without requiring complex state management or user accounts.

## Essential Features

### Hero Section
- **Functionality**: Displays name, title/tagline, and primary call-to-action with animated entrance
- **Purpose**: Creates strong first impression and communicates professional identity immediately
- **Trigger**: Page load
- **Progression**: Fade in name with slight upward motion → Stagger in title/description → Reveal CTA button with subtle scale
- **Success criteria**: Text is readable, animation completes within 1.5s, CTA is immediately actionable

### About Section
- **Functionality**: Presents professional bio, skills, and expertise with visual interest
- **Purpose**: Builds credibility and helps visitors understand background and capabilities
- **Trigger**: Scroll into view
- **Progression**: Section enters viewport → Bio text fades in from left → Skills grid animates in with stagger effect
- **Success criteria**: Content is scannable, skills are clearly organized, section feels cohesive

### Projects Showcase
- **Functionality**: Displays portfolio projects with images, descriptions, and links
- **Purpose**: Demonstrates actual work and achievements to potential clients/employers
- **Trigger**: Scroll into view or hover on project cards
- **Progression**: Cards appear with stagger → Hover reveals project details overlay → Click navigates to project details or external link
- **Success criteria**: Projects are visually distinct, hover states are clear, images load efficiently

### Skills/Tech Stack
- **Functionality**: Showcases technical proficiencies with visual indicators
- **Purpose**: Quickly communicates technical capabilities and areas of expertise
- **Trigger**: Scroll into view
- **Progression**: Section enters viewport → Icon grid animates in with cascade effect → Icons subtly animate on hover
- **Success criteria**: Technologies are recognizable, layout adapts to different screen sizes

### Contact Section
- **Functionality**: Provides contact information and/or links to social profiles
- **Purpose**: Enables visitors to reach out and connect
- **Trigger**: Scroll to bottom or click contact CTA
- **Progression**: Section appears → Contact methods reveal with animation → Hover states provide feedback
- **Success criteria**: Contact methods are clearly visible, links work correctly, section feels inviting

## Edge Case Handling
- **Reduced Motion**: Respect `prefers-reduced-motion` by using simpler, faster transitions for accessibility
- **Slow Connections**: Show skeleton loaders for images, ensure critical content loads first
- **Missing Images**: Display placeholder graphics with graceful fallbacks
- **Mobile Navigation**: Hamburger menu collapses navigation items, smooth drawer animation
- **Long Content**: Implement smooth scrolling, subtle scroll progress indicator

## Design Direction
The design should evoke a cutting-edge, sophisticated feeling with a minimal interface that emphasizes content over chrome, using purposeful white space and subtle motion to guide attention and create moments of delight without overwhelming the visitor.

## Color Selection
Custom palette - A modern, professional scheme that balances bold accents with neutral backgrounds to create visual hierarchy and guide attention to key elements.

- **Primary Color**: Deep Navy Blue (oklch(0.25 0.05 250)) - Communicates professionalism, trust, and technical expertise
- **Secondary Colors**: Soft Slate (oklch(0.45 0.02 250)) for supporting text and subtle backgrounds, creating depth without distraction
- **Accent Color**: Vibrant Cyan (oklch(0.75 0.15 200)) - Eye-catching highlight for CTAs, links, and interactive elements that draws focus
- **Foreground/Background Pairings**:
  - Background (Pure White oklch(1 0 0)): Dark Navy text (oklch(0.2 0.05 250)) - Ratio 12.6:1 ✓
  - Card (Light Gray oklch(0.98 0 0)): Dark Navy text (oklch(0.2 0.05 250)) - Ratio 12.1:1 ✓
  - Primary (Deep Navy oklch(0.25 0.05 250)): White text (oklch(1 0 0)) - Ratio 12.6:1 ✓
  - Accent (Vibrant Cyan oklch(0.75 0.15 200)): Dark Navy text (oklch(0.2 0.05 250)) - Ratio 4.8:1 ✓
  - Muted (Light Slate oklch(0.95 0.01 250)): Medium text (oklch(0.45 0.02 250)) - Ratio 5.2:1 ✓

## Font Selection
Typography should convey modern professionalism and technical sophistication, using clean geometric sans-serifs that feel contemporary and highly readable across all screen sizes.

- **Typographic Hierarchy**:
  - H1 (Hero Name): Inter Bold/56px/tight letter-spacing (-0.02em) - Commands attention
  - H2 (Section Titles): Inter SemiBold/36px/snug leading - Clear section breaks
  - H3 (Project Titles): Inter Medium/24px/normal - Establishes content hierarchy
  - Body (Descriptions): Inter Regular/16px/relaxed leading (1.7) - Optimized readability
  - Small (Captions): Inter Regular/14px/normal - Supporting information

## Animations
Animations should feel purposeful and premium, with smooth easing that mimics natural physics - subtle enough to enhance without distracting, with key moments of delight during scroll reveals and interactions.

- **Purposeful Meaning**: Entrance animations communicate structure and hierarchy, scroll-triggered reveals create progressive disclosure, hover effects provide immediate feedback and encourage exploration
- **Hierarchy of Movement**: Hero section receives most dramatic entrance (scale + fade), section headers use medium emphasis (slide + fade), content elements use subtle reveals (fade up), micro-interactions on buttons and cards create polish

## Component Selection

- **Components**:
  - `Card` - For project showcases with subtle shadows and hover lift effects
  - `Button` - For CTAs with custom accent styling and hover animations
  - `Badge` - For skill tags and technology labels
  - `Separator` - For subtle section divisions
  - `Avatar` - For professional headshot with border ring effect
  - `Tooltip` - For additional context on skill icons
  
- **Customizations**:
  - Custom animated gradient background for hero section
  - Scroll-triggered reveal containers using Framer Motion
  - Parallax effect on hero section
  - Custom project card with image overlay and smooth transitions
  - Floating action button for scroll-to-top with progress indicator
  - Animated skill icons with hover effects using Phosphor icons

- **States**:
  - Buttons: Default has subtle shadow, hover scales 1.05 with brighter accent, active scales 0.98
  - Cards: Default has light shadow, hover lifts with larger shadow and slight translate-y
  - Links: Underline on hover with slide-in animation
  - Navigation: Active section highlighted with accent color and smooth indicator

- **Icon Selection**:
  - Phosphor icons throughout for consistency
  - Use `ArrowUpRight` for external links
  - Use `EnvelopeSimple`, `GithubLogo`, `LinkedinLogo`, `TwitterLogo` for contact
  - Use technology-specific icons for skills section

- **Spacing**:
  - Section padding: py-20 md:py-32 for generous breathing room
  - Container max-width: max-w-6xl for optimal reading line length
  - Card gaps: gap-8 for clear separation
  - Text spacing: space-y-4 for paragraph flow

- **Mobile**:
  - Hero text scales down: H1 from 56px to 36px
  - Two-column project grid becomes single column
  - Skills grid: 4 columns desktop → 2 columns mobile
  - Navigation: Full-screen overlay menu with smooth slide-in
  - Reduce animation complexity for performance
