import { Card } from "@/components/ui/card";

export function CardDataSection() {
  const productData = [
    {
      "id": 1,
      "name": "iPhone 100",
      "description": "Samsung ang background",
    },
    {
      "id": 2,
      "name": "Cherry Mobile",
      "description": "Tripe A ang battery",
    },
    {
      "id": 3,
      "name": "Nokia",
      "description": "Mas lig on pas inyong relasyon",
    },
  ]

  const myProfile = {
    "name": "Ariel",
    "email": "test@gmail.com"
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {productData.map((product) => (
        <Card key={product.id} title={product.name}
          description={product.description}
          buttonLabel="Click Me" 
          buttonVariant="primary" 
        />
      ))}

      <h1>{myProfile.name}</h1>
      <p>{myProfile.email}</p>
    </section>
  )
}