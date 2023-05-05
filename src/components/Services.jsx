import React from 'react'
import Layout from './Layout'
import '../components/css/services.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CashCarry from './../Static/Cash-Carry.png'
import Express from './../Static/Express.png'
import International from './../Static/International.png'
import DistributionExclusive from './../Static/Distribution.png'
import CentreLogistiqueEuropéen from './../Static/Logistique.png'
import Relation from './../Static/Win-Win.png'
// import Popup from 'reactjs-popup';
const Services = () => {
  return (
    <Layout>
      <div class="container">
        <div class="row">
          <div class="col-4 mb-3">
            <Card style={{ width: '25rem',height: '40rem' }}>
              <Card.Img variant="top" src={CashCarry} />
              <Card.Body>
                <Card.Title>Cash & Carry</Card.Title>
                <Card.Text>
                  Envie de découvrir notre large assortiment de produits et de vous fournir en marchandises? Simple d’utilisation, le libre-service de notre entrepôt vous accueille pour vous faire découvrir notre gamme complète de produits. Vous pouvez ainsi juger sur pièces de leur qualité parmi un grand nombre de références, juger la couleur, l’apparence, comparer les différentes marques, le tout en prenant votre temps. Et vous choisissez les marchandises qui vous intéressent
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div class="col-4 mb-3">
            <Card style={{ width: '25rem',height: '40rem' }}>
              <Card.Img variant="top" src={Express} />
              <Card.Body>
                <Card.Title>Express</Card.Title>
                <Card.Text>
                Pas le temps de nous rendre visite? Envoyez-nous votre commande par téléphone, en vous référant à notre site internet, et nous nous occupons du reste, de la préparation de votre commande à la livraison, partout en Belgique. Notre équipe de manutentionnaires qualifiés vous livre dans les temps, fait preuve d’une extrême prudence lors du chargement et du déchargement des marchandises, et se tient à votre disposition pour toutes vos questions.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div class="col-4 mb-3">
            <Card style={{ width: '25rem',height: '40rem' }}>
              <Card.Img variant="top" src={International} />
              <Card.Body>
                <Card.Title>International</Card.Title>
                <Card.Text>
                Vous souhaitez être livré en dehors de la Belgique? Tous nos clients internationaux ont la possibilité de se faire livrer à domicile. Notre service de préparation de commande et de livraison expédie votre commande sur palette à l’international, en la confiant à des transporteurs d’expérience.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div class="row">
          <div class="col-4 mb-3">
            <Card style={{ width: '25rem',height: '40rem' }}>
              <Card.Img variant="top" src={DistributionExclusive} />
              <Card.Body>
                <Card.Title>Distribution Exclusive</Card.Title>
                <Card.Text>
                De par sa situation centrale géographiquement, Exotic City est une plateforme de distribution idéale pour les plus grandes marques de produits exotiques. Du secteur de l’alimentation à celui des cosmétiques en passant par le domaine du cheveu, les marques telles que Tilda, Akash, Palmers, Sportin Waves, X-Pression ou Sleek, nous suivent et nous offrent l’exclusivité de leurs produits. Grâce à ces grandes marques et à la relation de confiance créée avec Exotic City, nous proposons aujourd’hui les meilleurs produits du marché.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div class="col-4 mb-3">
            <Card style={{ width: '25rem',height: '40rem' }}>
              <Card.Img variant="top" src={CentreLogistiqueEuropéen} />
              <Card.Body>
                <Card.Title>Cash & Carry</Card.Title>
                <Card.Text>
                Notre expérience nous a menés à ouvrir un centre de logistique implanté à Alleur, en province de Liège, en Belgique. Cet endroit privilégié permet une distribution européenne idéale, qui ne cesse de croître grâce aux facilités de transport à proximité. En effet, Exotic City se trouve à la fois au cœur de plusieurs axes autoroutiers, à 2 pas de l’aéroport de Liège ainsi qu’au pied du Port Autonome de Liège et de sa plateforme multimodale. Cette position avantageuse et stratégique fait d’Exotic City un centre névralgique et lui offre de nombreuses possibilités de développement. D’autre part, Liège est une ville en perpétuel mouvement, avec une gare internationale qui relie notamment Paris (1h25) et Londres (2h).
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div class="col-4 mb-3">
            <Card style={{ width: '25rem',height: '40rem' }}>
              <Card.Img variant="top" src={Relation} />
              <Card.Body>
                <Card.Title>Relation « Win-Win »</Card.Title>
                <Card.Text>
                Outre une saine relation commerciale, Exotic City tient à entretenir ce qui constitue son ancrage de proximité, afin que chacun reparte gagnant. L’équipe d’Exotic City est présente pour aider, conseiller, guider et soutenir le client dans les démarches qu’il entreprend. Nous souhaitons faire profiter le commerçant d’aujourd’hui de l’expérience acquise dans la gestion des différents magasins de proximité en notre possession. Pour qu’il devienne le vendeur leader de demain, et nous permette à notre tour de grandir. Cette relation d’échange vaut aussi pour les fournisseurs, qui nous permettent d’exister et d’évoluer.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>



    </Layout>
  )
}

export default Services