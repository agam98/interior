import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Transform Your Space</h1>
          <p className="text-xl md:text-2xl mb-8">Create the perfect interior that reflects your style and personality</p>
          <Button href="#contact">Get Started</Button>
        </div>
      </div>
    </section>
  );
}