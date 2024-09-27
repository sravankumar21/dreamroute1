const Question = require('../Models/question');
const axios = require('axios');

// Function to add a question manually
const addQuestion = async (req, res) => {
  try {
    const { domain, domainType, question, options, correctAnswer, skillLevel, mode } = req.body;

    const newQuestion = new Question({
      domain,
      domainType,
      question,
      options,
      correctAnswer,
      skillLevel,
      mode
    });

    await newQuestion.save();
    console.log('Question added:', newQuestion);
    res.status(201).json({ message: 'Question added successfully!' });
  } catch (error) {
    console.error('Error adding question:', error);
    res.status(400).json({ error: 'Error adding question.' });
  }
};

// Function to generate questions automatically
const generateQuestions = async (req, res) => {
  const { domain, domainType, skillLevel, count } = req.body;

  if (!count || typeof count !== 'number' || count <= 0) {
    return res.status(400).json({ error: 'Invalid count parameter.' });
  }

  try {
    const prompt = `Generate ${count} ${skillLevel} questions for ${domain} in the ${domainType} domain.`;
    console.log('Prompt:', prompt);

    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',  // Updated model
      messages: [
        { role: 'system', content: 'You are a helpful assistant that generates technical questions.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 150,
      n: count,
      stop: null,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('OpenAI Response:', response.data);

    const generatedQuestions = response.data.choices.map(choice => {
      const [question, ...options] = choice.message.content.split('\n').filter(Boolean);
      return {
        question,
        options: options.slice(0, 4), // Taking the first 4 lines as options
        correctAnswer: options[0] // Assuming the first option is correct
      };
    });

    const questionsToSave = generatedQuestions.map(q => ({
      domain,
      domainType,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      skillLevel,
      mode: 'auto'
    }));

    await Question.insertMany(questionsToSave);
    console.log('Generated questions saved:', questionsToSave);
    res.status(201).json({ message: 'Questions generated and added successfully!' });
  } catch (error) {
    console.error('Error generating questions:', error.response ? error.response.data : error.message);
    res.status(400).json({ error: 'Error generating questions.' });
  }
};

module.exports = { addQuestion, generateQuestions };
