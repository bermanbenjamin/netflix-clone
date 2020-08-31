import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/';
import Section from './components/Section';
import section from './data';

function App() {
  return (
    <>
      <Header />
      <main>
        {
          section.map(section => (
            <Section title={section.title} films={section.items} />
          ))
        }
      </main>
      <GlobalStyles />
    </>
  );
}

export default App;
