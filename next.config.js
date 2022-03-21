const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co','images.unsplash.com','lh3.googleusercontent.com','uitheme.net','pro.fontawesome.com'],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
})
