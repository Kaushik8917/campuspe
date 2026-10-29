import FeatureStack from "./FeatureStack";
import { COLLEGE_CARDS } from "@/lib/data";

export default function ForColleges() {
  return (
    <FeatureStack
      id="colleges" variant="colleges" eyebrow="02 • For Colleges"
      title={<>Get Discovered<br />by <em>Students and Recruiters.</em></>}
      lead="Put your college in front of students searching for the right course and recruiters looking for the right talent. CampusPe helps you build your presence, attract enquiries and connect with opportunities."
      cta="List Your College" ctaHref="/list-your-college" cards={COLLEGE_CARDS}
    />
  );
}
