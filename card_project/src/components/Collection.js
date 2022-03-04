import React, { useState, useCallback } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Menu, Items } from "./styledComp";
import { contents } from "../utilities/contents";
import { filterContents } from "../utilities/filterContents";
import { BiCaretUpCircle } from "react-icons/bi";
import Card from "./Card";
import Detail from "./Detail";
import "../styles/collection.css";

const Collection = () => {
  const [menu, setMenu] = useState(contents);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const filtering = useCallback((menuName) => {
    if (menuName === "전체") {
      //console.log(menu);
      setMenu(contents);
    } else {
      const filteredMenu = contents.filter((menu) => {
        return menu.character === menuName;
      });
      setMenu(filteredMenu);
      //console.log(menu);
    }
  }, []);

  // const filtering = (menuName) => {
  //   const filteredMenu = menu.filter((content) => {
  //     return content.character == menuName;
  //   });

  //   console.log(filteredMenu);
  //   setMenu(filteredMenu);
  // };

  return (
    <div className="container">
      <span onClick={handleClick}>
        <BiCaretUpCircle />
      </span>
      <Menu>
        <h2 onClick={handleClick}>
          <Link to="/" className="titleLink">
            JUNS HOTPLACE
          </Link>
        </h2>

        <ul>
          {filterContents.map((content, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  filtering(content.korean);
                }}
                // style={
                //   menu.length < 10 && menu[0].character === content.korean
                //     ? { color: "#1c3f05" }
                //     :{}
                // }
              >
                <Link to="/" className="liLink">
                  {content.korean}
                </Link>
              </li>
            );
          })}
        </ul>
      </Menu>
      <Switch>
        {contents.map((aContent, index) => {
          return (
            <Route path={aContent.path} key={index}>
              <Detail content={aContent} />
            </Route>
          );
        })}

        <Route path="/">
          <Items>
            {menu.map((aContent, index) => {
              return <Card content={aContent} key={index} />;
            })}
          </Items>
        </Route>
      </Switch>
    </div>
  );
};

export default Collection;
