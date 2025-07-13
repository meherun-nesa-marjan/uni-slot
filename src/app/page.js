
import Bannar from "./Components/Bannar";
import CollegeSection from "./Components/CollegeSection/CollegeSection";
import Gallery from "./Components/Gallery";
import ResearchPapersSection from "./Components/ResearchPapersSection";
import ReviewsSection from "./Components/ReviewsSection";

export default function Home() {
  return (
   <div>
    <Bannar></Bannar>
    <CollegeSection></CollegeSection>
    <Gallery></Gallery>
    <ResearchPapersSection></ResearchPapersSection>
    <ReviewsSection></ReviewsSection>
   </div>
  );
}
