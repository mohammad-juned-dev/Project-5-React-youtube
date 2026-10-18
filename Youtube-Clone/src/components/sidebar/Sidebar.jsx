import React from "react";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = () => {
  return (
    <div>
      <div>
        <div>
          <img src={home} alt="" />
          <p>Home</p>
        </div>
        <div>
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div>
          <img src={automobiles} alt="" />
          <p>Automibiles</p>
        </div>
        <div>
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>
        <div>
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div>
          <img src={tech} alt="" />
          <p>Tech</p>
        </div>
        <div>
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div>
          <img src={blogs} alt="" />
          <p>Blogs</p>
        </div>
        <div>
          <img src={news} alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div>
        <h3>Subscribed</h3>
        <div>
          <img src={jack} alt="" />
          <p>pewdipie</p>
        </div>
        <div>
          <img src={simon} alt="" />
          <p>simon</p>
        </div>
        <div>
          <img src={tom} alt="" />
          <p>tom</p>
        </div>
        <div>
          <img src={megan} alt="" />
          <p>megan</p>
        </div>
        <div>
          <img src={cameron} alt="" />
          <p>cameron</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
