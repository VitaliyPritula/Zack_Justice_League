import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "After",
    image: "/Shows/01.jpg",
    description:
      "Tessa Young is a dedicated student and loyal daughter with a simple life. Her world turns upside down when she meets mysterious rebel Hardin Scott.",
    details: {
      lists: {
        name: "Best melodrama movies of 2019",
        url: "https://uaserials.film/films/f-melodrama/best/2019/",
        place: "49th place",
      },
      tagline: "Your life will change forever...",
      year: {
        value: "2019",
        url: "https://uaserials.film/year/2019/",
      },
      genre: [
        { name: "Movie", url: "https://uaserials.film/films/" },
        { name: "Drama", url: "https://uaserials.film/films/f-drama/" },
        { name: "Melodrama", url: "https://uaserials.film/films/f-melodrama/" },
      ],
      country: {
        name: "USA",
        url: "https://uaserials.film/country/%D0%A1%D0%A8%D0%90/",
      },
      translation: "professional dubbed",
      director: "Jenny Gage",
      actors: [
        "Hero Fiennes-Tiffin",
        "Josephine Langford",
        "Selma Blair",
        "Jennifer Beals",
      ],
    },
    watchList: [
      { id: 1, name: "Watching" },
      { id: 2, name: "Watched" },
      { id: 3, name: "Will watch" },
      { id: 4, name: "Dropped" },
      { id: 5, name: "Favorite" },
    ],
  },
  {
    id: 2,
    title: "Emancipation",
    image: "/Shows/02.jpg",
    description:
      "Emancipation is a 2022 American historical action thriller film directed by Antoine Fuqua, written by William N. Collage, and produced by Will Smith. Will Smith stars as a fugitive slave who travels to Baton Rouge, Louisiana, in the 1860s after President Abraham Lincoln issues the Emancipation Proclamation to end slavery in the secessionist Confederacy. Will Smith's character survives in the swamps, pursued by slave catchers and their dogs. Ben Foster plays the ruthless slave hunter, and Charmaine Bingwa plays his enslaved wife and mother. The film is loosely based on the life of a self-emancipated a slave known as either Gordon or  The story became famous after a photograph of the man's bare back, badly beaten by a overseer, was published as a magazine illustration in 1863 and became evidence of the cruelty of slavery for the abolitionist movement. Producer Joey McFarland began researching the story in 2018 and hired Collage to write the screenplay.The film was officially announced in June 2020, with Fuqua attached to direct and Smith to star. Filming took place in Louisiana from July to August 2021, and Apple paid $130 million to acquire the rights to the film, beating out several other studios.It premiered in Washington, D.C., on October 1, 2022. The film was released in select in theaters on December 2 of that year, and then streamed on December 9 on Apple TV+. The film received mixed reviews from critics, who praised Smith's performance but criticized the script and its depiction of real events.",
    details: {
      lists: {
        name: "Top historical movies",
        url: "https://uaserials.film/films/f-history/",
        place: "12th place",
      },
      tagline: "He will stop at nothing for freedom.",
      year: {
        value: "2022",
        url: "https://uaserials.film/year/2022/",
      },
      genre: [
        { name: "Movie", url: "https://uaserials.film/films/" },
        { name: "History", url: "https://uaserials.film/films/f-history/" },
        { name: "Thriller", url: "https://uaserials.film/films/f-thriller/" },
      ],
      country: {
        name: "USA",
        url: "https://uaserials.film/country/%D0%A1%D0%A8%D0%90/",
      },
      translation: "subtitled",
      director: "Antoine Fuqua",
      actors: ["Will Smith", "Ben Foster", "Charmaine Bingwa"],
    },
    // watchList: [...],
  },
  {
    id: 3,
    title: "Dunkirk",
    image: "/Shows/03.jpg",
    description:
      "Allied soldiers from Belgium, the British Empire and France are surrounded by the German Army and evacuated during a fierce battle in World War II.",
    details: {
      lists: {
        name: "Oscar-winning war films",
        url: "https://uaserials.film/films/f-war/",
        place: "Top 10",
      },
      tagline: "400,000 men couldn’t get home, so home came for them.",
      year: {
        value: "2017",
        url: "https://uaserials.film/year/2017/",
      },
      genre: [
        { name: "War", url: "https://uaserials.film/films/f-war/" },
        { name: "Drama", url: "https://uaserials.film/films/f-drama/" },
        { name: "Action", url: "https://uaserials.film/films/f-action/" },
      ],
      country: {
        name: "UK",
        url: "https://uaserials.film/country/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D1%96%D1%8F/",
      },
      translation: "professional dubbed",
      director: "Christopher Nolan",
      actors: [
        "Fionn Whitehead",
        "Tom Hardy",
        "Cillian Murphy",
        "Harry Styles",
      ],
    },
    // watchList: [...],
  },
  {
    id: 4,
    title: "The Enormity of Life",
    image: "/Shows/04.jpg",
    description:
      "After a failed suicide attempt, a man unexpectedly finds love, meaning, and a reason to live in an unlikely friendship.",
    details: {
      lists: {
        name: "Emotional indie gems",
        url: "#",
        place: "35th place",
      },
      tagline: "Life is bigger than we think.",
      year: {
        value: "2021",
        url: "https://uaserials.film/year/2021/",
      },
      genre: [
        { name: "Indie", url: "#" },
        { name: "Drama", url: "https://uaserials.film/films/f-drama/" },
      ],
      country: { name: "USA", url: "#" },
      translation: "original audio",
      director: "Eric Swinderman",
      actors: ["Breckin Meyer", "Emily Kinney"],
    },
    // watchList: [...],
  },
  {
    id: 5,
    title: "Vanitas",
    image: "/Shows/05.jpg",
    description:
      "A painter obsessed with immortality explores dark forces through his art, unleashing something unexpected.",
    details: {
      lists: {
        name: "Dark European thrillers",
        url: "#",
        place: "24th place",
      },
      tagline: "Art never dies. But it can kill.",
      year: {
        value: "2022",
        url: "#",
      },
      genre: [
        { name: "Thriller", url: "https://uaserials.film/films/f-thriller/" },
        { name: "Mystery", url: "https://uaserials.film/films/f-detective/" },
      ],
      country: { name: "Germany", url: "#" },
      translation: "subtitled",
      director: "Unknown",
      actors: ["Unknown"],
    },
    // watchList: [...],
  },
  {
    id: 6,
    title: "Something Like Perfect",
    image: "/Shows/06.jpg",
    description:
      "A burnt-out writer escapes to the coast, only to rediscover inspiration through unexpected relationships.",
    details: {
      lists: {
        name: "Cozy romantic dramas",
        url: "#",
        place: "11th place",
      },
      tagline: "Perfection is overrated.",
      year: {
        value: "2023",
        url: "#",
      },
      genre: [
        { name: "Romance", url: "https://uaserials.film/films/f-romantic/" },
        { name: "Drama", url: "https://uaserials.film/films/f-drama/" },
      ],
      country: { name: "USA", url: "#" },
      translation: "dubbed",
      director: "Unknown",
      actors: ["Unknown"],
    },
    // watchList: [...],
  },
  {
    id: 7,
    title: "Maturing Youth",
    image: "/Shows/07.jpg",
    description:
      "An immature young man is forced to grow up fast when his girlfriend drops a surprise responsibility on him: a child he didn’t know he had.",
    details: {
      lists: {
        name: "Top indie comedies",
        url: "https://uaserials.film/films/f-comedy/",
        place: "17th place",
      },
      tagline: "It’s time to grow up... ready or not.",
      year: {
        value: "2019",
        url: "https://uaserials.film/year/2019/",
      },
      genre: [
        { name: "Comedy", url: "https://uaserials.film/films/f-comedy/" },
        { name: "Indie", url: "#" },
      ],
      country: { name: "USA", url: "#" },
      translation: "original",
      director: "Divoni Simon",
      actors: ["Tanner Flood", "Sean A Kaufman", "Steve Lichtenstein"],
    },
    // watchList: [...],
  },
  {
    id: 8,
    title: "Leap Year",
    image: "/Shows/08.jpg",
    description:
      "A woman travels to Ireland to propose to her boyfriend on Leap Day, but fate has other romantic plans.",
    details: {
      lists: {
        name: "Best romantic comedies",
        url: "https://uaserials.film/films/f-romantic-comedy/",
        place: "30th place",
      },
      tagline: "Anna planned to propose. Fate had other plans.",
      year: {
        value: "2010",
        url: "https://uaserials.film/year/2010/",
      },
      genre: [
        { name: "Romance", url: "https://uaserials.film/films/f-romantic/" },
        { name: "Comedy", url: "https://uaserials.film/films/f-comedy/" },
      ],
      country: { name: "Ireland", url: "#" },
      translation: "dubbed",
      director: "Anand Tucker",
      actors: ["Amy Adams", "Matthew Goode", "Adam Scott"],
    },
    // watchList: [...],
  },
  {
    id: 9,
    title: "The Curse of Oak Island",
    image: "/Shows/09.jpg",
    description:
      "Brothers Rick and Marty Lagina embark on a quest to solve the 220-year-old mystery of Oak Island and find the legendary treasure.",
    details: {
      lists: {
        name: "Top treasure-hunting series",
        url: "https://uaserials.film/series/f-documentary/",
        place: "10th place",
      },
      tagline: "Some mysteries are worth digging for.",
      year: {
        value: "2014",
        url: "https://uaserials.film/year/2014/",
      },
      genre: [
        {
          name: "Documentary",
          url: "https://uaserials.film/films/f-documentary/",
        },
        { name: "Mystery", url: "https://uaserials.film/films/f-detective/" },
      ],
      country: { name: "Canada", url: "#" },
      translation: "subtitled",
      director: "Kevin Burns",
      actors: ["Rick Lagina", "Marty Lagina", "Robert Clotworthy"],
    },
    // watchList: [...],
  },
  {
    id: 10,
    title: "Street Legal",
    image: "/Shows/10.jpg",
    description:
      "A modern reboot of the classic Canadian courtroom drama that follows ambitious lawyers navigating high-stakes cases and personal turmoil.",
    details: {
      lists: {
        name: "Top legal series",
        url: "https://uaserials.film/series/f-drama/",
        place: "19th place",
      },
      tagline: "New cases. New rules. Same fight for justice.",
      year: {
        value: "2019",
        url: "https://uaserials.film/year/2019/",
      },
      genre: [
        { name: "Drama", url: "https://uaserials.film/films/f-drama/" },
        { name: "Legal", url: "#" },
      ],
      country: { name: "Canada", url: "#" },
      translation: "original",
      director: "Graeme Manson",
      actors: ["Cara Ricketts", "Steve Lund", "Yvonne Chapman"],
    },
    // watchList: [...],
  },
  {
    id: 11,
    title: "Run Baby Run",
    image: "/Shows/11.jpg",
    description:
      "A simple evening turns into a nightmare when a man finds himself entangled in a murder conspiracy.",
    details: {
      lists: {
        name: "Best Indian thrillers",
        url: "https://uaserials.film/films/f-thriller/",
        place: "21st place",
      },
      tagline: "One wrong move changes everything.",
      year: {
        value: "2022",
        url: "https://uaserials.film/year/2022/",
      },
      genre: [
        { name: "Thriller", url: "https://uaserials.film/films/f-thriller/" },
        { name: "Mystery", url: "https://uaserials.film/films/f-detective/" },
      ],
      country: {
        name: "India",
        url: "https://uaserials.film/country/%D0%86%D0%BD%D0%B4%D1%96%D1%8F/",
      },
      translation: "subtitled",
      director: "Jiyen Krishnakumar",
      actors: ["RJ Balaji", "Aishwarya Rajesh"],
    },
    // watchList: [...],
  },
  {
    id: 12,
    title: "The Black Echo",
    image: "/Shows/12.jpg",
    description:
      "Based on Michael Connelly’s bestselling novel, Detective Bosch investigates a murder with ties to his traumatic past in Vietnam.",
    details: {
      lists: {
        name: "Crime thriller picks",
        url: "https://uaserials.film/films/f-detective/",
        place: "7th place",
      },
      tagline: "Justice runs deep.",
      year: {
        value: "2023",
        url: "https://uaserials.film/year/2023/",
      },
      genre: [
        { name: "Crime", url: "https://uaserials.film/films/f-crime/" },
        { name: "Drama", url: "https://uaserials.film/films/f-drama/" },
      ],
      country: { name: "USA", url: "#" },
      translation: "dubbed",
      director: "Erik Oleson",
      actors: ["Titus Welliver"],
    },
    // watchList: [...],
  },
];

