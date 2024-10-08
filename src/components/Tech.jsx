import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <p className={styles.sectionSubText}>Technologies</p>
      <h2 className={styles.sectionHeadText}>Working Tools. &nbsp; </h2>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>)
)
}
</div>
</>
  );
};

export default SectionWrapper(Tech, "");
