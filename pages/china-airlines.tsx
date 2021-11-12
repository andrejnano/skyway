import Head from 'next/head'
import { Container } from '@/components'
import chinaAirlines from '../public/img/china-airlines.png'
import Image from 'next/image'

const ChinaAirlinesPage = () => {
  return (
    <>
      <Head>
        <title>China Airlines | Skyway</title>
      </Head>

      <Container>
        <div className="flex flex-col items-center my-12 container mx-auto justify-center">
          <div className="border-2 shadow-sm my-8 rounded-md p-8">
            <article className="prose prose-red prose-lg">
              <h1>China Airlines</h1>
              <Image src={chinaAirlines} alt="China Airlines" />
              <p>
                China Airlines je taiwanská letecká spoločnosť založená v roku 1959. Okrem
                Amsterdamu, Frankfurtu a Ríma rozšírila China Airlines svoju sieť európskych
                destinácií v máji 2005 aj o Viedeň. Spoločnosť disponuje flotilou s priemerným vekom
                4.9 roka, ktorú tvoria lietadlá typu Airbus A340, A330, A300 a Boeing 747 a Boeing
                737. China Airlines ponúka i program pre častých cestujúcich pod názvom Dynasty
                Flyer Program.
              </p>
              <p>
                V prípade záujmu o ďalšie informácie môžete kontaktovať našu agentúru alebo
                navštíviť stránku:{' '}
                <a href="https://www.china-airlines.com">www.china-airlines.com</a>.
              </p>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ChinaAirlinesPage
