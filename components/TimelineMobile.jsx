import styled from 'styled-components'

const TimelineWrapper = styled.section`
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
  margin: 0 auto;
  max-width: 375px;
  position: relative;
  width: 100%;
`
const ImageContainer = styled.div`
  margin: 0 auto;
  position: relative;
  width: 327px;

  > img {
    display: block;
    width: 327px;
  }
`

const CopyContainer = styled.div `
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
    border: 2px solid #E5E5E5;
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
                <img src={data.image.url} alt={data.image.alt} />
              </ImageContainer>
            }
          <CopyContainer>
            {
              data.illustrationImg && <Illustration src={data.illustrationImg.url} />
            }
            <Title>{data.title}</Title>
            <Copy>{data.paragraph}</Copy>
          </CopyContainer>
        </TimelineBlock>
      ))
    }
    </TimelineContainer>
  </TimelineWrapper>
  )
}