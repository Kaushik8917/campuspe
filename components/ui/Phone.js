import Image from "next/image";
import { Icon } from "./Icons";

/** CSS phone mockup. Swap the screen for an exported Figma screenshot via the `src` prop if desired. */
export default function Phone({ children, src, alt = "", className = "" }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone__bezel">
        <div className="phone__island" />
        <div className="phone__screen">{src ? <Image src={src} alt={alt} width={180} height={360} unoptimized /> : children}</div>
      </div>
    </div>
  );
}

const Status = () => <div className="ps__status"><b>9:41</b><span>▂▄▆ ◔ ▮</span></div>;
const Nav = () => (
  <div className="ps__nav">{["home", "file", "briefcase", "user", "chat"].map((n, i) => <Icon key={n} name={n} size={11} className={i === 0 ? "on" : ""} />)}</div>
);

export function ScreenHome() {
  return (
    <div className="ps"><Status />
      <div className="ps__head"><b>Hi, Amit Kumar</b><small>Discover</small><span><i>Colleges</i><i className="on">Job/ Internship</i></span></div>
      <div className="ps__banner">See how you can find a job quickly!</div>
      <div className="ps__search"><Icon name="search" size={9} /> Search jobs, internships…</div>
      <b className="ps__h">Recommended Jobs</b>
      {["Software Engineer", "Data Analyst"].map((t) => <div key={t} className="ps__job"><i /><div><b>{t}</b><small>Google Inc · Bengaluru</small></div><em>95% Match</em></div>)}
      <Nav />
    </div>
  );
}
export function ScreenPost() {
  return (
    <div className="ps"><Status />
      <div className="ps__bar">Post a Job</div>
      <b className="ps__h ps__h--b">Hot Vacancy</b>
      {["Job Title*", "Job Type*", "Key Skills*", "Work Mode*", "Experience (Years)*", "Educational Qualification"].map((l) => <div key={l} className="ps__field"><small>{l}</small><span /></div>)}
      <Nav />
    </div>
  );
}
export function ScreenDiscover() {
  return (
    <div className="ps ps--lg"><Status />
      <div className="ps__head"><b>Hi, Amit Kumar</b><small>Discover</small><span><i className="on">Colleges</i><i>Job/ Internship</i></span></div>
      <div className="ps__hero"><small>XYZ University</small><span>Explore</span></div>
      <div className="ps__row"><b>Top Courses</b><small>View all</small></div>
      <div className="ps__circles">{["B.Tech", "Arts", "MBBS", "B.Com", "M.Com"].map((c) => <span key={c}><i />{c}</span>)}</div>
      <div className="ps__row"><b>Trending Colleges</b><small>View More</small></div>
      <div className="ps__college"><i /><div><b>Victory College</b><small>B.Tech · 4 years</small><span>Apply Now</span></div></div>
      <Nav />
    </div>
  );
}
export function ScreenApps() {
  return (
    <div className="ps"><Status />
      <div className="ps__bar">My Application</div>
      <div className="ps__tabs"><i className="on">Applied(5)</i><i>Shortlisted(2)</i><i>Rejected(1)</i></div>
      {["Software Engineer", "Full Stack Web Developer", "Backend Developer", "Frontend Developer"].map((t) => <div key={t} className="ps__job"><i /><div><b>{t}</b><small>Applied · Full Time</small></div><em>92% Match</em></div>)}
      <Nav />
    </div>
  );
}
export function ScreenCollege() {
  return (
    <div className="ps"><Status />
      <div className="ps__head"><b>XYZ College</b><small>Discover</small></div>
      <div className="ps__search"><Icon name="search" size={9} /> Search name, email or course…</div>
      <div className="ps__row"><b>Courses</b><small>+ Add Course</small></div>
      <div className="ps__hero ps__hero--sm"><small>Active Offer</small></div>
      <div className="ps__stats"><span>B.Tech<small>Computer science</small></span><span>₹ 3,50,000</span></div>
      <div className="ps__btns"><span>View Details</span><span className="o">Edit</span></div>
      <Nav />
    </div>
  );
}
export const SCREENS = [ScreenHome, ScreenPost, ScreenDiscover, ScreenApps, ScreenCollege];
