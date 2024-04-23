import React from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { Metadata } from "next";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { GithubIcon, LinkArrow, LinkedInIcon } from "@/components/Icons";
import featureShopex from "../../../public/images/projects/shopexIMG.png";
import featureVibeZone from "../../../public/images/projects/vibezoneIMG.png";
import featureMeChat from "../../../public/images/projects/meChat.png";
import featureMTX from "../../../public/images/projects/mtxIMG.png";
import featureInstaOne from "../../../public/images/projects/InstaOne.png";
import featureAmazone from "../../../public/images/projects/amazone.png";
import aspectWebRTC from "../../../public/images/projects/VideoCall_WebRTC.png";
import aspectChatApp from "../../../public/images/projects/ChatAppReactNative.png";
import aspectTODOwithTypescript from "../../../public/images/projects/todowithtypescript.png";
import aspectImageSearch from "../../../public/images/projects/imageSearch.png";
import aspectBlogApp from "../../../public/images/projects/blogApp.png";
import aspectWebPages from "../../../public/images/projects/webpages.png";

export const metadata: Metadata = {
  title: "KKDev/Projects",
  description: "Projects Developed By VikashKK",
};

interface PType {
  title: string;
  summary: string;
  img: StaticImageData | string;
  link?: string;
  github?: string;
  linkedin?: string;
  note?: string;
  type: string;
}

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  linkedin,
  note,
}: PType) => {
  return (
    <>
      <article
        className="w-full flex items-center justify-between  rounded-3xl rounded-br-2xl  bg-light dark:bg-dark dark:text-light shadow-2xl p-12 relative lg:flex-col xl:p-9 lg:p-8 xs:rounded-xl xs:rounded-br-2xl xs:p-2  
        border-l-[1.5px] border-t-[1.5px] border-[10px] border-b-[11px] border-solid border-slate-400
         sm:border-r-[8px] sm:border-b-[9px]  xs:border-r-[6px] xs:border-b-[7px]  
      ">
        {link ? (
          <Link
            href={link}
            target="_blank"
            className="w-1/2 lg:w-full cursor-pointer overflow-hidden border-2 border-sloid border-slate-300 shadow-md shadow-slate-300  dark:shadow-slate-700 dark:border-slate-600 rounded-xl">
            <Image
              src={img}
              alt={title}
              className={
                "w-full h-auto hover:scale-[1.05] transition-transform duration-[0.2s]"
              }
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </Link>
        ) : (
          <div className="w-1/2 lg:w-full overflow-hidden rounded-lg">
            <Image
              src={img}
              alt={title}
              className={
                "w-full h-auto hover:scale-[1.05] transition-transform duration-[0.2s]"
              }
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>
        )}
        <div className="w-1/2 lg:w-full flex flex-col items-start justify-between pl-6 lg:pl-0 lg:pt-6 xs:-mt-4">
          <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-xs md:text-sm">
            {type}
          </span>
          {link ? (
            <Link
              href={link}
              target="_blank"
              className="hover:underline underline-offset-2">
              <h2 className="my-2 lg:my-1 md:-mb-1 xs:mt-1 xs:-mb-2 w-full text-left text-4xl  xg:text-xl lg:text-3xl font-bold sm:text-lg xs:leading-5">
                {title}
              </h2>
            </Link>
          ) : (
            <div>
              <h2 className="my-2 xs:my-0 w-full text-left text-4xl  xg:text-xl lg:text-3xl font-bold sm:text-lg xs:leading-5">
                {title}
              </h2>
            </div>
          )}
          {note && (
            <p className="text-red-600 font-semibold mb-2 leading-4 xs:mt-3 xs:-mb-1 sm:text-xs sm:leading-[11px]">
              *{note}
            </p>
          )}
          <p className="my-2 font-medium text-dark dark:text-light text-justify sm:!text-sm sm:text-left sm:leading-1">
            {summary}
          </p>
          <div className="mt-2 flex items-center gap-4 w-full sm:justify-center">
            {github && (
              <Link className="w-10" href={github} target="_blank">
                <GithubIcon className="hover:bg-black hover:text-light dark:hover:bg-light dark:hover:text-dark border-black dark:border-white " />
              </Link>
            )}
            {linkedin && (
              <Link className="w-[30px] -ml-3" href={linkedin} target="_blank">
                <LinkedInIcon className="fill-white hover:fill-slate-950 dark:fill-slate-200" />
              </Link>
            )}
            {link && (
              <Link
                href={link}
                target="_blank"
                className="text-light w-auto bg-dark flex items-center py-1.5 px-4 rounded-lg text-[16px]  font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark  dark:text-dark dark:border-slate-300 shadow-sm dark:shadow-slate-200 dark:bg-light dark:hover:bg-dark dark:hover:border-light dark:hover:text-light sm:px-2 xs:py-0.5 sm:text-base ">
                Visit Project
                <LinkArrow className="!w-5 ml-1" />{" "}
              </Link>
            )}
          </div>
        </div>
      </article>
    </>
  );
};

