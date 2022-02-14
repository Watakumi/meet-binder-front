export function getAllData() {
  const data = {
    user: {
      name: 'Watakumi',
      company: 'Sight Visit Inc.',
      bio: 'This is Watakumi profile.',
      skills: [
        {
          name: 'NestJS',
          description: '実務経験あり。2年ほど開発していた。',
        },
        {
          name: 'NextJS',
          description: '実務経験あり。もっとも経験のあるフレームワーク。',
        },
        {
          name: 'Rails',
          description: '実務経験あり。ライブラリの開発も可能',
        },
      ],
      interests: [
        {
          name: 'Rust',
          description: 'もっとも興味のある言語',
        },
        {
          name: 'Python',
          description: 'AIの学習がしたい',
        },
      ],
      projects: [
        {
          id: 1,
          name: 'NestJS',
          description: 'NestJS is the Best Framework.',
          detail: {
            description: 'This is Detail of ID: 1',
          },
        },
        {
          id: 2,
          name: 'TypeScript',
          description: 'TypeScript is the Best Language.',
          detail: {
            description: 'This is Detail of ID: 2',
          },
        },
        {
          id: 3,
          name: 'Rails',
          description: 'Rails is the Best FullStackFramework.',
          detail: {
            description: 'This is Detail of ID: 3',
          },
        },
        {
          id: 5,
          name: 'NestJS',
          description: 'NestJS is the Best Framework.',
          detail: {
            description: 'This is Detail of ID: 5',
          },
        },
        {
          id: 6,
          name: 'TypeScript',
          description: 'TypeScript is the Best Language.',
          detail: {
            description: 'This is Detail of ID: 6',
          },
        },
        {
          id: 4,
          name: 'Rails',
          description: 'Rails is the Best FullStackFramework.',
          detail: {
            description: 'This is Detail of ID: 4',
          },
        },
      ],
      contacts: [
        {
          name: 'github',
          url: 'https://github.com/Watakumi',
        },
        {
          name: 'twitter',
          url: 'https://github.com/Watakumi',
        },
      ],
    },
  };
  return data;
}
