import React from 'react'
import styled from 'styled-components'

import { SectionDesktop } from '../Section'
import { SectionHeader } from '../SectionHeader'
import row7 from './row7.svg'
import squash from './squash.jpg'
import chefSalad from './chef-salad.jpg'
import smartquote from './smartquote.png'
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
  <SectionDesktop bg={config.colors.pageGray} id="dan-barber">
    <SectionHeader>
      A Letter From Dan Barber
    </SectionHeader>

    <ChunkContainer>
      <Chunk>
        <img src={chefSalad} alt="" style={{ width: "100%", marginBottom: '32px' }} />
      </Chunk>

      <Chunk>
        <Text>
          This story begins with a seed. Actually, scratch that. It begins with 100,000 seeds and a phone call we received the day before Row 7’s launch. The call came from Nic Jammet, sweetgreen co-founder, who said he wanted to feature Row 7 in stores nationwide. I thought he was kidding. Then he placed an order for 100,000 squash seeds, and suddenly our not-yet-launched seed company had coast-to-coast roots.
        </Text>

        <Text>
          But this is exactly why we started a seed company in the first place — to democratize deliciousness. Real flavor doesn’t start with the chef, or even with the farmer; it begins with plant breeders—the people creating the original recipe for our ingredients. Unfortunately, most plant breeders today are asked to breed for yield, shelf-life and ship-ability, at the expense of good food. What if chefs and eaters could help write the recipe? For the past several years, we’ve been doing exactly that: testing (and tasting) in the field and kitchen, bringing chefs and breeders together to co-select new vegetables hard-wired for flavor.
        </Text>

        <Text>
          We launched Row 7 to bring those ingredients beyond the walls of white tablecloth restaurants and onto plates everywhere. We are starting a flavor MUTINY, and sweetgreen was one of the first to join. We hope you will too.
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
