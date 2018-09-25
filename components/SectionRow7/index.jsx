import React from 'react'
import styled from 'styled-components'

import { SectionDesktop } from '../Section'
import { SectionHeader } from '../SectionHeader'
import row7 from './row7.svg'
import squash from './squash.jpg'
import chefSalad from './chef-salad.jpg'
import quote from './quote.png'
import { config } from '../../config';

const Chunk = styled.div`
width: 100%;

@media only screen and (min-width: 600px) {
  & {
    width: 48%;
    margin-bottom: 80px;
    }
  }
`

const ChunkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
`

const Text = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #3B4245;
  margin-bottom: 32px;
`

const Quote = styled.img`
  height: 12px;
`

const Greeting = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #3B4245;
  letter-spacing: 1.4px;
  line-height: 32px;
  margin: 16px 0;
`

export const SectionRow7 = () =>
  <SectionDesktop bg={'white'}>
    <SectionHeader>
      Row 7 Seed Co
    </SectionHeader>

    <div>
      <img src={row7} alt="" />
    </div>

    <ChunkContainer>
      <Chunk>
        <Text>
          Founded by Chef Dan Barber, vegetable breeder Michael Mazourek
          and organic seedsman Matthew Goldfarb, Row 7 is a seed company
          grounded in the notion that deliciousness can change the world.
          Row 7 pairs chefs and plant breeders to develop new varieties
          of vegetables and grains that make an impact in the soil and
          at the table, striving to make ingredients taste better before
          they ever hit a plate.
        </Text>
      </Chunk>

      <Chunk>
        <img src={squash} alt="" style={{ width: "100%", marginBottom: '16px' }} />
      </Chunk>
    </ChunkContainer>

    <ChunkContainer>
      <Chunk>
        <img src={chefSalad} alt="" style={{ width: "100%", marginBottom: '32px' }} />
      </Chunk>

      <Chunk>
        <Quote src={quote} />

        <Greeting>
          Dear lettuce heads,
        </Greeting>

        <Text>
          This story begins with a seed. Actually, scratch that. It begins with 100,000 seeds and a phone call we received the day before Row 7’s launch. The call came from Nic Jammet, sweetgreen co-founder, who said he wanted to feature Row 7 in stores nationwide. I thought he was kidding. Then he placed an order for 100,000 squash seeds, and suddenly our not-yet-launched seed company had coast-to-coast roots.
        </Text>

        <Text>
          But this is exactly why we started a seed company in the first place — to democratize deliciousness. Real flavor doesn’t start with the chef, or even with the farmer; it begins with plant breeders—the people creating the original recipe for our ingredients. Unfortunately, most plant breeders today are asked to breed for yield, shelf-life and ship-ability, at the expense of good food. What if chefs and eaters could help write the recipe? For the past several years, we’ve been doing exactly that: testing (and tasting) in the field and kitchen, bringing chefs and breeders together to co-select new vegetables hard-wired for flavor.
        </Text>

        <Text>
          We launched Row 7 to bring those ingredients beyond the walls of white tablecloth restaurants and onto plates everywhere. The squash at the center of this sweetgreen x Row 7 collaboration—Robin’s Koginut squash—is a prime example. Bred by Michael Mazourek (Row 7 co-founder and chief cucurbit officer), it has a sweet, squash-y flavor, smooth texture and a built-in ripeness indicator—a seemingly small tweak with a heroic function. Squash on the vine turn from green to gold when ripe, ensuring that each Koginut is picked at peak flavor and nutrition. (Think: vine-ripened squash as the new vine-ripened tomatoes ato.) Here is a squash that can help change our diets, and our landscapes, from the ground up.
        </Text>

        <Text>
          We are starting a flavor MUTINY, and sweetgreen was one of the first to join. We hope you will too.
        </Text>

        <Text>
          Sincerely, <br />
          Dan Barber <br />
          Co-founder, Row 7 Seed Company <br />
          Chef and co-owner, Blue Hill and Blue Hill at Stone Barns
        </Text>
      </Chunk>

    </ChunkContainer>

  </SectionDesktop>
