import { useRef } from "react";

import badgeIcon from "../../assets/Images/badge-icon.png";
import bookIcon from "../../assets/Images/book-icon.png";
import peopleIcon from "../../assets/Images/people-icon.png";
import heroImg1 from "../../assets/Images/hero-img-1.jpg";
import heroImg2 from "../../assets/Images/hero-img-2.jpg";

import iconOpenBook from "../../assets/Images/iconOpenBook.jpg";
import iconGlobalOutlook from "../../assets/Images/iconGlobalOutlook.jpg";
import iconFacilities from "../../assets/Images/iconFacilities.jpg";
import iconTutors from "../../assets/Images/iconTutors.jpg";
import programDaycare from "../../assets/Images/programDaycare-img.jpg";
import programCreche from "../../assets/Images/programCreche-img.jpg";
import programNursery from "../../assets/Images/programNursery-img.jpg";
import programPrimary from "../../assets/Images/programPrimary-img.jpg";
import programSecondary from "../../assets/Images/programSecondary-img.jpg";
import programSummer from "../../assets/Images/programSummer-img.jpg";



const programs = [
  {
    image: programDaycare,
    title: "Daycare",
    description: "Nurturing care in a safe, stimulating environment for your little ones.",
  },
  {
    image: programCreche,
    title: "Creche",
    description: "Play-based learning that builds social skills and early development.",
  },
  {
    image: programNursery,
    title: "Nursery",
    description: "Foundation years focused on exploration, creativity, and pre-literacy.",
  },
  {
    image: programPrimary,
    title: "Primary",
    description: "Comprehensive curriculum building strong academic foundations and character.",
  },
  {
    image: programSecondary,
    title: "Secondary",
    description: "Advanced learning preparing students for higher education and beyond",
  },
  {
    image: programSummer,
    title: "Summer",
    description: "Engaging summer programs combining learning, activities, and fun.",
  },
];

const whyUsCards = [
  {
    icon: iconOpenBook,
    title: "Solid Educational Foundation",
    description:
      "We provide a strong and reliable academic foundation that supports sound learning, intellectual growth, and long-term academic success.",
  },
  {
    icon: iconGlobalOutlook,
    title: "Global Outlook",
    description:
      "Our curriculum is broad in scope, multidimensional in content, and global in outlook, offering unbridled opportunities for competitiveness and success.",
  },
  {
    icon: iconFacilities,
    title: "State-of-the-Art Facilities",
    description:
      "Our modern facilities are carefully designed to support effective teaching, meaningful learning, and academic excellence in a serene environment.",
  },
  {
    icon: iconTutors,
    title: "Seasoned Administrators & Tutors",
    description:
      "Our school is led by experienced administrators and supported by well-trained tutors with unbeatable track records and commitment to excellence.",
  },
];

const testimonials = [
  {
    quote:
      "My child's academic performance and confidence have improved greatly since joining Remilekun International Schools. The teachers are dedicated, and the learning environment is very supportive. I am impressed with the school's discipline and academic standards.",
    name: "Mrs A. Olaleye",
    role: "Parent",
  },
  {
    quote:
      "Remilekun International Schools provides a solid educational foundation with strong moral values. I appreciate the attention given to both academics and character development. The school truly lives up to its motto, \u201cKnowledge is Light.\u201d",
    name: "Mr C. Eze",
    role: "Parent",
  },
  {
    quote:
      "I am pleased with the level of discipline and academic excellence at Remilekun International Schools. Communication with parents is clear, and the staff are very professional. I would confidently recommend the school to other parents.",
    name: "Mr K. Adeyemi",
    role: "Parent",
  },
  {
    quote:
      "I am pleased with the level of Honesty and academic excellence at Remilekun International Schools. Communication with parents is clear. I would confidently recommend the school to other parents.",
    name: "Mr H. Adegbami",
    role: "Parent",
  },
];


