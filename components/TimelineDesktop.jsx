import styled from 'styled-components'

const TimelineWrapper = styled.div`
  background: #FFFFFF;
  height: 100%;
  position: relative;
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

const TimelineContainer = styled.ul`
  background: white;
  height: 100%;
  margin: 30px auto 0;
  max-width: 1100px;
  position: relative;
  width: 100%;

  &:before {
    background: #E5E5E5;
    position: absolute;
    left: 50%;
    top: 0;
    content: ' ';
    display: block;
    width: 2px;
    height: 100%;
  }
`
const ImageContainer = styled.div`
  width: 50%;
  position: relative;
`

const ImageBlock = styled.div`
  position: relative;
  > img {
    padding-bottom: 130px;
    position: relative;
    width: 100%;
    z-index: 999;
  }

  &:before {
    content: '';
    background-color: white;
    border: 2px solid #3B4245;
    border-radius: 50%;
    height: 16px;
    margin-top: 17px;
    position: absolute;
    width: 16px;
    z-index: 1;
    top: 125px;
  }
  &:after {
    content: '';
    background-color: #E5E5E5;
    height: 2px;
    position: absolute;
    width: 100%;
    top: 150px;
  }
`

const CopyContainer = styled.div `
  position: relative;
  width: 50%;
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
  font-size: 16px;
  line-height: 32px;
  margin: 14px 0 0;
`

const Illustration = styled.img`
  display: block;
  margin-bottom: 30px;
  src: url(${props => props.src});
  width: 142px;
`
const IllustrationContainer = styled.div`
  &.illustration-spacing {
    height: 178px;
  }
`

const TimelineBlock = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  &.offset-spacing {
    padding-top: 130px;
  }

  &.left-to-right {
    & > :first-child {
        order: 1;
        padding-right: 130px;

        &${ImageContainer} {
          text-align: right;
        }
        & > ${ImageBlock} {
          &:before {
            right: calc(0% - 141px);
          }
          &:after {
            right: calc(0% - 141px);
          }
        }
      }
    & > :last-child {
      order: 2;
      padding-left: 130px;

      & > ${Title} {
        &:before {
          left: calc(0% - 10px);
        }
      }      
    }
  }
  &.right-to-left {
    & > :first-child {
        order: 2;
        padding-left: 130px;

        &${ImageContainer} {
          text-align: left;
        }
        & > ${ImageBlock} {
          &:before {
            left: calc(0% - 139px);
          }
          &:after {
            left: calc(0% - 139px);
          }
        }
      }
    & > :last-child {
      order: 1;
      padding-right: 130px;
      & > ${Title} {
        &:before {
          right: calc(0% - 10px);
        }
      }
    }
  }
`

export const TimelineDesktop = (props) => {
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
          <TimelineBlock key={i} className={data.order} >
              {
                <ImageContainer>
                  { data.image &&
                    <ImageBlock>
                      <img src={data.image.url} alt={data.image.alt} />
                    </ImageBlock>
                  }
                </ImageContainer>
              }
            <CopyContainer>
              {
                <IllustrationContainer className={!data.illustrationImg && !data.image ? null : 'illustration-spacing' }>
                { data.illustrationImg && <Illustration src={data.illustrationImg.url} /> }
                </IllustrationContainer>
              }
              <Title>{data.title}</Title>
              <Copy>{data.paragraph}</Copy>
            </CopyContainer>
          </TimelineBlock>
        ))
      }
    </TimelineContainer>
  </TimelineWrapper>
)}