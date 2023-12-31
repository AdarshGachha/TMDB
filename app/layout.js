"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { Provider } from "react-redux";
import { store } from "@/store/store";
import Nav from "@/components/navBar/Nav";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body style={{backgroundColor:"black", color:"white"}} suppressHydrationWarning>
            <Nav/>

          <Provider store={store}>
            {children}
            <ToastContainer />

          </Provider>
       
              
          </body>
      </html>
  );
}



// tmdb start

// 0. nav will include 2 major links 1. Popular Movies and 2. popular TV Shows
// 1. show all the popular movies in homepage
// 2. open details page of particular movie whne user click on it
// 3. User can see all the detail and play the trailer if there is

// FINF API KEY
// https://www.themoviedb.org/settings/api?api_key=YOUR_API_KEY

// API LINKS TO USE
// https://developers.themoviedb.org/3/movies/get-movie-details?api_key=YOUR_API_KEY

// image paths
// https://image.tmdb.org/t/p/w500/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg

// searchnAPI
//"https://api.themoviedb.org/3/search/multi?api_key=6b4357c41d9c606e4d7ebe2f4a8850ea&query="

// trending movies API
// https://api.themoviedb.org/3/trending/movie/day?api_key=5c11df2d96761d50685fa24c86690073&page=1?language=en-US
