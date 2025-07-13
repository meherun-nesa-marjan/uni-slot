import Link from "next/link";

export default function ResearchPapersSection() {
  const researchPapers = [
    {
      title: "🌱 Climate-Resilient Farming Techniques",
      link: "https://example.com/research1.pdf",
    },
    {
      title: "🧬 Biodiversity Conservation in Wetlands",
      link: "https://example.com/research2.pdf",
    },
    {
      title: "🌾 Soil Health Improvement Using Bio-fertilizers",
      link: "https://example.com/research3.pdf",
    },
    {
      title: "🌍 Environmental Awareness Campaign Impact Study",
      link: "https://example.com/research4.pdf",
    },
  ];

  return (
    <section className="my-12 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        🔬 Recommended Research Papers by Students
      </h2>

      <ul className="space-y-4">
        {researchPapers.map((paper, index) => (
          <li key={index} className="bg-white shadow p-4 rounded-md hover:bg-gray-50 transition">
            <Link
              href={paper.link}
              target="_blank"
              className="text-blue-600 font-medium hover:underline"
            >
              {paper.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
