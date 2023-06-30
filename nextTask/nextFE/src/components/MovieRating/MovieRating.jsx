import Star from "../../assets/star.svg";
import * as S from "./MovieRating.style";

const MovieRating = ({ rating }) => {
  return (
    <>
      {rating ? (
        <S.MovieRating>
          <img src={Star} />
          <div>{rating}</div>
        </S.MovieRating>
      ) : null}
    </>
  );
};
export default MovieRating;
