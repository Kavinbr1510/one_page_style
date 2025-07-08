import barChair from "./assets/chair1.png";
import barChair2 from "./assets/chair1_2.png";
import barChair3 from "./assets/chair1_3.png";
import barChair4 from "./assets/chair1_4.png";
import barChair5 from "./assets/chair1_5.png";
import person from "./assets/person.jpeg";
import person2 from "./assets/person3.jpeg";
const productData = [
  {
    chairName: "Bar Chair",
    subName: "LuxeBar Elegenza",
    mainImage: barChair,
    galleryImages: [barChair2, barChair3, barChair4, barChair5],
    description: ` Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.`,
    rating: 4.8,
    offer: "$129.00",
    original: "$150.00",
    discount: "10% off!",
    selectedColor: "Black",
    colorOptions: [barChair, barChair2, barChair],
    productInfo: {
      details: `The Zenith Zen Bar Chair features a sleek, ergonomic design with a high backrest for optimal support.
                 Crafted from premium-grade wood and metal, ensuring durability and long-term use.
                 Finished with a smooth matte coating, it blends modern style with everyday comfort.`,
                 
      packaging: `Each bar chair is securely packed with multi-layer cushioning to prevent any damage during transit.
                  The package includes assembly instructions and required accessories (if any).
                  All packaging materials are eco-friendly and recyclable to support sustainability.`,

      shipping: `Your Zenith Zen Bar Chair will be dispatched within 3–5 business days from our nearest warehouse.
                 We offer free doorstep delivery to all metro and major tier-2 cities across India.
                 Cash on Delivery (COD) and easy tracking are available for your convenience.`,
    },
    measurements: {
      size: {
        Height: "43 inches",
        Width: "20 inches",
      },
      material: {
        Seat: "Premium Leather",
        Legs: "Teak wood & Metal",
      },
    },
    reviews: [
      {
        name: "John Doe",
        date: "July 4, 2025",
        rating: 4.9,
        avatar: person,
        content: `It’s super comfortable, but its plush, pillowy appearance
                  belies a far more rigid structure. It’s far firmer than I
                  expected upon first glance. This initially came as a
                  disappointment, but that disappointment was tempered by the
                  fact that it almost seems to encourage an ergonomic
                  correctness. I can see some thinking it is a bit too firm, as
                  my husband did. But many accent chairs aren’t conducive to
                  being sat in for a long time while typing on a laptop, and it
                  works well for this purpose (at least for me) because it
                  really keeps its form.`,
      },
      {
        name: "Kevin peter",
        date: "June 7, 2025",
        rating: 4.7,
        avatar: person2,
        content: `It’s super comfortable, but its plush, pillowy appearance
                  belies a far more rigid structure. It’s far firmer than I
                  expected upon first glance. This initially came as a
                  disappointment, but that disappointment was tempered by the
                  fact that it almost seems to encourage an ergonomic
                  correctness. I can see some thinking it is a bit too firm, as
                  my husband did. But many accent chairs aren’t conducive to
                  being sat in for a long time while typing on a laptop, and it
                  works well for this purpose (at least for me) because it
                  really keeps its form.`,
      },
    ],
  },
];

export default productData;
