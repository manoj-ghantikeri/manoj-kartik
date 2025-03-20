import React from 'react';
import { Play, Info, TrendingUp, Crown, Flame, Star, Popcorn, Clapperboard, Heart, Trophy, Sparkles, Clock } from 'lucide-react';

function App() {
  const categories = [
    {
      title: "Trending Now",
      icon: <TrendingUp className="w-6 h-6" />,
      shows: [
        { id: 1, title: "Stranger Things", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop" },
        { id: 2, title: "The Crown", image: "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?w=800&auto=format&fit=crop" },
        { id: 3, title: "Breaking Bad", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop" },
        { id: 4, title: "Money Heist", image: "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?w=800&auto=format&fit=crop" },
      ]
    },
    {
      title: "Popular Shows",
      icon: <Flame className="w-6 h-6" />,
      shows: [
        { id: 5, title: "Dark", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&auto=format&fit=crop" },
        { id: 6, title: "The Witcher", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop" },
        { id: 7, title: "Ozark", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&auto=format&fit=crop" },
        { id: 8, title: "Peaky Blinders", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop" },
      ]
    },
    {
      title: "Award Winners",
      icon: <Crown className="w-6 h-6" />,
      shows: [
        { id: 9, title: "The Queen's Gambit", image: "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?w=800&auto=format&fit=crop" },
        { id: 10, title: "Succession", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&auto=format&fit=crop" },
        { id: 11, title: "The Crown", image: "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?w=800&auto=format&fit=crop" },
        { id: 12, title: "Better Call Saul", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&auto=format&fit=crop" },
      ]
    },
    {
      title: "New Releases",
      icon: <Sparkles className="w-6 h-6" />,
      shows: [
        { id: 13, title: "Wednesday", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop" },
        { id: 14, title: "The Last of Us", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=800&auto=format&fit=crop" },
        { id: 15, title: "House of the Dragon", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop" },
        { id: 16, title: "The Bear", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=800&auto=format&fit=crop" },
      ]
    },
    {
      title: "Must-Watch Movies",
      icon: <Clapperboard className="w-6 h-6" />,
      shows: [
        { id: 17, title: "Inception", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&auto=format&fit=crop" },
        { id: 18, title: "The Dark Knight", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format&fit=crop" },
        { id: 19, title: "Interstellar", image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&auto=format&fit=crop" },
        { id: 20, title: "Dune", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format&fit=crop" },
      ]
    },
    {
      title: "Romantic Picks",
      icon: <Heart className="w-6 h-6" />,
      shows: [
        { id: 21, title: "Pride & Prejudice", image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&auto=format&fit=crop" },
        { id: 22, title: "The Notebook", image: "https://images.unsplash.com/photo-1515890435782-59a5bb6ec191?w=800&auto=format&fit=crop" },
        { id: 23, title: "La La Land", image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&auto=format&fit=crop" },
        { id: 24, title: "Before Sunrise", image: "https://images.unsplash.com/photo-1515890435782-59a5bb6ec191?w=800&auto=format&fit=crop" },
      ]
    },
    {
      title: "Oscar Winners",
      icon: <Trophy className="w-6 h-6" />,
      shows: [
        { id: 25, title: "Parasite", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop" },
        { id: 26, title: "Everything Everywhere", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop" },
        { id: 27, title: "CODA", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop" },
        { id: 28, title: "Nomadland", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop" },
      ]
    },
    {
      title: "Watch Again",
      icon: <Clock className="w-6 h-6" />,
      shows: [
        { id: 29, title: "Friends", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop" },
        { id: 30, title: "The Office", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop" },
        { id: 31, title: "Breaking Bad", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop" },
        { id: 32, title: "Game of Thrones", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop" },
      ]
    },
    {
      title: "Family Favorites",
      icon: <Popcorn className="w-6 h-6" />,
      shows: [
        { id: 33, title: "The Lion King", image: "https://images.unsplash.com/photo-1533923156502-be31530547c4?w=800&auto=format&fit=crop" },
        { id: 34, title: "Toy Story", image: "https://images.unsplash.com/photo-1560109947-543149eceb16?w=800&auto=format&fit=crop" },
        { id: 35, title: "Finding Nemo", image: "https://images.unsplash.com/photo-1533923156502-be31530547c4?w=800&auto=format&fit=crop" },
        { id: 36, title: "The Incredibles", image: "https://images.unsplash.com/photo-1560109947-543149eceb16?w=800&auto=format&fit=crop" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gradient-to-b from-black to-transparent">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-red-600 text-3xl font-bold">STREAMFLIX</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-gray-300">Home</a>
              <a href="#" className="hover:text-gray-300">TV Shows</a>
              <a href="#" className="hover:text-gray-300">Movies</a>
              <a href="#" className="hover:text-gray-300">New & Popular</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:text-gray-300">
              <Star className="w-6 h-6" />
            </button>
            <div className="w-8 h-8 rounded-full bg-red-600"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1600&auto=format&fit=crop"
            alt="Hero Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">Stranger Things</h1>
              <p className="text-lg mb-8">When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.</p>
              <div className="flex space-x-4">
                <button className="flex items-center px-8 py-3 bg-white text-black rounded hover:bg-gray-200 transition">
                  <Play className="w-6 h-6 mr-2" />
                  Play
                </button>
                <button className="flex items-center px-8 py-3 bg-gray-600/70 rounded hover:bg-gray-600 transition">
                  <Info className="w-6 h-6 mr-2" />
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative z-10 -mt-32 pb-16">
        {categories.map((category, index) => (
          <section key={index} className="container mx-auto px-4 mb-12">
            <div className="flex items-center mb-4">
              {category.icon}
              <h2 className="text-2xl font-bold ml-2">{category.title}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {category.shows.map((show) => (
                <div key={show.id} className="relative group">
                  <img 
                    src={show.image} 
                    alt={show.title}
                    className="w-full aspect-video object-cover rounded-lg transform group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{show.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default App;