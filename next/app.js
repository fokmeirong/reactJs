import React from 'react';
import Layout from './component/Layout';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { initializeStore, persistor } from './storeConfig';
const store = initializeStore();
import Head from 'next/head';
import { connect } from "react-redux";

const App = (props) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Head><link rel="stylesheet" href="/static/main.scss" /></Head>
            <Layout />
            <style jsx="true">{`
                /*
        HTML5 Reset :: style.css
        ----------------------------------------------------------
        We have learned much from/been inspired by/taken code where offered from:

        Eric Meyer					:: http://meyerweb.com
        HTML5 Doctor				:: http://html5doctor.com
        and the HTML5 Boilerplate	:: http://html5boilerplate.com

-------------------------------------------------------------------------------*/
/* Let's default this puppy out
-------------------------------------------------------------------------------*/
html, body, body div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, figure, footer, header, menu, nav, section, time, mark, audio, video, details, summary {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
  background: transparent; }

article, aside, figure, footer, header, nav, section, details, summary {
  display: block; }

/* Handle box-sizing while better addressing child elements:
http://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/ */
html {
  box-sizing: border-box; }

*,
*:before,
*:after {
  box-sizing: inherit; }

/* consider resetting the default cursor: https://gist.github.com/murtaugh/5247154 */
/* Responsive images and other embedded objects
*/
img,
object,
embed {
  max-width: 100%; }

/*
Note: keeping IMG here will cause problems if you're using foreground images as sprites.
     In fact, it *will* cause problems with Google Maps' controls at small size.
    If this is the case for you, try uncommenting the following:

#map img {
            max-width: none;
}
*/
/* we use a lot of ULs that aren't bulleted.
    don't forget to restore the bullets within content. */
ul {
  list-style: none; }

blockquote, q {
  quotes: none; }

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none; }

a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent; }

del {
  text-decoration: line-through; }

abbr[title], dfn[title] {
  border-bottom: 1px dotted #000;
  cursor: help; }

/* tables still need cellspacing="0" in the markup */
table {
  border-collapse: collapse;
  border-spacing: 0; }

th {
  font-weight: bold;
  vertical-align: bottom; }

td {
  font-weight: normal;
  vertical-align: top; }

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0; }

input, select {
  vertical-align: middle; }

pre {
  white-space: pre;
  /* CSS2 */
  white-space: pre-wrap;
  /* CSS 2.1 */
  white-space: pre-line;
  /* CSS 3 (and 2.1 as well, actually) */
  word-wrap: break-word;
  /* IE */ }

input[type="radio"] {
  vertical-align: text-bottom; }

input[type="checkbox"] {
  vertical-align: bottom; }

input[type="search"], input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none; }

.ie7 input[type="checkbox"] {
  vertical-align: baseline; }

.ie6 input {
  vertical-align: text-bottom; }

select, input, textarea {
  font: 99% sans-serif; }

table {
  font-size: inherit;
  font: 100%; }

small {
  font-size: 85%; }

strong {
  font-weight: bold; }

td, td img {
  vertical-align: top; }

/* Make sure sup and sub don't mess with your line-heights http://gist.github.com/413930 */
sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative; }

sup {
  top: -0.5em; }

sub {
  bottom: -0.25em; }

/* standardize any monospaced elements */
pre, code, kbd, samp {
  font-family: monospace, sans-serif; }

/* hand cursor on clickable elements */
.clickable,
label,
input[type=button],
input[type=submit],
input[type=file],
button {
  cursor: pointer; }

/* Webkit browsers add a 2px margin outside the chrome of form elements */
button, input, select, textarea {
  margin: 0; }

/* make buttons play nice in IE */
button,
input[type=button] {
  width: auto;
  overflow: visible; }

/* scale images in IE7 more attractively */
.ie7 img {
  -ms-interpolation-mode: bicubic; }

/* prevent BG image flicker upon hover
(commented out as usage is rare, and the filter syntax messes with some pre-processors)
.ie6 html {filter: expression(document.execCommand("BackgroundImageCache", false, true));}
*/
/* let's clear some floats */
.clearfix:before, .clearfix:after {
  content: " ";
  display: block;
  height: 0;
  overflow: hidden; }

.clearfix:after {
  clear: both; }

.clearfix {
  zoom: 1; }

.lfloat {
  float: left; }

.rfloat {
  float: right; }

#app {
  width: 800px;
  margin: 0 auto; }

.logo {
  display: block;
  margin-bottom: 10px;
  color: #f55263; }

header {
  width: 800px;
  background: black;
  color: white;
  padding: 20px; }

.search-bar {
  margin: 20px 0; }
  .search-bar::after {
    clear: both;
    content: ' ';
    display: block;
    visibility: hidden;
    height: 0; }
  .search-bar .movie-name {
    margin: 10px 0; }
    .search-bar .movie-name input {
      width: 100%; }
  .search-bar .search-filter span {
    display: inline;
    margin-right: 10px; }
    .search-bar .search-filter span a {
      margin-right: 10px;
      color: white;
      border: 1px solid #000;
      background: #3C3C3C;
      padding: 3px 5px;
      cursor: pointer; }
      .search-bar .search-filter span a.selected {
        background: #f55263; }

.filter-bar {
  background: #f5f5f5;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px; }
  .filter-bar::after {
    clear: both;
    content: ' ';
    display: block;
    visibility: hidden;
    height: 0; }
  .filter-bar span {
    margin-left: 20px; }
    .filter-bar span.condition {
      cursor: pointer; }
      .filter-bar span.condition.selected {
        font-weight: bold;
        color: #f55263; }

footer {
  background: #414141;
  padding: 20px 40px;
  color: #f55263; }

.not-found {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: white;
  text-align: center;
  font-size: 60px; }

.movies .movie {
  width: calc(100% / 3);
  display: inline-flex;
  padding: 10px;
  font-size: 14px; }
  .movies .movie-descript::after {
    clear: both;
    content: ' ';
    display: block;
    visibility: hidden;
    height: 0; }
  .movies .movie-descript span {
    display: block;
    float: left;
    width: calc(100% - 65px); }
    .movies .movie-descript span:last-child {
      float: right;
      border: 1px solid gray;
      padding: 0 5px;
      width: 45px;
      font-size: 12px; }
  .movies .movie-genres {
    margin-top: 10px;
    color: gray; }

.no-films {
  width: 100%;
  height: 500px;
  line-height: 500px;
  font-size: 30px;
  text-align: center; }

.landing-page {
  width: 100%;
  height: 500px; }

.film-details {
  padding: 30px 20px;
  background: black; }
  .film-details .detail-left {
    width: 250px;
    float: left;
    min-height: 500px;
    padding-left: 20px; }
  .film-details .detail-right {
    margin-left: 280px;
    min-height: 500px;
    color: white; }
    .film-details .detail-right p {
      margin-bottom: 10px; }
      .film-details .detail-right p span {
        margin-right: 10px; }
    .film-details .detail-right .movie-name {
      color: #f55263;
      font-size: 30px;
      font-weight: bold; }
    .film-details .detail-right .movie-overview {
      font-size: 20px;
      color: #a9a7a7; }
    .film-details .detail-right .movie-release-date {
      font-size: 20px; }
    .film-details .detail-right .movie-description {
      color: #a9a7a7; }
            `}</style>
        </PersistGate>
    </Provider>
)


export default connect(App)
