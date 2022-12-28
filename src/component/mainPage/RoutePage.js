import { Routes, Route } from "react-router-dom";
import Chat from "../../pages/chat/Chat";
import Homepage from "../../pages/home/Homepage";
import News from "../../pages/news/News";
import NotFound from "../../pages/notFound/NotFound";
import Sale from "../../pages/sale/Sale";
import Setting from "../../pages/setting/Setting";
import Subscribed from "../../pages/subscribed/Subscribed";

const RoutePage = () => {
  return (
    <section>
      <Routes>
       <Route  path="/" element={<Homepage />} />
        <Route path="subscribed" element={<Subscribed />} />
        <Route path="chat" element={<Chat />} />
        <Route path="news" element={<News />} />
        <Route path="sale" element={<Sale />} />
        <Route path="setting" element={<Setting />} />
        <Route path="*" element={<NotFound />} />
      </Routes> 
    </section>
  );
};

export default RoutePage;
