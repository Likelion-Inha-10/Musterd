import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Search from '../pages/Search';
import Ranking from '../pages/Ranking';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import QrCamera from '../pages/QrCamera';
import MyPage from '../pages/MyPage/MyPage';
import Stamp from '../pages/Stamp';
import LikeLion from '../pages/Stamp/Component/StampPage/LikeLion';
import Performance from '../pages/Stamp/Component/Performance/index';
import Harvardcomplete from '../pages/Stamp/Component/Performance/harvardcomplete';
// 라우트명은 kebab-case 로 작성합니다

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/search" element={<Search />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/scan" element={<QrCamera />} />
      <Route path="mypage" element={<MyPage />} />
      <Route path="/stamp" element={<Stamp />} />
      <Route path="/stamp/likelion" element={<LikeLion />} />
      <Route path="/stamp/likelion-complete" element={<Performance />} />
      <Route path="/stamp/harvard" element={<Harvardcomplete />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
