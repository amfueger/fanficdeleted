import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "./Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "./../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "./../images/svg-decorator-blob-3.svg";

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
const Category = tw.div`mt-4 text-blue-100 font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`;
const Link = tw.a`inline-block mt-2 text-sm text-blue-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-blue-500`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

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
    },
    {
      imageSrc:
        "data:image/png;base64,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",
      category: "Fimfiction",
      title: "Started scraping in 2021",
      url: "https://www.fimfiction.net/"
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
