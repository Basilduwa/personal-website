import Image from "next/image";
import type { Metadata } from "next";
import { Linkedin, Github, Twitter, Instagram, MessageCircle } from "lucide-react";
import { professorData } from "@/data/professor";

// Generate dynamic metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = professorData.siteUrl;
  const imageUrl = `${siteUrl}${professorData.profileImage}`;
  const description = professorData.bio.substring(0, 160).replace(/\n/g, " ").trim() + "...";

  return {
    title: `${professorData.name} - ${professorData.title}`,
    description: description || `Academic profile of ${professorData.name}, ${professorData.title} at ${professorData.university}`,
    keywords: professorData.keywords,
    authors: [{ name: professorData.name }],
    openGraph: {
      title: `${professorData.name} - ${professorData.title}`,
      description: description || `Academic profile of ${professorData.name}`,
      url: siteUrl,
      siteName: `${professorData.name} - Academic Profile`,
      images: [
        {
          url: imageUrl,
          width: 320,
          height: 320,
          alt: `${professorData.name} Profile Picture`,
        },
      ],
      locale: "en_US",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: `${professorData.name} - ${professorData.title}`,
      description: description || `Academic profile of ${professorData.name}`,
      images: [imageUrl],
    },
    alternates: {
      canonical: siteUrl,
    },
  };
}

export default function Home() {
  // Get social media links that are not empty
  const socialLinks = [
    { name: "LinkedIn", url: professorData.socialMedia.linkedin, icon: Linkedin, color: "bg-blue-600", iconColor: "text-white" },
    { name: "GitHub", url: professorData.socialMedia.github, icon: Github, color: "bg-gray-900 dark:bg-gray-100", iconColor: "text-white dark:text-gray-900" },
    { name: "Twitter", url: professorData.socialMedia.twitter, icon: Twitter, color: "bg-gray-900 dark:bg-gray-100", iconColor: "text-white dark:text-gray-900" },
    { name: "Instagram", url: professorData.socialMedia.instagram, icon: Instagram, color: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500", iconColor: "text-white" },
    { name: "WhatsApp", url: professorData.socialMedia.whatsapp, icon: MessageCircle, color: "bg-green-500", iconColor: "text-white" },
  ].filter((link) => link.url && link.url.trim() !== "");

  // Build sameAs array for structured data
  const sameAsLinks = [
    ...socialLinks.map((link) => link.url),
    ...(professorData.researchPapersUrl !== "#" ? [professorData.researchPapersUrl] : []),
  ];

  // Structured data for Person schema (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: professorData.name,
    jobTitle: professorData.title,
    affiliation: {
      "@type": "Organization",
      name: professorData.university,
    },
    description: professorData.bio.replace(/\n/g, " ").trim(),
    image: `${professorData.siteUrl}${professorData.profileImage}`,
    url: professorData.siteUrl,
    ...(professorData.email && { email: professorData.email }),
    ...(professorData.phone && { telephone: professorData.phone }),
    ...(sameAsLinks.length > 0 && { sameAs: sameAsLinks }),
  };

  return (
    <>
      {/* Structured Data (JSON-LD) for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-background">
        <main className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24 lg:py-32">
          <article className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
            {/* Profile Image Section */}
            <div className="shrink-0">
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-[var(--border)] bg-[var(--border)] shadow-lg sm:h-80 sm:w-80">
                <Image
                  src={professorData.profileImage}
                  alt={`${professorData.name} - ${professorData.title} at ${professorData.university}`}
                  width={320}
                  height={320}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio Section */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <header className="space-y-4">
                <div className="space-y-3">
                  <h1 className="font-serif text-4xl font-bold text-text-primary sm:text-5xl lg:text-6xl">
                    {professorData.name}
                  </h1>
                  <p className="text-xl text-text-secondary sm:text-2xl">
                    {professorData.title}
                  </p>
                  <p className="text-lg text-text-muted">
                    {professorData.university}
                  </p>
                </div>

                {/* Social Media Icons */}
                {socialLinks.length > 0 && (
                  <div className="flex items-center justify-center gap-3 lg:justify-start">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex h-10 w-10 items-center justify-center rounded-full ${social.color} ${social.iconColor} transition-all hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`}
                          aria-label={`Visit ${professorData.name}'s ${social.name} profile`}
                        >
                          <IconComponent className="h-5 w-5" aria-hidden="true" />
                        </a>
                      );
                    })}
                  </div>
                )}

                {/* Contact Information */}
                {(professorData.email || professorData.phone) && (
                  <div className="space-y-1 text-sm text-text-muted">
                    {professorData.email && (
                      <p>
                        <a
                          href={`mailto:${professorData.email}`}
                          className="hover:text-text-primary transition-colors"
                        >
                          {professorData.email}
                        </a>
                      </p>
                    )}
                    {professorData.phone && (
                      <p>
                        <a
                          href={`tel:${professorData.phone.replace(/\s/g, "")}`}
                          className="hover:text-text-primary transition-colors"
                        >
                          {professorData.phone}
                        </a>
                      </p>
                    )}
                  </div>
                )}
              </header>

              <section className="space-y-4 pt-4">
                <div className="text-lg leading-relaxed text-text-primary whitespace-pre-line">
                  {professorData.bio.split("\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 last:mb-0">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </section>

              {/* Research Papers Link */}
              <nav className="pt-6" aria-label="Research resources">
                <a
                  href={professorData.researchPapersUrl}
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--primary)] px-6 py-3 text-lg font-medium text-white transition-all hover:bg-[var(--primary-light)] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
                  aria-label={`View research papers by ${professorData.name}`}
                >
                  View Research Papers
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </article>
        </main>

        {/* Footer */}
        <footer className="mx-auto max-w-4xl px-6 pb-12 pt-8 sm:px-8">
          <div className="flex justify-center">
            <div className="rounded-lg bg-gray-100 px-8 py-3">
              <p className="text-sm font-sans text-text-secondary">
                {professorData.name} © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
