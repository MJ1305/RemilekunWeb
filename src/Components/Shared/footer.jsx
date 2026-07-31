import logo from "../../assets/Images/Logo.jpg";
import iconPhone from "../../assets/Images/iconPhone.png";
import iconEmail from "../../assets/Images/iconEmail.png";
import iconClock from "../../assets/Images/iconClock.png";
import iconInstagram from "../../assets/Images/iconInstagram.png";
import iconTwitter from "../../assets/Images/iconTwitter.png";
import iconWhatsapp from "../../assets/Images/iconWhatsapp.png";
import iconTiktok from "../../assets/Images/iconTiktok.png";


export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-[#ebebeb] bg-[#f9f9f9] px-4 pb-8 pt-12 sm:px-6 lg:px-20 lg:pb-10 lg:pt-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:justify-between lg:gap-8">
        {/* Logo + description + socials */}
        <div className="flex flex-col items-start gap-4 lg:max-w-[413px]">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Remilekun Legacy Schools" className="h-10 w-auto" />
            <p className="font-baloo text-xl font-semibold text-black sm:text-2xl">
              Remilekun Legacy Schools
            </p>
          </div>
          <p className="font-lato text-base tracking-[0.72px] text-black">
            Whenever you're thinking of an educational institute with sound and round education,
            solid academic foundation, and a nurturing environment for your child.
          </p>
          <div className="flex items-center gap-6 sm:gap-8">
            <a href="#" aria-label="Instagram"><img src={iconInstagram} alt="" className="size-7" /></a>
            <a href="#" aria-label="Twitter"><img src={iconTwitter} alt="" className="size-7" /></a>
            <a href="#" aria-label="WhatsApp"><img src={iconWhatsapp} alt="" className="size-7" /></a>
            <a href="#" aria-label="TikTok"><img src={iconTiktok} alt="" className="size-7" /></a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-1">
            <p className="font-baloo text-xl font-semibold text-black sm:text-2xl">Contact Us</p>
            <span className="h-0.5 w-14 bg-black" />
          </div>
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-5">
              <img src={iconPhone} alt="" className="size-[18px]" />
              <p className="font-lato text-lg tracking-[0.4px] text-black">0801-234-5678</p>
            </div>
            <div className="flex items-center gap-5">
              <img src={iconEmail} alt="" className="size-[18px]" />
              <p className="font-lato text-lg tracking-[0.4px] text-black">grandmarnps@gmail.com</p>
            </div>
            <div className="flex items-center gap-5">
              <img src={iconClock} alt="" className="size-[18px]" />
              <p className="font-lato text-lg tracking-[0.4px] text-black">Mon - Fri 8am - 5pm</p>
            </div>
          </div>
        </div>

        {/* Address + links */}
        <div className="flex flex-col items-start gap-5 lg:items-end">
          <div className="flex flex-col items-start gap-3 font-lato text-lg tracking-[0.4px] text-black lg:items-end lg:text-right">
            <p className="font-semibold">14, Ogunmefun Street,</p>
            <p>Pedro, Gbagada</p>
            <p>Lagos</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 font-lato text-base text-black">
            <a href="/about">About Us</a>
            <span className="h-4 w-px bg-black/40" />
            <a href="/schools">Schools</a>
            <span className="h-4 w-px bg-black/40" />
            <a href="/careers">Careers</a>
          </div>
        </div>
      </div>

      <hr className="mx-auto mt-10 max-w-7xl border-[#e0e0e0] lg:mt-14" />

      <p className="mt-6 text-center font-lato text-sm text-[#3a3a3a] sm:text-base">
        Remilekun Legacy Schools © 2026. All Rights Reserved.
      </p>

      <button
        type="button"
        aria-label="Scroll to top"
        onClick={scrollToTop}
        className="absolute bottom-6 right-4 flex size-12 items-center justify-center rounded-full bg-[#4caf50] shadow-md transition-colors hover:bg-[#419a45] sm:right-6 lg:bottom-8 lg:right-20"
      >
        <svg viewBox="0 0 20 20" className="size-5 fill-none stroke-white" strokeWidth="2">
          <path d="M10 16V4M4 10l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </footer>
  );
}