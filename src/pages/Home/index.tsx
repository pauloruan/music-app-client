import React from 'react';
import Header from '../../components/Header';
import SVG from '../../../public/undraw_audio_player_re_cl20.svg';
import BtnHome from '../../components/BtnHome';
import {
  HomeContainer,
  HomeTextsContainer,
  HomeTitle,
  HomeText,
  IlustrationHomeContainer,
} from './style';

export default function Home(): React.FunctionComponentElement<{}> {
  return (
    <>
      <Header />
      <HomeContainer>
        <HomeTextsContainer>
          <HomeTitle>free listening music</HomeTitle>
          <HomeText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, at
            obcaecati exercitationem non quae in neque, omnis iure sapiente vitae
            repellat tempore corporis deleniti eaque veritatis eveniet laboriosam ipsum
            qui!
          </HomeText>
          <BtnHome />
        </HomeTextsContainer>
        <IlustrationHomeContainer src={SVG} alt="Ilustration" />
      </HomeContainer>
    </>
  );
}
