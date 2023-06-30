import MovieRating from "../MovieRating/MovieRating";
import PrimaryButton from "../common/PrimaryButton/PrimaryButton";
import * as S from "./MovieModal.style";
const MovieModal = ({ data, handleCloseModal }) => {
  return (
    <S.MovieBackground onClick={handleCloseModal}>
      <S.MovieModalContainer>
        <S.MovieImgContainer>
          <S.MovieImg src={data.image} />
        </S.MovieImgContainer>
        <S.MovieDetails>
          <S.MovieTitle>{data.title}</S.MovieTitle>
          <S.MovieRuntime>{data.runtime}</S.MovieRuntime>
          <MovieRating rating={`${data.rating}/10`} />
          <S.MovieSynopsis
            dangerouslySetInnerHTML={{ __html: data.synopsis }}
          />
          <S.MovieModalButton>
            <PrimaryButton
              text="Back to list"
              $isArrowRight={false}
              HandleClick={handleCloseModal}
            />
          </S.MovieModalButton>
        </S.MovieDetails>
      </S.MovieModalContainer>
    </S.MovieBackground>
  );
};
export default MovieModal;
