import React from 'react'
import '../components/Profile.css'
import OrealbaPhoto from '../images/OrealbaS.jpeg'

const Profile = () => {
  return (
    <div className=" bg-mybG profile__background">
      <div className="grid-col-12">
        <h4 className="text-center text-xl text-myGrey profile__tittle">
          Who am I?
        </h4>
      </div>
      <div className="  profile__photo__texts">
        <div className="flex grid-col-12 gap-12 profile__photo__Orealba ">
          <img
            src={OrealbaPhoto}
            className="mt-5 rounded-full max-w-lg col-span-2 ml-14 max-h-full profile__photo__Orealba__style"
          />

          <p className="text-lg col-span-2 mt-20 pl-12 pr-20 profile__textOne">
            I am a <strong>Full-Stack developer</strong>, a graduate of 4Geeks
            Academy, with experience in journalism and social media. I have had
            the opportunity to learn various programming languages such as
            <strong> HTML, JavaScript (React), CSS, Python</strong>, among
            others, which has allowed me to create innovative projects that I
            never thought possible.
            <p className="mt-12">
              I am a responsible, passionate, and dedicated individual in
              everything I do. Programming has become my new passion, and I am
              excited to continue growing in this field and taking on new
              challenges. I love writing code and discovering new ways to do so.
              Currently, I am seeking new job opportunities, whether remote,
              hybrid, or in-person in Barcelona.
            </p>
            <p className="mt-12 profile__textOne__thirdParagraph">
              When it comes to my hobbies, I am passionate about several things,
              but mainly two: <strong>cinema</strong> and{' '}
              <strong>tennis</strong>. You can always count on me for a good
              conversation about any kind of movie, and I love immersing myself
              in the world of tennis, both by practicing it and attending
              tournaments. I also enjoy painting, reading, swimming, and
              traveling around the world. I don't like staying still and doing
              the same thing all the time; I consider myself open to engaging in
              various activities to expand my knowledge and experiences.
            </p>
          </p>
        </div>
        <div></div>
      </div>
      <div className="">
        <div className="">
          <button type="button" className="profile__button">
            Shall we have a coffee?
          </button>
        </div>
      </div>
    </div>
  )
}
export default Profile
