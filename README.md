# Noticias-App---NodeJS

A news application built with Node.js that fetches and displays news articles from [NewsAPI.org](https://newsapi.org). The application provides a clean, responsive interface for browsing top headlines and searching for specific news topics.

## 🚀 Features

- **Top Headlines**: Display latest news from Mexico
- **Search Functionality**: Search for news articles by keywords
- **Responsive Design**: Mobile-friendly interface with CSS Grid
- **Real-time Data**: Fetches live news data from NewsAPI
- **Clean UI**: Card-based layout with images and descriptions

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: Handlebars templating engine
- **Styling**: CSS3 with responsive grid layout
- **HTTP Client**: Axios for API requests
- **Environment**: dotenv for configuration management
- **Development**: Nodemon for auto-restart during development

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (version 14 or higher)
- npm (comes with Node.js)
- A NewsAPI.org API key

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Noticias-App---NodeJS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your NewsAPI key:
   ```env
   APIKEY=your_newsapi_key_here
   PORT=3001
   ```

   To get a NewsAPI key:
   - Visit [NewsAPI.org](https://newsapi.org)
   - Sign up for a free account
   - Copy your API key from the dashboard

4. **Start the application**
   ```bash
   # Development mode (with auto-restart)
   npm run dev
   
   # Production mode
   node app.js
   ```

5. **Access the application**
   Open your browser and navigate to `http://localhost:3001`

## 📁 Project Structure

```
Noticias-App---NodeJS/
├── app.js                 # Main application entry point
├── package.json           # Project dependencies and scripts
├── .env                   # Environment variables (create this)
├── public/
│   └── styles/
│       └── styles.css     # Application styles
├── src/
│   ├── controllers/
│   │   └── news.controller.js  # News API integration
│   ├── routes/
│   │   └── newsRoutes.js       # Express routes
│   └── views/
│       └── news.handlebars     # HTML template
└── README.md
```

## 🎯 Usage

### Viewing Top Headlines
- Simply visit the homepage to see the latest news from Mexico
- Articles are displayed in a responsive grid layout
- Each article shows an image, title, description, and link to read more

### Searching for News
- Use the search bar at the top of the page
- Enter any keyword or topic you're interested in
- Click the "Search" button or press Enter
- Results will show articles related to your search query

## 🔌 API Endpoints

- `GET /` - Main page with news display
- `GET /?search=<query>` - Search for news articles

## 🎨 Features in Detail

### Responsive Design
- **Desktop**: 6-column grid layout
- **Tablet**: 3-column grid layout (768px and below)
- **Mobile**: 2-column grid layout (414px and below)

### News Display
- Article images with fallback handling
- Article titles and descriptions
- Direct links to full articles
- Clean card-based design

## 🚀 Deployment

To deploy this application:

1. Set up your production environment variables
2. Install dependencies: `npm install --production`
3. Start the application: `node app.js`
4. Configure your web server (nginx, Apache) to proxy to port 3001

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.


## 🔗 External Dependencies

- [NewsAPI.org](https://newsapi.org) - News data provider
- [Express.js](https://expressjs.com/) - Web framework
- [Handlebars](https://handlebarsjs.com/) - Templating engine
- [Axios](https://axios-http.com/) - HTTP client

## 📞 Support

If you encounter any issues or have questions:

1. Check the [NewsAPI documentation](https://newsapi.org/docs)
2. Verify your API key is correctly set in the `.env` file
3. Ensure all dependencies are properly installed
4. Check the console for any error messages

---

**Note**: This application uses the free tier of NewsAPI.org, which has rate limits. For production use, consider upgrading to a paid plan.
