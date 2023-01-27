// Components
import Thumb from "../movieComponents/Thumbnail";

const Card = ({ imgUrl, title, subtitle }) => (
  <div className="h-80">
    <div className="relative h-full">
      <Thumb imgUrl={imgUrl} />
      <div className="absolute bottom-0 w-full rounded-b-xl bg-zinc-800 px-4 py-2">
        <h2 className="truncate text-center text-sm text-cyan-200">{title}</h2>
        {subtitle ? (
          <p className="truncate text-center text-xs text-cyan-400">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  </div>
);

export default Card;
