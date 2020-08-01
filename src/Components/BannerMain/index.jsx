import React from 'react';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from '../styled';

export default function BannerMain(){
  const bgUrl = `https://ichef.bbci.co.uk/news/660/cpsprodpb/3CC7/production/_112395551_eso2008a.jpg`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            LIPEFLIX
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            Melhor conteudo de vídeos que vc mais gosta e deseja.
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <WatchButton>
            Assistir
          </WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
