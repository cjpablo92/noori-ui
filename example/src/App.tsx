import React from 'react'

import '@Backlot-Cars/archie/dist/index.css'

import {
  BlcH1,
  BlcH2,
  BlcH3,
  BlcH4,
  BlcH5,
  BlcH6,
  BlcBold,
  BlcItalic,
  BlcBr,
  BlcLabel,
  EliteSellerBadge,
  BlcTabs,
  TabContent,
  TabSection,
  TabTitle,
  EliteSellerProgressBar
} from '@Backlot-Cars/archie'

const App = () => {
  return (
    <>
      <BlcTabs>
        <TabSection>
          <TabTitle disabled={true}>Peach</TabTitle>
          <TabContent>
            <p>
              <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>) is a character in
              Nintendo's Mario franchise. Originally created by Shigeru Miyamoto, Peach is the princess of the fictional
              Mushroom Kingdom, which is constantly under attack by Bowser. She often plays the damsel in distress role
              within the series and is the lead female. She is often portrayed as Mario's love interest and has appeared
              in Super Princess Peach, where she is the main playable character.
            </p>
          </TabContent>
        </TabSection>
        <TabSection>
          <TabTitle>Yoshi</TabTitle>
          <TabContent>
            <p>
              <b>Yoshi</b> (<i>ヨッシー Yosshī, [joɕ.ɕiː]</i>) (<i>English: /ˈjoʊʃi/ or /ˈjɒʃi/</i>), once romanized as
              Yossy, is a fictional anthropomorphic dinosaur who appears in video games published by Nintendo. Yoshi
              debuted in Super Mario World (1990) on the Super Nintendo Entertainment System as Mario and Luigi's
              sidekick. Yoshi later starred in platform and puzzle games, including Super Mario World 2: Yoshi's Island,
              Yoshi's Story and Yoshi's Woolly World. Yoshi also appears in many of the Mario spin-off games, including
              Mario Party and Mario Kart, various Mario sports games, and Nintendo's crossover fighting game series
              Super Smash Bros. Yoshi belongs to the species of the same name, which is characterized by their variety
              of colors.
            </p>
          </TabContent>
        </TabSection>
      </BlcTabs>
      <BlcH1 id={'BlcH1'}>BlcH1</BlcH1>
      <BlcH2 id={'BlcH2'}>BlcH2</BlcH2>
      <BlcH3 id={'BlcH3'}>BlcH3</BlcH3>
      <BlcH4 id={'BlcH4'}>BlcH4</BlcH4>
      <BlcH5 id={'BlcH5'}>BlcH5</BlcH5>
      <BlcH6 id={'BlcH6'}>BlcH6</BlcH6>
      <BlcBr />
      <BlcBold id="title" size="normal">
        bold text
      </BlcBold>
      <BlcBr />
      <BlcItalic id="italic-text" size="normal">
        italic text
      </BlcItalic>
      <BlcBr />
      <BlcLabel order={0} id="label-text" size="normal">
        Label
      </BlcLabel>
      <BlcBr />
      <div style={{ position: 'absolute' }}>
        <EliteSellerBadge />
      </div>

      <div style={{paddingTop: '3em'}}>
        <EliteSellerProgressBar
          vehiclesSoldGoal={15}
          goalPercentage={0.6}
          salesPercentage={0.75}
          vehiclesSold={21}
          effectiveMonthName="October"
        />
      </div>
    </>
  )
}

export default App
