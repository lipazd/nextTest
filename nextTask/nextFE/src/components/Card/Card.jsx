import PrimaryButton from "../common/PrimaryButton/PrimaryButton";
import MovieRating from "../MovieRating/MovieRating";
import * as S from "./Card.style";

const Card = ({ image, title, released, rating, id, handleReadMoreClick }) => {
  return (
    <S.CardContainer>
      <S.MovieImg src={image} />
      <S.MovieTitle>
        {title} ({released})
      </S.MovieTitle>
      <S.BottomCard>
        <MovieRating rating={rating} />
        <PrimaryButton
          handleClick={() => handleReadMoreClick(id)}
          text="Read more"
          $isArrowRight
        />
      </S.BottomCard>
    </S.CardContainer>
  );
};

export default Card;
