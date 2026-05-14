"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="small"
        sizing="mediumSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Metrics",
          id: "metrics",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Aura AI"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      background={{
        variant: "gradient-bars",
      }}
      title="Empowering the Future with Neural Intelligence"
      description="The most advanced AI agent for seamless workflow automation and deep data analytics in a high-tech ecosystem."
      testimonials={[
        {
          name: "Sarah Chen",
          handle: "@schen",
          testimonial: "Aura AI has revolutionized our operational speed by 400%.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/anthropomorphic-robot-that-performs-regular-human-job_23-2151061698.jpg",
        },
        {
          name: "Marcus Vane",
          handle: "@vane",
          testimonial: "Luxury tech redefined. The best interface I've used.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/designer-speaks-advisor-projected-hologram-office-area_482257-82944.jpg",
        },
        {
          name: "Elena Ross",
          handle: "@eross",
          testimonial: "Incredible accuracy and sophisticated design.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/anthropomorphic-robot-that-performs-regular-human-job_23-2151061694.jpg",
        },
        {
          name: "Julian Thorne",
          handle: "@jthorne",
          testimonial: "The precision is unmatched. A flawless deployment.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/anthropomorphic-robot-that-performs-regular-human-job_23-2151061674.jpg",
        },
        {
          name: "Maya K.",
          handle: "@mk_dev",
          testimonial: "Seamless integration and high-end results.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/male-cool-it-expert-hosting-live-convention-with-hands-free-microphone_482257-127134.jpg",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/anthropomorphic-robot-that-performs-regular-human-job_23-2151061699.jpg"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/woman-working-with-laptop-coffee-shop_53876-15993.jpg",
          alt: "User 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/chair-front-businesswoman-sitting-caf_23-2147876643.jpg",
          alt: "User 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/businesswoman-working-document-restaurant_23-2147876637.jpg",
          alt: "User 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/businessman-engages-critical-conversation-with-financial-broker_482257-123253.jpg",
          alt: "User 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/male-graphic-designer-using-digital-tablet_1170-997.jpg",
          alt: "User 5",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Ultra-Secure",
        },
        {
          type: "text",
          text: "Real-time Processing",
        },
        {
          type: "text",
          text: "Global Deployment",
        },
        {
          type: "text",
          text: "Scalable Infrastructure",
        },
        {
          type: "text",
          text: "Neural Decision Engine",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Precision Architecture"
      description="Crafting the next generation of artificial agents with unparalleled sophistication and gold-standard reliability."
      metrics={[
        {
          value: "99.9%",
          title: "Uptime Accuracy",
        },
        {
          value: "500ms",
          title: "Response Time",
        },
        {
          value: "100K",
          title: "Active Agents",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-vector/futuristic-technology-infographic_52683-34984.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Neural Analytics",
          description: "Real-time deep learning insights delivered instantly.",
          tag: "AI-Core",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-low-poly-abstract-background-with-shallow-depth-field_1048-10653.jpg",
        },
        {
          id: "f2",
          title: "Infinite Scale",
          description: "Seamless infrastructure growth with every byte.",
          tag: "Cloud",
          imageSrc: "http://img.b2bpic.net/free-photo/vivid-abstract-psychedelic-background-with-gold-brown-colors_181624-27247.jpg",
        },
        {
          id: "f3",
          title: "Secure Encryption",
          description: "Military-grade data protection as standard.",
          tag: "Security",
          imageSrc: "http://img.b2bpic.net/free-vector/infographic_53876-25853.jpg",
        },
      ]}
      title="Command the Digital Realm"
      description="High-tier features designed for visionary companies."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "2.5x",
          title: "Workflow Speed",
          items: [
            "Deep integration",
            "Smart caching",
          ],
        },
        {
          id: "m2",
          value: "94%",
          title: "Automation Rate",
          items: [
            "Agent-driven",
            "Edge computing",
          ],
        },
        {
          id: "m3",
          value: "48hrs",
          title: "Onboarding",
          items: [
            "Fast deployment",
            "Guided setup",
          ],
        },
      ]}
      title="Performance at Scale"
      description="Measurable impact across all enterprise operations."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Alex Rivier",
          date: "Oct 2023",
          title: "CTO",
          quote: "The absolute pinnacle of AI agent technology.",
          tag: "Partner",
          avatarSrc: "http://img.b2bpic.net/free-photo/high-angle-modern-woman-talking-mobile_23-2148415912.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/man-solar-panel-manufacturing-facility-presents-green-energy-production_482257-118152.jpg",
        },
        {
          id: "t2",
          name: "Jordan Smith",
          date: "Sep 2023",
          title: "Developer",
          quote: "Seamless integration and beautiful visuals.",
          tag: "Tech",
          avatarSrc: "http://img.b2bpic.net/free-photo/low-angle-man-using-tablet_23-2148468686.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/video-editor-worker-standing-front-camera-smiling-working-creative-agency-office-holding-la_482257-3426.jpg",
        },
        {
          id: "t3",
          name: "Casey Liu",
          date: "Aug 2023",
          title: "Designer",
          quote: "A true game changer for our design process.",
          tag: "Innovation",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-adult-businesswoman-talking-phone_23-2148452718.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/young-female-with-coffee-cup_23-2148415887.jpg",
        },
        {
          id: "t4",
          name: "Jamie Lee",
          date: "Jul 2023",
          title: "Scientist",
          quote: "The most sophisticated tool I have ever used.",
          tag: "Growth",
          avatarSrc: "http://img.b2bpic.net/free-photo/african-american-engineer-manages-data-from-solar-machinery-desktop-working-solar-panel_482257-132203.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252432.jpg",
        },
        {
          id: "t5",
          name: "Morgan Gray",
          date: "Jun 2023",
          title: "Founder",
          quote: "Aura AI is the gold standard for innovation.",
          tag: "Elite",
          avatarSrc: "http://img.b2bpic.net/free-photo/lifestyle-businessman_23-2148102497.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/business-leader-professional-office-strategizing-development-success_482257-124563.jpg",
        },
      ]}
      title="Global Visionaries"
      description="Trusted by industry leaders and tech pioneers worldwide."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Is Aura AI secure?",
          content: "We employ enterprise-grade encryption for all agent interactions.",
        },
        {
          id: "q2",
          title: "Can I integrate custom APIs?",
          content: "Yes, our platform supports seamless third-party API integration.",
        },
        {
          id: "q3",
          title: "How do I upgrade plans?",
          content: "Simply contact our concierge team to scale your subscription.",
        },
      ]}
      title="Expert Guidance"
      description="Everything you need to know to leverage Aura AI."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Connect With Aura"
      description="Ready to transform your tech ecosystem? Start your journey today."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email",
          required: true,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/isolated-screen-laptop-man-play-spaceship-flying-game_482257-121661.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Aura AI"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
