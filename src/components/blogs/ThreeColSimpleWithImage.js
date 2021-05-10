import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded`
]);
const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`;
const Link = tw.a`inline-block mt-2 text-sm text-blue-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-blue-500`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default () => {
  const blogPosts = [
    {
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/8/88/Archive_of_Our_Own_logo.png",
      category: "Archive of Our Own",
      title: "Started scraping in 2016",
      url: "https://archiveofourown.org/works"
    },
    {
      imageSrc:
        "https://i.pinimg.com/564x/9d/7d/ea/9d7dea32a8f96bece6eb9377d3a3926c.jpg",
      category: "Wattpad",
      title: "Started scraping in 2021",
      url: "https://wattpad.com"
    },
    {
      imageSrc:
        "data:image/jpeg;base64,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",
      category: "Fanfiction.net",
      title: "Started scraping in 2013",
      url: "https://www.fanfiction.net/"
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Sites we scrape</HeadingTitle>
          <HeadingDescription>Scroll down to reach the search bar.</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Category>{post.category}</Category>
                <Title>{post.title}</Title>
                <Link href={post.url}>Read Post</Link>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
