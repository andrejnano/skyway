import Head from 'next/head'
import { Container } from '@/components'

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>O nás | Skyway</title>
      </Head>

      <Container>
        <div className="flex flex-col items-center my-12 container mx-auto justify-center">
          <div className="border-2 shadow-sm my-8 rounded-md p-8">
            <article className="prose prose-red prose-lg">
              <h1>Cestovná agentúra Skyway</h1>
              <p>
                Od svojho vzniku v roku <em>1991</em> sa spoločnosť Skyway veľmi úzko špecializuje
                na civilnú leteckú prepravu a prácu s leteckými spoločnosťami. Ďalšími poskytovanými
                službami sú rezervácie hotelov všetkých kategórií prostredníctvom rezervačných
                systémov, rezervácie autobusových, vlakových a lodných lístkov a vybavovanie
                vízových formalít. Skyway sa neorientuje na predaj pobytových zájazdov. Naše
                aktivity sú zamerané na zastúpenia leteckých spoločností.
              </p>

              <p>
                Spoločnosť <strong>Roman Naňo – Skyway</strong>, bola založená v roku 1994
                generálnym manažérom <em>Romanom Naňom</em> ako generálne zastúpenie švajčiarskej
                leteckej spoločnosti <em>Swissair</em> na Slovensku. Toto zastúpenie sa rozšírilo aj
                o spoločnosť Crossair.
              </p>

              <p>
                V roku 1998 sa aktivity spoločnosti Skyway rozšírili o marketingovú spoluprácu a
                zastúpenie belgickej leteckej spoločnosti Sabena.
              </p>

              <p>
                Po tom, čo sa Swissair transformoval na <em>Swiss International Airlines</em> v roku
                2002 pokračovala naša spolupráca s touto leteckou spoločnosťou až do jej prebratia
                nemeckou Lufthansou v roku 2008.
              </p>

              <p>
                Počas úspešného zastupovania <em>Swiss International Airlines</em> vo forme GSA sme
                získali ďalšie dôležité partnerstvo zo strany <em>taiwanskej</em> vlajkovej leteckej
                spoločnosti <a href="https://www.china-airlines.com/">China Airlines</a> v roku
                2005, tiež na báze GSA spolupráce. Túto leteckú spoločnosť zastupujeme dodnes.
              </p>
              <p>
                Naši zamestnanci majú dlhoročné predchádzajúce pracovné skúsenosti v leteckých
                spoločnostiach.
              </p>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}

export default AboutPage
