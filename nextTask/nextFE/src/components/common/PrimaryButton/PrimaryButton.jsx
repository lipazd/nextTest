import arrow from "../../../assets/arrow.svg";
import * as S from "./PrimaryButton.style";

const PrimaryButton = ({ text, $isArrowRight, handleClick }) => {
  return (
    <S.ReadMoreButton onClick={handleClick} $isArrowRight={$isArrowRight}>
      <S.ReadMoreText>{text}</S.ReadMoreText>
      <S.ArrowIcon src={arrow} $isArrowRight={$isArrowRight} />
    </S.ReadMoreButton>
  );
};
export default PrimaryButton;
