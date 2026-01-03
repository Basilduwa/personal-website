/**
 * Professor Profile Data
 * 
 * Update this file with the professor's information:
 * - name: Full name of the professor
 * - title: Academic title and department
 * - university: Name of the university
 * - bio: Brief biography and description (can be multiple paragraphs)
 * - profileImage: Path to profile image in /public folder (e.g., "/profile.jpg")
 * - researchPapersUrl: URL to research papers (e.g., Google Scholar, university page, etc.)
 * - siteUrl: Full URL of the website (e.g., "https://professor.example.com") - for SEO
 * - email: Contact email (optional, for structured data)
 * - phone: Contact phone number (optional)
 * - keywords: SEO keywords separated by commas (optional)
 * - socialMedia: Social media links (leave empty string "" to hide that platform)
 */
export const professorData = {
  name: "Professor Name",
  title: "Professor of [Department]",
  university: "[University Name]",
  bio: `[Bio description will go here. This is where you'll add a brief
    description about the professor, their research interests, academic
    background, and notable achievements. Keep it concise and
    professional.]`,
  profileImage: "/profile.jpeg",
  researchPapersUrl: "#",
  siteUrl: "https://example.com", // Update with actual site URL
  email: "", // Optional: professor's email
  phone: "", // Optional: professor's phone number
  keywords: "professor, research, academic, publications, university", // SEO keywords
  socialMedia: {
    linkedin: "https://linkedin.com/in/username", // e.g., "https://linkedin.com/in/username"
    github: "", // e.g., "https://github.com/username"
    twitter: "https://twitter.com/username", // e.g., "https://twitter.com/username" or "https://x.com/username"
    instagram: "https://instagram.com/username", // e.g., "https://instagram.com/username"
    whatsapp: "", // e.g., "https://wa.me/1234567890"
  },
};

