import FeatureStack from "./FeatureStack";
import { EMPLOYER_CARDS } from "@/lib/data";

export default function ForEmployers() {
  return (
    <FeatureStack
      id="employers" variant="employers" eyebrow="03 • For Employers"
      title={<>Stop running campus drives. <em>Start hiring the right people.</em></>}
      lead="Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring. CampusPe helps you discover, match and connect with talent from colleges and beyond."
      cta="Post a Job" ctaHref="/post-a-job" cards={EMPLOYER_CARDS}
    />
  );
}
