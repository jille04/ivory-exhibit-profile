
import { useState } from "react";
import MuseumSidebar from "@/components/MuseumSidebar";
import MuseumHeader from "@/components/MuseumHeader";
import ExhibitionRoom from "@/components/ExhibitionRoom";
import ArtifactCard from "@/components/ArtifactCard";

const Index = () => {
  const [activeSection, setActiveSection] = useState("biography");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen museum-texture">
      <MuseumSidebar 
        activeSection={activeSection} 
        onSectionChange={scrollToSection} 
      />
      
      <main className="ml-64 p-8">
        <MuseumHeader />
        
        <div id="biography">
          <ExhibitionRoom 
            title="Biography Hall" 
            subtitle="The Foundation Collection"
          >
            <div className="prose prose-amber max-w-none">
              <p className="text-lg leading-relaxed text-amber-800 serif-elegant mb-6">
                Welcome to my personal museum, where each room tells a story of passion, 
                creativity, and dedication. Like the great masters whose works grace the 
                halls of renowned institutions, I believe every individual's journey is 
                worthy of careful curation and thoughtful presentation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <ArtifactCard
                  title="Early Foundations"
                  description="Born in the digital renaissance of the 1990s, I discovered my passion for creating beautiful, functional experiences that bridge the gap between art and technology."
                  year="1992-2010"
                  tags={["Origins", "Discovery", "Foundation"]}
                />
                
                <ArtifactCard
                  title="Professional Evolution"
                  description="Over a decade of crafting digital experiences, each project adding new dimensions to my understanding of design, user experience, and the delicate balance between form and function."
                  year="2010-Present"
                  tags={["Growth", "Expertise", "Innovation"]}
                />
              </div>
            </div>
          </ExhibitionRoom>
        </div>

        <div id="portfolio">
          <ExhibitionRoom 
            title="Portfolio Gallery" 
            subtitle="Masterworks & Innovations"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ArtifactCard
                title="E-Commerce Renaissance"
                description="A complete digital marketplace transformation featuring intuitive navigation, elegant product showcases, and seamless user journeys that increased conversions by 340%."
                image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"
                year="2023"
                tags={["React", "TypeScript", "E-commerce"]}
              />
              
              <ArtifactCard
                title="Museum Archive System"
                description="Digital cataloging system for a prestigious art institution, featuring advanced search capabilities, detailed provenance tracking, and virtual exhibition tools."
                image="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=300&fit=crop"
                year="2022"
                tags={["Vue.js", "Database", "Cultural Heritage"]}
              />
              
              <ArtifactCard
                title="Architectural Visualization"
                description="Interactive 3D platform showcasing architectural projects with immersive virtual tours, detailed material specifications, and real-time collaboration tools."
                image="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=300&fit=crop"
                year="2023"
                tags={["Three.js", "WebGL", "Architecture"]}
              />
            </div>
          </ExhibitionRoom>
        </div>

        <div id="hobbies">
          <ExhibitionRoom 
            title="Personal Collections" 
            subtitle="Passions & Pursuits"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <ArtifactCard
                  title="Antiquarian Books"
                  description="Collector of rare manuscripts and first editions, with particular interest in illuminated texts and historical design treatises from the Renaissance period."
                  tags={["Literature", "History", "Preservation"]}
                />
                
                <ArtifactCard
                  title="Classical Music"
                  description="Amateur pianist and devoted listener of Baroque and Romantic compositions. Regular attendee of symphony performances and chamber music recitals."
                  tags={["Music", "Performance", "Culture"]}
                />
              </div>
              
              <div className="space-y-6">
                <ArtifactCard
                  title="Botanical Illustration"
                  description="Traditional watercolor studies of botanical specimens, combining scientific accuracy with artistic expression. Featured in local gallery exhibitions."
                  tags={["Art", "Science", "Nature"]}
                />
                
                <ArtifactCard
                  title="Heritage Architecture"
                  description="Passionate documenter of historical buildings and architectural details. Photography and sketching expeditions to preserve cultural landmarks."
                  tags={["Architecture", "Photography", "Heritage"]}
                />
              </div>
            </div>
          </ExhibitionRoom>
        </div>

        <div id="contact">
          <ExhibitionRoom 
            title="Visitor Information" 
            subtitle="Connect & Collaborate"
          >
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-lg text-amber-800 serif-elegant leading-relaxed">
                  I welcome inquiries from fellow creators, institutions, and those who appreciate 
                  the intersection of classical aesthetics and modern innovation. Let us create 
                  something extraordinary together.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <ArtifactCard
                  title="Professional Inquiries"
                  description="For project collaborations, consulting opportunities, or speaking engagements."
                >
                  <div className="mt-4 p-4 bg-amber-100 rounded-lg">
                    <p className="text-amber-800 serif-elegant">
                      <strong>Email:</strong> alexandra@thornfield.studio<br />
                      <strong>Studio:</strong> +1 (555) 123-4567
                    </p>
                  </div>
                </ArtifactCard>
                
                <ArtifactCard
                  title="Social Connections"
                  description="Connect with me across various platforms to see my latest work and thoughts."
                >
                  <div className="mt-4 p-4 bg-amber-100 rounded-lg">
                    <p className="text-amber-800 serif-elegant">
                      <strong>LinkedIn:</strong> /in/alexandra-thornfield<br />
                      <strong>Portfolio:</strong> thornfield.studio<br />
                      <strong>Instagram:</strong> @athornfield.art
                    </p>
                  </div>
                </ArtifactCard>
              </div>
              
              <div className="mt-8 text-center">
                <div className="inline-block p-6 stone-plaque rounded-lg">
                  <p className="text-amber-800 serif-elegant italic">
                    "In every project, I seek to create not just solutions, but lasting works of digital craftsmanship 
                    that honor both tradition and innovation."
                  </p>
                  <p className="text-amber-700 serif-elegant mt-2 text-sm">
                    − Alexandra Thornfield
                  </p>
                </div>
              </div>
            </div>
          </ExhibitionRoom>
        </div>
      </main>
    </div>
  );
};

export default Index;
