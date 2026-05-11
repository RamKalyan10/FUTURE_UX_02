const DATA = {
  onboarding: [
    { icon: 'check-circle', title: 'Book Verified Professionals', desc: 'Access a network of trusted, background-checked service providers ready to help you', color: 'text-teal-600' },
    { icon: 'clock', title: 'Track Appointments Live', desc: 'Real-time tracking and instant updates on your service provider\'s arrival', color: 'text-blue-600' },
    { icon: 'shield', title: 'Safe & Affordable Services', desc: 'Transparent pricing with service guarantee and 24/7 customer support', color: 'text-purple-600' }
  ],
  categories: [
    { id: 'plumbing', name: 'Plumbing', icon: 'droplet', color: 'bg-blue-100 text-blue-600' },
    { id: 'electrical', name: 'Electrical', icon: 'zap', color: 'bg-yellow-100 text-yellow-600' },
    { id: 'cleaning', name: 'Cleaning', icon: 'sparkles', color: 'bg-purple-100 text-purple-600' },
    { id: 'painting', name: 'Painting', icon: 'paintbrush', color: 'bg-pink-100 text-pink-600' },
    { id: 'carpentry', name: 'Carpentry', icon: 'hammer', color: 'bg-orange-100 text-orange-600' },
    { id: 'ac-repair', name: 'AC Repair', icon: 'wind', color: 'bg-teal-100 text-teal-600' },
  ],
  popularServices: [
    { id: 'cleaning', name: 'Deep House Cleaning', category: 'Cleaning', rating: 4.8, reviews: 365, price: 800, duration: '3-4 hours' },
    { id: 'ac-repair', name: 'AC Installation & Repair', category: 'AC Repair', rating: 4.9, reviews: 421, price: 600, duration: '2-3 hours' },
    { id: 'electrical', name: 'Electrical Wiring & Fixes', category: 'Electrical', rating: 4.7, reviews: 298, price: 400, duration: '1-2 hours' }
  ],
  serviceDetails: {
    plumbing: { name: 'Plumbing Services', desc: 'Professional plumbing services including repairs, installations, and maintenance. Our certified plumbers handle everything from leaky faucets to complete pipe replacements.', price: 400, duration: '1-2 hours', rating: 4.8, reviews: 523, features: ['Emergency service available', 'Licensed & insured professionals', 'Same-day service', 'Quality guarantee'] },
    electrical: { name: 'Electrical Services', desc: 'Expert electrical services for homes and offices. From wiring to fixture installation, our licensed electricians ensure safe and reliable work.', price: 600, duration: '1-3 hours', rating: 4.9, reviews: 421, features: ['Certified electricians', 'Safety guaranteed', 'Free consultation', 'Warranty included'] },
    cleaning: { name: 'Deep House Cleaning', desc: 'Comprehensive cleaning service for your entire home. We use eco-friendly products and professional equipment for spotless results.', price: 800, duration: '3-4 hours', rating: 4.8, reviews: 365, features: ['Eco-friendly products', 'Professional equipment', 'Background-checked staff', 'Satisfaction guaranteed'] },
    painting: { name: 'Painting Services', desc: 'Professional interior and exterior painting services. Our skilled painters deliver flawless finishes with premium quality paints.', price: 900, duration: '4-6 hours', rating: 4.7, reviews: 289, features: ['Premium quality paints', 'Expert color consultation', 'Clean workspace', 'Quick turnaround'] },
    carpentry: { name: 'Carpentry Services', desc: 'Custom carpentry and furniture repairs by experienced craftsmen. From repairs to custom builds, we handle it all.', price: 700, duration: '2-4 hours', rating: 4.8, reviews: 312, features: ['Custom solutions', 'Quality materials', 'Experienced craftsmen', 'Detailed finishing'] },
    'ac-repair': { name: 'AC Repair & Installation', desc: 'Complete AC services including repair, installation, and maintenance. Keep your space cool with our expert technicians.', price: 600, duration: '2-3 hours', rating: 4.9, reviews: 421, features: ['24/7 emergency service', 'All brands supported', 'Genuine spare parts', '90-day warranty'] }
  },
  specialists: [
    { id: 1, name: 'John Smith', specialty: 'Senior Plumber', experience: '8 years', rating: 4.9, reviews: 234, jobsCompleted: 450, verified: true, available: true, distance: '2.3 km away', avatar: '👨‍🔧' },
    { id: 2, name: 'Sarah Johnson', specialty: 'Master Plumber', experience: '12 years', rating: 5.0, reviews: 389, jobsCompleted: 720, verified: true, available: true, distance: '3.8 km away', avatar: '👩‍🔧' },
    { id: 3, name: 'Michael Brown', specialty: 'Certified Plumber', experience: '5 years', rating: 4.8, reviews: 156, jobsCompleted: 280, verified: true, available: false, distance: '1.5 km away', avatar: '👨‍🔧' },
    { id: 4, name: 'Emily Davis', specialty: 'Expert Plumber', experience: '10 years', rating: 4.9, reviews: 298, jobsCompleted: 560, verified: true, available: true, distance: '4.2 km away', avatar: '👩‍🔧' }
  ],
  dates: [
    { date: '10', day: 'Sun', month: 'May', available: true },
    { date: '11', day: 'Mon', month: 'May', available: true },
    { date: '12', day: 'Tue', month: 'May', available: true },
    { date: '13', day: 'Wed', month: 'May', available: true },
    { date: '14', day: 'Thu', month: 'May', available: false },
    { date: '15', day: 'Fri', month: 'May', available: true },
    { date: '16', day: 'Sat', month: 'May', available: true }
  ],
  times: [
    { time: '09:00 AM', available: true }, { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: false }, { time: '12:00 PM', available: true },
    { time: '02:00 PM', available: true }, { time: '03:00 PM', available: true },
    { time: '04:00 PM', available: false }, { time: '05:00 PM', available: true }
  ],
  notifications: [
    { id: 1, title: 'Service Reminder', message: 'The specialist will be with you in 1 hr.', time: 'Just now', icon: 'bell', color: 'bg-teal-100 text-teal-600' },
    { id: 2, title: 'Specialist Assigned', message: 'Sarah Johnson has been assigned to your service.', time: '1 hour ago', icon: 'user', color: 'bg-blue-100 text-blue-600' },
    { id: 3, title: 'Booking Confirmed', message: 'Your Deep House Cleaning is booked for Mon, May 11 at 10:00 AM.', time: '2 hours ago', icon: 'check-circle', color: 'bg-green-100 text-green-600' }
  ],
  recentBookings: [
    { id: 'FX12345678', service: 'Deep House Cleaning', specialist: 'Sarah Johnson', date: 'Mon, May 11', time: '10:00 AM', status: 'Upcoming', statusColor: 'text-blue-600 bg-blue-50' },
    { id: 'FX12345123', service: 'Electrical Wiring', specialist: 'Michael Brown', date: 'Fri, May 8', time: '02:00 PM', status: 'Completed', statusColor: 'text-green-600 bg-green-50' }
  ],
  profileMenu: [
    { icon: 'map-pin', label: 'Saved Addresses' },
    { icon: 'credit-card', label: 'Payment Methods' },
    { icon: 'star', label: 'My Reviews' },
    { icon: 'settings', label: 'Settings' },
    { icon: 'help-circle', label: 'Help & Support' },
  ]
};

// Common initialization for Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function getAppBookings() {
  let bookings = localStorage.getItem('appBookings');
  if (!bookings) {
    let oldStored = JSON.parse(localStorage.getItem('myNewBookings') || '[]');
    let initialBookings = [...oldStored, ...DATA.recentBookings];
    localStorage.setItem('appBookings', JSON.stringify(initialBookings));
    return initialBookings;
  }
  return JSON.parse(bookings);
}

function saveAppBookings(bookings) {
  localStorage.setItem('appBookings', JSON.stringify(bookings));
}
