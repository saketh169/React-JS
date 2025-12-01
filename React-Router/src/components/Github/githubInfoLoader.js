// githubLoader.js

export const githubInfoLoader = async () => {
  try {
    const response = await fetch('https://api.github.com/users/saketh169');
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub data');
    }
    return response.json();
  } catch (error) {
    return { message: error.message };
  }
};