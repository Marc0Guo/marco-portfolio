export const projects = [
  {
    id: 1,
    title: 'LoRA fine tuning',
    description: 'Fine tuned U-Net Image Segmentation using LoRa on GTA5 dataset.',
    image: process.env.PUBLIC_URL + '/assets/images/Marco.png',
    tag: 'Data Science',
    link: 'GTA5.pdf',
  },
  {
    id: 2,
    title: 'WorthyWave',
    description: 'Designed "WorthyWave", a mobile app that helps people overcome imposter syndrome by building confidence through community and personal progress. ',
    image: process.env.PUBLIC_URL + '/assets/images/WorthyWave.jpg',
    tag: 'UI/UX',
    link: 'https://www.figma.com/proto/dfcCURCTgOwgu8GhGpVg5e/Prototype?page-id=0%3A1&node-id=1-2&p=f&viewport=241%2C-66%2C0.13&t=EqdSWmc11k1D0xst-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2',
  },
  {
    id: 3,
    title: 'Room.io',
      description: 'Designed "Room.io", a mobile app that Help college students maintain roommate relationships and distribute chors',
      image: process.env.PUBLIC_URL + '/assets/images/RoomIo.jpg',
    tag: 'UI/UX',
    link: 'https://www.figma.com/proto/pxdgGyPidtwJt02gE6AlmY/Room.io?page-id=0%3A1&node-id=2-7&p=f&viewport=363%2C350%2C0.4&t=dEDQXujy8LpS558X-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A7',
  },
  {
    id: 4,
    title: 'MBTI Music Prediction',
    description: 'Built a music recommendation system using KNN and L2 distance. Created interactive dashboards to visualize MBTI music correlations',
    image: process.env.PUBLIC_URL + '/assets/images/MBTI.jpg',
    tag: 'Data Science',
    github: 'https://github.com/Mayogoose/info201mbti',
  },
    {
    id: 5,
    title: 'Loki Tempad',
    description: 'Designed "AMA Loki Tempad a mobile app for time travel',
    image: process.env.PUBLIC_URL + '/assets/images/Time.jpg',
    tag: 'UI/UX',
    link: 'https://www.figma.com/proto/LwjP9jGd7bmgFA2xF9OAOr/TEMPAD-2.0?page-id=24%3A12&node-id=59-106&p=f&viewport=146%2C342%2C0.22&t=kghqmCUc6w09TCz0-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=59%3A106',
  },
];

export const tags = ['All', 'Frontend', 'UI/UX', 'Backend', 'Data Science'];