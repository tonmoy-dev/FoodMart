module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co', 'res.cloudinary.com', 'images.unsplash.com','lh3.googleusercontent.com','uitheme.net','pro.fontawesome.com'],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY
  }
}