const Project = ({
  title,
  summary,
  img,
  link,
  github,
  type,
  note,
  linkedin,
}: PType) => {
  return (
    <article className="w-full flex flex-col items-center justify-center bg-light dark:bg-dark dark:text-light shadow-2xl p-8 relative xs:p-4  rounded-2xl border border-r-8 border-b-8 md:border-b-[6px] md:border-r-[6px] border-solid border-slate-400 ">
      {link ? (
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg border border-solid border-slate-500">
          <Image
            src={img}
            alt={title}
            className={
              "w-full h-auto hover:scale-[1.05] transition-transform duration-[0.2s]"
            }
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </Link>
      ) : (
        <div className="w-full overflow-hidden rounded-lg border border-solid border-slate-500">
          <Image
            src={img}
            alt={title}
            className={
              "w-full h-auto hover:scale-[1.05] transition-transform duration-[0.2s]"
            }
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>
      )}
      <div className="w-full flex flex-col items-start justify-between pl-6 md:pl-0">
         <span className="text-primary dark:text-primaryDark font-medium  mt-4 text-lg xs:text-xs md:text-sm">
            {type}
          </span>
        {link ? (
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2 -mt-1">
            <h2 className="w-full leading-6 my-2 text-left text-[26px] font-bold lg:text-xl sm:text-[16px]  ">
              {title}
            </h2>
          </Link>
        ) : (
          <h2 className="-mt-1 w-full text-left text-[26px] font-bold lg:text-xl sm:text-[16px]  ">
            {title}
          </h2>
        )}
        {note && (
          <p className="text-red-600 font-semibold -mt-2  leading-4">*{note}</p>
        )}
        <p className="mb-2 font-medium text-dark  dark:text-light text-justify md:!text-sm sm:text-left md:leading-1">
          {summary}
        </p>

        <div className="mt-2 w-[90%] flex self-center items-center gap-4 justify-center ">
          {github && (
            <Link className="w-10" href={github} target="_blank">
              <GithubIcon className="hover:bg-black hover:text-light dark:hover:bg-light dark:hover:text-dark border-black dark:border-white " />
            </Link>
          )}
          {linkedin && (
            <Link className="w-[30px] -ml-3" href={linkedin} target="_blank">
              <LinkedInIcon className="fill-white hover:fill-slate-950 dark:fill-slate-200" />
            </Link>
          )}
          {link && (
            <Link
              href={link}
              target="_blank"
              className="text-light w-auto bg-dark flex items-center py-1.5 px-4 rounded-lg text-[16px]  font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark  dark:text-dark dark:border-slate-300 shadow-sm dark:shadow-slate-200 dark:bg-light dark:hover:bg-dark dark:hover:border-light dark:hover:text-light sm:px-2 xs:py-0.5 sm:text-base ">
              Visit Project
              <LinkArrow className="!w-5 ml-1" />{" "}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const page = () => {
  return (
    <>
      <main className="w-full flex flex-col items-center justify-center">
        <Layout className="pt-16 pb-48 xl:p-8 lg:p-8 xs:px-3 ">
          <AnimatedText className="mb-16 sm:mb-8 lg:!text-7xl sm:!6xl xs:!text-4xl !text-center">
            Imagination Trumps Knowledge!
          </AnimatedText>
          <div className="grid grid-cols-12 gap-24 gap-y-24 xl:gap-x-16 lg:gap-x-8  md:gap-y-8 sm:gap-x-0">
            {/* Shopex: An Ecommerce Project */}
            <div className="col-span-12">
              <FeaturedProject
                github="https://github.com/imvikashkk/Shopex-Ecommerce-Client/"
                img={featureShopex}
                link="https://shopexnow.vercel.app/"
                linkedin="https://www.linkedin.com/posts/imvikashkk_exciting-announcement-presenting-shopex-activity-7176169553444413441-VCVz?utm_source=share&utm_medium=member_desktop"
                summary="Introducing comprehensive e-commerce website! Seamlessly integrate Razorpay for secure online payments. Enjoy user-friendly signup/login with password recovery. Explore extensive search options by category, brand, and price sorting. Easily manage your cart with intuitive features. Plus, access admin panel for streamlined control and management."
                title="Shopex: An E-commerce Application."
                type="ReactJS | Redux-Toolkit | ReactHookForm | axios | RazorPay | ExpressJS | MongoDB | PassportJS | NodeMailer | Tailwind CSS | etc."
              />
            </div>

            {/* VibeZone: A Social-Media-App */}
            <div className="col-span-12">
              <FeaturedProject
                github="https://github.com/imvikashkk/vibezone/"
                img={featureVibeZone}
                link="https://vibezone.kkdev.tech/"
                summary="Explore my vibrant social media app! post, edit, like, and save posts effortlessly. Discover personalized content with advanced search features and a tailored posts feed. Connect with friends and find new ones, following and unfollowing seamlessly. Plus, sign up easily with Google and Facebook for a streamlined experience. Dive into profile views to explore users'posts, followers and following."
                title="VibeZone: A Social Media App"
                type="NextJS | TypeScript | Clerk Authentication | Google Auth | FaceBook Auth | ReactJS | ReactHookForm | Cloudinary | MongoDB | WebHook | Tailwind CSS |  |  etc."
              />
            </div>

            {/* meChat: A Chat Application */}
            <div className="col-span-12">
              <FeaturedProject
                link="https://mechatx.vercel.app/"
                img={featureMeChat}
                github="https://github.com/imvikashkk/meChat-A-Chat-Web-Application"
                summary="Explore our peer-to-peer chat app! Powered by Firebase and Next.js, easily connect and chat in designated rooms. Share images, emojis, and converse in real-time. Enjoy seamless communication with our user-friendly interface for peer-to-peer interactions. Sign up effortlessly with Google."
                title="meChat: A Chat Application"
                type="NextJS | TypeScript | FireBase | ReactJS | FireStore | GoogleAuth | DaisyUI | Tailwind CSS | ReactHookForm | RandomeAvatarGenrator | ReactHotToast | etc."
              />
            </div>

            {/* mtx: A Movie Application */}
            <div className="col-span-12">
              <FeaturedProject
                link="https://mtx-nine.vercel.app/"
                img={featureMTX}
                linkedin="https://www.linkedin.com/posts/imvikashkk_react-webdevelopment-movies-activity-7099876724909232128-T5WS?utm_source=share&utm_medium=member_desktop"
                github="https://github.com/imvikashkk/mtX_Movie_and_TV_Shows"
                note="TMDB API is blocked by JIO telecom, so please use other operator or vpn to access this website."
                summary="Developed an intuitive movie and TV show trailer app leveraging TMDB API. Implemented lazy image loading for swift browsing, personalized recommendations, and a vast trailer collection.while implementing features for accessing cast details and additional views. MTx provides robust functionality. Implemented advanced search functionality, enabling users to search by title, cast, or category."
                title="mtX: A Movie and TV Show Trailer App"
                type="ReactJS | TMDB API | Redux Toolkit | ReactPlayer | axios | ReactInfiniteScroll | SASS | Image Lazy Loading | etc."
              />
            </div>

            {/* InstaOne: A Social Media App (College Project) */}
            <div className="col-span-12">
              <FeaturedProject
                img={featureInstaOne}
                linkedin="https://www.linkedin.com/posts/imvikashkk_hey-linkedin-community-im-thrilled-to-activity-7176570974262181888-S1KG?utm_source=share&utm_medium=member_desktop"
                github="https://github.com/imvikashkk/InstaOne"
                summary="Developed InstaOne as a college project, a versatile social media application featuring post creation, liking, following, and unfollowing capabilities. Engineered real-time chat with Socket.IO for seamless communication. Orchestrated personalized feeds for customized content delivery. Emphasized privacy and security. Ensured cross-platform accessibility. Contributed significantly to the creation of an engaging social networking platform"
                title="InstaOne: A Social Media App (College Project)"
                type="ReactJS | React | Redux | multer | ExpessJS | MongoDB | react-file-base64 | react-input-emoji | etc."
              />
            </div>

            {/* Amazone Clone : A Mobile eCommerce Application */}
            <div className="col-span-12">
              <FeaturedProject
                img={featureAmazone}
                linkedin="https://www.linkedin.com/posts/imvikashkk_reactnative-mobileappdevelopment-amazonclone-activity-7187433760034832384-GSEu?utm_source=share&utm_medium=member_desktop"
                github="https://github.com/imvikashkk/amazone_mobile_app"
                summary="Developed a mobile app clone of Amazon using React Native and Rainforest Amazon API. Engineered search, filters, and a cart system.User-defined and default addresses during checkout, ensuring convenience and flexibility. Implemented email verification via link and forgot password with OTP for enhanced security. Ensured a responsive design for optimal mobile usability."
                type="ReactNative | Expo | RainForest Amazone API | React | Redux ToolKit | react-native-dropdown-picker | gorhom/bottom-sheet | Async-Storage | Yup | Formik | Express | MongoDB | etc."
                title="Amazone Clone: A Mobile Application"
              />
            </div>

{/* ************************************************** Minor Projects *************************************************  */}

            <div className="col-span-12 w-full">
              <AnimatedText className="mb-16 sm:mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl !text-center">
              Discover Minor Project Collection!
              </AnimatedText>
            </div>


            {/* ReactNative Chatting Application */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                github="https://github.com/imvikashkk/ChatWithMe"
                img={aspectChatApp}
                type="ReactNative | MERN | ReactJS | Expo Image Picker | Emoji Picker | ExpreeJS | MongoDB | etc."
                linkedin="https://www.linkedin.com/posts/imvikashkk_exciting-update-building-a-chat-app-with-activity-7102959762924814336-FLYV?utm_source=share&utm_medium=member_desktop"
                summary="Discover my learning-focused mobile chat app! Easily send text, emojis, and images. Secure login/signup for personalized access. Enjoy interactive learning without real-time chatting (like WebSocket). Explore, connect, and grow with ease!"
                title="Mobile Chat Application"
              />
            </div>

            {/* WebRTC Vidoe Calling Application */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                github="https://github.com/imvikashkk/webRTC"
                img={aspectWebRTC}
                type="WebRTC | Socket.IO | ReactJS | ReactPlayer | ExpressJS | NodeJS | etc."
                linkedin="https://www.linkedin.com/posts/imvikashkk_exploring-the-real-time-communication-activity-7177015945398284288-_2pl?utm_source=share&utm_medium=member_desktop"
                summary="Introducing my video calling learning app! Powered by WebRTC for peer-to-peer connection and websockets for seamless connections. Explore peer-to-peer video calls for interactive learning experiences. Connect with ease and enhance educational journey with our innovative technology."
                title="Video Calling Application"
              />
            </div>

            {/* Blog Appliation */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                github="https://github.com/imvikashkk/webRTC"
                img={aspectBlogApp}
                type="EJS (for server side rendering) | ExpressJS | Multer | MongoDB | JWT | etc."
                summary="Developed a simple blog app, focusing on learning server-side rendering with EJS. Implemented signup/login functionality and interactive commenting feature. Hands-on experience in full-stack development, showcasing proficiency in server-side rendering and blog app creation."
                title="A Simple Blog Application"
              />
            </div>

{/* ****************************************************** MINI Projects ************************************************ */}
            <div className="col-span-12 w-full">
              <AnimatedText className="mb-16 sm:mb-8 lg:!text-7xl sm:!text-6xl xs:!text-4xl !text-center">
              Explore Mini Projects Gallery!
              </AnimatedText>
            </div>

            {/* Todo with TypeScript */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                link="https://todowithtypescript.vercel.app/"
                github="https://github.com/imvikashkk/ToDO-withTypeScript"
                img={aspectTODOwithTypescript}
                type="Vite | Typescript | VanillaJS | HTML | CSS"
                summary="Explore a simple TODO app made with Vite, TypeScript, VanillaJS, HTML, and CSS. Manage tasks easily and save them to localStorage. Enjoy smooth functionality and a clean interface for hassle-free task management."
                title="Simple ToDo App"
              />
            </div>

            {/* Image Searcher */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                link="https://imagesearcherr.vercel.app/"
                github="https://github.com/imvikashkk/Image-Search-Web-App"
                img={aspectImageSearch}
                type="VanillaJS | HTML | CSS | Unplash Image API"
                summary="Explore an image search app crafted with HTML, VanillaJS, CSS/Sass, and the Unsplash API. Browse through a vast collection of images with ease."
                title="Image Search Application"
              />
            </div>

            {/* 10+ HTML and CSS Project with responsive */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                link="https://imvikashkk.github.io/Web-HTML-CSS-Project/10_PortFolio_Wesite/html/"
                github="https://github.com/imvikashkk/Web-HTML-CSS-Project"
                img={aspectWebPages}
                type="HTML | CSS | SASS"
                summary="APJ Abdul Kalam Tribute WebPage | Job Application Form WebPage | Parallax Effect WebPage | Developer WebPage | Food Oredring WebPage | Music WebPage | Youtube Home Clone WebPage | Documenation WebPage | Blogging WebPage"
                title="10 HTML/CSS/SASS WebSite Project's Portfolio"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default page;

/* mongodb+srv://imvikashkk:twozz6CFNpfY7odl@cluster0.aafjtdp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 */
