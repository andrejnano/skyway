import Head from 'next/head'
import { Container } from '@/components'
import Image from 'next/image'
import Link from 'next/link'

import logoPic from '../public/img/skyway-logo.png'
import chinaAirlinesPic from '../public/img/intro-china.png'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Skyway</title>
      </Head>

      <Container>
        <div className="my-12 prose prose-xl mx-auto text-center">
          <p className="lead">Generálny zástupca taiwanskej leteckej spoločnosti China Airlines</p>
        </div>
        <div className="my-12 flex flex-col md:flex-row md:justify-center gap-4">
          <Link href="/onas" passHref>
            <div className="w-64 flex flex-col items-center border-2 shadow-sm p-4 rounded-md cursor-pointer">
              {/* <h2 className="block w-full text-xl font-bold p-4">O nás</h2> */}
              <Image layout="intrinsic" className="bg-white" src={logoPic} alt="skyway logo" />
            </div>
          </Link>
          <Link href="/china-airlines" passHref>
            <div className="w-64 flex flex-col items-center border-2 shadow-sm p-4 rounded-md cursor-pointer">
              {/* <h2 className="block w-full text-xl font-bold p-4">China Airlines</h2> */}
              <Image
                layout="intrinsic"
                className="bg-white"
                src={chinaAirlinesPic}
                alt="china airlines logo"
              />
            </div>
          </Link>
        </div>

        <div>
          <table className="mx-auto">
            <tbody>
              <tr>
                <td className="font-bold text-right pr-4">Telefón:</td>
                <td>
                  <a href="tel:0252921994">02 / 5292 1994</a>
                </td>
              </tr>
              <tr>
                <td className="font-bold text-right pr-4">Mobil:</td>
                <td>
                  <a href="tel:+421905535190">+421905535190</a>
                </td>
              </tr>
              <tr>
                <td className="font-bold text-right pr-4">Email:</td>
                <td>
                  <a href="mailto:skyway@skyway.sk" className="text-blue-600 underline">
                    skyway@skyway.sk
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </>
  )
}

export default HomePage
