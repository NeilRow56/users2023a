// Urls
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../../config";
// Components
import Grid from "../../components/movieComponents/Grid";
import Card from "../../components/movieComponents/Card";

const Actors = async ({ creditsPromise }) => {
  const credits = await creditsPromise;

  return (
    <Grid className="m-auto max-w-7xl p-4" title="Actors">
      {credits.cast.map((actor) => (
        <Card
          key={actor.credit_id}
          imgUrl={
            actor.profile_path
              ? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path
              : "/no_image.jpg"
          }
          title={actor.name}
          subtitle={actor.character}
        />
      ))}
    </Grid>
  );
};

export default Actors;
