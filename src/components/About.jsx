import React from 'react'
import "./css/About.css";
import kausar from "../Static/kausar.jpg"
import warehouse from "../Static/warehouse.jpg"
import coromeuse2 from "../Static/coromeuse2.jpg"
import marques from "../Static/marques.jpg"
const About = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-6 p-3">
            <p>Exotic City is first and foremost the dream of Javed Kausar. Twenty-five years ago, this son of a grocer of Pakistani origin understood, before the concept was in vogue, the importance of uniting different cultures around world cuisine. From nightshop to world grocery store In 1993, 4 years after his arrival in Belgium, Javed Kausar learned the trade of trader by working alongside his father in the family food store. In 1998, he took over the reins, refined the concept initiated by his father, developed a community that shared his values ​​and his vision of cultural mixing. A community that finds in its product offering an open door to the world, but above all solutions centered on the expectations and needs of individuals, as well as distribution or catering professionals.</p>
          </div>
          <div class="col-md-6 p-3">
            <img src={kausar} alt="img" height={270} width={550} />
          </div>
        </div>
      </div>
      <div class="container-fluid ">
        <div class="row custom-back p-3 align-items-center py-md-5">
          <div class="col-md-12">
            <p>Today, the Kausar stores are a group of 5 brands located in Liège and its surroundings (Verviers region), but also Exotic City, a purchasing center focused on the food sector, cosmetics and hair accessories. , a real estate agency and a communication agency. Ambition, vector of growth and creator of jobs Javed Kausar not only wanted to create a network of complementary and constantly evolving stores, but also a dynamic group, vector of jobs. The Kausar group now has around fifty employees working in the various branches of Liège society. Its strength is its tailor-made approach: from the selection of products to the logistics solutions best suited to the needs of its customers.</p>
          </div>
        </div>

      </div>
      <div class="container-fluid "style={{ maxWidth: '100%' }}>
      <div class="row align-items-center py-md-5">
          <div class="col-md-12">
          <img src={warehouse} alt="warehouse" className='custom-width'height={500} width={1320}  />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 p-3">
            <p>THE DNA OF A TEAM



Cultural blending is at the heart of our approach. Multicultural and complementary, our team of professionals (purchasers, sales representatives, administrative employees, logisticians, delivery drivers, etc.) defends the same values ​​of integration, transmission and knowledge sharing.

Local experience and service

Despite its ambitions and its international development, Exotic City guarantees a real local service, a value that is at the heart of our DNA. Our team's mission is to advise you, guide you and support you in your commercial dynamics. With a very long experience in the distribution sector, we offer innovative solutions that respect the reality of your project. Because your growth is as important as ours and only together can we continue our entrepreneurial adventure.</p>
          </div>
          <div class="col-md-6 p-3">
            <img src={coromeuse2} alt="img" height={260} width={550} />
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-6 p-3">
            <img src={marques} alt="marques" height={260} width={550} />
          </div>
          <div class="col-md-6 p-3">
            <p>THE CREATION OF A REFERENCE


With decades of experience in the production and distribution of food, beverages and personal care products from Asia and Africa, Exotic City has become a major reference in its sector.

A wide range of products, a quality label

Our long experience in the food and cosmetics sector has allowed us to position ourselves as the exclusive distributor of a wide range of exotic products among the best on the market. Anxious to offer you references at the heart of your expectations and the evolution of consumer tastes, Exotic City is also developing its own ranges.</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default About