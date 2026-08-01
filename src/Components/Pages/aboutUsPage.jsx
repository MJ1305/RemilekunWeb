import heroBannerImg from "../../assets/Images/hero-img-1.jpg";
import ourStoryImg from "../../assets/Images/about-us-groupimg.jpg";
import iconDiscipline from "../../assets/Images/iconDiscipline.png";
import iconExcellence from "../../assets/Images/iconExcellence.png";
import iconIntegrity from "../../assets/Images/iconIntegrity.png";
import leader1 from "../../assets/Images/leader-1.jpg";
import leader2 from "../../assets/Images/leader-2.jpg";
import leader3 from "../../assets/Images/leader-3.jpg";
import leader4 from "../../assets/Images/leader-4.jpg";
import leader5 from "../../assets/Images/leader-5.jpg";
import boardDirector from "../../assets/Images/board-director.jpg";
import boardVP1 from "../../assets/Images/leader-2.jpg";
import boardVP2 from "../../assets/Images/leader-4.jpg";
import boardHead1 from "../../assets/Images/leader-3.jpg";
import boardHead2 from "../../assets/Images/leader-5.jpg";
import bookIcon from "../../assets/Images/book-icon.png";
import peopleIcon from "../../assets/Images/people-icon.png";
import badgeIcon from "../../assets/Images/badge-icon.png";