export default function LandingPage() {
  return (
    <>
      {/* ---------- Hero Section ---------- */}
      <section className="bg-[#fbfbfb] px-4 py-12 sm:px-6 lg:px-20 lg:py-24 border-[red] border">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          {/* Left: copy */}
          <div className="flex w-full flex-col items-start gap-6 lg:min-w-0 lg:flex-1 lg:gap-[52px] lg:max-w-[650px]">
            <div className="flex items-center gap-4 rounded-[30px] border border-[#4caf50] bg-[#e0ffe1] px-6 py-3">
              <img src={badgeIcon} alt="" className="size-6" />
              <p className="whitespace-nowrap font-lato text-sm text-[#4caf50] sm:text-base">
                Accredited Excellence Since 2004
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6">
              <h1 className="font-lato text-4xl leading-tight tracking-[0.5px] text-black sm:text-5xl lg:text-[50px]">
                Raising First-Class Minds for a Global Future
              </h1>
              <p className="max-w-xl font-lato text-lg tracking-[0.23px] text-[#7c7c7c] sm:text-xl lg:text-[23px]">
                Remilekun International Schools is committed to delivering solid foundation, sound
                academic excellence, and disciplined learning that prepares every child for success
              </p>
            </div>

            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-9">
              <button className="rounded-lg bg-[#4caf50] px-12 py-4 font-lato text-lg text-[#fdf6e3] transition-colors hover:bg-[#419a45] sm:text-xl lg:text-2xl">
                Schedule Visit
              </button>
              <button className="rounded-lg border-2 border-[#d5d5d5] px-12 py-4 font-lato text-lg text-[#334155] transition-colors hover:border-[#4caf50] hover:text-[#4caf50] sm:text-xl lg:text-2xl">
                Enroll Now
              </button>
            </div>
          </div>

          {/* Right: image collage */}
          {/* --- Mobile / tablet: simple stacked layout --- */}
          <div className="grid w-full max-w-md grid-cols-2 gap-3 lg:hidden">
            <img
              src={heroImg1}
              alt="Students at Remilekun Legacy Schools"
              className="col-span-2 h-56 w-full rounded-2xl border-4 border-white object-cover shadow-md sm:h-72"
            />
            <img
              src={heroImg2}
              alt="Classroom activity"
              className="col-span-2 h-40 w-full rounded-2xl border-4 border-white object-cover shadow-md sm:h-56"
            />
            <HeroStatCard icon={bookIcon} iconBg="#ecffed" value="A+" label="Academic Rating" />
            <HeroStatCard icon={peopleIcon} iconBg="#fdf6e3" value="90%" label="Parent Satisfaction" />
          </div>

          {/* --- Desktop: overlapping collage matching Figma exactly --- */}
          <div className="relative hidden aspect-[630/646] h-auto w-full shrink lg:ml-8 lg:block lg:max-w-[630px]">
            <img
              src={heroImg1}
              alt="Students at Remilekun Legacy Schools"
              className="absolute left-[17.3%] top-0 h-[71.2%] w-[82.7%] rounded-3xl border-6 border-white object-cover shadow-[0px_2px_8px_0px_rgba(0,0,0,0.16)]"
            />
            <img
              src={heroImg2}
              alt="Classroom activity"
              className="absolute left-0 top-[46.4%] h-[53.6%] w-[60.3%] rounded-3xl border-6 border-white object-cover shadow-[0px_2px_8px_0px_rgba(0,0,0,0.16)]"
            />
            <div className="absolute left-[67.5%] top-[57.9%]">
              <HeroStatCard icon={peopleIcon} iconBg="#fdf6e3" value="90%" label="Parent Satisfaction" />
            </div>
            <div className="absolute left-[14.8%] top-[43%]">
              <HeroStatCard icon={bookIcon} iconBg="#ecffed" value="A+" label="Academic Rating" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- About Us preview, Why Us, Programs, Testimonials, Big CTA go here next ---------- */}
      <section className="px-4 py-12 sm:px-6 lg:px-20 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-[76px]">
          {/* Left: text */}
          <div className="flex w-full flex-col items-start gap-6 lg:max-w-[682px] lg:flex-1 lg:gap-[27px]">
            <div className="flex items-center justify-center rounded-3xl border border-[#4caf50] bg-[#e0ffe1] px-6 py-3">
              <p className="whitespace-nowrap font-lato text-sm font-semibold text-[#4caf50] sm:text-base">
                About Us
              </p>
            </div>
 
            <div className="flex flex-col items-start gap-4 text-black sm:gap-6 lg:gap-[27px]">
              <h2 className="font-baloo text-2xl font-semibold sm:text-3xl lg:text-[32px]">
                Welcome to Remilekun Legacy Schools
              </h2>
              <div className="flex flex-col gap-4 font-lato text-base leading-relaxed sm:text-lg lg:text-[24px]">
                <p>
                  Remilekun International Schools is a government-approved educational institution
                  committed to providing solid educational foundation, sound and round education,
                  high academic premium, sound morals, and deep spirituality in a child-friendly,
                  learn-friendly environment.
                </p>
                <p>
                  Widely known for our excellent track records and imperishable legacies, we deliver
                  quality education through state-of-the-art facilities, seasoned administrators, and
                  top-flight tutors with proven experience. Our programmes are broad in scope,
                  multidimensional in content, and global in outlook, offering every child the
                  opportunity to succeed.
                </p>
                <p>At Remilekun International Schools, every child stands a chance to be at the very top</p>
              </div>
            </div>
 
            <button className="flex items-center gap-2.5">
              <span className="font-lato text-lg text-[#4caf50] sm:text-xl lg:text-2xl">Learn More</span>
              <span className="flex size-[30px] items-center justify-center rounded-full border border-[#4caf50]">
                <svg viewBox="0 0 12 24" className="h-4 w-2.5 fill-none stroke-[#4caf50]" strokeWidth="2">
                  <path d="M2 4l6 8-6 8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
 
          {/* Right: image */}
          <div className="aspect-[522/514] w-full overflow-hidden rounded-[11px] bg-[#d9d9d9] lg:max-w-[522px] lg:flex-1">
            <img
              src={heroImg1}
              alt="Remilekun Legacy Schools campus"
              className="size-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------- Why Us Section ---------- */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-20 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:gap-16">
          <div className="flex flex-col items-center gap-4 text-center lg:gap-6">
            <div className="flex items-center justify-center rounded-3xl border border-[#4caf50] bg-[#e0ffe1] px-6 py-3">
              <p className="whitespace-nowrap font-lato text-sm font-semibold text-[#4caf50] sm:text-base">
                Why Us?
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="font-baloo text-2xl font-semibold text-black sm:text-3xl lg:text-[32px]">
                Why choose us?
              </h2>
              <p className="max-w-xl font-lato text-base text-[#616161] sm:text-lg lg:text-2xl">
                Discover what makes our institution the perfect choice for your child's educational journey
              </p>
            </div>
          </div>
 
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
            {whyUsCards.map((card) => (
              <WhyUsCard key={card.title} icon={card.icon} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Programs Section ---------- */}
      <section className="px-4 py-12 sm:px-6 lg:px-20 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:gap-16">
          <div className="flex flex-col items-center gap-4 text-center lg:max-w-[820px] lg:gap-6">
            <div className="flex items-center justify-center rounded-3xl border border-[#4caf50] bg-[#e0ffe1] px-6 py-3">
              <p className="whitespace-nowrap font-lato text-sm font-semibold text-[#4caf50] sm:text-base">
                Programs
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h2 className="font-baloo text-2xl font-semibold text-black sm:text-3xl lg:text-[32px]">
                Programs Offered at Different Levels
              </h2>
              <p className="max-w-xl font-lato text-base tracking-[0.72px] text-[#616161] sm:text-lg lg:text-2xl">
                Carefully structured programs that support academic growth and holistic development at every level.
              </p>
            </div>
          </div>
 
          <div className="grid w-full grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-3">
            {programs.map((program) => (
              <ProgramCard key={program.title} image={program.image} title={program.title} description={program.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Testimonials Section ---------- */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-20 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:gap-10">
          <div className="flex flex-col items-start gap-4 lg:max-w-[687px] lg:gap-6">
            <div className="flex items-center justify-center rounded-3xl border border-[#4caf50] bg-[#e0ffe1] px-6 py-3">
              <p className="whitespace-nowrap font-lato text-sm font-semibold text-[#4caf50] sm:text-base">
                Testimonials
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 lg:gap-3">
              <h2 className="font-baloo text-2xl font-semibold text-black sm:text-3xl lg:text-[32px]">
                What Parents Say About Us
              </h2>
              <p className="font-lato text-base text-[#616161] sm:text-lg lg:text-2xl">
                We are proud of the positive feedback from parents and guardians who trust us with
                their children's education.
              </p>
            </div>
          </div>
 
          <TestimonialsCarousel />
        </div>
      </section>

      {/* ---------- Big CTA Section ---------- */}
      <section
        className="px-4 py-12 sm:px-6 lg:px-[188px] lg:py-16"
        style={{
          backgroundImage:
            "linear-gradient(-69deg, rgba(255,240,207,0.2) 1%, rgb(255,255,255) 50%, rgba(224,255,225,0.5) 98%)",
        }}
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 lg:gap-10">
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <div className="flex items-center justify-center rounded-3xl border border-[#4caf50] bg-[#e0ffe1] px-6 py-3">
                <p className="whitespace-nowrap font-lato text-sm font-semibold text-[#4caf50] sm:text-base">
                  ✨ Admissions Now Open
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 text-center">
                <h2 className="font-baloo text-3xl font-semibold sm:text-4xl lg:text-[49px]">
                  <span className="text-black">Ready to take the </span>
                  <span className="bg-gradient-to-r from-[#4caf50] to-[#1e75bb] bg-clip-text text-transparent">
                    next step?
                  </span>
                </h2>
                <p className="font-lato text-base tracking-[0.56px] text-black sm:text-lg lg:text-[28px]">
                  Admission is in progress. Join a school built on sound and round education, high
                  academic premium, and excellent moral standards.
                </p>
              </div>
            </div>
 
            <div className="flex flex-wrap items-center justify-center gap-3">
              <CtaFeaturePill icon={bookIcon} label="Academic Excellence" />
              <CtaFeaturePill icon={peopleIcon} label="Supportive Community" />
              <CtaFeaturePill icon={badgeIcon} label="Character Growth" />
            </div>
          </div>
 
          <button className="rounded bg-[#4caf50] px-8 py-4 font-lato text-lg text-white transition-colors hover:bg-[#419a45] sm:text-xl lg:text-2xl">
            Contact Us Today
          </button>
        </div>
      </section>
 
    </>
  );
}


 

function CtaFeaturePill({ icon, label }) {
    return (
    <div className="flex items-center justify-center gap-4 rounded-3xl border border-[#f1f1f1] bg-white px-4 py-3 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.05)]">
        <img src={icon} alt="" className="size-6" />
        <p className="whitespace-nowrap text-center font-lato text-sm text-black sm:text-base">{label}</p>
    </div>
    );
}

function TestimonialCard({ quote, name, role }) {
  return (
    <div className="flex w-[85%] shrink-0 snap-start flex-col items-start gap-4 rounded-2xl border border-[#f3f4f6] bg-white px-6 py-8 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] sm:w-[70%] sm:px-8 sm:py-10 lg:w-[calc(33.333%-16px)]">
      <div className="flex items-center gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 24 24" className="size-5 fill-[#4caf50] sm:size-6">
            <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.9-6.2 3.9 1.6-7L2 9.2l7.1-.6L12 2z" />
          </svg>
        ))}
      </div>
      <p className="font-lato text-base tracking-[0.6px] text-black sm:text-lg lg:text-xl">{quote}</p>
      <div className="flex flex-col items-start gap-2">
        <p className="font-lato font-semibold text-black">{name}</p>
        <p className="font-lato text-black">{role}</p>
      </div>
    </div>
  );
}

function TestimonialsCarousel() {
  const scrollRef = useRef(null);
 
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.firstElementChild?.offsetWidth ?? 300;
    container.scrollBy({ left: direction === "left" ? -(cardWidth + 24) : cardWidth + 24, behavior: "smooth" });
  };
 
  return (
    <div className="flex flex-col items-end gap-6 lg:gap-8">
      <div
        ref={scrollRef}
        className="flex w-full snap-x snap-mandatory scroll-pl-4 gap-6 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
 
      <div className="flex items-center gap-4 self-center lg:self-end">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => scroll("left")}
          className="flex size-[50px] items-center justify-center rounded-full bg-[#f6f6f6] transition-colors hover:bg-[#e5e5e5]"
        >
          <svg viewBox="0 0 20 20" className="size-5 rotate-180 fill-none stroke-[#3a3a3a]" strokeWidth="2">
            <path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => scroll("right")}
          className="flex size-[50px] items-center justify-center rounded-full bg-[#f6f6f6] transition-colors hover:bg-[#e5e5e5]"
        >
          <svg viewBox="0 0 20 20" className="size-5 fill-none stroke-[#3a3a3a]" strokeWidth="2">
            <path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
 
function ProgramCard({ image, title, description }) {
  return (
    <div className="flex flex-col items-start gap-4 sm:gap-6">
      <img
        src={image}
        alt={title}
        className="h-64 w-full rounded-3xl object-cover sm:h-72 lg:h-[326px]"
      />
      <div className="flex flex-col items-center gap-1 text-center w-full">
        <p className="font-baloo text-3xl font-semibold text-black sm:text-4xl">{title}</p>
        <p className="font-lato text-base text-[#4b5563] sm:text-lg">{description}</p>
      </div>
    </div>
  );
}
 

 
function WhyUsCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-start gap-6 rounded-2xl border border-[#f3f4f6] bg-white px-5 py-6 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] sm:gap-8 sm:px-6 sm:py-8">
      <div className="flex size-16 items-center justify-center rounded-xl border border-[#e5e7eb] bg-[#e0ffe1] sm:size-20">
        <img src={icon} alt="" className="size-10 sm:size-[45px]" />
      </div>
      <div className="flex flex-col items-start gap-3 sm:gap-6">
        <p className="font-lato text-xl font-semibold text-black sm:text-2xl">{title}</p>
        <p className="font-lato text-base text-[#4b5563] sm:text-lg">{description}</p>
      </div>
    </div>
)};



function HeroStatCard({ icon, iconBg, value, label }) {
  return (
    <div className="flex w-[170px] items-center justify-center rounded-xl border border-[#e5e5e5] bg-white px-3 py-3.5 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.05)]">
      <div className="flex items-start gap-4">
        <div className="flex size-8 items-center justify-center rounded" style={{ backgroundColor: iconBg }}>
          <img src={icon} alt="" className="size-6" />
        </div>
        <div className="flex flex-col items-start justify-center gap-1 text-center">
          <p className="font-lato text-2xl font-bold text-black">{value}</p>
          <p className="whitespace-nowrap font-lato text-[11px] text-black">{label}</p>
        </div>
      </div>
    </div>
  );
}