export const MoviePage = () => {
  const { id } = useParams<{ id: string }>();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <div className="text-white p-8">Фільм не знайдено</div>;
  }

  return (
    <div className="text-white p-8">
        <Link to="/" className="flex items-center mb-4 text-white">
          <svg
            width="11"
            height="17"
            viewBox="0 0 11 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2">
            <path
              d="M0.797852 7.66992L7.43848 1.0293C7.89746 0.570313 8.63965 0.570313 9.09375 1.0293L10.1973 2.13281C10.6563 2.5918 10.6563 3.33398 10.1973 3.78809L5.49512 8.5L10.2021 13.207C10.6611 13.666 10.6611 14.4082 10.2021 14.8623L9.09863 15.9707C8.63965 16.4297 7.89746 16.4297 7.44336 15.9707L0.802734 9.33008C0.338867 8.87109 0.338867 8.12891 0.797852 7.66992Z"
              fill="white"
            />
          </svg>
          Back
        </Link>

      <div className="flex flex-wrap gap-8 items-start">
        <img
          src={movie.image}
          alt={movie.title}
          className="mb-4 rounded-lg w-64"
        />
        <div className="lg:w-2/4">
          <h1 className="text-md font-bold mb-2">{movie.title}</h1>

          {movie.details && (
            <div className="fx-row">
              <ul className="short-list fx-1">
                {movie.details.lists && (
                  <li>
                    <span>Списки:</span>{" "}
                    <div>
                      <a href={movie.details.lists.url}>
                        {movie.details.lists.name}
                      </a>{" "}
                      ({movie.details.lists.place})
                    </div>
                  </li>
                )}
                {movie.details.tagline && (
                  <li>
                    <span>Tagline:</span> {movie.details.tagline}
                  </li>
                )}
                {movie.details.year && (
                  <li>
                    <span>Year:</span>{" "}
                    <a href={movie.details.year.url}>
                      {movie.details.year.value}
                    </a>
                  </li>
                )}
                {movie.details.genre && (
                  <li>
                    <span>Genre:</span>{" "}
                    {movie.details.genre.map((g, i) => (
                      <span key={i}>
                        <a href={g.url}>{g.name}</a>
                        {i < movie.details.genre.length - 1 && ", "}
                      </span>
                    ))}
                  </li>
                )}
                {movie.details.country && (
                  <li>
                    <span>Country:</span>{" "}
                    <a href={movie.details.country.url}>
                      {movie.details.country.name}
                    </a>
                  </li>
                )}
                {movie.details.translation && (
                  <li>
                    <span>Translation:</span>{" "}
                    <span data-popup="" data-popup-title="List of audio tracks">
                      {movie.details.translation}
                    </span>
                  </li>
                )}
                {movie.details.director && (
                  <li>
                    <span>Director:</span> {movie.details.director}
                  </li>
                )}
                {movie.details.actors && (
                  <li>
                    <span>Actors:</span> {movie.details.actors.join(", ")}
                  </li>
                )}
              </ul>
              {movie.watchList && (
                <div className="mylists-desktop">
                  <ul className="watch-list mylists-switch" data-id={movie.id}>
                    {movie.watchList.map((item) => (
                      <li key={item.id} data-id={item.id}>
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <p>{movie.description}</p>
    </div>
  );
};
