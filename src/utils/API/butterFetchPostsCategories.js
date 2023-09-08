export const fetchBlogPosts = async () => {
    try {
      const readToken = process.env.REACT_APP_BUTTER_CMS_API_KEY;
      const apiUrl = `https://api.buttercms.com/v2/categories?auth_token=${readToken}`;
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
  