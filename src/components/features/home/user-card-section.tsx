import { Card } from "@/components/ui/card";

export function UserCardSection() {
  const userData = [
    {
      "id": 1,
      "name": "Felvin Cute",
      "bio": "Asian Cutie",
      "social": "wwww.facebook.com/felvinbags"
    },
    {
      "id": 2,
      "name": "Bentong",
      "bio": "Asian Bentong",
      "social": "wwww.facebook.com/asianbentong"
    },
    {
      "id": 3,
      "name": "Jheming Hoy",
      "bio": "Asian Esmikmik",
      "social": "wwww.facebook.com/jheming"
    },
    {
      "id": 4,
      "name": "Jheming Hoy",
      "bio": "Asian Esmikmik",
      "social": "wwww.facebook.com/jheming"
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {userData.map((user) => (
        <Card key={user.id} title={user.name}
          description={user.bio}
          buttonLabel="Click Me"
        />
      ))}
    </section>
  )
}