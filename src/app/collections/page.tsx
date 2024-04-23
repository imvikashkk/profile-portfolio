import { Metadata } from "next";
import React from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import FeaturedArticle from "@/components/FeaturedArticle";
import Notes from "@/components/Notes";
import ReactJS from "../../../public/images/articles/ReactJS.png";
import NodeIMG from "../../../public/images/articles/nodejs.png";
import ExpreesImg from "../../../public/images/articles/expressjs.jpeg"
import JSNotesIMG from "../../../public/images/Notes/jsnote.png";
import TSCheatShit from "../../../public/images/Notes/tscheatsheet.jpeg";
import CSSImg from "../../../public/images/Notes/CSS.jpeg";
import GitGitHub from "../../../public/images/Notes/GitGitHub.jpeg";
import MongoDBImg from "../../../public/images/Notes/MongoDB.png";
import HTTPStatusImg from "../../../public/images/Notes/HTTPStatus.png";
import HTMLImg from "../../../public/images/Notes/HTML.jpeg";
import MongooseImg from "../../../public/images/Notes/Mongoose.png"
import ReduxToolkitImg from "../../../public/images/articles/Redux_ToolKit.jpg"
import NextJSImg from "../../../public/images/articles/NextJS.png"
import ReactNativeImg from "../../../public/images/articles/ReactNative.png"
import ExpoReactNativeIMG from "../../../public/images/articles/ExpoReactNative.webp"
import FireBaseIMG from "../../../public/images/articles/firebase.jpg"

export const metadata: Metadata = {
  title: "KKDev/Articles",
  description: "Articles by Developer VikashKK",
};

const page = () => {
  return (
    <>
      <main className="w-full flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16 pb-48 xl:p-8 lg:p-4 xs:px-2.5">
          <AnimatedText className="mb-16 sm:mb-8 lg:!text-7xl sm:!6xl xs:!text-4xl !text-center">
            Words Can Change The World!
          </AnimatedText>
          <ul className="grid grid-cols-4 gap-8 md:gap-4 sm:grid-cols-1 sm:px-8 xs:px-4 xxs:px-1 xl:grid-cols-3 customlg:grid-cols-2 ">
            <FeaturedArticle
              image={ReactJS}
              link="https://react.dev/learn"
              summary="React: JavaScript library for building UIs with components, virtual DOM, JSX, state, props, unidirectional data flow, lifecycle methods, and hooks."
              time="15 Days"
              title="Studying React is an excellent choice for Frontend development endeavors."
            />
            <FeaturedArticle
              image={ReduxToolkitImg}
              link="https://redux-toolkit.js.org/introduction/getting-started"
              summary="Exploring Redux Toolkit alongside React enhances state management skills and empowers robust web application development with ease and efficiency."
              time="2 Days"
              title="Enhancing React Projects with Redux Toolkit for Efficient State Management"
            />
            <FeaturedArticle
              image={NodeIMG}
              link="https://nodejs.org/docs/latest/api/"
              summary="Node.js: Runtime for executing JavaScript code outside browsers, facilitating server-side development with its event-driven architecture and vast ecosystem."
              time="3 Days"
              title="Node.js: JavaScript runtime for server-side applications."
            />
            <FeaturedArticle
              image={ExpreesImg}
              link="https://expressjs.com/"
              summary="Express.js: Minimalist web framework for Node.js, simplifying server-side development with middleware, routing, and HTTP utility methods."
              time="12 days with NodeJS"
              title="Express.js: Node.js web framework for building server-side applications.s"
            />
            <FeaturedArticle
              image={FireBaseIMG}
              link="https://firebase.google.com/"
              summary="Firebase offers various services including realtime database, authentication, cloud functions, storage, hosting, analytics, messaging, push notifications, and performance monitoring, enabling developers."
              time="12 days"
              title="Firebase: A platform for creating web and mobile apps with backend services, all without writing backend code."
            />
            <FeaturedArticle
              image={NextJSImg}
              link="https://nextjs.org/docs"
              summary="Next.js: React framework simplifying server-side rendering and static site generation, enabling fast, SEO-friendly, and scalable web applications."
              time="8 Days"
              title="Next.js: React framework for server-rendered and statically generated websites."
            />
            <FeaturedArticle
              image={ReactNativeImg}
              link="https://reactnative.dev"
              summary="React Native: Simplifies cross-platform mobile app development by allowing developers to use JavaScript to build apps for iOS and Android simultaneously."
              time="15 Days"
              title="React Native: Developing mobile apps with JavaScript for multiple platforms effortlessly."
            />
            <FeaturedArticle
              image={ExpoReactNativeIMG}
              link="https://expo.dev/"
              summary="Expo optimizes the React Native development process by providing a comprehensive set of tools and services, making it easier and more efficient to build top-notch mobile applications across various platforms."
              time="25 Days with React Native"
              title="Expo simplifies React Native development, providing robust tools for effortless app creation."
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center mb-16 mt-32 dark:text-light">
            <AnimatedText className="mb-16 !text-5xl sm:mb-8 2xl:!text-7xl xl:!text-6xl lg:!text-5xl sm:!4xl xs:!text-3xl !text-center">
              A Personalized Exploration of My Growth and Learning.
            </AnimatedText>
          </h2>
          <ul>
            <Notes
              by="By: Tutorialpoint"
              img={HTMLImg}
              link="https://www.tutorialspoint.com/html/html_tutorial.pdf"
              title=" Comprehensive HTML Study Notes Vital for Intermediate Developers, Basic To Advance. "
            />
            <Notes
              by="By: Tutorialpoint"
              img={CSSImg}
              link="https://www.tutorialspoint.com/css/css_tutorial.pdf"
              title=" Thorough and In-depth CSS Study Notes Essential for Intermediate-Level Developers. "
            />
            <Notes
              by="By: Tutorialpoint"
              img={JSNotesIMG}
              link="https://www.tutorialspoint.com/javascript/javascript_tutorial.pdf"
              title=" Comprehensive JavaScript Study Notes Vital for Intermediate-Level Developers. "
            />
            <Notes
              by="By: TypeScript.com"
              img={TSCheatShit}
              link="/notes/TypeScriptCheatSheet.pdf"
              title=" TypeScript Cheatsheet: A Comprehensive Guide to TypeScript Syntax and Features. "
            />

            <Notes
              by="By: GitHub"
              img={GitGitHub}
              link="/notes/gitcheatsheet.pdf"
              title=" Essential Git Cheatsheet: Key Commands for Beginners Getting Started with Git.  "
            />
            <Notes
              by="By: Unknown"
              img={MongoDBImg}
              link="/notes/mongoDBCheatSheet.pdf"
              title=" Introductory MongoDB Learning Materials Ideal for Beginners. "
            />
            <Notes
              by="By: MIT"
              img={MongooseImg}
              link="https://weblab.mit.edu/public/databases-cheatsheet.pdf"
              title=" Conncetion building NodeJS and MongoDB Using MONGOOSE. "
            />
            <Notes
              by="By: Hostinger"
              img={HTTPStatusImg}
              link="/notes/HTTPStatusCheatSheet.pdf"
              title=" HTTP Status Code Cheatsheet: Comprehensive Guide to Common HTTP Status Codes "
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default page;
