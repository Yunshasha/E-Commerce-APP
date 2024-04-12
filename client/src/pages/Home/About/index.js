import React from "react";
import styles from "@/styles/Home.module.css";

function index() {
  return (
    <div>
      <div className={styles.imgs}>
        <img src="/imgs/stories.jpg" alt="" />
      </div>
      <div className={styles.description}>
        <div className={styles.top}>
          <div></div>
          <span>Lamastore Stories</span>
          <div></div>
        </div>
        <div className={styles.bottom}>
          <p>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.Lorem ipsum dolor sit amet conse ctetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore. Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
            seddo eiusmod tempor incididunt ut labore etdolore.
          </p>
          <p>
            Inspirée par les rues pavées de Paris et le chic intemporel des
            parisiennes, L'Essence Parisienne a été fondée par deux amis
            d'enfance, Camille et Antoine. Leur passion pour l'art, la mode et
            la culture française les a amenés à créer une marque qui capture
            l'élégance et l'audace de la vie parisienne. Chaque pièce est conçue
            pour raconter une histoire et incarner l'esprit de la ville lumière.
            Inspirée par les voyages exotiques et les destinations lointaines,
            Voyageur Élégant est une marque qui capture l'esprit de l'aventure
            et le raffinement du voyage. Fondée par la globe-trotteuse
            passionnée Sophie, la marque puise son inspiration dans les cultures
            du monde entier, des marchés animés de Marrakech aux plages
            ensoleillées de Bali. Chaque collection de Voyageur Élégant raconte
            une histoire de découverte et d'émerveillement, avec des motifs
            vibrants, des textiles luxueux et des détails artisanaux. Des robes
            longues aux imprimés ethniques aux sarouels en lin léger, chaque
            pièce est conçue pour évoquer l'évasion et l'épanouissement,
            permettant à ceux qui les portent de voyager à travers le monde sans
            jamais quitter leur dressing.
          </p>
          <p>
            Au cœur des ruelles sinueuses du quartier de Montmartre à Paris, se
            trouve un petit atelier où la magie de la mode prend vie. Fondée par
            la talentueuse créatrice Anaïs, L'Atelier Bohème est bien plus
            qu'une simple marque de vêtements. C'est un refuge pour les âmes
            bohèmes, un lieu où l'expression de soi est encouragée et célébrée.
            Anaïs a toujours été fascinée par l'esprit libre et créatif des
            artistes qui ont autrefois fréquenté Montmartre, et c'est cette même
            énergie qu'elle cherche à capturer dans chacune de ses créations.
            Des robes flottantes aux imprimés floraux aux vestes en cuir vieilli
            ornées de broderies complexes, chaque pièce raconte une histoire,
            une histoire de liberté, de passion et d'aventure. L'Atelier Bohème
            n'est pas seulement une marque de vêtements, c'est un mode de vie,
            une ode à l'individualité et à la beauté de l'imperfection.
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
