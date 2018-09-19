import styled from 'styled-components'

import logo from '../assets/from-seed-to-sweetgreen.png'
import chef from '../assets/chef.jpg'
import cutSquash from '../assets/cut-squash.jpg'
import hands from '../assets/hands.jpg'
import people from '../assets/people.jpg'
import plant from '../assets/plant.jpg'
import seeds from '../assets/seeds.jpg'
import squash from '../assets/squash.jpg'
import illustrationGreens from '../assets/illustration-greens.png'
import illustrationPlants from '../assets/illustration-plant.png'
import illustrationSeed from '../assets/illustration-seed.png'
import illustrationSquash from '../assets/illustration-seed.png'

const TimelineData = [
  {
    title: 'March 16: Seeds Purchased',
    paragraph: 'When we heard about the launch of Row 7, we purchased 100,000 seeds of their one-of-a-kind koginut squash.',
    image: {
      url: seeds,
      alt: 'March 16: Seeds Purchased - Seed',
    },
    illustrationImg: {
      url: illustrationSeed,
      alt: 'March 16: Seeds Purchased - Illustation Seed',
    },
  },
  {
    title: 'May 15th: Seeds in the ground',
    paragraph: 'Koginut squash seeds are sowed on six different farms, climates, and ecosystems across the country.',
    image: {
      url: hands,
      alt: 'May 15th: Seeds in the ground - Hands',
    },
    illustrationImg: null,
  },
  {
    title: 'June 2nd: Sprouts begin to show',
    paragraph: 'Feedback on germination is good. Leaves have sprouted and farmers are beginning to cultivate the field.',
    image: {
      url: plant,
      alt: 'June 2nd: Sprouts begin to show - Plant',
    },
    illustrationImg: {
      url: illustrationPlants,
      alt: 'June 2nd: Sprouts begin to show - Illustation Plant',
    },
  },
  {
    title: 'June 4th: Bowl ideation',
    paragraph: 'SG culinary team flies to New York to meet with Dan Barber to begin brainstorming ingredients in collaboration bowl.',
    image: {
      url: people,
      alt: 'June 4th: Bowl ideation - People',
    },
    illustrationImg: null,
  },
  {
    title: 'July 1st: Pennsylvania',
    paragraph: 'Crop growing well at Cedar Meadow Farm in Pennsylvania. A little thin in some spots due to very wet conditions early on. Projected harvest date around September 20th.',
    image: null,
    illustrationImg: null,
  },
  {
    title: 'July 6th: New York',
    paragraph: 'No flowers just yet at Pedersen Farm in New York, but growing well. Projected harvest date around mid-October to allow a little more time to “cure” and become sweeter in storage.',
    image: null,
    illustrationImg: null,
  },
  {
    title: 'July 17th: Los Angeles',
    paragraph: 'Weiser Family Farm should be picking first planting around mid-August.',
    image: null,
    illustrationImg: null,
  },
  {
    title: 'July 25th: Chicago',
    paragraph: 'Nichols Farm had a little bit of a wash out, but only a small percent of crop was affected. With the rain and heat - they still look great. The expected harvest date is September 1st.',
    image: null,
    illustrationImg: null,
  },
  {
    title: 'August 15th: Squash picked',
    paragraph: 'First squash is picked in L.A. and taste-tested by our Chef in the Culver City Food Lab.',
    image: {
      url: squash,
      alt: 'August 15th: Squash picked - Squash',
    },
    illustrationImg: {
      url: illustrationSquash,
      alt: 'August 15th: Squash picked - Squash Illustation',
    },
  },
  {
    title: 'August 20th: Squash curing',
    paragraph: 'After being cut from the vine, squash are left in the field for 1-2 weeks to cure and heighten its sweetness.',
    image: {
      url: cutSquash,
      alt: 'August 20th: Squash curing - Cut Squash',
    },
    illustrationImg: null,
  },
  {
    title: 'September 4th: Final bowl',
    paragraph: 'Ingredients for Koginut Squash Bowl are finalized with Dan Barber and sg culinary team.',
    image: {
      url: chef,
      alt: 'September 4th: Final bowl - Chef',
    },
    illustrationImg: {
      url: illustrationGreens,
      alt: 'September 4th: Final bowl - Greens',
    },
  },
]

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

export const TimelineMobile = () =>
  <TimelineWrapper>
    <TimelineLogo src={logo} />
    <TimelineContainer>
    {
      TimelineData.map((data, i) => (
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
