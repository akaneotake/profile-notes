import { Link } from 'react-router-dom';

const Home = (): JSX.Element => {
  return (
    <>
      <h1>画面上で書けるプロフィール帳</h1>
      <div>
        <Link to='/for-adult'>
          <h3>大人のプロフィール帳</h3>
        </Link>
        <Link to='/for-amongus'>
          <h3>ジャニオタ・アモアス用プロフィール帳</h3>
        </Link>
      </div>
    </>
  );
};

export default Home;