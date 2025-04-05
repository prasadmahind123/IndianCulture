
import { useState , useRef , useEffect } from "react"
import './TempleList.css' 
 const Jyotirlings = [
    { 
        id: 10, 
        title: "Somnath Temple",
        img : "/images/Temples/Khajuraho.webp",   
        location: "Prabhas Patan, Gujarat", 
        builtBy: "Moon God (Rebuilt multiple times, last in 1951)", 
        year: "Ancient", 
        architecturalStyle: "Chalukyan Style", 
        interestingFacts:["One of the 12 Jyotirlingas", "Rebuilt multiple times", "Located along the Arabian Sea"],
        status: "One of the 12 Jyotirlingas", 
        info: [
            "Somnath temple  is a Hindu temple, located in Prabhas Patan, Veraval in Gujarat, India. It is one of the most sacred pilgrimage sites the Tirtha Kshetra for Hindus and is the first among the twelve jyotirlinga shrines of Shiva.It is unclear when the first version of the Somnath temple was built, with estimates varying between the early centuries of the 1st millennium and about the 9th century CE.Various texts, including the Mahabharata and Bhagavata Purana, mention a tirtha (pilgrimage site) at Prabhas Patan on the coastline of Saurashtra, where the later temple was, but archaeology has not found traces of an early temple, though there was a settlement there.",
            "The temple was reconstructed several times in the past after repeated destruction by multiple Muslim invaders and rulers, notably starting with an attack by Mahmud Ghazni in January 1026.",
            "In the late 19th and early 20th centuries, historians and archaeologists of the colonial era actively studied the Somnath temple because its ruins showed a historic Hindu temple that was turning into an Islamic mosque.After India's independence, those ruins were demolished, and the present Somnath temple was reconstructed in the Māru-Gurjara style of Hindu temple architecture. The contemporary Somnath temple's reconstruction was started under the orders of the first Deputy Prime Minister of India, Vallabhbhai Patel, after receiving approval for reconstruction from Mahatma Gandhi. The reconstruction was completed in May 1951, after Gandhi's death."
        ],
        description: "A revered Shiva temple on the western coast of India, believed to be the first among the 12 Jyotirlingas.", 
        history:[
            "The site of Somnath has been a pilgrimage site from ancient times on account of being a Triveni Sangam (the confluence of three rivers: Kapila, Hiran and Saraswati). Soma, the Moon god, is believed to have lost his lustre due to a curse, and he bathed in the Sarasvati River at this site to regain it. The result is said to be the waxing and waning of the moon. The name of the town, Prabhasa, meaning lustre, as well as the alternative name Someshvara ('the lord of the moon' or 'the moon god'), arise from this tradition.",
            "The name Someshvara begins to appear starting in the 9th century. The Gurjara-Pratihara king Nagabhata II (r. 805–833) recorded that he has visited tirthas in Saurashtra, including Someshvara.The Chaulukya (Solanki) king Mularaja possibly built the first temple for Soma ('moon god') at the site sometime before 997 CE, even though some historians believe that he may have renovated a smaller earlier temple.",
            "In 1026, during the reign of Bhima I, the Turkic Muslim ruler Mahmud of Ghazni raided and plundered the Somnath temple, breaking its jyotirlinga. He took away a booty of 20 million dinars.According to Romila Thapar, relying on a 1038 inscription of a Kadamba king of Goa, the condition of Somnath temple in 1026 after Ghazni's is unclear because the inscription is 'puzzlingly silent' about Ghazni's raid or temple's condition. This inscription, states Thapar, could suggest that instead of destruction it may have been a desecration because the temple seems to have been repaired quickly within twelve years and was an active pilgrimage site by 1038."
        ], 
        architecturalFeatures: {
            tower: "A grand shikhara (tower) reaching a height of 50 meters.",
            sanctum: "Houses the revered Jyotirlinga of Lord Shiva.",
            locationFeature: "Situated along the Arabian Sea, offering breathtaking views."
        },
        significance: [
            "One of the most sacred Jyotirlingas of Lord Shiva.",
            "A symbol of resilience and faith.",
            "Believed to have been built originally by the Moon God, Chandra."
        ],
        bestTimeToVisit: {
            months: "October to March",
            specialEvent: "Maha Shivaratri – Grand celebrations at the temple."
        },
        address : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1686.6338880236108!2d70.3998101!3d20.8888825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bfd329f0417cb75%3A0x2f5a510de9857963!2sSomnath%20Temple!5e1!3m2!1sen!2sin!4v1742014110625!5m2!1sen!2sin"
    },
    { 
        id: 11, 
        title: "Mallikarjuna Temple", 
        img : "/images/Temples/Khajuraho.webp",   
        location: "Srisailam, Andhra Pradesh", 
        builtBy: "Various Rulers", 
        year: "Ancient", 
        architecturalStyle: "Dravidian Style",
        interestingFacts: ["One of the 12 Jyotirlingas", "Known as 'Kailash of the South'", "Significant temple for Lord Shiva"],
        status: "One of the 12 Jyotirlingas",
        info: [
            "Sri Bhramarambika sametha Mallikarjuna swamy Devasthanam (romanised: Mallikārjunuḍu) or Srisailam Temple is a Hindu temple dedicated to the deities Shiva and Parvati, located at Srisailam in the Indian state of Andhra Pradesh. It is significant to the Hindu sects of both Shaivism and Shaktism as this temple is referred to as one of the twelve Jyotirlingas of Shiva and as one of the eighteen Shakti pithas, centres of the Hindu goddess. Shiva is worshiped as Mallikarjuna and is represented by the lingam. His consort Parvati is depicted as Bhramaramba.",
            "The temple complex covers two hectares and houses four gateway towers known as gopurams. The temple has numerous shrines, with those of Mallikarjuna and Bhramaramba being the most prominent. The temple complex houses many halls; the most notable is the Mukha Mandapa built during the Vijayanagar period. The temple is situated facing east. The center mandapam has several pillars, with a huge idol of Nadikeshwara. The temple is enclosed by tall walls measuring 183 m (600 ft) by 152 m (499 ft) and 8.5 m (28 ft) tall. There are a number of sculptures in the precinct each rising above another. The Mukamandapa, the hall leading to the sanctum, has intricately sculpted pillars. The shrine where Mallikarjuna is housed is considered the oldest in the temple, dating back to the 7th century. There is a Sahasra linga (1000 linga), believed to have been commissioned by Rama and five other lingams believed to have been commissioned by Pandavas. A mirror hall in the first precinct has images of Nataraja."
        ],
        description: "A significant temple dedicated to Lord Shiva, known as 'Kailash of the South'.", 
        history: [
            "The Mallikarjuna Temple, located in Srisailam, is one of the most sacred temples in India as it is both a Jyotirlinga (one of the 12 holy Shiva shrines) and a Shakti Peetha (one of the 18 divine seats of Goddess Shakti). According to legend, Lord Shiva and Goddess Parvati came to Srisailam to stay near their son Kartikeya, who had taken residence there. The temple finds mentions in ancient texts like the Skanda Purana and has been a prominent center of worship for Shaivites and Shaktas for centuries.",
            "The temple was originally patronized by the Satavahanas (2nd century BCE – 2nd century CE) and later expanded by Chalukyas, Vijayanagara rulers, Kakatiyas, and the Reddy kings. The Vijayanagara emperors made significant contributions to the temple's architecture and upkeep."
        ], 
        architecturalFeatures: {
            sanctum: "Houses the revered Jyotirlinga of Lord Shiva.",
            tower: "Dravidian-style gopurams adorned with intricate sculptures.",
            hall: "A massive hall with carved pillars showcasing mythological stories."
        },
        significance: [
            "One of the 12 Jyotirlingas of Lord Shiva.",
            "Believed to bless devotees with divine protection.",
            "Associated with Shiva and Parvati’s visit to this region."
        ],
        bestTimeToVisit: {
            months: "September to March",
            specialEvent: "Maha Shivaratri – Special rituals and processions."
        },
        address : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.448073191974!2d78.8657645980225!3d16.07249787614477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5656c41af32d5%3A0x1875cd84b9c2e163!2sSri%20Mallikarjuna%20Swamy%20jyotirlinga%20Temple!5e1!3m2!1sen!2sin!4v1742014266839!5m2!1sen!2sin"
    },
    { 
        id: 12, 
        title: "Mahakaleshwar Temple", 
        img : "/images/Temples/Khajuraho.webp",
        location: "Ujjain, Madhya Pradesh", 
        builtBy: "Ancient Origin", 
        year: "Unknown", 
        architecturalStyle: "Maratha Style",
        info : [
            "Mahakaleshwar Jyotirlinga (IAST: mahākāleśvara) is a Hindu temple dedicated to Shiva and is one of the twelve Jyotirlingas, shrines which are said to be the most sacred abodes of Shiva. It is located in the ancient city of Ujjain in the state of Madhya Pradesh, India. The temple is situated on the side of the holy river Shipra. The presiding deity, Shiva in the lingam form is believed to be Swayambhu, deriving currents of power (Shakti) from within itself as against the other images and lingams that are ritually established and invested with mantra-shakti.",
            "The idol of Mahakaleshwar is known to be dakshinamurthi, which means that it is facing the south.This is a unique feature, upheld by the tantric shivnetra tradition to be found only in Mahakaleshwar among the 12 Jyotirlingas. The idol of Omkareshwar Mahadev is consecrated in the sanctum above the Mahakal shrine. The images of Ganesh, Parvati and Karttikeya are installed in the west, north, and east of the sanctum sanctorum. To the south is the image of Nandi, the vehicle of Shiva. The idol of Nagchandreshwar on the third storey is open for darshan only on the day of Nag Panchami. The temple has five levels, one of which is underground. The temple itself is located in a spacious courtyard surrounded by massive walls near a lake. The shikhar or the spire is adorned with sculptural finery. Brass lamps light the way to the underground sanctum. It is believed that prasada (holy offering) offered here to the deity can be re-offered unlike all other shrines."
        ], 
        interestingFacts: ["One of the 12 Jyotirlingas", "Located in the ancient city of Ujjain", "Known for the Bhasma Aarti ritual"],
        status: "One of the 12 Jyotirlingas", 
        description: "A famous temple dedicated to Lord Shiva, known for its Bhasma Aarti performed every morning.", 
        history: [
            "The temple complex was destroyed by Iltutmish during his raid of Ujjain in 1234–35.[16][17][18] The Jyotirlinga was dismantled and believed to be thrown into a nearby 'Kotiteerth Kunda' (a pond neighbouring the temple) with the Jaladhari (a structure supporting the Lingam) stolen during the invasion.It was later reconstructed and revived by Maratha Diwan Ramachandra Baba Sukthankar.It was again attacked by Jalaluddin Khilji and Alauddin Khilji."
        ], 
        architecturalFeatures: {
            sanctum: "Houses a unique self-manifested (Swayambhu) Shiva Lingam.",
            tower: "A multi-tiered shikhara with intricate carvings.",
            ritualFeature: "The Bhasma Aarti, where sacred ash is offered to Lord Shiva."
        },
        significance: [
            "One of the most revered Jyotirlingas.",
            "Known for the unique Bhasma Aarti ritual.",
            "Considered spiritually powerful."
        ],
        bestTimeToVisit: {
            months: "October to March",
            specialEvent: "Maha Shivaratri – Special prayers and grand processions."
        },
        address : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.037798026683!2d75.76562247477497!3d23.182746360332875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963743638ffffff%3A0x3024e4d1bd13cc22!2sShri%20Mahakaleshwar%20Jyotirlinga%20Temple!5e1!3m2!1sen!2sin!4v1742014330801!5m2!1sen!2sin"
    },
    { 
        id: 13, 
        title: "Omkareshwar Temple", 
        img : "/images/Temples/Khajuraho.webp",
        location: "Madhya Pradesh", 
        builtBy: "Unknown (Ancient Origin)", 
        year: "Unknown", 
        architecturalStyle: "Nagara Style",
        interestingFacts: ["One of the 12 Jyotirlingas", "Located in the ancient city of Madhya Pradesh", "Known for the Chaturanga ritual"],
        status: "One of the 12 Jyotirlingas", 
        info : [
            "Omkareshwar Temple (IAST: Ōṃkārēśvar) is a Hindu temple dedicated to Shiva, located in Mandhata, nearby Khandwa city in Khandwa district of the Indian state of Madhya Pradesh. It is one of the 12 revered Jyotirlinga shrines of Shiva.It is on an island called Mandhata, near Khandwa city in the Narmada River at Khandwa district in Madhya Pradesh, India; the shape of the island is said to be like the Devanagari ॐ symbol.",
            "There are two main temples of Shiva here, one to Omkareshwar (whose name means' Lord of Omkara or the Lord of the Om sound') located in the island and one to Mamleshwar (Amaleshwar) (whose name means 'Immortal Lord' or 'lord of the Immortals or Devas') located on the southern bank of the Narmada River on the mainland."
        ],
        description: "Located on an island in the Narmada River, this temple is known for its scenic and spiritual importance.", 
        history: [
            "The temple is said to have been built by the Paramara Kings of Malwa in the 11th century CE. After the Paramara kings, the administration of the temple was taken over by the Chauhan rulers. In the 13th century CE, the temple suffered destruction and loot by Muslim invaders starting with Mahmud Ghazni. Nevertheless, the temple remained intact without complete destruction. The temple was under the Chauhan Kings during the entire Mughal rule, without much renovation. In the 18th century, the temple was rebuilt by the Holkar rulers. The construction of the same was started by the 1st Holkar Queen,Gautama Bai Holkar and later completed by her daughter-in-law Devi Ahilyabai Holkar. The temple came under the British rule during the colonial era. After Independence in 1947, the Archaeological Survey of India (ASI) took over the responsibility of the temple with the help of the Khandwa administration."
        ], 
        architecturalFeatures: {
            sanctum: "Houses the sacred Jyotirlinga.",
            surroundings: "Located on a river island, adding to its serenity.",
            carvings: "Intricate carvings on temple walls depicting Hindu deities."
        },
        significance: [
            "One of the 12 Jyotirlingas.",
            "Located on an island shaped like 'Om'.",
            "A major pilgrimage site in Madhya Pradesh."
        ],
        bestTimeToVisit: {
            months: "October to March",
            specialEvent: "Mahashivaratri and Karthik Purnima."
        },
        address : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475703.676287053!2d72.37090851827831!3d19.93454282426704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962bdfe25a5853f%3A0xb2ec9da93195f90d!2sShri%20Omkareshwar%20Jyotirlinga%20Temple!5e1!3m2!1sen!2sin!4v1742014410707!5m2!1sen!2sin"
    },
    { 
        id: 14, 
        title: "Kedarnath Temple",
        img : "/images/Temples/Khajuraho.webp", 
        location: "Uttarakhand", 
        builtBy: "Adi Shankaracharya (Rebuilt)", 
        year: "Ancient", 
        architecturalStyle: "Himalayan Stone Architecture", 
        interestingFacts: ["One of the 12 Jyotirlingas", "Located in the ancient city of Uttarakhand", "Known for the Dhanusha ritual"],
        status: "One of the 12 Jyotirlingas & Char Dham", 
        info : [
            "Kedarnath Temple Kēdāranātha Mandira, lit. 'temple of the God of the field') is a Hindu temple, one of the twelve jyotirlinga of Shiva. The temple is located on the Garhwal Himalayan range[1] near the Mandakini river, in the state of Uttarakhand, India. Due to extreme weather conditions, the temple is open to the general public only between the months of April (Akshaya Tritiya) and November (Kartik Purnima, the autumn full moon). During the winters, the vigraha (deity) of the temple is carried down to Ukhimath to be worshipped for the next six months. Kedarnath is seen as a homogeneous form of Shiva, the 'Lord of Kedarkhand', the historical name of the region.",
            "The temple is not directly accessible by road and has to be reached by a 17 kilometres (11 mi) uphill trek from Gaurikund. According to Hindu legends, the temple was initially built by the Pandavas, and is one of the twelve Jyotirlingas, the holiest Hindu shrines of Shiva.The Pandavas were supposed to have pleased Shiva by doing penance in Kedarnath.The temple is one of the four major sites in India's Chota Char Dham pilgrimage of Northern Himalayas and is the first of the Panch Kedar pilgrimage sites. This temple is the highest among the 12 Jyotirlingas. It is one of the 275 paadal petra sthalams expounded in the Tevaram. This temple is sung of by Thirugnanasambandar, Appar, Sundarar and Sekkizhar in their Tevaram texts.",
            "Kedarnath was the worst affected area during the 2013 flash floods in North India. The temple complex, surrounding areas, and Kedarnath town suffered extensive damage, but the temple structure did not suffer any major damage. A large rock among the debris acted as a barrier, protecting the temple from the flood."
        ],
        description: "A prominent pilgrimage site among the Chota Char Dham, dedicated to Lord Shiva.", 
        history: [
            "At a height of 3,583 m (11,755 ft), 223 km (139 mi) from Rishikesh, on the shores of Mandakini river, a tributary of Ganga, is a stone edifice of unknown date.[7] It is not certain who built the original Kedarnath temple and when. The name Kedarnath means the lord of the field: it derives from the Sanskrit words kedara (field) and natha (lord). The text Kashi Kedara Mahatmya states that it is so called because the crop of liberation grows here.",
        ], 
        architecturalFeatures: {
            sanctum: "A large black stone lingam, worshipped as Lord Shiva.",
            surrounding: "Located in the Himalayas, surrounded by snow-capped peaks.",
            entrance: "A beautifully carved stone doorway with inscriptions."
        },
        significance: [
            "One of the Char Dham pilgrimage sites.",
            "A revered Shiva temple in the Himalayas.",
            "Survived the 2013 Uttarakhand floods miraculously."
        ],
        bestTimeToVisit: {
            months: "May to June & September to October",
            specialEvent: "Maha Shivaratri and temple reopening after winter."
        },
        address : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12414.272749854403!2d79.05737664844149!3d30.73092268799453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39083ee08aa6b0b5%3A0xdbbdae8b9602ee02!2sShri%20Kedarnath%20Jyotirlinga%20Temple!5e1!3m2!1sen!2sin!4v1742014533740!5m2!1sen!2sin"
    },
    { 
        id: 15, 
        title: "Trimbakeshwar Temple",
        img : "/images/Temples/Khajuraho.webp", 
        location: "Nashik, Maharashtra", 
        builtBy: "Peshwa Balaji Baji Rao (Rebuilt in 18th century)", 
        year: "Ancient", 
        architecturalStyle: "Hemadpanti Style",
        interestingFacts: ["One of the 12 Jyotirlingas", "Located in the ancient city of Nashik", "Known for the Kumbh Mela"],
        status: "One of the 12 Jyotirlingas",
        info : [
            "Trimbakeshwar Shiva Temple  is an ancient Hindu temple in the town of Trimbak, in the Trimbakeshwar tehsil in the Nashik District of Maharashtra, India, 28 km from the city of Nashik and 40 km from Nashik road.It is dedicated to the Hindu god Shiva and is one of the twelve jyotirlingas where the Hindu genealogy registers at Trimbakeshwar, Maharashtra are kept. The origin of the sacred Godavari River is near Trimbak.Several Hindu rituals are carried out in Trimbakeshwar, for that pilgrims travel from all over India.",
            "Kusavarta kunda (sacred pond) in the temple premises, built by Shrimant Sardar Raosaheb Parnerkar who was the Fadnavis of Indore State, is the source of the Godavari River, the second longest river in India. A bust of Sardar Fadnavis and his wife can be seen on the edge of the kunda. The current temple was built by Peshwa Balaji Baji Rao after it was destroyed by Mughal ruler Aurangzeb.",
            "Shri Trimbakeshwar is a religious center having one of the twelve Jyotirlingas. The extraordinary feature of the Jyotirlinga located here is its three faces embodying Brahma, Vishnu, and Shiva. Due to the excessive use of water, the linga has started to erode. It is said that this erosion symbolizes the eroding nature of human society. The Lingas are covered by a jeweled crown which is placed over the Gold Mask of Trideva (Brahma Vishnu Shiva). The crown is said to be from the age of Pandavas and consists of diamonds, emeralds, and many precious stones. The original Nassak Diamond which adorned the revered linga was eventually stolen by the British and currently is placed on a sword. The crown is displayed every Monday from 4-5 pm (Shiva)."
        ],
        description: "A unique temple where the Jyotirlinga represents the three deities: Brahma, Vishnu, and Mahesh.", 
        history: [
            "The Trimbakeshwar Temple, located in the Trimbak town of Nashik, is one of the 12 Jyotirlingas of Lord Shiva and holds immense religious importance in Hinduism. It is situated near the origin of the holy Godavari River, often referred to as the Ganga of the South. The temple's history dates back to ancient times, with references in the Skanda Purana, Padma Purana, and Brahmanda Purana.",
            "It is believed that Sage Gautama performed penance here to bring the sacred river Godavari to Earth. Pleased with his devotion, Lord Shiva granted him this boon, and the river originated from the Brahmagiri Hills near Trimbakeshwar. Due to its association with the river and Shiva, the temple became a prominent pilgrimage site. The present-day temple was rebuilt by Peshwa Balaji Baji Rao (Nana Saheb) in the mid-18th century after being damaged over time."
        ], 
        architecturalFeatures: {
            sanctum: "Houses the three-faced Jyotirlinga.",
            surroundings: "Located near the origin of the Godavari River.",
            uniqueFeature: "Only Jyotirlinga where priests wear sacred mundan (shaven heads)."
        },
        significance: [
            "One of the 12 Jyotirlingas.",
            "Has a unique three-faced Jyotirlinga.",
            "A major pilgrimage site in Maharashtra."
        ],
        bestTimeToVisit: {
            months: "October to March",
            specialEvent: "Kumbh Mela every 12 years."
        },
        address : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.292973228155!2d73.52820737468608!3d19.932164224538628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb013af2e74b%3A0x716282a3a46b04cc!2sTrimbakeshwar%20Jyotirling%20Temple!5e1!3m2!1sen!2sin!4v1742014612704!5m2!1sen!2sin"
    },
    {
        id: 16,
        title: "Bhimashankar Temple",
        img : "/images/Temples/Khajuraho.webp",
        location: "Pune, Maharashtra",
        builtBy: "Unknown (Ancient Origin)",
        year: "Unknown",
        architecturalStyle: "Nagara Style",
        interestingFacts: ["One of the 12 Jyotirlingas", "Located in the Sahyadri Mountains", "Known for the Bhimashankar Wildlife Sanctuary"],
        status: "One of the 12 Jyotirlingas",
        info : [
            "Bhimashankar Temple is a Hindu temple dedicated to Shiva situated in its eponymous village, Bhimashankar, in Pune district of Maharashtra. It is a key pilgrimage centre and contains one of the 12 Jyotirlingas. The temple's Shiva lingam is one of the five Jyotirlingas of Maharashtra.[2] The mandir is situated on a mountain, 110 kilometers away from Pune. The temple's vicinity has rare plant and animal species.[1] The mandir is located in Khed taluka, in the Bhimashankar forest range.",
            "The Bhima River originates from the Bhimashankar village, and the hills of the Manmad village are present near it, there are old rock carvings of the God Bhimashankar, Bhootings and Amba-Ambika on these hills.",
            "The shrine is linked to the legendary asura known as Tripura. The story goes that Tripura did penance, and Brahma, delighted with Tripura's penance, manifests and grants him three wishes. Tripura demanded that he be invulnerable to the gods, devils, yakshas, and gandharvas. His three puras should be unbreakable, and he should be able to travel anywhere in the universe. All his desires were fulfilled. Tripura embarked on a conquest to subjugate three Loka. Indra, the deity associated with the heavens, was also vanquished. Indra made the decision to seek blessings from the deity Shiva and performed penance. Shiva made a vow to annihilate Tripura.",
            "He offered one here at Bhimashankar and the others in Menavali, near Wai, in front of a Shiva temple on the banks of the Krishna River, the Banshanker Temple in Pune, the Omkareshwar Temple in Pune, and the Ramlinga Temple in Pune (Shirur)."
        ],
        description: "A temple nestled in the Sahyadri Mountains, known for its wildlife sanctuary and spiritual aura.",
        history: [
            "According to Namdev, a saint in the medieval era, Saint Jnaneshwar went to Tryambakeshwar and then Bhimashankar. Namdev himself has also visited this place.",
            "Bhimashankaram shrine and the Bhimarathi river have been talked about in writings as far back as the 13th century;however, the current construction of the temple seems to be fairly new.",
            "The temple is built in the Nagara style, which combines traditional and modern designs. The temple hall was constructed during the 18th century by Nāna Phadnavis of Peshwa.The village of Kharosi was granted to the temple by King Shivaji Maharaj. The daily religious observance was funded through the financial resources derived from the people of the area."
        ],
        architecturalFeatures: {
            sanctum: "Houses the Jyotirlinga, a symbol of Lord Shiva's cosmic energy.",
            surroundings: "Located amidst lush greenery and wildlife.",
            wildlife: "Home to the Bhimashankar Wildlife Sanctuary."
        },
        significance: [
            "One of the 12 Jyotirlingas.",
            "A unique temple in the Sahyadri Mountains.",
            "A pilgrimage site for Lord Shiva."
        ],
        bestTimeToVisit: {
            months: "October to March",
            specialEvent: "Maha Shivaratri and Kumbh Mela."
        },
        address : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6824.777239700762!2d73.52637549357908!3d19.07199409999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd442595555555%3A0x3923896a457fe3c8!2sBhimashankar%20Temple!5e1!3m2!1sen!2sin!4v1742014783779!5m2!1sen!2sin"
    },
    {
        id: 17,
        title: "Baidyanath  Jyotirlinga",
        img : "/images/Temples/Khajuraho.webp",
        location: "Deoghar, Jharkhand",
        builtBy: "Ravana (Rebuilt by various rulers)",
        year: "Ancient",
        architecturalStyle: "Nagara Style",
        interestingFacts: ["One of the 12 Jyotirlingas", "Located in the ancient city of Deoghar", "Known for its healing powers"],
        status: "One of the 12 Jyotirlingas",
        info : [
            "Baidyanath Temple (IAST: Baidyãnath), also known as Baba Baidyanath Dham, is a Hindu temple dedicated to Shiva. It is located in Deoghar, in the Santhal Parganas division of the Indian state of Jharkhand.[1] The temple complex comprises the central shrine of Baba Baidyanath along with 21 additional temples. It is significant to the Hindu sects of Shaivism as this temple is referred to as one of the twelve Jyotirlingas.",
            "According to the legends, Ravana was performing penance in the Himalayan region to appease Shiva. He offered nine of his heads as an offering to Shiva. As he was to sacrifice his tenth head, Shiva appeared before him and expressed satisfaction with the offering. Then, Shiva asked what boon he desired. Ravana asked to take the 'Kamna Linga' to the island of Lanka and expressed his desire to take Shiva from Kailash to Lanka.",
            
        ],
        description: "A temple dedicated to Lord Shiva, known for its healing powers and spiritual significance.",
        history: [
            "The Baidyanath Temple, also known as Vaidyanath Jyotirlinga, is one of the 12 Jyotirlingas of Lord Shiva and a major pilgrimage site in India. According to legend, Ravana, the demon king of Lanka, was a great devotee of Shiva and performed intense penance to bring Lord Shiva to Lanka. Pleased with his devotion, Shiva granted him a Jyotirlinga under the condition that it should not be placed on the ground. However, on his journey back, Ravana had to put the lingam down, causing it to be permanently established at Deoghar (present-day Jharkhand).",
            "The temple has been a sacred site for centuries, with references in ancient texts like the Shiva Purana and Padma Purana. Various dynasties, including the Pala rulers, the Mughals, and regional kings, contributed to the temple’s preservation. It is believed that Mughal Emperor Akbar’s general, Man Singh, renovated the temple."
        ],
        architecturalFeatures: {
            sanctum: "Houses the Jyotirlinga, a symbol of Lord Shiva's healing energy.",
            tower: "A towering shikhara with intricate carvings.",
            healing: "Believed to cure ailments and grant blessings."
        },
        significance: [
            "One of the 12 Jyotirlingas.",
            "A temple dedicated to Lord Shiva.",
            "A significant spiritual site in Jharkhand."
        ],
        bestTimeToVisit: {
            months: "October to March",
            specialEvent: "Maha Shivaratri and Kumbh Mela."

        },
        address : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.680924210881!2d86.69748637481493!3d24.492537659882217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1162b1519c019%3A0xdb8ce9bf0b62d036!2sShree%20Baba%20Baidyanath%20Jyotirlinga%20Mandir%20Deoghar!5e1!3m2!1sen!2sin!4v1742014854420!5m2!1sen!2sin"
    },
    {
        id: 18,
        title: "Nageshwar Jyotirlinga",
        img : "/images/Temples/Khajuraho.webp",
        location: "Dwarka, Gujarat",
        builtBy: "Unknown (Ancient Origin)",
        year: "Unknown",
        architecturalStyle: "Nagara Style",
        interestingFacts: ["One of the 12 Jyotirlingas", "Located in the ancient city of Dwarka", "Known for its healing powers"],
        status: "One of the 12 Jyotirlingas",
        info : [
            "According to Shiv Mahapuraan, Brahma (The Creator) and Vishnu (The Preserver) once had a disagreement about which of them was supreme.To test them, Shiva pierced the three worlds as an immeasurable pillar of light, the Jyotirlinga. Vishnu and Brahma parted company to determine the extent of each end of the pillar. Brahma, who had set off upward, lied that he had discovered the upper end of the pillar, but Vishnu, who had gone in the direction of the base of the pillar, admitted that he had not. Shiva then appeared as a second Jyotirlinga and cursed Brahma, telling him that he would have no place in the ceremonies.",
            "The Jyotirlinga is the supreme indivisible reality from which Shiva appears. Jyothirlinga shrines commemorate this time when Shiva appeared.It was believed that there were originally sixty-four jyotirlingas. Twelve are considered to be especially auspicious and holy.[1] Each of the twelve sites takes the name of the presiding deity and each is considered a separate manifestation of Shiva.",
            "At all these sites, the primary deity is a lingam representing the beginning less and endless Stambha pillar, symbolizing the Shiva's infinite nature.The twelve jyothirlinga are Somnath in Gujarat, Mallikarjuna at Srisailam in Andhra Pradesh, Mahakaleswar at Ujjain in Madhya Pradesh, Omkareshwar in Madhya Pradesh, Kedarnath in Himalayas, Bhimashankar in Maharashtra, Viswanath at Varanasi in Uttar Pradesh, Triambakeshwar in Maharashtra, Vaidyanath at Deoghar in Jharkhand, Aundha Nagnath temple in Maharashtra, Rameshwar at Rameswaram in Tamil Nadu and Grishneshwar at Aurangabad in Maharashtra."
        ],
        description: "A temple dedicated to Lord Shiva, known for its healing powers and spiritual significance.",
        history: [
            "The Nageshvara Jyotirlinga Temple is one of the 12 Jyotirlingas of Lord Shiva, located near Dwarka, Gujarat. According to Shiva Purana, a great devotee named Supriya was once captured by a demon named Daruka, who ruled a kingdom of demons. Supriya and other prisoners worshipped Lord Shiva, who appeared and vanquished Daruka, freeing his devotees. As a result, Shiva manifested as a Jyotirlinga at Nageshvara, symbolizing protection from evil and fearlessness.",
            "The temple has ancient roots and has been rebuilt multiple times due to invasions and natural wear. The present-day structure was renovated by modern Hindu saints and devotees to maintain its sacredness."
        ],
        architecturalFeatures: {
            sanctum: "Houses the Jyotirlinga, a symbol of Lord Shiva's cosmic energy.",
            location: "Situated near the coast of the Arabian Sea.",
            healing: "Believed to cure ailments and grant blessings."
        },
        significance: [
            "One of the 12 Jyotirlingas.",
            "A temple dedicated to Lord Shiva.",
            "A significant spiritual site in Gujarat."
        ],
        bestTimeToVisit: {
            months: "October to March",
            specialEvent: "Maha Shivaratri and Kumbh Mela."
        },
        address : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3339.6809106370088!2d69.08443387475039!3d22.33596854160262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395698184969bf63%3A0xa6d636401fda39fc!2sShri%20Nageshwar%20Jyotirlinga%20Temple!5e1!3m2!1sen!2sin!4v1742014922888!5m2!1sen!2sin"
    },
    {
        id: 19,
        title: "Rameshwar Jyotirlinga",
        img : "/images/Temples/Khajuraho.webp",
        location: "Rameswaram, Tamil Nadu",
        builtBy: "Rama (Rebuilt by various rulers)",
        year: "Ancient",
        architecturalStyle: "Dravidian Style",
        interestingFacts: ["One of the 12 Jyotirlingas", "Located in the ancient city of Rameswaram", "Known for its stunning architecture and spiritual significance"],
        status: "One of the 12 Jyotirlingas",
        info : [
            "According to Shiv Mahapuraan, Brahma (The Creator) and Vishnu (The Preserver) once had a disagreement about which of them was supreme.To test them, Shiva pierced the three worlds as an immeasurable pillar of light, the Jyotirlinga. Vishnu and Brahma parted company to determine the extent of each end of the pillar. Brahma, who had set off upward, lied that he had discovered the upper end of the pillar, but Vishnu, who had gone in the direction of the base of the pillar, admitted that he had not. Shiva then appeared as a second Jyotirlinga and cursed Brahma, telling him that he would have no place in the ceremonies.",
            "The Jyotirlinga is the supreme indivisible reality from which Shiva appears. Jyothirlinga shrines commemorate this time when Shiva appeared.[2][3] It was believed that there were originally sixty-four jyotirlingas. Twelve are considered to be especially auspicious and holy.[1] Each of the twelve sites takes the name of the presiding deity and each is considered a separate manifestation of Shiva.At all these sites, the primary deity is a lingam representing the beginning less and endless Stambha pillar, symbolizing the Shiva's infinite nature."
        ],
        description: "A temple dedicated to Lord Shiva, known for its stunning architecture and spiritual significance.",
        history: [
            "The Ramanathaswamy Temple, home to the Rameshwar Jyotirlinga, is one of the 12 Jyotirlingas of Lord Shiva and a significant Hindu pilgrimage site. It is closely associated with the Ramayana, as it is believed that Lord Rama worshipped Lord Shiva here before crossing the sea to Lanka. According to legend, after defeating Ravana, Lord Rama wanted to atone for the sin of killing a Brahmin and instructed Hanuman to bring a Shiva Linga from Mount Kailash. Since Hanuman was delayed, Sita Devi made a lingam out of sand, which is today revered as the main deity (Ramalingam) inside the temple.",
            "The temple has been patronized by several dynasties, including the Pandyas, Cholas, and Nayaks, who contributed to its magnificent architecture and expansions over centuries."
        ],
        architecturalFeatures: {
            sanctum: "Houses the Jyotirlinga, a symbol of Lord Shiva's cosmic energy.",
            tower: "A towering shikhara with intricate carvings.",
            architecture: "Built with intricate details and a focus on symmetry and harmony."
        },
        significance: [
            "One of the 12 Jyotirlingas.",
            "A temple dedicated to Lord Shiva.",
            "A significant spiritual site in Tamil Nadu."
        ],
        bestTimeToVisit: {
            months: "October to March",
            specialEvent: "Maha Shivaratri and Kumbh Mela."
        },
        address : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14164810.800637018!2d67.65160366453304!3d16.704795557383683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01e3dc4949ac6d%3A0x9ffdab70cc4aa4ba!2sSri%20Arulmigu%20Ramanathaswamy%20Temple!5e1!3m2!1sen!2sin!4v1742015015089!5m2!1sen!2sin"
    },
    {
        id: 20,
        title: "Grishneshwar  Jyotirlinga",
        img : "/images/Temples/Khajuraho.webp",
        location: "Chh. Sambhaji Nagar, Maharashtra",
        builtBy: "Ahilyabai Holkar",
        year: "Ancient",
        architecturalStyle: "Maratha Style",
        interestingFacts: ["One of the 12 Jyotirlingas", "Located in the ancient city of Chh. Sambhaji Nagar", "Known for its healing powers"],
        status: "One of the 12 Jyotirlingas",
        info : [
            "Grushneshwar Jyotirlinga is a Hindu temple of Shiva in Verul village of Aurangabad district, Maharashtra, India. It is one of the 12 Jyotirlinga mandirs.The mandir is a national protected site, one and a half kilometers away from the Ellora Caves, 30 kilometres (19 miles) north-west of the city Aurangabad, and 300 kilometres (190 miles) east-northeast far from Mumbai.Grushneshwar is mentioned in Shiva Purana, Skanda Purana, the Ramayana and the Mahabharata.",
        ],
        description: "A temple dedicated to Lord Shiva, known for its healing powers and spiritual significance.",
        history: [
            "The temple structure was destroyed by the Delhi Sultanate in 13th and 14th centuries. The temple went through several rounds of rebuilding followed by re-destruction during the Mughal-Maratha conflict. Maloji Bhosale grandfather of Shivaji first restored it in 16th century and rebuilt to its current form in the year 1729 under the sponsorship of queen Gautama Bai Holkar of Indore, after the fall of the Mughal Empire.It is presently an important and active pilgrimage site of the Hindus and attracts long lines of devotees daily. Anyone can enter the temple premises and its inner chambers, but to enter the sanctum sanctorum core (garbha-gruha) of the temple, the local Hindu tradition demands that men must go bare-chested."
        ],
        architecturalFeatures: {
            sanctum: "Houses the Jyotirlinga, a symbol of Lord Shiva's cosmic energy.",
            tower: "A towering shikhara with intricate carvings.",
            healing: "Believed to cure ailments and grant blessings."
        },
        significance: [
            "One of the 12 Jyotirlingas.",
            "A temple dedicated to Lord Shiva.",
            "A significant spiritual site in Maharashtra."
        ],
        bestTimeToVisit: {
            months: "October to March",
            specialEvent: "Maha Shivaratri and Kumbh Mela."
        },
        address : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.296111387992!2d75.16732477468841!3d20.02490902150003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb93b793c1dc95%3A0x15be6fc3178c365d!2sShri%20Ghrishneshwar%20Jyotirlinga!5e1!3m2!1sen!2sin!4v1742015063075!5m2!1sen!2sin"
    },
    {
        id: 21,
        title: "Kashi Vishwanath Temple",
        img : "/images/Temples/Khajuraho.webp",
        location: "Varanasi, Uttar Pradesh",
        builtBy: "Ahilyabai Holkar",
        year: "Ancient",
        architecturalStyle: "Nagara Style",
        interestingFacts: ["One of the 12 Jyotirlingas", "Located in the ancient city of Varanasi", "Known for its healing powers"],
        status: "One of the 12 Jyotirlingas",
        info : [
            "Kashi Vishwanath Temple is a Hindu temple dedicated to Shiva. It is located in Vishwanath Gali, in Varanasi, Uttar Pradesh, India. The temple is a Hindu pilgrimage site and is one of the twelve Jyotirlinga shrines. The presiding deity is known by the names Vishwanath and Vishweshwara (IAST: Viśvanātha and Viśveśvara), meaning Lord of the Universe.",
            "The original temple, called the Adi Vishveshwar Temple, was demolished by Mohammad of Ghor during his invasion of India. Subsequently, the template was rebuilt by Man Singh I and Todar Mal under the emperor Akbar. According to several historical accounts, the Mughal Emperor Aurangzeb ordered the demolition of the Hindu temple in 1669.Subsequently, in 1678, the Gyanvapi Mosque was built on its site,but Hindu pilgrims continued to visit the remnants of the temple.[1] The current structure was constructed on an adjacent site by the Maratha ruler Ahilyabai Holkar of Indore in 1780."
        ],
        description: "A temple dedicated to Lord Shiva, known for its healing powers and spiritual significance.",
        history: [
            "The Skanda Purana contains a part titled 'Kashi Khanda', while the Brahmavaivarta Purana includes a portion known as 'Kashi Rahasya', both of which are dedicated to the city of Varanasi.",
            "As per the Kashi Khanda, there were a total of 1099 temples, out of which 513 were specifically devoted to the worship of Shiva. The scripture states that the Vishvanath temple was formerly known as Moksha Lakshmi Vilas. The temple housed a total of five mandapas (halls). The lingam of Vishwanath was situated in the garbhagriha (innermost sanctuary). The remaining four mandapas include the Jnana mandapa located to the east, the Ranga mandapa to the west, the Aishvarya mandapa to the north, and the Mukti mandapa to the south."
        ],
        architecturalFeatures: {
            sanctum: "Houses the Jyotirlinga, a symbol of Lord Shiva's cosmic energy.",
            tower: "A towering shikhara with intricate carvings.",
            healing: "Believed to cure ailments and grant blessings."
        },
        significance: [
            "One of the 12 Jyotirlingas.",
            "A temple dedicated to Lord Shiva.",
            "A significant spiritual site in Uttar Pradesh."
        ],
        bestTimeToVisit: {
            months: "October to March",
            specialEvent: "Maha Shivaratri and Kumbh Mela."
        },
        address : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.0181236899784!2d83.00904212458772!3d25.308993431493835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e21ee940b17%3A0x48600e4fcdfb7b13!2sShri%20Kashi%20Vishwanath%20Temple!5e1!3m2!1sen!2sin!4v1742015134451!5m2!1sen!2sin"
    }

];

