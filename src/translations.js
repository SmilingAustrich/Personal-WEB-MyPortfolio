// translations.js

const translations = {
    en: {
        // English translations
        navbar: {
            home: "Home",
            about: "About",
            skills: "Skills",
            portfolio: "Portfolio",
            contact: "Contact",
        },
        hero: {
            greeting: "Hi,I'm",
            aka: "aka",
            portfolio: "and this... is my ",
        },
        about: {
            title: "About Me",
            description:
                "I am a Computer Science student at the University of Montreal with a passion for technology and a keen interest in hardware. I enjoy exploring how systems work from the inside out and find great satisfaction in solving complex problems. I'm dedicated to creating sleek, responsive designs and applications while constantly learning new technologies and approaches. My experience spans software engineering, system architecture, and web development, and I am always eager to apply my skills in real-world projects.",
        },
        skills: {
            title: "My Technical Skills",
            dataStructures: {
                title: "Data Structures",
                description: `
          Proficient in advanced <span class="neon-highlight-purple">data structures</span> such as 
          <span class="neon-highlight-purple">trees</span>, 
          <span class="neon-highlight-purple">splay trees</span>, 
          <span class="neon-highlight-purple">heaps</span>, and 
          <span class="neon-highlight-purple">stacks</span>. Knowledge of algorithms for balancing trees and heap operations.
          Skilled in optimizing <span class="neon-highlight-purple">data access</span> and 
          <span class="neon-highlight-purple">manipulation</span>, ensuring efficient problem-solving and resource management. 
          Familiar with tech stacks like <span class="neon-highlight-purple">Java</span>, 
          <span class="neon-highlight-purple">C++</span>, and 
          <span class="neon-highlight-purple">Python</span> to implement these structures.
        `,
            },
            assembly: {
                title: `
          <span class="neon-highlight-white">Assembly & Registers (64-bit)</span>
          <span class="text-white bg-green-500 px-2 py-1 rounded-full text-sm">Learning Currently</span>
        `,
                description: `
          Familiar with <span class="neon-highlight-white">low-level programming</span> and 
          <span class="neon-highlight-white">assembly language</span>, focusing on 
          <span class="neon-highlight-white">64-bit registers</span> and 
          <span class="neon-highlight-white">memory management</span>.
          Exploring advanced assembly topics such as 
          <span class="neon-highlight-white">stack frames</span> and 
          <span class="neon-highlight-white">function calls</span>. I got very interested in this subject after a class
          on <span class="neon-highlight-white">Computer Architecture</span>. The class name was 
          <span class="neon-highlight-white">IFT1227</span> at the University of Montreal.
        `,
            },
            programmingLanguages: {
                title: "Programming Languages",
                description: `
          Skilled in <span class="neon-highlight-red">C++</span>, 
          <span class="neon-highlight-red">Java</span>, 
          <span class="neon-highlight-red">Python</span>, and lastly 
          <span class="neon-highlight-red">JavaScript (my least favourite haha)</span>.
          <br/><br/>
          I enjoy <span class="neon-highlight-red">C++</span> for its performance and control over
          system resources, diving deep into pointers and memory management for high-performance
          applications. When I'm developing larger systems or applications, 
          <span class="neon-highlight-red">Java</span> and 
          <span class="neon-highlight-red">Python</span> come into play for their versatility and rich
          libraries for rapid development.
          <br/><br/>
          <strong>Latest Project</strong>: I’m working on 
          <span class="neon-highlight-red">Java</span> for my software engineering course, where I’m
          building a project called <span class="neon-highlight-red">MaVille</span>.
          I use <span class="neon-highlight-red">JavaScript</span> for frontend work too, although
          it’s not my go-to language. I do prefer languages that are more low level, such as 
          <span class="neon-highlight-red">C++</span>, 
          <span class="neon-highlight-red">Java</span> and 
          <span class="neon-highlight-red">Assembly (MIPS, x86, x64)</span>.

          I’ve also used these languages in various frameworks and libraries:
          <ul class="list-disc list-inside mt-2">
            <li>
              <span class="neon-highlight-red">C++</span> with the 
              <span class="neon-highlight-red">STL</span> (Standard Template Library)
            </li>
            <li>
              <span class="neon-highlight-red">Java</span> with 
              <span class="neon-highlight-red">Quarkus</span> for backend services
            </li>
            <li>
              <span class="neon-highlight-red">Python</span> with 
              <span class="neon-highlight-red">OpenCV</span> to process real time data from a webcam
            </li>
            <li>
              <span class="neon-highlight-red">JavaScript</span> with 
              <span class="neon-highlight-red">React</span> for interactive UIs
            </li>
          </ul>
        `,
            },
            algorithms: {
                title: "Algorithms & Problem Solving",
                description: `
          Proficient in solving problems using key <span class="neon-highlight-yellow">algorithms</span> such as 
          <span class="neon-highlight-yellow">binary search</span>, a fundamental technique for
          searching sorted arrays with a time complexity of O(log n). Additionally skilled in 
          <span class="neon-highlight-yellow">divide and conquer</span> strategies, particularly for
          sorting algorithms like <span class="neon-highlight-yellow">merge sort</span> (O(n log n)) and 
          <span class="neon-highlight-yellow">quick sort</span> (average O(n log n)).
          <br/>
          Familiar with core <span class="neon-highlight-yellow">data structures</span> such as
          arrays, linked lists, stacks, queues, trees , heaps and how to implement and
          optimize these for solving practical problems. My knowledge includes fundamental concepts
          like tree traversal, heap operations, etc. Additionally, I work with time and space complexities
          to ensure efficient problem-solving, optimizing algorithms for both 
          <span class="neon-highlight-yellow">memory</span> and 
          <span class="neon-highlight-yellow">execution time</span>.
          My approach integrates both theoretical and practical knowledge to enhance the performance
          and scalability of algorithms in real-world scenarios.
          <br/><br/>
          <strong>Next class linked to this subject</strong>:
          <br/><br/>
          I am scheduled to take a class in algorithmics 
          (<em>Introduction à l’algorithmie</em>) during
          the Winter 2025 semester as part of the process of obtaining my BSc.
          <br/>
        `,
            },
        },
        contact: {
            title: "Contact Me",
            namePlaceholder: "Name",
            emailPlaceholder: "Email",
            messagePlaceholder: "Message",
            submitButton: "Submit",
        },
    },

    fr: {
        // French translations
        navbar: {
            home: "Accueil",
            about: "À propos",
            skills: "Compétences",
            portfolio: "Portfolio",
            contact: "Contact",
        },
        hero: {
            greeting: "Hey! Je suis",
            aka: "alias",
            portfolio: "et ceci... est mon ",
        },
        about: {
            title: "À propos de moi",
            description:
                "Je suis étudiant en informatique à l'Université de Montréal, passionné par la technologie et particulièrement intéressé par le matériel. J'aime explorer comment les systèmes fonctionnent de l'intérieur et trouve une grande satisfaction à résoudre des problèmes complexes. Je m'engage à créer des designs élégants et des applications réactives tout en apprenant constamment de nouvelles technologies et approches. Mon expérience couvre l'ingénierie logicielle, l'architecture des systèmes et le développement web, et je suis toujours prêt à appliquer mes compétences à des projets concrets.",
        },
        skills: {
            title: "Mes Compétences Techniques",
            dataStructures: {
                title: "Structures de Données",
                description: `
          Compétent dans des <span class="neon-highlight-purple">structures de données</span> avancées telles que 
          les <span class="neon-highlight-purple">arbres</span>, 
          <span class="neon-highlight-purple">arbres splay</span>, 
          <span class="neon-highlight-purple">tas (heaps)</span>, et 
          <span class="neon-highlight-purple">piles (stacks)</span>. Connaissance des algorithmes d'équilibrage 
          des arbres et des opérations sur les tas.
          Habile dans l’optimisation de l’<span class="neon-highlight-purple">accès aux données</span> et de la 
          <span class="neon-highlight-purple">manipulation</span>, assurant une résolution de problèmes et 
          une gestion des ressources efficaces. Familiarisé avec des technos comme 
          <span class="neon-highlight-purple">Java</span>, 
          <span class="neon-highlight-purple">C++</span> et 
          <span class="neon-highlight-purple">Python</span> pour implémenter ces structures.
        `,
            },
            assembly: {
                title: `
          <span class="neon-highlight-white">Langage Assembleur & Registres </span>
          <span class="text-white bg-green-500 px-2 py-1 rounded-full text-sm">En cours d'apprentissage</span>
        `,
                description: `
          Familiarisé avec la <span class="neon-highlight-white">programmation bas niveau</span> et 
          le <span class="neon-highlight-white">langage assembleur</span>, en mettant l'accent sur 
          les <span class="neon-highlight-white">registres 64 bits</span> et la 
          <span class="neon-highlight-white">gestion de la mémoire</span>.
          Exploration de sujets avancés tels que 
          <span class="neon-highlight-white">les piles d’appels (stack frames)</span> et 
          <span class="neon-highlight-white">les appels de fonctions</span>. Je me suis beaucoup intéressé 
          à ce sujet après un cours d’<span class="neon-highlight-white">Architecture des Ordinateurs</span>. 
          Le nom du cours était <span class="neon-highlight-white">IFT1227</span> à l’Université de Montréal.
        `,
            },
            programmingLanguages: {
                title: "Langages de Programmation",
                description: `
          Compétent en <span class="neon-highlight-red">C++</span>, 
          <span class="neon-highlight-red">Java</span>, 
          <span class="neon-highlight-red">Python</span> et enfin 
          <span class="neon-highlight-red">JavaScript (mon moins préféré haha)</span>.
          <br/><br/>
          J’aime <span class="neon-highlight-red">C++</span> pour ses performances et son contrôle des
          ressources, en approfondissant les pointeurs et la gestion de la mémoire pour des applications à haute performance. 
          Pour le développement de systèmes ou d’applications plus volumineuses, 
          <span class="neon-highlight-red">Java</span> et 
          <span class="neon-highlight-red">Python</span> apportent leur polyvalence et leurs bibliothèques riches 
          pour un développement rapide.
          <br/><br/>
          <strong>Dernier Projet</strong> : Je travaille sur 
          <span class="neon-highlight-red">Java</span> pour mon cours d’ingénierie logicielle, où je développe 
          un projet appelé <span class="neon-highlight-red">MaVille</span>.
          J’utilise <span class="neon-highlight-red">JavaScript</span> côté frontend, même si ce n’est pas 
          mon langage de prédilection. Je préfère des langages plus bas niveau, comme 
          <span class="neon-highlight-red">C++</span>, 
          <span class="neon-highlight-red">Java</span> et 
          <span class="neon-highlight-red">l’assembleur (MIPS, x86, x64)</span>.
          <br/><br/>
          Langages que je souhaite explorer davantage : 
          <span class="neon-highlight-red">Rust</span> et 
          <span class="neon-highlight-red">Go</span>. Je m’intéresse beaucoup à la performance et à l’évolutivité, 
          et ces deux langages sont très prometteurs.
          <br/><br/>
          J’ai également utilisé ces langages avec différentes bibliothèques et frameworks :
          <ul class="list-disc list-inside mt-2">
            <li>
              <span class="neon-highlight-red">C++</span> avec la 
              <span class="neon-highlight-red">STL</span> (Standard Template Library)
            </li>
            <li>
              <span class="neon-highlight-red">Java</span> avec 
              <span class="neon-highlight-red">Quarkus</span> pour des services backend
            </li>
            <li>
              <span class="neon-highlight-red">Python</span> avec 
              <span class="neon-highlight-red">OpenCV</span> pour traiter des données en temps réel via une webcam
            </li>
            <li>
              <span class="neon-highlight-red">JavaScript</span> avec 
              <span class="neon-highlight-red">React</span> pour des interfaces utilisateurs interactives
            </li>
          </ul>
        `,
            },
            algorithms: {
                title: "Algorithmes & Résolution de Problèmes",
                description: `
          Compétent pour résoudre des problèmes à l’aide d’<span class="neon-highlight-yellow">algorithmes</span> clés 
          comme la <span class="neon-highlight-yellow">recherche binaire</span> (O(log n)), ainsi que 
          <span class="neon-highlight-yellow">diviser pour régner</span> (divide and conquer), notamment pour 
          des tris comme <span class="neon-highlight-yellow">le tri fusion (merge sort)</span> en O(n log n) 
          ou <span class="neon-highlight-yellow">le tri rapide (quick sort)</span> (moyenne O(n log n)).
          <br/>
          Familiarisé avec les <span class="neon-highlight-yellow">structures de données</span> de base, 
          telles que les tableaux, listes chaînées, piles, files, arbres, tas et graphes, 
          et je sais implémenter et optimiser ces structures pour des problèmes concrets. 
          Je gère également les complexités en temps et en espace afin d’assurer une résolution de problèmes efficace, 
          en optimisant la <span class="neon-highlight-yellow">mémoire</span> et 
          le <span class="neon-highlight-yellow">temps d’exécution</span>.
          Mon approche allie théorie et pratique pour améliorer les performances et l’évolutivité des algorithmes 
          dans des scénarios réels.
          <br/><br/>
          <strong>Prochain cours lié à ce sujet</strong> :
          <br/><br/>
          Je prévois de suivre un cours d’algorithmique 
          (<em>Introduction à l’algorithmie</em>) durant la session d’hiver 2025, 
          dans le cadre de l’obtention de mon B.Sc.
          <br/>
        `,
            },
        },
        contact: {
            title: "Contactez-moi",
            namePlaceholder: "Nom",
            emailPlaceholder: "E-mail",
            messagePlaceholder: "Message",
            submitButton: "Envoyer",
        },
    },
};

export default translations;
