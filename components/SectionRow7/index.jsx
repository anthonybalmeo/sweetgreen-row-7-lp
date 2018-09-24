import React from 'react'
import styled from 'styled-components'

import { SectionDesktop } from '../Section'
import { SectionHeader } from '../SectionHeader'
import row7 from './row7.svg'
import squash from './squash.jpg'
import men from './men.jpg'
import { config } from '../../config';

const Chunk = styled.div`
  width: 48%;
  margin-bottom: 128px;
`

const ChunkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Text = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #3B4245;
  margin-bottom: 32px;
`

export const SectionRow7 = () =>
  <SectionDesktop bg={config.colors.white}>
    <SectionHeader>
      Row 7 Seed Co
    </SectionHeader>
    <div>
      <img src={row7} alt="" />
    </div>

    <ChunkContainer>
      <Chunk>
        <Text>
          Seven years ago—almost by accident—chef Dan Barber challenged vegetable breeder Michael Mazourek to build a better butternut squash. For Michael, it was the first time that someone had asked him to breed a plant for flavor. For Dan, it was the discovery of a new kind of recipe—one that begins with the seed.
          Founded in ?, Row 7 is a seed company established
          by Dan Barber, breeder Michael Mazourek, and seedsman Matthew Goldfarb. Grounded in the notion that deliciousness might just change the world, Row 7 strives to make ingredients taste better before they
          ever hit a plate.
        </Text>
      </Chunk>

      <Chunk>
        <img src={squash} alt="" style={{ width: "100%" }} />
      </Chunk>
    </ChunkContainer>

    <ChunkContainer>
      <Chunk>
        <img src={men} alt="" style={{ width: "100%" }} />
      </Chunk>

      <Chunk>
        <Text>
          This story begins with a seed. Actually, scratch that. It begins with 100,000 seeds and a phone call we received the day before Row 7’s launch. The call came from Nic Jammet, sweetgreen co-founder (and chief lettuce head), who said he wanted to feature Row 7 in stores nationwide. I thought he was kidding. Then he placed an order for 100,000 squash seeds, and suddenly our not-yet-launched seed company had coast-to-coast roots.
        </Text>

        <Text>
          But this is exactly why we started a seed company in the first place — to democratize deliciousness. Real flavor doesn’t start with the chef, or even with the farmer; it begins with plant breeders—the people creating the original recipe for our ingredients. Long before we conceive a dish, the plant breeder helps decide what qualities an ingredient will bring to the table. (I’m not talking about genetic modification, but breeders utilizing classic techniques to create and select for specific traits in the field.)
        </Text>

        <Text>
          Unfortunately, most plant breeders today are asked to breed for yield, shelf-life and ship-ability, at the expense of good food. What if chefs and eaters could help write the recipe? What if flavor finally got a seat at the table? For the past several years, we’ve been doing exactly that: testing (and tasting) in the field and kitchen, bringing chefs and breeders together to co-select new vegetables hard-wired for flavor.
        </Text>

        <Text>
          We launched Row 7 to bring those ingredients beyond the walls of white tablecloth restaurants and onto plates (and into bowls) everywhere. The squash at the center of this sweetgreen x Row 7 collaboration—Robin’s Koginut Squash—is a prime example. Bred by Michael Mazourek (Row 7 co-founder and chief cucurbit officer), it has a sweet, squash-y flavor, smooth texture and a built-in ripeness indicator. Squash on the vine turn from green to gold when ripe—a seemingly small tweak with a heroic function: ensuring that each Koginut is picked at peak flavor and nutrition. (Think: vine-ripened squash as the new vine-ripened tomato.) Here is a squash that can help change our diets, and our landscapes, from the ground up.
        </Text>

        <Text>
          We are starting a flavor MUTINY, and sweetgreen was one of the first to join. We hope you will too.
        </Text>

        <Text>
          Sincerely,
          Dan Barber
          Chef and co-owner, Blue Hill and Blue Hill at Stone Barns
          Co-founder, Row 7 Seed Company
        </Text>
      </Chunk>

    </ChunkContainer>

  </SectionDesktop>
