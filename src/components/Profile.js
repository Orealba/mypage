import React from 'react';
import '../components/Profile.css';
import OrealbaPhoto from '../images/OrealbaS.jpeg';

const Profile = () => {
  return (
    <div id="WhoamI-section" className="bg-mybG  shadow-myShadow ">
      <div className="container mx-auto">
        <h4 className="text-center mt-20 font-semibold  sm:text-5xl text-myGrey">
          Who am I?
        </h4>

        <div className="md:flex">
          <div className="grid-col-12 gap-12">
            <img
              alt="foto"
              src={OrealbaPhoto}
              className="mt-5 ml-8 rounded-full max-w-xs col-span-2 xl:ml-16 max-h-full sm:max-w-xs md:place-content-center lg:max-w-sm xl:max-w-md 2xl:max-w-md"
            />
          </div>
          <div className="text-justify text-md  mt-20 pl-12 pr-20">
            <p className="">
              I am a <strong>Full-Stack developer</strong>, a graduate of 4Geeks
              Academy, with experience in journalism and social media. I have
              had the opportunity to learn various programming languages such as
              <strong> HTML, JavaScript (React), CSS, Python</strong>, among
              others, which has allowed me to create innovative projects that I
              never thought possible.
            </p>

            <p className="mt-12">
              I am a responsible, passionate, and dedicated individual in
              everything I do. Programming has become my new passion, and I am
              excited to continue growing in this field and taking on new
              challenges. I love writing code and discovering new ways to do so.
              Currently, I am seeking new job opportunities, whether remote,
              hybrid, or in-person in Barcelona.
            </p>

            <p className="mt-12">
              When it comes to my hobbies, I am passionate about several things,
              but mainly two: <strong>cinema</strong> and
              <strong> tennis</strong>. You can always count on me for a good
              conversation about any kind of movie, and I love immersing myself
              in the world of tennis, both by practicing it and attending
              tournaments. I also enjoy painting, reading, swimming, and
              traveling around the world. I don't like staying still and doing
              the same thing all the time; I consider myself open to engaging in
              various activities to expand my knowledge and experiences.
            </p>
          </div>
        </div>
        <div className="pt-12">
          <div className="text-center">
            <button
              type="button"
              className="my-10 text-myGrey  border border-myWine focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-2xl text-sm px-5 py-2.5   dark:bg-gray-800 dark:text-white dark:border-myWine dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Shall we have a coffee?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
