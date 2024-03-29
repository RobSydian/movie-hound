const apiBaseUrl = 'https://api.themoviedb.org/3';
const backendBaseUrl = 'https://localhost:8000/api';
const bearerToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDJhMWRjZTJiMjk1NWNiMDJhMzBhNTZmZjFhYTdjZiIsInN1YiI6IjYxMmI0YmYxMmM2YjdiMDA2MjcwYTJmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R6WXtqxW2UxUnBC5jrwzY1BXqeRHVGIvZiKc47lk9og';
const headers = {
  Authorization: `Bearer ${bearerToken}`,
};

export const discoverMoviesCached = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg',
      genre_ids: [28, 12, 14, 35],
      id: 436969,
      original_language: 'en',
      original_title: 'The Suicide Squad',
      overview:
        'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
      popularity: 3865.874,
      poster_path: '/lSEr1nphZuCqXli3VziIgCI8Ivf.jpg',
      release_date: '2021-07-28',
      title: 'The Suicide Squad',
      video: false,
      vote_average: 8,
      vote_count: 3091,
    },
    {
      adult: false,
      backdrop_path: '/swcF9sPlruc6s4gAHuWfbYicbqG.jpg',
      genre_ids: [16, 10751, 12, 35],
      id: 675445,
      original_language: 'en',
      original_title: 'PAW Patrol: The Movie',
      overview:
        'Ryder and the pups are called to Adventure City to stop Mayor Humdinger from turning the bustling metropolis into a state of chaos.',
      popularity: 3399.97,
      poster_path: '/ic0intvXZSfBlYPIvWXpU1ivUCO.jpg',
      release_date: '2021-08-09',
      title: 'PAW Patrol: The Movie',
      video: false,
      vote_average: 7.9,
      vote_count: 220,
    },
    {
      adult: false,
      backdrop_path: '/7WJjFviFBffEJvkAms4uWwbcVUk.jpg',
      genre_ids: [12, 14, 35, 28],
      id: 451048,
      original_language: 'en',
      original_title: 'Jungle Cruise',
      overview:
        'Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal – a discovery that will change the future of medicine.',
      popularity: 3338.842,
      poster_path: '/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg',
      release_date: '2021-07-28',
      title: 'Jungle Cruise',
      video: false,
      vote_average: 7.9,
      vote_count: 2124,
    },
    {
      adult: false,
      backdrop_path: '/uHmvk8FnoxpgujDU0RIXLkv2fNt.jpg',
      genre_ids: [16, 35],
      id: 573164,
      original_language: 'es',
      original_title: 'Un rescate de huevitos',
      overview:
        'A rooster and his fowl partner embark on a dangerous trip to the Congo to recover their stolen eggs from a group of Russian goons.',
      popularity: 2297.809,
      poster_path: '/lq68Z5htr1bjPd8X0U3PBZRcUij.jpg',
      release_date: '2021-08-12',
      title: 'Eggs Run',
      video: false,
      vote_average: 8.2,
      vote_count: 157,
    },
    {
      adult: false,
      backdrop_path: '/npYe4umAU5ihbj6aqsRRnzF9EKg.jpg',
      genre_ids: [28, 18, 80],
      id: 706972,
      original_language: 'en',
      original_title: 'Narco Sub',
      overview:
        'A man will become a criminal to save his family.  Director: Shawn Welling  Writer: Derek H. Potts  Stars: Tom Vera, Tom Sizemore, Lee Majors |',
      popularity: 1963.89,
      poster_path: '/7p0O4mKYLIhU2E5Zcq9Z3vOZ4e9.jpg',
      release_date: '2021-07-22',
      title: 'Narco Sub',
      video: false,
      vote_average: 5.3,
      vote_count: 17,
    },
    {
      adult: false,
      backdrop_path: '/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg',
      genre_ids: [28, 12, 53, 878],
      id: 497698,
      original_language: 'en',
      original_title: 'Black Widow',
      overview:
        'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.',
      popularity: 1965.431,
      poster_path: '/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg',
      release_date: '2021-07-07',
      title: 'Black Widow',
      video: false,
      vote_average: 7.8,
      vote_count: 4534,
    },
    {
      adult: false,
      backdrop_path: '/8s4h9friP6Ci3adRGahHARVd76E.jpg',
      genre_ids: [16, 35, 10751, 878],
      id: 379686,
      original_language: 'en',
      original_title: 'Space Jam: A New Legacy',
      overview:
        "When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.'s digitized champions on the court. It's Tunes versus Goons in the highest-stakes challenge of his life.",
      popularity: 1939.864,
      poster_path: '/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg',
      release_date: '2021-07-08',
      title: 'Space Jam: A New Legacy',
      video: false,
      vote_average: 7.5,
      vote_count: 1951,
    },
    {
      adult: false,
      backdrop_path: '/j28p5VwI5ieZnNwfeuZ5Ve3mPsn.jpg',
      genre_ids: [35, 28, 12, 878],
      id: 550988,
      original_language: 'en',
      original_title: 'Free Guy',
      overview:
        'A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.',
      popularity: 1737.917,
      poster_path: '/hEqw9swA8gFJuNjgWYEypwZfkZg.jpg',
      release_date: '2021-08-11',
      title: 'Free Guy',
      video: false,
      vote_average: 7.8,
      vote_count: 429,
    },
    {
      adult: false,
      backdrop_path: '/nprqOIEfiMMQx16lgKeLf3rmPrR.jpg',
      genre_ids: [28, 53, 18],
      id: 619297,
      original_language: 'en',
      original_title: 'Sweet Girl',
      overview:
        "A devastated husband vows to bring justice to the people responsible for his wife's death while protecting the only family he has left, his daughter.",
      popularity: 1592.903,
      poster_path: '/192rIyXSp1oCa8MiBwnetcCpDQa.jpg',
      release_date: '2021-08-18',
      title: 'Sweet Girl',
      video: false,
      vote_average: 6.8,
      vote_count: 293,
    },
    {
      adult: false,
      backdrop_path: '/lzLzKXq2C0kL5Pu7VW5sNl5KV6L.jpg',
      genre_ids: [12, 53, 18, 28],
      id: 597433,
      original_language: 'en',
      original_title: 'Beckett',
      overview:
        'Whilst vacationing in Greece, Beckett, becomes the target of a manhunt after a devastating car accident forces him to run for his life across the country to clear his name but tensions escalate as the authorities close in and political unrest mounts which makes Beckett fall even deeper into a dangerous web of conspiracy.',
      popularity: 1588.594,
      poster_path: '/fBJducGBcmrcIOQdhm4BUBNDiMu.jpg',
      release_date: '2021-08-04',
      title: 'Beckett',
      video: false,
      vote_average: 6.3,
      vote_count: 219,
    },
    {
      adult: false,
      backdrop_path: '/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg',
      genre_ids: [28, 80, 53],
      id: 385128,
      original_language: 'en',
      original_title: 'F9',
      overview:
        "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.",
      popularity: 1662.768,
      poster_path: '/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg',
      release_date: '2021-05-19',
      title: 'F9',
      video: false,
      vote_average: 7.6,
      vote_count: 3164,
    },
    {
      adult: false,
      backdrop_path: '/wjQXZTlFM3PVEUmKf1sUajjygqT.jpg',
      genre_ids: [878, 28, 53],
      id: 581726,
      original_language: 'en',
      original_title: 'Infinite',
      overview:
        'Evan McCauley has skills he never learned and memories of places he has never visited. Self-medicated and on the brink of a mental breakdown, a secret group that call themselves “Infinites” come to his rescue, revealing that his memories are real.',
      popularity: 1543.801,
      poster_path: '/niw2AKHz6XmwiRMLWaoyAOAti0G.jpg',
      release_date: '2021-06-10',
      title: 'Infinite',
      video: false,
      vote_average: 7.4,
      vote_count: 859,
    },
    {
      adult: false,
      backdrop_path: '/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg',
      genre_ids: [28, 878, 12],
      id: 588228,
      original_language: 'en',
      original_title: 'The Tomorrow War',
      overview:
        'The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.',
      popularity: 1418.083,
      poster_path: '/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg',
      release_date: '2021-06-30',
      title: 'The Tomorrow War',
      video: false,
      vote_average: 8.2,
      vote_count: 3657,
    },
    {
      adult: false,
      backdrop_path: '/dZU3TCIYRmGL15TPJzidbH5AbyH.jpg',
      genre_ids: [53],
      id: 847981,
      original_language: 'de',
      original_title: 'Schwarze Insel',
      overview:
        'The dark secrets of a seemingly peaceful island threaten to swallow up an orphaned student when he grows close to a mysterious new teacher.',
      popularity: 1336.989,
      poster_path: '/53jsv5TASLwOqsJNsUNp4RPPq2l.jpg',
      release_date: '2021-08-18',
      title: 'Black Island',
      video: false,
      vote_average: 5.8,
      vote_count: 57,
    },
    {
      adult: false,
      backdrop_path: '/gX5UrH1TLVVBwI7WxplW43BD6Z1.jpg',
      genre_ids: [16, 35, 12, 10751],
      id: 459151,
      original_language: 'en',
      original_title: 'The Boss Baby: Family Business',
      overview:
        'The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.',
      popularity: 1462.048,
      poster_path: '/kv2Qk9MKFFQo4WQPaYta599HkJP.jpg',
      release_date: '2021-07-01',
      title: 'The Boss Baby: Family Business',
      video: false,
      vote_average: 7.8,
      vote_count: 1255,
    },
    {
      adult: false,
      backdrop_path: '/rUoGZuscSG4fQP3I56ndadu2A8E.jpg',
      genre_ids: [28, 35],
      id: 729720,
      original_language: 'fr',
      original_title: 'Le Dernier Mercenaire',
      overview:
        'A mysterious former secret service agent must urgently return to France when his estranged son  is falsely accused of arms and drug trafficking by the government, following a blunder by an overzealous bureaucrat and a mafia operation.',
      popularity: 1281.636,
      poster_path: '/ttpKJ7XQxDZV252KNEHXtykYT41.jpg',
      release_date: '2021-07-30',
      title: 'The Last Mercenary',
      video: false,
      vote_average: 7,
      vote_count: 303,
    },
    {
      adult: false,
      backdrop_path: '/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg',
      genre_ids: [16, 35, 10751, 14],
      id: 508943,
      original_language: 'en',
      original_title: 'Luca',
      overview:
        'Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.',
      popularity: 1418.418,
      poster_path: '/jTswp6KyDYKtvC52GbHagrZbGvD.jpg',
      release_date: '2021-06-17',
      title: 'Luca',
      video: false,
      vote_average: 8.1,
      vote_count: 4153,
    },
    {
      adult: false,
      backdrop_path: '/9p3bwHTpX5Axpyp4gxqmDxWaau0.jpg',
      genre_ids: [10751, 16, 35, 10402],
      id: 410113,
      original_language: 'en',
      original_title: 'The Loud House Movie',
      overview:
        'The Loud family travel to Scotland and discover they are descendants of Scottish royalty as they move into their giant ancestral castle.',
      popularity: 1388.778,
      poster_path: '/mab5wPeGVjbMyYMzyzfdKKnG9cl.jpg',
      release_date: '2021-08-20',
      title: 'The Loud House Movie',
      video: false,
      vote_average: 8.2,
      vote_count: 33,
    },
    {
      adult: false,
      backdrop_path: '/qnFxKwYDY7vfc3DBu3m8DzhhCfw.jpg',
      genre_ids: [35],
      id: 678580,
      original_language: 'es',
      original_title: 'El mesero',
      overview:
        'A waiter pretends to be an important businessman in order to reach the upper class through his entrepreneurial dreams.',
      popularity: 1594.774,
      poster_path: '/zvGC5jX5wQmU1GgPc0VGZz7Mtcs.jpg',
      release_date: '2021-07-15',
      title: 'El mesero',
      video: false,
      vote_average: 8.4,
      vote_count: 165,
    },
    {
      adult: false,
      backdrop_path: '/pUc51UUQb1lMLVVkDCaZVsCo37U.jpg',
      genre_ids: [53, 27],
      id: 482373,
      original_language: 'en',
      original_title: "Don't Breathe 2",
      overview:
        'The Blind Man has been hiding out for several years in an isolated cabin and has taken in and raised a young girl orphaned from a devastating house fire. Their quiet life together is shattered when a group of criminals kidnap the girl, forcing the Blind Man to leave his safe haven to save her.',
      popularity: 1072.661,
      poster_path: '/aOu6PJVO9RyGAzdUwG6fupu0gpz.jpg',
      release_date: '2021-08-12',
      title: "Don't Breathe 2",
      video: false,
      vote_average: 7.4,
      vote_count: 82,
    },
  ],
  total_pages: 500,
  total_results: 10000,
};