export default function JTempleList() {
  const [activeTemple, setActiveTemple] = useState(null);
  const detailsRefs = useRef({});

  useEffect(() => {
    if (activeTemple !== null && detailsRefs.current[activeTemple]) {
      detailsRefs.current[activeTemple].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [activeTemple]);

  return (
    <div className="temple-list">
      {Jyotirlings.map((temple) => {
        const isActive = activeTemple === temple.id;

        return (
          <div
            key={temple.id}
            className={`list-temple-card ${isActive ? 'active' : ''}`}
            ref={(el) => {
              if (el) detailsRefs.current[temple.id] = el;
            }}
          >
            <div className="temple-header">
              <div className="temple-title">
                <span className="temple-icon">🏛️</span>
                <h2 className="temple-name">{temple.title}</h2>
              </div>

              <div className="temple-preview">
                <div className="temple-preview-info">
                  <span>
                    <strong>Location:</strong> {temple.location}
                  </span>
                  <span>
                    <strong>UNESCO:</strong> {temple.year}
                  </span>
                </div>

                <button
                  className={`temple-button ${isActive ? 'hide' : 'view'}`}
                  onClick={() => setActiveTemple(isActive ? null : temple.id)}
                >
                  {isActive ? 'Hide Details' : 'View Details'}
                </button>
              </div>
            </div>

            <div className={`temple-details-container ${isActive ? 'expanded' : ''}`}>
              <div className="temple-details">
                <div className="temple-image-container">
                  <img src={temple.img || '/placeholder.svg'} alt={temple.title} className="temple-image" />
                  <div className="temple-quick-facts">
                    <div className="quick-fact">
                      <span>Location:</span> {temple.location}
                    </div>
                    <div className="quick-fact">
                      <span>UNESCO Recognition:</span> {temple.year}
                    </div>
                    <div className="quick-fact">
                      <span>Period:</span> {temple.builtBy}
                    </div>
                    <div className="quick-fact">
                    <h3>Description</h3>
                    <p>{temple.description}</p>
                  </div>
                    <div className="quick-fact">
                      <span>Style:</span> {temple.architecturalStyle}
                    </div>
                  </div>
                </div>

                <div className="temple-info">
               

                  <div className="temple-info">
                      {temple.info}
                    </div>

                  <div className="quick-fact">
                      <span>Period:</span> {temple.builtBy}
                    </div>
                  <div className="info-section">
                    <h3>Historical & Cultural Significance</h3>
                    <p>{temple.significance}</p>
                  </div>

                  <div className="info-section">
                    <h3>Visiting Information</h3>
                    <p>{temple.status}</p>
                  </div>

                  <div className="info-section">
                    <h3>Interesting Facts</h3>
                    <ul className="facts-list">
                      {temple.interestingFacts.map((fact, index) => (
                        <li key={index}>{fact}</li>
                      ))}
                    </ul>
                  </div>

                  <button className="hide-button" onClick={() => setActiveTemple(null)}>
                    Hide Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
