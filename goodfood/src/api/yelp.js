import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer TLNAFL933UEj4GpZIoqAXpAIlByqSLuPSYcCgaDLUfTBrKyewNESRHwh8iQUvsXWpolSK7adS_LKTGKtjv-QybiZl7oj8n3a-pVa0SwgXtd9Aoa2i0RHqIst0qjRXXYx"
  }
});
