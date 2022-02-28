
export default async (req, res) => {
    const { productId } = req.query
    res.end(`Post: ${productId}`)
}
