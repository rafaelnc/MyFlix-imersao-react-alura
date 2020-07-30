
import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';


function Carousel({
  category,
  position,
  ignoreFirstVideo= false,
 
  
}) {

  
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;

  React.useEffect(() => {
    
    const onScroll = e => {
  
      const scrollTop = e.target.documentElement.scrollTop;
        let elementPosition = position - scrollTop;

          if(elementPosition >= -100 && elementPosition <= 100){
          document.querySelector(".Menu").style.setProperty("border-bottom-color",categoryColor);
        }
    };
    window.addEventListener("scroll", onScroll);
  
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
    
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </ExtraLink>
          }
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo===0 && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;