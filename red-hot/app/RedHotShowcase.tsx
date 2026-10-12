import Image from "next/image";
import styles from "./RedHotShowcase.module.css";

// Fotos e descritivos fornecidos pelo usuário em anexos.zip, 09/10/2026.
const PRODUCTS = [
  { name: "Hawaii Burger", image: "hawaii-burger.png", price: "R$ 37,90", description: "Pão brioche, blend de 160 g, maionese da casa, alface picada, queijo muçarela, cebola roxa fatiada, bacon crispy e chutney de abacaxi caramelizado." },
  { name: "Texas Burger", image: "texas-burger.png", price: "R$ 37,90", description: "Pão brioche, blend de pernil de 160 g, maionese da casa, alface picada, tomate, queijo prato, cebola caramelizada, bacon crispy, geleia de pimenta e pimenta jalapeño." },
  { name: "Dodgers Burger", image: "dodgers-burger.png", price: "R$ 38,90", description: "Carne bovina, queijo muçarela, ovo, maionese de ervas, bacon e molho barbecue." },
  { name: "Tiger Burger", image: "tiger-burger.png", price: "R$ 37,90", description: "Pão brioche, blend artesanal de 160 g, anel de cebola empanado, molho barbecue, cheddar cremoso, rúcula e maionese." },
  { name: "BLT Hot Dog", image: "blt-hot-dog.png", price: "R$ 35,90", description: "Pão brioche, salsicha bovina, alface, tomate, maionese, bacon e catupiry." },
  { name: "Yankee Hot Dog", image: "yankee-hot-dog.png", price: "R$ 35,90", description: "Pão brioche, salsicha bovina, creme de gorgonzola, cebola roxa e bacon crispy." },
  { name: "Astros Dog", image: "astros-dog.png", price: "R$ 35,90", description: "Pão de hot dog, salsicha bovina, maionese da casa, milho, batata palha e chutney de tomate." },
  { name: "Milkshake de paçoca 440 ml", image: "milkshake-pacoca.png", price: "R$ 25,90", description: "Paçoca · 440 ml" },
];

export const showcasedNames = new Set(PRODUCTS.map(product => product.name));

export default function RedHotShowcase({ orderUrl }: { orderUrl: string }) {
  return (
    <div className={styles.grid} id="vitrine">
      {PRODUCTS.map(product => (
        <article className={styles.product} key={product.name}>
          <div className={styles.photo}>
            <Image src={"/conceitos/red-hot/vitrine/" + product.image} alt={product.name} fill
              sizes="(max-width: 650px) calc(100vw - 40px), (max-width: 1000px) 45vw, 30vw" />
          </div>
          <div className={styles.body}>
            <div className={styles.titleRow}>
              <h3>{product.name}</h3>
              <strong>{product.price}</strong>
            </div>
            <p>{product.description}</p>
            <a href={orderUrl} target="_blank" rel="noreferrer" aria-label={"Pedir " + product.name + " pelo WhatsApp"}>Pedir pelo WhatsApp <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      ))}
    </div>
  );
}
