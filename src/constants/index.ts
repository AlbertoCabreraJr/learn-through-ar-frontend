export const ALLOWED_HEADERS = [
  'Accept',
  'Content-Type',
  'Content-Length',
  'Authorization',
  'X-Amz-Date',
  'X-Api-Key',
  'X-Amz-Security-Token',
  'X-Amz-User-Agent',
  'app_user_id',
  'app_user_email'
]

export const LEARN_THROUGH_AR_DATA = {
  moduleOne: {
    moduleNumber: 1,
    title: 'Module 1',
    subtitle: 'Introduction to Programming',
    totalTopicsAndExam: 4,
    topics: [
      {
        topicNumber: 1,
        title: 'Definition of Programming',
        finished: false
      },
      {
        topicNumber: 2,
        title: 'History of Programming',
        finished: false
      },
      {
        topicNumber: 3,
        title: 'How and Where a program is written',
        finished: false
      }
    ],
    progress: 0,
    exam: {
      title: 'Introduction Practice Assessment',
      questions: [
        {
          text: 'What is programming?',
          choices: [
            'A process of writing instructions for a computer to execute tasks and solve problems',
            'A way to design computer hardware',
            'A type of software application'
          ],
          correctChoice: 'A process of writing instructions for a computer to execute tasks and solve problems'
        },
        {
          text: 'Where is a program written?',
          choices: [
            'A web browser',
            'A text editor or integrated development environment (IDE)',
            'A word processing program'
          ],
          correctChoice: 'A text editor or integrated development environment (IDE)'
        },
        {
          text: 'What is an example of a programming language?',
          choices: ['Python', 'Tiger', 'Cat'],
          correctChoice: 'Python'
        },
        {
          text: 'What is BASIC?',
          choices: [
            'A simple and accessible programming language',
            'A type of computer hardware',
            'A way to design software applications'
          ],
          correctChoice: 'A simple and accessible programming language'
        },
        {
          text: 'What was the impact of the first iPhone on computing?',
          choices: [
            'It popularized the use of smartphones and mobile computing',
            'It made it difficult to use smartphones',
            'It made it easier to use desktop computers'
          ],
          correctChoice: 'It popularized the use of smartphones and mobile computing'
        }
      ],
      score: 0,
      finished: false
    },
    finished: false
  },
  moduleTwo: {
    moduleNumber: 2,
    title: 'Module 2',
    subtitle: 'Data Types',
    totalTopicsAndExam: 2,
    topics: [
      {
        topicNumber: 1,
        title: 'Data Types Introduction',
        finished: false
      }
    ],
    progress: 0,
    exam: {
      title: 'Data Types Practice Assessment',
      questions: [
        {
          text: 'What is the appropriate data type to use for a person’s address?',
          choices: ['String', 'Integer', 'Float', 'Boolean'],
          correctChoice: 'String'
        },
        {
          text: 'What is the appropriate data type to use for a laptop price?',
          choices: ['String', 'Integer', 'Float', 'Boolean'],
          correctChoice: 'Float'
        },
        {
          text: 'What is the appropriate data type to use for the number of emails you have?',
          choices: ['String', 'Integer', 'Float', 'Boolean'],
          correctChoice: 'Integer'
        },
        {
          text: 'What is the appropriate data type to use when deciding whether to agree or disagree to the terms and conditions?',
          choices: ['String', 'Integer', 'Float', 'Boolean'],
          correctChoice: 'Boolean'
        },
        {
          text: 'What is the appropriate data type to use for a student’s GPA?',
          choices: ['String', 'Integer', 'Float', 'Boolean'],
          correctChoice: 'Float'
        }
      ],
      score: 0,
      finished: false
    },
    finished: false
  },
  moduleThree: {
    moduleNumber: 3,
    title: 'Module 3',
    subtitle: 'Variables',
    totalTopicsAndExam: 2,
    topics: [
      {
        topicNumber: 1,
        title: 'Variables Introduction',
        finished: false
      }
    ],
    progress: 0,
    exam: {
      title: 'Variables Practice Assessment',
      questions: [
        {
          text: "What's a variable in programming? Think of it like a…",
          choices: ['Calculator', 'Box that holds stuff', 'Robot', 'Library book'],
          correctChoice: 'Box that holds stuff'
        },
        {
          text: 'How can you change the value of a variable in a program?',
          choices: [
            'By asking it nicely',
            'By giving it a new value',
            'By clapping your hands',
            'By telling it a secret'
          ],
          correctChoice: 'By giving it a new value'
        },
        {
          text: 'Why use variables in a program?',
          choices: ['To store and change stuff', 'To take a nap', 'To play a game', 'To make a cake'],
          correctChoice: 'To store and change stuff'
        },
        {
          text: 'When you change the value of a variable in a program, what happens?',
          choices: ['Nothing', 'The program changes how it behaves', 'The program grows wings', 'The program explodes'],
          correctChoice: 'The program changes how it behaves'
        },
        {
          text: "What's the difference between a variable's name and the value it holds?",
          choices: [
            "They're the same thing",
            "The name is like a label, the value is what's inside the box",
            'The name is the box, the value is the label',
            "They're completely unrelated"
          ],
          correctChoice: "The name is like a label, the value is what's inside the box"
        }
      ],
      score: 0,
      finished: false
    },
    finished: false
  }
}
