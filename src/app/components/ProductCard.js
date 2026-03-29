export default function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="img-box">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="card-info">
        <h3>{product.title.slice(0, 35)}...</h3>

        <p>Sign in or Create an account to see pricing</p>

        <span className="heart">♡</span>
      </div>
    </div>
  );
}