import React, { useState, useCallback } from "react";
import { contents } from "../utilities/contents";
import { filterContents } from "../utilities/filterContents";
import { BiCaretUpCircle } from "react-icons/bi";
import Card from "./Card";
import { TopButton } from "../styles/styledCollection";
import { Category, Logo, Navbar } from "../styles/styledNavbar";
import { CardsBox } from "./../styles/styledCards";

const Collection = () => {
  const [content, setContent] = useState(contents);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const filtering = useCallback((menuName) => {
    if (menuName === "전체") {
      setContent(contents);
    } else {
      const filteredMenu = contents.filter((menu) => {
        return menu.character === menuName;
      });
      setContent(filteredMenu);
    }
  }, []);

  return (
    <div>
      {/* 맨 위로 올라가게 하는 버튼 */}
      <TopButton onClick={() => scrollToTop()}>
        <BiCaretUpCircle />
      </TopButton>
      {/* Navbar */}
      <Navbar>
        <Logo>JUNS HOTPLACE</Logo>
        <Category>
          {filterContents.map((content, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  filtering(content.korean);
                }}
              >
                {content.korean}
              </li>
            );
          })}
        </Category>
      </Navbar>

      {/* Cards */}
      <CardsBox>
        {content.map((content, index) => (
          <Card content={content} key={index} />
        ))}
      </CardsBox>
    </div>
  );
};

export default Collection;
