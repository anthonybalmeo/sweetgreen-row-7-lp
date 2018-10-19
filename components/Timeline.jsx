import { MobileAndTablet, Desktop } from '../components/MediaQueries'
import { TimelineDesktop } from './TimelineDesktop';
import { TimelineMobile } from './TimelineMobile'

import logo from '../assets/from-seed-to-sweetgreen.svg'
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

const timelineData = [
  {
    order: 'right-to-left offset-spacing-bottom',
    title: 'February 26th: The call that started it all',
    paragraph: 'sg co-founder Nic Jammet calls Dan Barber—an order for 100,000 squash seeds is placed. Row 7 Seed Company launches the next day.',
    image: null,
    illustrationImg: null,
  },
  {
    order: 'right-to-left',
    title: 'May 15th: Seeds in the ground',
    paragraph: 'Koginut squash seeds are sowed on six different farms—in six different climates and ecosystems across the country.',
    image: {
      url: hands,
      alt: 'May 15th: Seeds in the ground - Hands',
    },
    illustrationImg: null,
  },
  {
    order: 'right-to-left',
    title: 'June 4th: Bowl ideation',
    paragraph: 'SG culinary team flies to New York to meet with Dan Barber and Row 7 to begin brainstorming ingredients in collaboration bowl.',
    image: {
      url: people,
      alt: 'June 4th: Bowl ideation - People',
    },
    illustrationImg: null,
  },
  {
    order: 'left-to-right',
    title: 'July 1st: Pennsylvania',
    paragraph: 'Crop growing well at Cedar Meadow Farm in Pennsylvania. A little thin in some spots due to very wet conditions early on. Projected harvest date around September 20th.',
    image: null,
    illustrationImg: null,
  },
  {
    order: 'right-to-left',
    title: 'July 6th: New York',
    paragraph: 'No flowers just yet at Pedersen Farm in New York, but growing well. Projected harvest date around mid-October to allow a little more time to “cure” and become sweeter in storage.',
    image: null,
    illustrationImg: null,
  },
  {
    order: 'right-to-left offset-spacing-top',
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
    order: 'left-to-right',
    title: 'August 20th: Squash curing',
    paragraph: 'After being cut from the vine, squash are left in the field for 1-2 weeks to cure and concentrate their sweetness.',
    image: {
      url: cutSquash,
      alt: 'August 20th: Squash curing - Cut Squash',
    },
    illustrationImg: null,
  },
  {
    order: 'right-to-left',
    title: 'September 4th: Final bowl',
    paragraph: 'Ingredients for Koginut Squash Bowl are finalized with Dan Barber, Row 7 and sg culinary team.',
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

export const Timeline = () =>
  <div id='seed-to-sweetgreen'>
    <MobileAndTablet>
      <TimelineMobile timelineData={timelineData} logo={logo} />
    </MobileAndTablet>
    <Desktop>
      <TimelineDesktop timelineData={timelineData} logo={logo} />
    </Desktop>
  </div>
