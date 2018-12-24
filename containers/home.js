const Home = ({ user, signIn }) => (
  <>{!user && <button onClick={signIn}>Login with google</button>}</>
)

export default Home
