import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BharatanatyamPortal() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-100 text-gray-800">
      {/* Header */}
      <header className="bg-red-600 text-white py-6 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Natya Sangeet</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#classes" className="hover:underline">Classes</a>
            <a href="#gallery" className="hover:underline">Gallery</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-orange-100">
        <h2 className="text-4xl font-bold text-red-700">Welcome to Natya Sangeet</h2>
        <p className="mt-4 text-lg">A classical Bharatanatyam dance school rooted in tradition and grace</p>
        <Button className="mt-6 bg-red-600 hover:bg-red-700">Join Us</Button>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4">About Us</h3>
          <p className="text-lg">Founded by renowned gurus, Natya Sangeet has trained students for over two decades in the traditional Bharatanatyam style, preserving the cultural heritage of South India.</p>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-8">Classes & Schedule</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
              <Card key={level} className="bg-orange-50 border border-orange-200">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-red-700 mb-2">{level}</h4>
                  <p>Weekly {level.toLowerCase()} classes focusing on technique, rhythm, and expression.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 px-4 bg-orange-100">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-8">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <img key={n} src={`https://via.placeholder.com/300x200?text=Dance+${n}`} alt={`Dance ${n}`} className="rounded-xl shadow-md" />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
          <p>Get in touch for admissions or performance bookings.</p>
          <div className="mt-6">
            <p>Email: contact@natyasangeet.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Chennai, Tamil Nadu</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-4 text-center">
        © 2025 Natya Sangeet. All rights reserved.
      </footer>
    </div>
  );
}
