import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  schema?: object; // JSON-LD Structured Data
  image?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  type?: 'website' | 'article' | 'profile' | 'service';
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  canonicalUrl = 'https://poetics.studio',
  schema,
  image = 'https://poetics.studio/og-image.svg',
  author = 'Poetics Studio',
  publishedDate,
  modifiedDate,
  type = 'website'
}) => {
  const siteTitle = "Poetics Studio";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  // Default Organization Schema - Enhanced for AI Search
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "DesignAgency",
    "name": "Poetics Studio",
    "alternateName": "Poetics",
    "url": "https://poetics.studio",
    "logo": "https://poetics.studio/og-image.svg",
    "image": "https://poetics.studio/og-image.svg",
    "description": "A sense-making studio practice exploring the intersection of technology, design, and art. We create strategic UX, generative systems, and poetic technology.",
    "foundingDate": "2024",
    "slogan": "The soul of making is found in the silence between.",
    "founders": [
      {
        "@type": "Person",
        "name": "Pranshu Chaudhary",
        "jobTitle": "Co-founder"
      },
      {
        "@type": "Person",
        "name": "Udhayan RM",
        "jobTitle": "Co-founder"
      },
      {
        "@type": "Person",
        "name": "Monalisa Thakur",
        "jobTitle": "Co-founder"
      }
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Prayagraj",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "India",
        "postalCode": "211001"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Assagao",
        "addressRegion": "Goa",
        "addressCountry": "India"
      }
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "25.4358",
        "longitude": "81.8463"
      },
      "geoRadius": "Global"
    },
    "knowsAbout": [
      "User Experience Design",
      "Strategic UX",
      "Product Design",
      "Generative Art",
      "Game Design",
      "Blockchain Branding",
      "HMI Design",
      "Design Systems",
      "Interaction Design",
      "Creative Technology"
    ],
    "sameAs": [
      "https://twitter.com/poeticsstudio",
      "https://instagram.com/poeticsstudio",
      "https://linkedin.com/company/poeticsstudio"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "hello@poetics.studio",
      "availableLanguage": ["English", "Hindi"]
    }
  };

  const finalSchema = schema ? { ...defaultSchema, ...schema } : defaultSchema;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper to set meta tags safely
    const setMetaTag = (selector: string, attribute: string, value: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords.join(', '));

    // Open Graph
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', image);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', type);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Poetics Studio');
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'en_IN');

    // Article-specific tags for AI search
    if (type === 'article' && publishedDate) {
      setMetaTag('meta[property="article:published_time"]', 'property', 'article:published_time', publishedDate);
      if (modifiedDate) {
        setMetaTag('meta[property="article:modified_time"]', 'property', 'article:modified_time', modifiedDate);
      }
      setMetaTag('meta[property="article:author"]', 'property', 'article:author', author);
    }

    // Twitter
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', image);

    // Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 3. JSON-LD Injection
    const scriptId = 'poetics-structured-data';
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    // Update content
    script.textContent = JSON.stringify(finalSchema);

  }, [fullTitle, description, keywords, canonicalUrl, image, finalSchema]);

  return null; // This component does not render visual DOM
};

export default SEO;