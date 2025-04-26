'use client';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 via-white to-pink-100 p-8">
      {/* Tagline */}
      <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-4">
        mamun-reza-freeshop
      </h1>

      {/* Subtext */}
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        Your one-stop destination for the freshest collections. Curated by Mamun Reza, made for everyone.
      </p>

      {/* Button */}
      <a
        href="/orders"
        className="px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-full shadow transition"
      >
        Explore Orders
      </a>
    </div>
  );
}
