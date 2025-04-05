import NavBar from '../Components/NavBar'
import { PiGreaterThanThin } from "react-icons/pi";
import './Yoga.css'
import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollUp from '../Components/ScrollUp.jsx';
import Footer from '../Components/Footer';


export default function Yoga() {
  const navigate = useNavigate();
        const [selectedInfo, setSelectedInfo] = useState(null);
        const handleInfoClick = (info) => {
            setSelectedInfo(info);
          }
    const handleHome = () => {
      navigate('/');
    }
    const handleHeritage = () => {
      navigate('/heritage');
    }
    const handleInfoClose = (e) => {
      e.stopPropagation();
      setSelectedInfo(null);
    };
  return (
    <div className='yoga-container'>
        <div className="nav">
            <NavBar />
        </div>
        <div className="page-1">

          <div className="content">
            <div className="content-left">
              <div className="heading">
                <p>
                  <span onClick={handleHome}>Home</span>
                  <PiGreaterThanThin className="greater" />
                  Yoga
              </p>
            </div>
          
          <h2>
            <span className='t'>Develop Body, Mind and Sprit!</span>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Indian Yoga – The Ancient Science of Mind and Body');
                typewriter.start();
              }}
            />
          </h2>
            <p>
            Yoga, originating from ancient India, is a holistic practice that unites the mind, body, and spirit through physical postures, breathing techniques, and meditation. Rooted in Indian philosophy, yoga has been practiced for over 5,000 years and is deeply connected to Hinduism, Buddhism, and Jainism. It was first systematized by Maharishi Patanjali in his text, the Yoga Sutras, which outlines the principles of yoga and its eightfold path (Ashtanga Yoga). Today, yoga is recognized worldwide for its physical, mental, and spiritual benefits.
            </p>
          </div>
          <div className="content-right">
            <img src="/images/Yoga/banner.png" alt="" />
          </div>
        </div>
      </div>
      <ScrollUp />
      <div className="page-1">
        <div className="content">
          <div className="content-right">
            <img src="/images/Yoga/banner-2.jpg" alt="" />
          </div>
          <div className="content-left">
            <h2>What is Yoga?</h2>
            <p>
                The essence of yoga can be encapsulated in the ancient Sanskrit phrase “Yoga chitta vritti nirodah,” which translates to “Yoga is the cessation of the fluctuations of the mind.” Essentially, yoga is about calming the mind and achieving a state of inner peace. While many in the West associate yoga primarily with physical postures or asanas, it’s actually a comprehensive practice that encompasses physical, mental, and spiritual growth.
            </p>
            <p>
            Yoga is an ancient Indian practice that integrates physical postures (asanas), breathing exercises (pranayama), and meditation (dhyana) to promote overall well-being. The word Yoga comes from the Sanskrit word Yuj, meaning to unite or to join, symbolizing the union of body, mind, and spirit. It is more than just physical exercise; it is a holistic approach to achieving mental peace, emotional balance, and spiritual enlightenment.
            </p>
          </div>
        </div>
      </div>
      <div className="page-1">
        <div className="content">

          <div className="content-left">
            <h2>Yoga as an Indian heritage</h2>
            <p>
            Yoga is considered one of India’s greatest cultural and spiritual heritages. The word “yoga” comes from the Sanskrit word “yuj,” which means to unite or to join. The practice of yoga aims to unite universal consciousness with individual consciousness through a series of physical postures, breathing techniques, and meditation.            </p>
            <p>
            The history of yoga can be traced back over 5,000 years, to the ancient Indus Valley Civilization in India. The practice of yoga was first described in the Vedas, the oldest sacred texts of Hinduism. Over time, yoga evolved and developed into a range of different styles and traditions, each with its own unique approach and philosophy. Yoga has played a significant role in Indian culture and spirituality throughout history. It has been used as a tool for personal growth and self-realization, as well as a means to achieve physical, mental, and emotional well-being. Yoga is also deeply rooted in India’s religious traditions, particularly Hinduism, Jainism, and Buddhism.            </p>
          </div>
          <div className="content-right">
            <p>In recent years, the popularity of yoga has spread beyond India’s borders and has become a global phenomenon. Today, yoga is practiced by millions of people around the world, with many different styles and traditions being taught and practiced.</p>
            <p>Despite its global popularity, yoga remains an important part of India’s cultural heritage. The Indian government has taken steps to promote yoga as a way to preserve and celebrate the country’s rich cultural traditions. In 2014, the United Nations declared June 21 as International Yoga Day, recognizing the global significance of this ancient practice.</p>
            <p>Overall, yoga is a fundamental aspect of India‘s cultural heritage, deeply ingrained in the country’s history, religion, and spirituality. Its continued popularity both in India and around the world is a testament to the enduring legacy of this ancient practice.</p>
          </div>
        </div>
      </div>
      <div className="wild-page-3">
            <div className="wild-page-3-1">
              <h2>Major Forms of Yoga in India</h2>
                <div className="content">
                    <h3 onClick={() => handleInfoClick('Hatha')}>Hatha Yoga</h3>
                    <h3 onClick={() => handleInfoClick('Karma')}>Karma Yoga</h3>
                    <h3 onClick={() => handleInfoClick('Bhakti')}>Bhakti Yoga</h3>
                    <h3 onClick={() => handleInfoClick('Jnana')}>Jnana Yoga</h3>
                </div>
                {selectedInfo && (
            <div className="info">
              {selectedInfo === 'Hatha' && (
                <div className="info-content"> 
                    <h3>Hatha Yoga : The Foundation of Physical and Mental Balance
                        <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                            &times;
                        </span>
                    </h3>
                    <p>Hatha Yoga is one of the most widely practiced forms of yoga, focusing on the harmonization of body, breath, and mind through asanas (physical postures), pranayama (breathing techniques), and meditation. It is considered the foundation of all yoga styles and is designed to prepare the body for deeper spiritual practices.</p>
                    <h3>Meaning and Origins : </h3>
                    <p>The term Hatha is derived from two Sanskrit words: Ha (Sun) – Symbolizes the active, masculine, and warming energy.Tha (Moon) – Represents the passive, feminine, and cooling energy.</p>
                    <p>Hatha Yoga aims to balance these opposing forces within the body and mind. It dates back to ancient India, with references in texts like the Hatha Yoga Pradipika (15th century), Gheranda Samhita, and Shiva Samhita. The practice was developed to strengthen the body, calm the mind, and prepare for higher states of meditation.</p>
                    <h3>Key Components of Hatha Yoga :</h3>
                    <p>
                    <ul>
                            <li>Asanas (physical postures)</li>
                            <li>Pranayama (breathing techniques)</li>
                            <li>Meditation & Relaxation</li>
                        </ul>
                    </p>
                    <h3>Benefits of Hatha Yoga</h3>
                    <p>
                        <ul>
                            <li>Enhances flexibility and strength</li>
                            <li>Reduces stress and anxiety</li>
                            <li>Improves breathing and lung function</li>
                            <li>Boosts concentration and mental clarity</li>
                        </ul>
                    </p>
                    <p>Today, Hatha Yoga is the basis for many modern styles, including Vinyasa, Power Yoga, and Iyengar Yoga. It is suitable for beginners and advanced practitioners, offering a slow-paced, mindful approach to well-being.</p>
                </div>
              )}
              {selectedInfo === 'Karma' && (
                 <div className="info-content"> 
                    <h3>Karma Yoga: The Path of Selfless Action
                        <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                            &times;
                        </span>
                    </h3>
                    <p>Karma Yoga, also known as the Yoga of Action, is one of the four main paths of yoga described in Hindu philosophy. It emphasizes selfless service (seva) and duty without attachment to results. Practitioners of Karma Yoga engage in work and actions with a pure heart, dedicating their efforts to a higher purpose, whether that be God, society, or humanity.</p>
                    <p>The word Karma means action or deed, and Yoga means union or path. Karma Yoga teaches that by performing righteous actions without selfish desires, one can attain spiritual liberation (Moksha). It is rooted in the teachings of the Bhagavad Gita, where Lord Krishna instructs Arjuna to perform his duty without expecting rewards.</p>
                    <h3>The Four Principles of Karma Yoga Explained</h3>
                    <p>1. Duty : Everybody has duties in life. Some are because of society or family, while others are choices we make, like being a good boss or supportive friend. In Karma Yoga, duties are known as dharma, and recognizing and ranking them is key.While understanding our role in other people&apos;s lives is fundamental, the highest obligation you have is towards yourself. Only by ensuring your well-being can you effectively support others. Moreover, any duty you perform should be done with diligence. Whether tidying a room or completing a task at work, it should reflect your best efforts. </p>
                    <p>2. Ego : Ego is your self-image and the thoughts you have about yourself and others, shaped by characteristics such as your likes, dislikes, and desires. Often, we base our actions on how they&apos;ll affect our image. While some believe ego helps them perform better, it can also be harmful. Ego can distort our view of reality and cloud our understanding.In contrast, selfless action is about performing duties without thinking about yourself. The core goal of this practice is to manage and eventually free yourself from ego. </p>
                    <p>3. Attachment : Karma Yoga is about doing your duty impartially, without getting attached to it. Whether you enjoy the task or not, you give it your all. For instance, as a teacher, you wouldn&apos;t favor one student over another. The focus is on performing the duty, without concern for the outcome or the process.</p>
                    <p>4. Expectation of Reward : We often act with the expectation of a return. This could be working for a paycheck or recognition, or even caring for loved ones in hopes of receiving their love and gratitude. But when you act without expecting rewards, the result doesn’t influence your actions. You do it because it&apos;s the right thing to do, not for personal gain. This is Karma Yoga. </p>
                    <h3>Benefits of Practicing Karma Yoga : </h3>
                    <p>
                        <ul>
                            <li>Enhances self-awareness and self-control</li>
                            <li>Reduces stress and anxiety</li>
                            <li>Improves overall well-being</li>
                            <li>Boosts confidence and self-esteem</li>
                        </ul>
                    </p>
                </div>
              )}
              {selectedInfo === 'Bhakti' && (
                 <div className="info-content"> 
                    <h3>Bhakti Yoga: The Path of Devotion
                        <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                            &times;
                        </span>
                    </h3>
                    <p>Bhakti Yoga is the Yoga of Devotion and Love, one of the four main paths of yoga described in Hindu philosophy. It emphasizes unconditional love, faith, and surrender to the divine. Practitioners of Bhakti Yoga cultivate a deep emotional and spiritual connection with a personal deity (such as Krishna, Rama, or Shiva) or with the divine in a formless sense.</p>
                    <p>The word Bhakti comes from the Sanskrit root bhaj, meaning to worship, love, or be devoted. Bhakti Yoga teaches that through pure love and devotion, one can attain spiritual enlightenment (moksha) and union with the divine. It is deeply rooted in the Bhagavad Gita, where Lord Krishna explains that devotion is the highest and simplest path to liberation.</p>
                    <h3>Types of Bhakti (Devotion)</h3>
                    <p>
                        <ul>
                            <li>Shanta Bhakti – Peaceful devotion, where one experiences calmness and reverence.</li>
                            <li>Dasya Bhakti – Devotion as a servant (e.g., Hanuman’s devotion to Lord Rama).</li>
                            <li>Sakhya Bhakti – Friendship with God (e.g., Arjuna and Krishna).</li>
                            <li>Vatsalya Bhakti – Love like a parent (e.g., Yashoda’s love for Krishna).</li>
                            <li>Madhurya Bhakti – Divine love as a beloved (e.g., Radha’s love for Krishna).</li>
                        </ul>
                    </p>
                    <h3>Benefits of Practicing Bhakti Yoga</h3>
                    <p>
                        <ul>
                            <li>Enhances emotional intelligence and empathy</li>
                            <li>Brings inner peace, joy, and emotional fulfillment.</li>
                            <li>Removes ego, hatred, and negativity, replacing them with love and compassion.</li>
                            <li>Creates a strong connection with the divine, leading to spiritual growth.</li>

                        </ul>
                    </p>
                </div>
              )}
              {selectedInfo === 'Jnana' && (
                 <div className="info-content"> 
                    <h3>Jnana Yoga: The Path of Knowledge
                        <span className="close-button" onClick={(e) => handleInfoClose(e, 'nationalPark')}>
                            &times;
                        </span>
                    </h3>
                    <p>Jnana Yoga is the Yoga of Knowledge and Wisdom, one of the four main paths of yoga in Hindu philosophy. It focuses on intellectual inquiry, self-reflection, and the realization of truth through deep study and meditation. It is considered the most difficult and direct path, as it requires intense self-discipline, reasoning, and insight to achieve spiritual enlightenment (moksha).</p>
                    <p>The word Jnana (pronounced Gyaan) means knowledge or wisdom. Jnana Yoga seeks to dissolve ignorance (Avidya) and uncover the ultimate truth (Brahman) by distinguishing the eternal (self) from the temporary (material world). This philosophy is deeply rooted in the Upanishads and Bhagavad Gita, where Lord Krishna describes it as the path of self-inquiry and direct realization of the self.</p>
                    <h3>The Four Pillars of Knowledge </h3>
                    <p>
                        <ul>
                            <li>1. Viveka (Discrimination) : This means discernment or discrimination. It is the process of continuously being able to distinguish between the real and unreal, permanent and temporary, self and non-self. </li>
                            <li>2. Vairagya (Detachment) : Dispassion or detachment refers to cultivating non-attachment or indifference towards materialistic things and worldly possessions. This is critical to detaching from the ego. Vairagya means renunciation or detachment from material possessions, pleasures, and temporary experiences. It does not mean giving up everything physically but rather developing inner freedom from desires and attachments.</li>
                            <li>3. Shat-sampat : These are six virtues that train the mind and emotions to see beyond the illusions of maya. They are Shama (ability to keep the mind calm and peaceful), Dama (restraining the senses and training them to only use them as instruments of the mind, Uparati (withdrawing from activities which are not part of one’s duty, Titiksha (tolerating external, non-conducive situations), Shraddha (trusting one’s Guru) and Samadhana (having complete focus and concentration of the mind. </li>
                            <li>4. Mumukshutva (Aspiration for Liberation) : ‍Refers to the desire to emancipate from suffering. It is about achieving liberation from suffering and means that you are completely committed to this path. Mumukshutva is the driving force behind spiritual awakening. Without it, a person remains trapped in the illusion of the material world. But with intense longing for liberation, one can overcome all obstacles and attain Moksha—the realization of one’s divine, eternal nature. This burning desire for truth transforms an ordinary person into a true seeker, guiding them toward ultimate freedom and enlightenment.</li>

                        </ul>

                    </p>
                    <h3>Benefits of Practicing Jnana Yoga</h3>
                    <p>
                        <ul>
                            <li>Develops critical thinking and intellectual curiosity.</li>
                            <li>Leads to Spiritual Liberation (Moksha): Helps in breaking free from the cycle of birth and death (Samsara).</li>
                            <li>Helps to overcome ignorance and false perceptions.</li>
                            <li>Creates a strong connection with the divine, leading to spiritual growth.</li>
                        </ul>
                    </p>
                </div>
              )}
            </div>
          )}
            </div>
        </div>
        <div className="page-1">
          <div className="content">
            <div className="content-right">
              <img src="/images/Yoga/banner-3.jpg" alt="" />
            </div>
            <div className="content-left">
              <h2>Benefits of Yoga</h2>
              <p>
                  <ul className='benifits'>
                      <li>1. Physical Health – Enhances flexibility, posture, strength, and overall fitness.</li>
                      <li>2. Mental Well-being – Reduces stress, anxiety, and depression, promoting mental clarity.</li>
                      <li>3. Spiritual Growth – Encourages self-awareness, mindfulness, and inner peace.</li>
                      <li>4. Holistic Healing – Helps manage chronic conditions like diabetes, heart disease, and arthritis.</li>
                  </ul>
              </p>
            </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    
  )
}
