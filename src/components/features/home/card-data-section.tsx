import { Card } from "@/components/ui/card";

export function CardDataSection() {
  const productData = [
    {
      "id": 1,
      "name": "Nike Shoes",
      "description": "Nikenitkitan",
    },
    {
      "id": 2,
      "name": "iPhone 100",
      "description": "Samsung ang background"
    },
    {
      "id": 3,
      "name": "Cherry Mobile",
      "description": "Pero Battery Everyday"
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {productData.map((product) => (
        <Card key={product.id} title={product.name}
            description={product.description}
            buttonLabel="Click Me" 
            buttonVariant="primary" 
        />
      ))}
    </section>
  )
}