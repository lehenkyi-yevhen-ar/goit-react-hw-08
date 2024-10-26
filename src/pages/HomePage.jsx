import { useNavigate } from "react-router"

const HomePage = () => {
  const navigate = useNavigate()
  const handleClick = () => navigate("/register")
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Hello there
            </h1>
            <p className="mb-5">
              Welcome to the contact book service!
              Please Sign Up to make your own
              contact book
            </p>
            <button
              onClick={handleClick}
              className="btn bg-themeColor border-none text-white hover:text-black"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
