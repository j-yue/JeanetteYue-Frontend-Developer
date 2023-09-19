import spaceship from "../assets/spaceship.png";

export default function Banner() {
  return (
    <header className="overflow-hidden">
      <div className="flex flex-row my-8">
        <div className="flex flex-col gap-4 justify-center w-full sm:w-8/12 lg:w-6/12">
          <h1 className="h2">SpaceX Capsule Explorer</h1>
          <p>
            Learn all about SpaceX's capsules, retired, active, and upcoming!
          </p>
          <a className="font-['Zilla_Slab'] font-bold" href="#search">
            Explore {"\u2192"}
          </a>
        </div>
        <img
          className="m-auto aspect-[3/4] hidden sm:block sm:w-4/12 lg:2-6/12"
          src={spaceship}
          alt=""
        />
      </div>
    </header>
  );
}
