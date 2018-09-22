import styled, { keyframes } from 'styled-components'
import LazyLoad from 'react-lazyload'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2px)
  }
  to {
    opacity: 1;
    transform: translateY(0)
  }
`

const TimelineWrapper = styled.div`
  background: #FFFFFF;
  height: 100%;
  width: 100%;
`

const TimelineLogo = styled.img`
  display: block;
  height: 204px;
  margin: 0 auto -80px;
  src: url(${props => props.src});
  transform: translateY(-63%);
  width: 137px;
`

const TimelineContainer = styled.div`
  background: white;
  height: 100%;
  margin: 0 auto 70px;
  max-width: 375px;
  position: relative;
  width: 100%;
`
const ImageContainer = styled.div`
  margin: 0 auto;
  position: relative;
  width: 327px;

  > img {
    visibility: visible;
    animation: ${fadeIn} 2s ease;
    transition: visibility 2s ease;
    display: block;
    width: 327px;
  }
`

const CopyContainer = styled.div `
  visibility: visible;
  animation: ${fadeIn} 2s ease;
  transition: visibility 2s ease;
  border-left: 2px solid #E5E5E5;
  margin: 0 40px;
  padding: 70px 0 100px 60px;
  position: relative;
`

const Title = styled.h5`
  color: #1F4F46;
  font-family: 'Flama Condensed';
  font-size: 14px;
  font-weight: normal;
  margin: 0;
  text-transform: uppercase;

  &:before {
    content: '';
    background-color: white;
    border: 2px solid #3B4245;
    border-radius: 50%;
    height: 16px;
    left: calc(0% - 10px);
    margin-top: 17px;
    position: absolute;
    width: 16px;
    z-index: 1;
  }
  &:after {
    content: '';
    background-color: #E5E5E5;
    height: 2px;
    left: 0;
    margin-top: 27px;
    position: absolute;
    width: 100%;
  }
`

const Copy = styled.p`
  color: #3B4245;
  font-size: 14px;
  line-height: 32px;
  margin: 14px 0 0;
`

const TimelineBlock = styled.div`
`

const Illustration = styled.img`
    visibility: visible;
    animation: ${fadeIn} 2s ease;
    transition: visibility 2s ease;
    display: block;
    height: 106px;
    margin-bottom: 30px;
    src: url(${props => props.src});
    width: 106px;
`

export const TimelineMobile = (props) => {
  const {
    logo,
    timelineData
  } = props

  return (
    <TimelineWrapper>
    <TimelineLogo src={logo} />
    <TimelineContainer>
    {
      timelineData.map((data, i) => (
        <TimelineBlock key={i}>
            {
              data.image &&
                <ImageContainer>
                  <LazyLoad height={327}><img src={data.image.url} alt={data.image.alt} /></LazyLoad>
                </ImageContainer>
            }
          <LazyLoad height={465}>
            <CopyContainer>
              {
                data.illustrationImg && <LazyLoad height={106}><Illustration src={data.illustrationImg.url} /></LazyLoad>
              }
              <Title>{data.title}</Title>
              <Copy>{data.paragraph}</Copy>
            </CopyContainer>
          </LazyLoad>
        </TimelineBlock>
      ))
    }
    </TimelineContainer>
  </TimelineWrapper>
  )
}