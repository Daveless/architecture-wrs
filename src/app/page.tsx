import { HeroSection } from './components/HeroSection';
import { ServicesGrid } from './components/ServicesGrid';
import { TestimonialSlider } from './components/TestimonialSlider';
import { BookingForm } from './components/BookingForm';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ServicesGrid />
      <TestimonialSlider />
      <BookingForm />
    </main>
  );
}