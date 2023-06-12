import React from 'react'
import '../components/Profile.css'
import OrealbaPhoto from '../images/OrealbaS.jpeg'

const Profile = () => {
  return (
    <div className="profile__background">
      <div className="row">
        <div className="col-md-12">
          <h4 className="profile__tittle"> Who am I?</h4>
        </div>
      </div>
      <div className="row profile__photo__texts">
        <div className="col-md-8 profile__photo__Orealba">
          <img src={OrealbaPhoto} className="profile__photo__Orealba__style" />
        </div>
        <div className="col-md-4 ">
          <p className="profile__textOne">
            I am a Full-Stack developer, a graduate of 4Geeks Academy, with
            experience in journalism and social media. I have had the
            opportunity to learn various programming languages such as HTML,
            JavaScript (React), CSS, Python, among others, which has allowed me
            to create innovative projects that I never thought possible.
          </p>
          <p className="profile__textOne__secondParagraph">
            I am a responsible, passionate, and dedicated individual in
            everything I do. Programming has become my new passion, and I am
            excited to continue growing in this field and taking on new
            challenges. I love writing code and discovering new ways to do so.
            Currently, I am seeking new job opportunities, whether remote,
            hybrid, or in-person in Barcelona.
          </p>

          <p className="profile__textOne__thirdParagraph">
            When it comes to my hobbies, I am passionate about several things,
            but mainly two: cinema and tennis. You can always count on me for a
            good conversation about any kind of movie, and I love immersing
            myself in the world of tennis, both by practicing it and attending
            tournaments. I also enjoy painting, reading, swimming, and traveling
            around the world. I don't like staying still and doing the same
            thing all the time; I consider myself open to engaging in various
            activities to expand my knowledge and experiences.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <button type="button" className="profile__button">
            Shall we have a coffee?
          </button>
        </div>
      </div>
    </div>
  )
}
export default Profile
