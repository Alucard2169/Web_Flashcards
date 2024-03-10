import { FormEvent, ReactNode } from "react";


// format questions into {question: string; answer:string} array
const formatQuestions = (
    e: FormEvent<HTMLFormElement>,
    questions: ReactNode[]
): { question: string; answer: string }[] => {
  const formattedQuestions: { question: string; answer: string }[] = [];

    
    // loop over all question elements
  questions.forEach((questionElement, index) => {
    const questionInput = (e.target as HTMLFormElement)[`question${index + 1}`];
    const answerInput = (e.target as HTMLFormElement)[`answer${index + 1}`];
    if (questionInput && answerInput) {
      formattedQuestions.push({
        question: questionInput.value,
        answer: answerInput.value,
      });
    }
  });

  return formattedQuestions;
};


// format resources into  [resource1, resource2] string array
const formatResources = (e: FormEvent<HTMLFormElement>): string[] => {
    return (e.target as HTMLFormElement)["resources"].value.split("\n");
};



// handle form submittion
const handleSubmit = async (e: FormEvent<HTMLFormElement>, questions: ReactNode[]) => {
  e.preventDefault();
  if (questions.length === 0) return;
  const tech = (e.target as HTMLFormElement)["tech"].value;
  const questionList = formatQuestions(e, questions);
  const resources = formatResources(e);

  try {
    const response = await fetch("/api/addCard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tech, questionList, resources }),
    });

      const data = await response.json();
      return {data,error:null};

  } catch (error) {
      return {data:null,error};
  }
};



export { handleSubmit };
