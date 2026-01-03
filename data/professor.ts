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
  name: "Basil Barth Duwa",
  title: "Assistant Professor in Biomedical Engineering",
  university: "Operational Research Center in Healthcare,Near East University, Cyprus",
  bio: `I am an Assistant Professor of Biomedical Engineering with a PhD specializing in biomedical data science and bioinformatics. My research focuses on machine learning–driven disease prediction, particularly for liver diseases, using explainable AI, statistical modeling, and medical imaging. I am a postdoctoral trainee member of EASL, a member of the Royal Society of Biology (UK), and a Global Burden of Disease collaborator.`,
  profileImage: "/profile.jpeg",
  researchPapersUrl: "https://scholar.google.com/citations?user=CFvM1nEAAAAJ&hl=en&oi=ao&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAPF9cFleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafjl4j7BDtQqsPRmNDDkvYzq_Cm4dTxxWBHc4vtQfPJ2eWlHFO9h7Ez_5yNqg_aem_IbVaByEvp-Ej_3TMOSRC2Q",
  siteUrl: "https://example.com", // Update with actual site URL
  email: "basilduwa@gmail.com", // Optional: professor's email
  phone: "", // Optional: professor's phone number
  keywords: "professor, research, academic, publications, university", // SEO keywords
  socialMedia: {
    linkedin: "https://www.linkedin.com/in/basil-b-duwa-b7909a42/", // e.g., "https://linkedin.com/in/username"
    github: "", // e.g., "https://github.com/username"
    twitter: "", // e.g., "https://twitter.com/username" or "https://x.com/username"
    instagram: "https://www.instagram.com/iam.basild_?igsh=YWoyYnJtcm9hZms3", // e.g., "https://instagram.com/username"
    whatsapp: "", // e.g., "https://wa.me/1234567890"
  },
};

