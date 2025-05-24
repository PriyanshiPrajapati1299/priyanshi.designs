import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import "@fontsource/montserrat";
import "../../src/App.css";


const categories = [
  "All",
  "Social Media Posts",
  "YouTube Thumbnails",
  "Magazines",
  "Posters",
  "Presentations",
  "Videos",
  "Linkedin Banners",
  "Business Cards"
];

const designs = [
  {
    id: 1,
    category: "Magazines",
    name: "Campus Root Magazine October 2024",
    fileUrl: "https://drive.google.com/file/d/1N_AfqMa6VzouqM84wf0PdWvCLSP17sNY/preview",
    thumbnailUrl:"https://res.cloudinary.com/ddklcbcvz/image/upload/v1745041067/CampusRootOct_kpxyqn.jpg",
    type: "pdf",
  },
  {
    id: 2,
    category: "Magazines",
    name: "Campus Root Magazine January 2024",
    fileUrl: "https://drive.google.com/file/d/1Nb01AGmw6y12gIpohZHoeR1XENy3Jo3G/preview",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745041066/Campus_Root_z5mv9g.jpg",
    type: "pdf",
  },
  {
    id: 3,
    category: "YouTube Thumbnails",
    name: "The Linguistic Legacy",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1744949233/YTthumb1_qrvcl3.png",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1744949233/YTthumb1_qrvcl3.png",
    type: "image",
  },
  {
    id: 4,
    category: "YouTube Thumbnails",
    name: "The Quest for Friendship",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1744949234/YTthumb2_orjloz.jpg",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1744949234/YTthumb2_orjloz.jpg",
    type: "image",
  },
  {
    id: 5,
    category: "YouTube Thumbnails",
    name: "Whiskers and the Garden of Harmony",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1744949233/YTthum3_qv9axc.png",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1744949233/YTthum3_qv9axc.png",
    type: "image",
  },
  {
    id: 6,
    category: "YouTube Thumbnails",
    name: "The Enchanted Quest",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1744949235/YTthumb4_rw6euc.png",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1744949235/YTthumb4_rw6euc.png",
    type: "image",
  },
  {
    id: 7,
    category: "YouTube Thumbnails",
    name: "The Tortoise's Flight of Grace",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1744949236/YTthumb5_yuiqra.png",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1744949236/YTthumb5_yuiqra.png",
    type: "image",
  },
  {
    id: 8,
    category: "YouTube Thumbnails",
    name: "The Mischievous Harmony",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1744949236/YTthumb6_ig73jh.png",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1744949236/YTthumb6_ig73jh.png",
    type: "image",
  },
  {
    id: 9,
    category: "Social Media Posts",
    name: "Devi Skandmata Navratri Post",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039139/IMG_20250219_202017_adyyd4.jpg",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039139/IMG_20250219_202017_adyyd4.jpg",
    type: "image",
  },
  {
    id: 10,
    category: "Social Media Posts",
    name: "Devi Brahmacharini Navratri Post",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039094/IMG_20250219_201931_ujjdui.jpg",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039094/IMG_20250219_201931_ujjdui.jpg",
    type: "image",
  },
  {
    id: 11,
    category: "Social Media Posts",
    name: "Devi Kushmanda Navratri Post",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039234/IMG_20250219_201954_xsrp2u.jpg",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039234/IMG_20250219_201954_xsrp2u.jpg",
    type: "image",
  },
  {
    id: 12,
    category: "Social Media Posts",
    name: "Happy Vasant Panchami Post",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039259/Vasant_Panchami_ehwph4.jpg",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039259/Vasant_Panchami_ehwph4.jpg",
    type: "image",
  },
  {
    id: 13,
    category: "Social Media Posts",
    name: "Happy Navratri Post",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039306/5_20250418_101217_0004_nycjqc.jpg",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039306/5_20250418_101217_0004_nycjqc.jpg",
    type: "image",
  },
  {
    id: 14,
    category: "Social Media Posts",
    name: "Blynzo Social Media Post",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039196/Social_Media_Posts_20250418_101300_0000_xvsluk.png",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039196/Social_Media_Posts_20250418_101300_0000_xvsluk.png",
    type: "image",
  },
  {
    id: 15,
    category: "Social Media Posts",
    name: "Blynzo Social Media Post",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039316/3_20250418_101217_0002_eevlc5.jpg",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039316/3_20250418_101217_0002_eevlc5.jpg",
    type: "image",
  },
  {
    id: 16,
    category: "Social Media Posts",
    name: "Blynzo Social Media Post",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039376/1_20250418_101217_0000_fqd12h.jpg",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039376/1_20250418_101217_0000_fqd12h.jpg",
    type: "image",
  },
  {
    id: 17,
    category: "Social Media Posts",
    name: "Blynzo Social Media Post",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039375/2_20250418_101217_0001_qi0sxa.jpg",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039375/2_20250418_101217_0001_qi0sxa.jpg",
    type: "image",
  },
  {
    id: 18,
    category: "Social Media Posts",
    name: "Blynzo Social Media Post",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039437/4_20250418_101217_0003_uhej7s.jpg",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039437/4_20250418_101217_0003_uhej7s.jpg",
    type: "image",
  },
  {
    id: 19,
    category: "Business Cards",
    name: "Priyanshi's Business Card",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039343/7_20250418_101821_0001_rqdqf6.jpg",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039343/7_20250418_101821_0001_rqdqf6.jpg",
    type: "image",
  },
  {
    id: 20,
    category: "Business Cards",
    name: "Priyanshi's Business Card",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039414/5_20250418_101821_0000_ftkzar.jpg",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039414/5_20250418_101821_0000_ftkzar.jpg",
    type: "image",
  },
  {
    id: 21,
    category: "Linkedin Banners",
    name: "LinkedIn Banner Design",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039446/Dark_Teal_Geometric_Technology_LinkedIn_Banner_20250418_102545_0001_dkqqni.png",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039446/Dark_Teal_Geometric_Technology_LinkedIn_Banner_20250418_102545_0001_dkqqni.png",
    type: "image",
  },
  {
    id: 22,
    category: "Linkedin Banners",
    name: "LinkedIn Banner Design",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039478/Black_Modern_Minimal_Corporate_Personal_Profile_LinkedIn_Banner_20250418_102301_0000_k6glbs.jpg",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039478/Black_Modern_Minimal_Corporate_Personal_Profile_LinkedIn_Banner_20250418_102301_0000_k6glbs.jpg",
    type: "image",
  },
  {
    id: 23,
    category: "Posters",
    name: "Blynzo Poster",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745391571/Happy_tgyqgz.pdf",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745391415/Happy_xosyme.jpg",
    type: "pdf",
  },
  {
    id: 24,
    category: "Social Media Posts",
    name: "Happy Holika Dahan Post",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039719/ITS_Caters_20250418_101549_0000_f8aatu.png",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745039719/ITS_Caters_20250418_101549_0000_f8aatu.png",
    type: "image",
  },
  {
    id: 25,
    category: "Linkedin Banners",
    name: "LinkedIn Banners Design",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745040368/Dark_Teal_Geometric_Technology_LinkedIn_Banner_20250418_102545_0000_grxahs.png",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745040368/Dark_Teal_Geometric_Technology_LinkedIn_Banner_20250418_102545_0000_grxahs.png",
    type: "image",
  },
  {
    id: 26,
    category: "Social Media Posts",
    name: "Happy Holi Post",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745040378/Blue_Happy_Holi_Greeting_Animated_Social_Media_Video_20250418_101452_0000_ibifbn.png",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745040378/Blue_Happy_Holi_Greeting_Animated_Social_Media_Video_20250418_101452_0000_ibifbn.png",
    type: "image",
  },
  {
    id: 27,
    category: "Videos",
    name: "Maha Shivratri Post",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/video/upload/v1745318768/WhatsApp_Video_2025-04-22_at_16.12.14_c94fd987_wuvyie.mp4",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745319926/Mahashivratri_ms4kva.jpg",
    type: "gif",
  },
  {
    id: 28,
    category: "Presentations",
    name: "My Web Development Internship Presentation",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/video/upload/v1745319814/WSAppt_lj9usy.mp4",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745320052/Screenshot_2025-04-22_163628_dtvyts.png",
    type: "video",
  },
  {
    id: 29,
    category: "Presentations",
    name: "College's Major Project Idea Presentation ",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/video/upload/v1745319141/My_Project_ppt_ckawpt.mp4",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745320054/Screenshot_2025-04-22_163649_rxh0vs.png",
    type: "video",
  },
  {
    id: 30,
    category: "Posters",
    name: "Save Animals on Holi Posters  ",
    fileUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745390865/Save_Animals_Posters_o1iaoz.pdf",
    thumbnailUrl: "https://res.cloudinary.com/ddklcbcvz/image/upload/v1745391123/Happy_poveub.jpg",
    type: "pdf",
  },
];

const DesignGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDesign, setSelectedDesign] = useState(null);
  const scrollRef = useRef(null);

  const filteredDesigns =
    selectedCategory === "All"
      ? designs
      : designs.filter((d) => d.category === selectedCategory);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full min-h-screen p-8 bg-gray-950 text-white pt-20 font-[Montserrat]">
      <h1 className="text-4xl font-bold text-center text-teal-400 mb-6">
        Design Showcase
      </h1>

      {/* Category Buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border-2 text-xs font-medium transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-teal-500 text-white border-teal-400"
                : "bg-gray-800 text-gray-300 border-teal-500 hover:bg-teal-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Scrollable Cards */}
      <div className="relative w-full">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full z-10 hidden md:block hover:bg-teal-500"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-scroll space-x-4 px-4 py-2 scroll-smooth custom-scrollbar-hide"
        >
          {filteredDesigns.map((design) => (
            <motion.div
              key={design.id}
              className="w-64 min-w-[250px] bg-gray-800 rounded-lg shadow-md p-3 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedDesign(design)}
            >
              <div className="h-48 bg-gray-700 rounded-md overflow-hidden">
                <img
                  src={design.thumbnailUrl}
                  alt={design.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-center text-sm text-gray-200">
                {design.name}
              </p>
              <p className="text-xs text-center text-gray-400">
                {design.category}
              </p>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full z-10 hidden md:block hover:bg-teal-500"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Modal for Full Preview */}
      <AnimatePresence>
        {selectedDesign && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 p-5 rounded-lg w-full max-w-4xl shadow-lg relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDesign(null)}
                className="absolute top-4 right-4 text-white bg-red-600 px-3 py-1 rounded hover:bg-red-500"
              >
                ✕
              </button>

              {/* External Link */}
              <a
                href={selectedDesign.fileUrl.replace("/preview", "")}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 left-4 text-teal-400 hover:text-white"
                title="Open in new tab"
              >
                <ExternalLink size={24} />
              </a>

              {selectedDesign.type === "image" && (
                <img
                  src={selectedDesign.thumbnailUrl}
                  alt={selectedDesign.title}
                  className="object-cover w-full h-full"
                />
              )}
              {selectedDesign.type === "pdf" && (
                <img
                  src={selectedDesign.thumbnailUrl}
                  alt={selectedDesign.title}
                  className="object-contain w-1/2 h-1/2 m-auto"
                />
              )}
              {selectedDesign.type === "video" && (
                <video
                  controls
                  className="w-full h-1/2 object-cover relative  p-14"
                  poster={selectedDesign.thumbnailUrl}
                  autoPlay="allow"
                >
                  <source src={selectedDesign.fileUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {selectedDesign.type === "gif" && (
                <video
                  controls
                  className="w-2/5 h-1/2 object-cover relative mx-auto"
                  poster={selectedDesign.thumbnailUrl}
                  autoPlay="allow"
                >
                  <source src={selectedDesign.fileUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <p className="text-center text-teal-400 mt-4 font-medium text-lg">
                {selectedDesign.name}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DesignGallery;
