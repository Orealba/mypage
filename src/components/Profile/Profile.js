import React from 'react';
import './Profile.css';
import OrealbaPhoto from '../../assets/images/photos/OrealbaS.jpeg';

const Profile = () => {
  return (
    <div
      id="WhoamI-section"
      className="bg-mybG shadow-myShadow ">
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
          <div className="text-justify text-md mt-20 pl-12 pr-20">
            <p>
              I am <strong>Orealba Soriano</strong>, a restless mind who doesn’t
              know how to stay still. A <strong>journalist</strong> by training,
              a <strong>developer</strong> by passion, and a communicator at
              heart, always looking for new ways to tell stories and create
              digital experiences. I like to reinvent myself, explore, and
              connect with the world through knowledge, creativity, and the
              sport I love: tennis. If you want to know me, this is the door to
              enter my world.
            </p>

            <p className="mt-12">
              On the <strong>frontend</strong> side, I bring designs to life
              using <strong>React</strong>,<strong>TypeScript</strong>, and{' '}
              <strong>Tailwind</strong>. I have worked on collaborative and
              personal projects, turning lines of code into clean and efficient
              solutions. I enjoy solving technical challenges creatively,
              applying a journalistic﻿ eye that helps me pay attention to detail
              and clear communication, always eager to learn and grow in this
              fascinating space.
            </p>

            <p className="mt-12">
              As a <strong>journalist</strong>, I have created content for
              luxury magazines, managed social media, and produced inspiring and
              educational texts. Now, with <strong>Ore’s Tennis Journal</strong>{' '}
              on Instagram, I’m serving a new shot: a recently launched account
              where I fuse my two great passions, <strong>tennis</strong> and{' '}
              <strong>communication</strong>, to bring this sport closer to
              everyone—from the curious to the experts. It’s my new way to
              start, share, and tell stories with a fresh and authentic spirit.
            </p>
          </div>
        </div>
        <div className="pt-12">
          <div className="text-center py-12">
            <a
              href="#contact-section"
              className="text-myGrey  border border-myWine focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-2xl text-sm px-5 py-3 dark:bg-gray-800 dark:text-white dark:border-myWine dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              Shall we have a coffee?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
