import Head from 'next/head'
import { Container } from '@/components'

const KontaktPage = () => {
  return (
    <>
      <Head>
        <title>Kontakt | Skyway</title>
      </Head>
      <Container>
        <div className="flex flex-col items-center my-12 container mx-auto justify-center">
          <div className="border-2 shadow-sm my-8 rounded-md p-8">
            <article className="prose prose-red">
              <h1>Kontakt</h1>
              <p className="lead">
                <strong>Skyway Cestovná agentúra</strong>
                <br />
                Generálny zástupca taiwanskej leteckej spoločnosti <strong>China Airlines</strong>
              </p>
              <table className="">
                <tbody>
                  <tr>
                    <td className="font-bold text-right pr-4">Adresa:</td>
                    <td>Struková 13, 821 05 Bratislava</td>
                  </tr>
                  <tr>
                    <td className="font-bold text-right pr-4">Telefón:</td>
                    <td>02 / 5292 1994</td>
                  </tr>
                  <tr>
                    <td className="font-bold text-right pr-4">Mobil:</td>
                    <td>+421905535190</td>
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
              <br />
              <p>
                <strong>Otváracie hodiny</strong>
              </p>
              <p>Pondelok – Piatok: 09.00 – 17.00 hod</p>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}

export default KontaktPage
