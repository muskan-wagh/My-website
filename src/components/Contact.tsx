import { PrimaryButton, SecondaryButton, Section, SectionHeader } from "./ui";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeader
        title="Contact"
        description="Open to internships and collaborations. I reply within 24 hours."
      />
      <div className="mt-8 flex flex-wrap gap-3">
        <PrimaryButton href="mailto:muskanwagh1608@gmail.com?subject=Hello%20Muskan%20—%20from%20portfolio">
          Send email
        </PrimaryButton>
        <SecondaryButton href="https://github.com/muskan-wagh" external>
          GitHub
        </SecondaryButton>
        <SecondaryButton href="https://www.linkedin.com/in/muskan-wagh-22b2b5325" external>
          LinkedIn
        </SecondaryButton>
      </div>
      <p className="mt-6 text-[14px] text-[#888888]">muskanwagh1608@gmail.com</p>
    </Section>
  );
}