export const discoverMovies = async () => {
  return await fetch(`${apiBaseUrl}/discover/movie`, {
    method: 'GET',
    headers,
  });
};

// export const discoverMoviesByGenre = async (genreIds) => {
//   return await fetch(
//     `${apiBaseUrl}/discover/movie?with_genres=${genreIds.join()}`,
//     {
//       method: 'GET',
//       headers,
//     }
//   );
// };

export const getMovieById = async (id) => {
  return await fetch(`${apiBaseUrl}/movie/${id}`, {
    method: 'GET',
    headers,
  });
};

export const getMovieImageById = async (id) => {
  return await fetch(`${apiBaseUrl}/movie/${id}/images`, {
    method: 'GET',
    headers,
  });
};

export const getVideoByMovieId = async (id) => {
  return await fetch(`${apiBaseUrl}/movie/${id}/videos`, {
    method: 'GET',
    headers,
  });
};

export const getGenres = async () => {
  return await fetch(`${apiBaseUrl}/genre/movie/list`, {
    method: 'GET',
    headers,
  });
};

export const searchMovie = async () => {
  return await fetch(`${apiBaseUrl}/search/movie`, {
    method: 'GET',
    headers,
  });
};

// POST user registration form data
export const sendRegistrationFormData = async (body) => {
  return await fetch(`${backendBaseUrl}/user`, {
    method: 'POST',
    body: body,
  });
};
