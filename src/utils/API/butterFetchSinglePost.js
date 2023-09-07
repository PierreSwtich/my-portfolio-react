export const butterFetchSinglePost = async (slug) => {
    try {
      const readToken = process.env.REACT_APP_BUTTER_CMS_API_KEY // Replace with your actual API token
      const apiUrl = `https://api.buttercms.com/v2/posts/${slug}?auth_token=${readToken}`;
      
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data.data;
    } catch (error) {
      throw error;
    }
  };
  