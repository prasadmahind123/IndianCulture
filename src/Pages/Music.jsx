import NavBar from '../Components/NavBar'
import { PiGreaterThanThin } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import ScrollUp from '../Components/ScrollUp';
import './Music.css'
export default function Music() {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/');
      }
  return (
    <div>
        <div className="nav">
            <NavBar />
        </div>
        <div className="page-1">
        <div className="content-right">
            <figure>
                <img src="/images/Music/indian-1.jpg" alt="" />
                <figcaption><a href="https://commons.wikimedia.org/wiki/File:An_Indian_classical_music_performance.jpg">Karen Blaha from Charlottesville, VA</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0">CC BY-SA 2.0</a>, via Wikimedia Commons</figcaption>
            </figure>
            </div>
            <div className="content">
            <div className="content-left">
                <div className="heading">
                <p>
                    <span onClick={handleHome}>Home</span>
                    <PiGreaterThanThin className="greater" />
                    Music
                </p>
            </div>
            <ScrollUp/>
            <h2>
                <span className="t">Melodies of India</span>
                <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Explore the Rhythms of India!');
                    typewriter.start();
                }}
                />
            </h2>
                <p> India has a rich and diverse musical heritage that spans classical, folk, and devotional traditions. Indian music is deeply rooted in spirituality, culture, and storytelling, with distinct styles evolving across different regions.
                </p>
                <p>Indian music is one of the oldest and most diverse musical traditions in the world. It is deeply rooted in spirituality, culture, and storytelling, with a history dating back over 3,000 years. Indian music is broadly categorized into classical, folk, devotional, and contemporary styles, each with its own unique identity and influence.</p>
            </div>

           
            </div>
        </div>
            <div className="Music-page-1">
                <div className="Music-left">
                    <h2>1. Classical Music 🎵</h2>
                    <p>Classical Indian music is one of the world’s most profound and ancient musical traditions, deeply rooted in spirituality, philosophy, and artistic expression. It is based on the fundamental concepts of Raga (melody) and Tala (rhythm), offering a rich and intricate system of musical improvisation and emotional depth.</p>
                    <div className="table">
                        <table>
                            <tr>
                                <th>Type</th>
                                <th>Region</th>
                                <th>Characteristics</th>
                            </tr>
                            <tr>
                                <td>Hindustani Music</td>
                                <td>North India</td>
                                <td>Hindustani music is one of the two major classical music traditions of India, originating in North India. It evolved over centuries, blending ancient Vedic chants, Persian influences, and regional folk traditions. Known for its improvisation, intricate ragas (melodic frameworks), and rhythmic cycles (talas), Hindustani music is a spiritual and artistic journey that deeply connects with human emotions.</td>
                            </tr>
                            <tr>
                                <td>Carnatic Music</td>
                                <td>South India</td>
                                <td>Carnatic music is the classical music tradition of South India, known for its intricate melodies (ragas), rhythmic patterns (talas), and devotional themes. Rooted in Bhakti (devotion) and spirituality, it has been passed down for centuries through oral tradition and written compositions. Unlike Hindustani music, which evolved with Persian influences, Carnatic music has remained deeply rooted in Hindu temple traditions, focusing on vocal-based compositions and structured improvisation.</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <figure>
                    <img src="/images/Music/MusicBanner-1.jpg" alt="" />
                    <figcaption><a href="https://commons.wikimedia.org/wiki/File:Indian_Classical_Music_Banner.jpg">Yeibisawes</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons</figcaption>
                </figure>
                <h3>Key Elements of Classical Music :</h3>
                <ul>
                    <li>
                        <b>1. Raga : </b> A melodic framework that defines the mood of the music.
                    </li>
                    <li>
                        <b>2. Tala: </b> A rhythmic cycle that provides structure.
                    </li>
                    <li>
                        <b>3. Instruments : </b>  Sitar, Tabla, Veena, Mridangam, Sarod, Flute.
                    </li> 
                    <li>
                        <b>4. Vocal Styles : </b> Dhrupad, Khayal, Thumri (Hindustani); Kriti, Varnam, Padam (Carnatic).
                    </li>
                </ul>
                <h3>Famous Classical Musicians :</h3>
                <ul>
                    <li>
                        <b>1. Hindustani : </b> Ravi Shankar (Sitar), Ustad Bismillah Khan (Shehnai), Pandit Bhimsen Joshi (Vocal).
                    </li>
                    <li>
                        <b>2. Carnatic : </b> M. S. Subbulakshmi (Vocal), T. N. Krishnan (Violin), U. Srinivas (Mandolin).
                    </li>
                </ul>
            </div>
            <div className="Music-page-1">
 
                <div className="Music-left">
                    <h2>2. Folk Music 🎶</h2>
                    <p>Folk music is the heart and soul of Indian culture, deeply rooted in the traditions, customs, and daily lives of people across different regions. Unlike classical music, which follows a strict structure, folk music is spontaneous, simple, and closely tied to local stories, traditions, and rituals. It is often performed at festivals, weddings, harvest celebrations, and religious gatherings, passing down through generations by oral tradition.</p>
                    <p>Each region of India has its own distinct folk music, influenced by its geography, history, and lifestyle. The instruments, lyrics, and styles vary, but they all reflect the joy, sorrow, love, devotion, and struggles of common people.</p>
                    <div className="table">
                        <table>
                            <tr>
                                <th>State/Region</th>
                                <th>Folk Music Form</th>
                                <th>Description</th>
                            </tr>
                            <tr>
                                <td>Punjab</td>
                                <td>Bhangra & Giddha</td>
                                <td>Bhangra and Giddha are the two most energetic and popular folk dances of Punjab, India. These dances reflect the joy, strength, and spirit of the Punjabi people, often performed during festivals, weddings, and celebrations.Bhangra and Giddha are not just dances—they are celebrations of life, joy, and tradition. Whether it&apos;s the powerful beats of Bhangra or the graceful expressions of Giddha, these dances showcase Punjab’s vibrant culture and bring people together in happiness.</td>
                            </tr>
                            <tr>
                                <td>Rajasthan</td>
                                <td>Manganiyar & Langas</td>
                                <td>The Manganiyar and Langa communities of Rajasthan are two of the most renowned groups of folk musicians, known for their deep-rooted traditions and mesmerizing performances. These communities have preserved centuries-old musical heritage, blending Sufi, Rajasthani folk, and royal court music.Their music is rich in storytelling, featuring songs about love, valor, devotion, nature, and historical legends. Passed down orally from generation to generation, their songs serve as living history books of Rajasthan’s culture.</td>
                            </tr>
                            <tr>
                                <td>Gujarat</td>
                                <td>Garba & Bhavai</td>
                                <td>Gujarat is a land of rich cultural heritage, and two of its most celebrated folk traditions are Garba and Bhavai. While Garba is a joyous, energetic dance form performed during festivals like Navratri, Bhavai is a traditional theatrical performance with deep historical and social significance.Both art forms reflect the traditions, beliefs, and storytelling culture of Gujarat, keeping its heritage alive through music, dance, and drama.</td>
                            </tr>
                            <tr>
                                <td>Maharashtra</td>
                                <td>Powada & Lavani</td>
                                <td>Maharashtra’s folk arts are deeply rooted in its history, culture, and traditions. Two of the most iconic performing arts from the state are Powada and Lavani.Powada is a ballad-style musical narration that glorifies historical events and heroic figures, especially Chhatrapati Shivaji Maharaj and the Maratha warriors.  </td>
                            </tr>
                            <tr>
                                <td>West Bengal</td>
                                <td>Baul Songs</td>
                                <td>Baul songs are a unique and mystical form of folk music from Bengal, particularly in West Bengal and Bangladesh. Sung by the Bauls, a group of wandering minstrels, these songs reflect a blend of spirituality, philosophy, and devotion.Baul music is deeply connected to Bhakti (Hindu) and Sufi (Islamic) traditions, emphasizing love, the soul’s journey, and the search for divine truth. The Bauls believe that God resides within the human heart, and their music is a means to attain spiritual awakening.</td>
                            </tr>
                            <tr>
                                <td>Assam</td>
                                <td>Bihu Songs</td>
                                <td>Bihu songs (Bihu Geet) are traditional folk songs of Assam, associated with the vibrant Bihu festival, which celebrates agriculture, love, and life. These songs are energetic, melodious, and rhythmic, often accompanied by dance and music.Bihu songs reflect Assamese culture, highlighting nature, romance, and the joys of rural life. Sung during the Rongali Bihu (Bohag Bihu) festival in April, they bring people together in celebration of the harvest season and Assamese identity.</td>
                            </tr>
                            <tr>
                                <td>Odisha	</td>
                                <td>Dalkhai & Sambalpuri</td>
                                <td>Dalkhai and Sambalpuri songs are vibrant folk music traditions from Western Odisha, particularly in the Sambalpur, Balangir, Bargarh, and Sundargarh districts. These songs are closely associated with festivals, dance, and celebrations, showcasing the rich cultural heritage of Odisha.These musical forms are known for their fast beats, rhythmic patterns, and deep emotional connection with the land and its people.</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="image-container">
                    <figure className='music-img'>
                        <img src="/images/Music/Folk-1.jpg" alt="" />
                        <figcaption><a href="https://commons.wikimedia.org/wiki/File:Folk_music.jpg">Siddharth 36</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons</figcaption>
                    </figure>
                    <figure className='music-img'>
                        <img src="/images/Music/Folk-2.jpg" alt="" />
                        <figcaption><a href="https://commons.wikimedia.org/wiki/File:Sarangi_Folk_Music.jpg">YashinderBahga</a>, CC0, via Wikimedia Commons</figcaption>
                    </figure>
                </div>
               
                <h3>Key Elements of Classical Music :</h3>
                <ul>
                    <li>
                        <b>1. Raga : </b> A melodic framework that defines the mood of the music.
                    </li>
                    <li>
                        <b>2. Tala: </b> A rhythmic cycle that provides structure.
                    </li>
                    <li>
                        <b>3. Instruments : </b>  Sitar, Tabla, Veena, Mridangam, Sarod, Flute.
                    </li> 
                    <li>
                        <b>4. Vocal Styles : </b> Dhrupad, Khayal, Thumri (Hindustani); Kriti, Varnam, Padam (Carnatic).
                    </li>
                </ul>
                <h3>Famous Classical Musicians :</h3>
                <ul>
                    <li>
                        <b>1. Hindustani : </b> Ravi Shankar (Sitar), Ustad Bismillah Khan (Shehnai), Pandit Bhimsen Joshi (Vocal).
                    </li>
                    <li>
                        <b>2. Carnatic : </b> M. S. Subbulakshmi (Vocal), T. N. Krishnan (Violin), U. Srinivas (Mandolin).
                    </li>
                </ul>
            </div>


            <div className="Music-page-1">
 
                <div className="Music-left">
                    <h2>3. Devotional & Spiritual Music 🕉️</h2>
                    <p>Devotional and spiritual music in India has been an integral part of religious and cultural life for centuries. It transcends mere entertainment, serving as a medium of prayer, meditation, and divine connection. Rooted in spirituality, it expresses faith, devotion, and the longing for the divine through bhajans, kirtans, qawwalis, shlokas, chants, and Sufi music.</p>
                    <p>This music is not confined to any single religion—it is found in Hinduism, Islam, Sikhism, Christianity, Buddhism, and Jainism, each with its own unique musical traditions. It is performed in temples, mosques, churches, gurudwaras, monasteries, and homes, creating a deeply immersive spiritual experience.</p>
                    <div className="table">
                        <table>
                            <tr>
                                <th>Music Type</th>
                                <th>Religion/Region</th>
                                <th>Description</th>
                            </tr>
                            <tr>
                                <td>Bhajans</td>
                                <td>Hinduism</td>
                                <td>Bhajans are Hindu devotional songs sung in praise of gods and goddesses like Krishna, Rama, Shiva, Durga, and Vishnu. These songs are a form of prayer, devotion, and meditation, often sung in temples, homes, and spiritual gatherings. The word Bhajan comes from the Sanskrit word Bhaj, which means to worship or revere.</td>
                            </tr>
                            <tr>
                                <td>Qawwali</td>
                                <td>Sufi Islam</td>
                                <td>Qawwali is a form of Sufi devotional music that originated in the 13th century and is deeply rooted in Islamic mysticism. It is performed in dargahs (Sufi shrines), religious gatherings, and festivals to express love, devotion, and the longing for the divine.</td>
                            </tr>
                            <tr>
                                <td>Kirtan</td>
                                <td>Sikhism</td>
                                <td>Kirtan is a form of devotional singing and chanting in praise of Hindu deities, often performed in temples, spiritual gatherings, and religious festivals. It is an essential part of Bhakti Yoga, which emphasizes love, devotion, and surrender to God. Kirtan is sung in a call-and-response style, where a lead singer (Kirtankar) sings a verse, and the group responds in chorus.</td>
                            </tr>
                            <tr>
                                <td>Carnatic Compositions</td>
                                <td>South India</td>
                                <td>Carnatic music is a rich and complex classical music tradition from South India, deeply rooted in spiritual devotion and intricate musical structures. The heart of Carnatic music lies in its compositions, known as Kritis, Varnams, Keertanas, Padams, Tillanas, and more. These compositions are not just musical pieces but also spiritual expressions, often dedicated to Hindu deities like Lord Vishnu, Shiva, Devi, Murugan, and Ganesha.</td>
                            </tr>
                            <tr>
                                <td>Christian Hymns</td>
                                <td>Kerala, Goa</td>
                                <td>Christian hymns are spiritual songs of praise, devotion, and worship that have been sung for centuries in churches, homes, and gatherings. These hymns express faith, gratitude, and reverence toward God, Jesus Christ, and the Holy Spirit. They are an essential part of Christian liturgy and worship services, fostering a deep sense of community, hope, and divine connection.</td>
                            </tr>
                            
                        </table>
                    </div>
                </div>
                <div className="image-container">
                    <figure className='music-img'>
                        <img src="/images/Music/Bhajan-1.jpg" alt="" />
                        <figcaption><a href="https://commons.wikimedia.org/wiki/File:Aashaadhee_Waari.jpg">आर्या जोशी</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons</figcaption>
                    </figure>
                    <figure className='music-img'>
                        <img src="/images/Music/Kawali-1.jpg" alt="" />
                        <figcaption><a href="https://commons.wikimedia.org/wiki/File:NizamiBandhu.1.jpg">Akshaykrsingh25</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons</figcaption>
                    </figure>
                </div>
                <h3>Famous Devotional Singers :</h3>
                <ul>
                    <li>
                        <b>Bhajans: </b> Anup Jalota, Jagjit Singh, Lata Mangeshkar.
                    </li>
                    <li>
                        <b>Qawwali:  </b> Nusrat Fateh Ali Khan, Sabri Brothers.
                    </li>
                    <li>
                        <b>Kirtan: </b> Bhai Harjinder Singh, Dya Singh.
                    </li>
                </ul>
                <h3>Conclusion: The Soulful Connection of Devotional Music 🎼 :</h3>
                <p>Devotional and spiritual music in India is more than just sound—it is a journey of the soul, a conversation with the divine, and a path to inner peace. Whether it is the melodious bhajans in temples, powerful qawwalis in dargahs, serene gurbani in gurudwaras, or soul-stirring hymns in churches, each form of spiritual music enriches lives with faith, hope, and tranquility.</p>
                <p>🎶 Let the sacred melodies of Indian devotional music guide you toward peace and divinity! 🕉️✨</p>
            </div>
    </div>
  )
}
