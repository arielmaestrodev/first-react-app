export function ProfileSection() {
  const profile = {
    "name": "Ariel Batoon",
    "email": "test@gmail.com"
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      My Profile: {profile.name} - {profile.email}
    </section>
  )
}