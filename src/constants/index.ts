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
    subtitle: 'Arithmetic Operations',
    totalTopicsAndExam: 2,
    topics: [
      {
        topicNumber: 1,
        title: 'Arithmetic Operations Introduction',
        finished: false
      }
    ],
    progress: 0,
    exam: {
      title: 'Arithmetic Operations Assessment',
      questions: [
        {
          text: 'Are arithmetic operations supported in programming?',
          choices: ['Yes', 'No'],
          correctChoice: 'Yes'
        },
        {
          text: 'Which operator is used for multiplication in programming?',
          choices: ['+', '*', '/', '%'],
          correctChoice: '*'
        },
        {
          text: 'What is the remainder when 27 is divided by 5 using the modulo operator?',
          choices: ['1', '2', '3', '4'],
          correctChoice: '2'
        },
        {
          text: 'Which of the following is NOT considered a basic arithmetic operation in programming?',
          choices: ['Addition', 'Subtraction', 'Multiplication', 'Imagination'],
          correctChoice: 'Imagination'
        },
        {
          text: 'What is the operation used to calculate the remainder in programming?',
          choices: ['Addition', 'Subtraction', 'Multiplication', 'Modulo'],
          correctChoice: 'Modulo'
        }
      ],
      score: 0,
      finished: false
    },
    finished: false
  },
  moduleFour: {
    moduleNumber: 4,
    title: 'Module 4',
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
  },
  moduleFive: {
    moduleNumber: 5,
    title: 'Module 5',
    subtitle: 'Control Structures',
    totalTopicsAndExam: 3,
    topics: [
      {
        topicNumber: 1,
        title: 'IF/THEN condition',
        finished: false
      },
      {
        topicNumber: 2,
        title: 'Loops',
        finished: false
      }
    ],
    progress: 0,
    exam: {
      title: 'Control Structures Assessment',
      questions: [
        {
          text: 'What is the primary purpose of control structures in programming languages?',
          choices: [
            'They make the code look fancy',
            'They add a lot of drama and suspense to the code',
            'They control the flow of execution in a program'
          ],
          correctChoice: 'They control the flow of execution in a program'
        },
        {
          text: 'When the condition in an "IF/THEN" statement is false, what does the program do?',
          choices: [
            'It has an existential crisis',
            'It skips the action and moves on to the next set of instructions',
            'It stops working and asks for a raise'
          ],
          correctChoice: 'It skips the action and moves on to the next set of instructions'
        },
        {
          text: `What's the purpose of a loop in programming?`,
          choices: [
            'To repeat a set of instructions multiple times based on a condition',
            'To convince the computer to take a break',
            `It's the program's way of saying "Once more, with feeling!"`
          ],
          correctChoice: 'To repeat a set of instructions multiple times based on a condition'
        },
        {
          text: 'Why are loops considered a powerful concept in programming?',
          choices: [
            'They have great stage presence',
            'They allow for the processing of large amounts of data and reduce redundancy',
            'They have cool tattoos and piercings'
          ],
          correctChoice: 'They allow for the processing of large amounts of data and reduce redundancy'
        },
        {
          text: 'How does an "IF/THEN" condition contribute to decision-making processes in a program?',
          choices: [
            `It doesn't, it's just there to look pretty`,
            `It's there to confuse programmers`,
            'It enables the computer to make choices based on the condition it receives'
          ],
          correctChoice: 'It enables the computer to make choices based on the condition it receives'
        }
      ],
      score: 0,
      finished: false
    },
    finished: false
  }
}
