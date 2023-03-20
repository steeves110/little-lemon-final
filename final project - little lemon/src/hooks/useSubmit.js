import {useState} from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    const firstName = data.name.split(' ')[0];
    setLoading(true);
    try {
      await wait(2000);
      setResponse({
        type: 'success',
        message: `You have successfully reserved a table, ${firstName}! We will send you your reservation details at ${data.email} very shortly.`,
      })
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please reload the browser and try again later!',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
