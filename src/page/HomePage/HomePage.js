import React, { useEffect, useState } from 'react'
import * as C from './styled'
import { Menu } from '../../component/menu/Menu'
import Banner from '../../assets/banner.jpg'
import AboutUs from '../../assets/nebulosa.jpg'
import axios from 'axios'
import CardTrip from '../../component/cardTrip/CardTrip'

export const HomePage = () => {

  const [trips, setTrips] = useState([])

  // console.log(trips)

  useEffect(() => {
    GetTrips()
  }, [])


  const GetTrips = () => {

    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/michelle-machado-alves/trips`)
      .then((res) => {
        setTrips(res.data.trips)
      })
      .catch((err) => {
        console.log("Deu bug", err.resposive)
      })

  }

  return (
    <div>
      <Menu />
      <C.Banner>
        <img src={Banner} alt='Imagem-de-Astronauta-Banner' />
      </C.Banner>

      <C.AboutUs>
        <C.TextSection>
          <h3>ABOUT US</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique senectus et.
          </p>
          <button> SAIBA MAIS </button>
        </C.TextSection>

        <C.ImageSection>
          <img src={AboutUs} alt='Imagem-Nebulosa' />
        </C.ImageSection>
      </C.AboutUs>

      <C.ContainerViagens>
        <h3>ÚLTIMAS VIAGENS</h3>
        <C.Container>
          {
            trips.map((trip, indice) => {

              return (
                <CardTrip trip={trip} key={indice} />
              )
            })
          }
        </C.Container>

        <C.Button>MAIS VIAGENS</C.Button>
      </C.ContainerViagens>
    </div>
  )
}
