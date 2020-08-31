import React from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import Header from '../../components/Header/';
import Section from '../../components/Section';
import Banner from '../../components/Banner';

import section from '../../data';

export default function HomePage() {
    return (
        <>
        <Header />
        <main>
          <Banner/>
          {
            section.map(section => (
              <Section title={section.title} films={section.items} />
            ))
          }
        </main>

        < GlobalStyles />
        </>
    )
}