export default function AboutUsPage() {
  return (
    <>
      {/* ---------- Hero Banner ---------- */}
      <section className="relative flex h-80 items-center justify-center overflow-hidden sm:h-96 md:h-[420px]">
        <img
          src={heroBannerImg}
          alt="Remilekun Legacy Schools students"
          className="absolute inset-0 size-full object-cover object-[center_25%]"
        />
        <div className="absolute inset-0 bg-[rgba(102,102,102,0.56)]" />
        <h1 className="relative font-baloo text-4xl font-semibold text-white sm:text-5xl">
          About Us
        </h1>
      </section>

      {/* ---------- Our Story ---------- */}
      <section className="px-20 py-24">
        <div className="mx-auto flex max-w-7xl items-center gap-[76px]">
            <div className="flex max-w-[682px] flex-1 flex-col items-start gap-[27px]">
            <h2 className="font-baloo text-[32px] font-semibold text-black">Our Story</h2>
            <div className="flex flex-col gap-4 font-lato text-[24px] leading-relaxed text-black">
                <p>
                Remilekun International Schools is a government-approved educational institution
                committed to providing solid educational foundation, sound and round education, high
                academic premium, sound morals, and deep spirituality in a child-friendly, learn-friendly
                environment.
                </p>
                <p>
                Widely known for our excellent track records and imperishable legacies, we deliver
                quality education through state-of-the-art facilities, seasoned administrators, and
                top-flight tutors with proven experience. Our programmes are broad in scope,
                multidimensional in content, and global in outlook, offering every child the opportunity
                to succeed.
                </p>
                <p>At Remilekun International Schools, every child stands a chance to be at the very top</p>
            </div>
            </div>
            <div className="aspect-[522/514] w-[522px] flex-1 overflow-hidden rounded-[11px] bg-[#d9d9d9]">
            <img src={ourStoryImg} alt="Remilekun Legacy Schools campus" className="size-full object-cover" />
            </div>
        </div>
      </section>

      {/* ---------- Mission & Vision ---------- */}
      <section className="px-20 py-16">
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-[66px]">
        <div className="flex flex-col items-center gap-4 text-center">
        <h3 className="font-baloo text-[32px] font-semibold text-black">Our Mission</h3>
        <p className="max-w-[543px] font-lato text-[24px] leading-relaxed text-black">
            To provide sound and round education built on a solid academic foundation, strong moral
            discipline, and a supportive learning environment that helps every child reach their full
            potential.
        </p>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
        <h3 className="font-baloo text-[32px] font-semibold text-black">Our Vision</h3>
        <p className="max-w-[512px] font-lato text-[24px] leading-relaxed text-black">
            To nurture confident, disciplined, and well-rounded learners prepared to excel academically
            and thrive in a global world.
        </p>
        </div>
    </div>
      </section>

      {/* ---------- Core Values ---------- */}
      <section className="bg-[#195d27] px-20 py-[89px]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-baloo text-[32px] font-semibold text-white">Core Values</h2>
            <p className="max-w-xl font-lato text-2xl text-white">
                Discover what makes our institution the perfect choice for your child's educational journey
            </p>
            </div>

            <div className="grid w-full grid-cols-3 gap-5">
            {coreValues.map((value) => (
                <div
                key={value.title}
                className="flex flex-col items-center gap-6 rounded-2xl border border-[#f3f4f6] bg-white px-6 py-8 text-center shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]"
                >
                <div className="flex size-20 items-center justify-center rounded-xl border border-[#e5e7eb] bg-[#e0ffe1]">
                    <img src={value.icon} alt="" className="size-[45px]" />
                </div>
                <div className="flex flex-col items-center gap-4">
                    <p className="font-lato text-2xl font-semibold text-black">{value.title}</p>
                    <p className="font-lato text-lg text-[#4b5563]">{value.description}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
      </section>
      
     {/* ---------- Leadership Team ---------- */}
     {/* Note: the Figma file repeats one placeholder name/role ("Dara Ogunjimi" / "College Principal")
     on all 5 leadership cards — update the `leadershipTeam` array below with real names/titles/photos. */}
     <section className="px-20 py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-14">
            <div className="flex max-w-[820px] flex-col items-center gap-6 text-center">
            <div className="flex items-center justify-center rounded-3xl border border-[#4caf50] bg-[#e0ffe1] px-6 py-3">
                <p className="whitespace-nowrap font-lato text-base font-semibold text-[#4caf50]">Leadership</p>
            </div>
            <div className="flex flex-col items-center gap-2">
                <h2 className="font-baloo text-[32px] font-semibold text-black">Leadership Team</h2>
                <p className="max-w-xl font-lato text-2xl text-[#616161]">
                A dedicated team providing academic direction, guidance, and leadership across the school.
                </p>
            </div>
            </div>

            <div className="flex w-full flex-col items-center gap-8">
            <div className="flex max-w-[808px] justify-center gap-6">
                {leadershipTeam.slice(0, 2).map((member) => (
                <TeamCard key={member.name + member.role} photo={member.photo} name={member.name} role={member.role} />
                ))}
            </div>
            <div className="flex w-full justify-center gap-6">
                {leadershipTeam.slice(2, 5).map((member) => (
                <TeamCard key={member.name + member.role} photo={member.photo} name={member.name} role={member.role} />
                ))}
            </div>
            </div>
        </div>
     </section>

     {/* ---------- Meet the Board ---------- */}
     <section className="bg-[#fbfbfb] px-20 py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-14">
            <div className="flex max-w-[820px] flex-col items-center gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
                <h2 className="font-baloo text-[32px] font-semibold text-black">Meet the Board</h2>
                <p className="max-w-xl font-lato text-2xl text-[#616161]">
                A dedicated team providing academic direction, guidance, and leadership across the school.
                </p>
            </div>
            <div className="flex items-center justify-center rounded-3xl border border-[#4caf50] bg-[#e0ffe1] px-6 py-3">
                <p className="whitespace-nowrap font-lato text-base font-semibold text-[#4caf50]">The Board</p>
            </div>
            </div>

            <div className="flex w-full items-stretch gap-8">
            {/* Director — large card */}
            <div className="flex w-[542px] flex-col items-center gap-6">
                <img
                src={boardDirector}
                alt="The Ven. 'Tunde Oduwole"
                className="aspect-[542/636] w-full rounded-2xl object-cover"
                />
                <div className="flex flex-col items-center gap-1 text-center">
                <p className="font-baloo text-3xl font-semibold text-black">The Ven. 'Tunde Oduwole</p>
                <p className="font-lato text-xl text-[#4b5563]">School Director</p>
                </div>
            </div>

            {/* Vice Principals + Heads — 2x2 grid */}
            <div className="grid flex-1 grid-cols-2 gap-8">
                {boardMembers.map((member) => (
                <TeamCard key={member.name} photo={member.photo} name={member.name} role={member.role} />
                ))}
            </div>
            </div>
        </div>
     </section>

     {/* ---------- Big CTA ---------- */}
     <section
        className="px-[188px] py-16"
        style={{
            backgroundImage:
            "linear-gradient(-69deg, rgba(255,240,207,0.2) 1%, rgb(255,255,255) 50%, rgba(224,255,225,0.5) 98%)",
        }}
        >
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-6">
                <div className="flex items-center justify-center rounded-3xl border border-[#4caf50] bg-[#e0ffe1] px-6 py-3">
                <p className="whitespace-nowrap font-lato text-base font-semibold text-[#4caf50]">
                    ✨ Admissions Now Open
                </p>
                </div>
                <div className="flex flex-col items-center gap-3 text-center">
                <h2 className="font-baloo text-[49px] font-semibold">
                    <span className="text-black">Ready to take the </span>
                    <span className="bg-gradient-to-r from-[#4caf50] to-[#1e75bb] bg-clip-text text-transparent">
                    next step?
                    </span>
                </h2>
                <p className="font-lato text-[28px] text-black">
                    Admission is in progress. Join a school built on sound and round education, high
                    academic premium, and excellent moral standards.
                </p>
                </div>
            </div>

            <div className="flex items-center justify-center gap-3">
                <CtaFeaturePill icon={bookIcon} label="Academic Excellence" />
                <CtaFeaturePill icon={peopleIcon} label="Supportive Community" />
                <CtaFeaturePill icon={badgeIcon} label="Character Growth" />
            </div>
            </div>

            <button className="rounded bg-[#4caf50] px-8 py-4 font-lato text-2xl text-white transition-colors hover:bg-[#419a45]">
            Contact Us Today
            </button>
        </div>
     </section>
    </>
  );
}

const coreValues = [
  {
    icon: iconDiscipline,
    title: "Discipline",
    description:
      "We believe discipline shapes character, focus, and responsibility, forming the foundation for academic and personal success.",
  },
  {
    icon: iconExcellence,
    title: "Excellence",
    description:
      "We are committed to high standards in academics, conduct, and service, encouraging every child to strive for the very best.",
  },
  {
    icon: iconIntegrity,
    title: "Integrity",
    description:
      "We uphold honesty, strong moral principles, and accountability in learning, leadership, and daily conduct.",
  },
];

// TODO: replace with real leadership team names/roles/photos — Figma currently repeats one placeholder across all 5
const leadershipTeam = [
  { photo: leader1, name: "Dara Ogunjimi", role: "College Principal" },
  { photo: leader2, name: "Dara Ogunjimi", role: "College Principal" },
  { photo: leader3, name: "Dara Ogunjimi", role: "College Principal" },
  { photo: leader4, name: "Dara Ogunjimi", role: "College Principal" },
  { photo: leader5, name: "Dara Ogunjimi", role: "College Principal" },
];

const boardMembers = [
  { photo: boardVP1, name: "Desire Agbawo", role: "Vice Principal (Academics)" },
  { photo: boardVP2, name: "Isaac Eze", role: "Vice Principal (Administration)" },
  { photo: boardHead1, name: "Rose Akpan", role: "Primary School Headmistress" },
  { photo: boardHead2, name: "Bisola Oyelola", role: "Head of Early Years" },
];

function TeamCard({ photo, name, role }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={photo} alt={name} className="aspect-[4/3] w-full rounded-2xl object-cover" />
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="font-baloo text-lg font-semibold text-black sm:text-xl">{name}</p>
        <p className="font-lato text-sm text-[#4b5563] sm:text-base">{role}</p>
      </div>
    </div>
  );
}

function CtaFeaturePill({ icon, label }) {
  return (
    <div className="flex items-center justify-center gap-4 rounded-3xl border border-[#f1f1f1] bg-white px-4 py-3 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.05)]">
      <img src={icon} alt="" className="size-6" />
      <p className="whitespace-nowrap text-center font-lato text-sm text-black">{label}</p>
    </div>
  );
}